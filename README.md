#SPA для прототипа кредитного конвеера

**Сборка**


Проект использует lerna в комплекте с yarn в качестве менеджера пакетов/зависимостей.

Lerna позволяет управлять зависимостями между модулями, позволяя исключить ситуацию с  дублированием библиотек,
 а так же управлять модульным приложением, состоящим из нескольки дочерних. 

`yarn`

запускает процесс установки зависимостей

`yarn dist`

сборка всех пакетов из /packages

`yarn start`

запускает корневой проект /packages/root

**Структура**

_Пока все зависимости находятся в одном проекте. В будущем планируется разнести их по репозитариям_

`node_modules `
- единая папка с зависимостями для всех дочерних проектов

`packages`
- папка с модулями
 
    `calculator` проект для кредитного калькулятора
  
     `login` - проект для страницы авторизации
     
     `root` - проект для корневого модуля, который все запускает

`lerna.json `
- Файл конфигурации для lerna

_Структура проектов на данном этапе является "Рыбой" и подлежит исправлению_


Проекты login и calculator - это примеры дочерних модулей, которые собираются в dll-библиотеку. Рассмотрим структура дочернего модуля на примере calculator.
В проекте имеется следущая струтура:

`node_modules`

папка с зависимостями которые уникальны для этого модуля (то есть их нет больше ни в одном из проектов, находящихся в packages). 
Так же тут расположены симлинки на всякие исполняемые штуки (webpack, eslint, prettier, autoprefixer и тп)

`src`

папка с исходниками. Тут будет стандартна для react-redux приложения структура. Единственное отличие - наличие папки ducks,
 в которой будут реализованы модули, включающие в себя редьюсеры и action creator'ы, относящиеся только в данному модулю. 
 
 
   `index.jsx` - Это основной файл. В нем происходит экспорт компоненты, path (url), namespace(с каким именем монтируется reducer) и ducks

`dist`

папка с собранными модулями


###Сборка дочернего модуля

(Например, calculator)

Модуль собирается с помощью webpack как самостоятельная dll библотека. Он может отдельно версионироваться, а так же публиковаться в репозиторий самостоятельно вне звисимости от материнского модуля. 
После сборки будет доступен в node_modules в корневом приложении.

Поскольку компоненты могут быть большими и тяжеловесными, то их следует делать lazy-loadable. Для этого используется библиотека react-loadable.
 Она позволяет разбить модули с компонентами на chunks, которые будут подгружаться только тогда, когда мы собираемся отобразить искомую компоненту.
 
 Благодаря этому после сборки приложения в папке dist можно обнаружить много *.js, которые объеденены одним входящим файлом. 
 А так же файл *.manifest.json, который содеержит в себе информацию о собранной библиотеке - имя, контекст, структура, etc.
 

###Сборка родительского модуля

В данном проекте родительским является модуль root.

Здесь история немного интереснее. 

В отличие от дочернего, содержит еще папку public, в котором будет шаблон index.html, favicon и тп. 

Для сборки webpack'ом:
 
   с помощью `DllReferencePlugin` указыватся набор зависимых модулей (тот самы calculator)
   
   с помощью `HtmlWebpackPlugin` собираем из шаблона html-файлик, минифицируем его
   
   с помощью `AddAssetHtmlPlugin` добавляем в собранный html <script> с указанием на ранее использованныые dll-библиотеки
   

###Сборка дочернего модуля

Для того, чобы приложение оставалось легковесным и модульным, все редьюсеры "монтируются" в стор "на лету", 
то есть при переходе на конкретный урл в стор монтируется та часть стора, которая указана в дочернем модуле.
Для этого организован так называемый реест редьюсеров - ReducerRegistry:


        `
         class ReducerRegistry {
          constructor(initialReducers = {}) {
            this._reducers = {...initialReducers};
            this._emitChange = null
          }
          register(newReducers) {
            this._reducers = {...this._reducers, ...newReducers};
            if (this._emitChange != null) {
              this._emitChange(this.getReducers())
            }
          }
          getReducers() {
            return {...this._reducers}
          }
          setChangeListener(listener) {
            if (this._emitChange != null) {
              throw new Error('Can only set the listener for a ReducerRegistry once.')
            }
            this._emitChange = listener
          }
        }
        export default ReducerRegistry;`
        
В момент, когда мы иницируем ванильный стор, мы указываем корневой редьюсер - общий для всех модулей. А так же устанавливаем  listener'а в случае,
 когда добавиться новый редьюсер.
 
 Так же конфигурируем routes:
 
             import * as calculator from 'nf_fe_calculator';
             ...
             function configureRoutes(reducerRegistry) {
               return (
                 <Switch>
                   <Route path="/home" component={RootHome}/>
                   <Route path={calculator.path} component={() => {
                     // Webpack code splitting incantation - anything required in the callback
                     // will be placed in a new chunk.
                      require.ensure([], require => {
                       // Register the reducer depended upon by the screen component
                       reducerRegistry.register({ [calculator.namespace]: calculator.duck });
                       // Configure hot module replacement for the reducer
                       if (process.env.NODE_ENV !== 'production') {
                         if (module.hot) {
                           module.hot.accept('../../node_modules/nf_fe_calculator/src/ducks/calculator', () => {
                             reducerRegistry.register({[calculator.namespace]: calculator.duck})
                           })
                         }
                       }
                     });
                     return calculator.component()
                   }}/>
                 </Switch>
               )
             }

В данном месте мы указываем, что когда мы перейдем по данному урлу, то нам следует в наш стор вмонтировать кусок редьюсера из дочернего модуля.

На выходе получаем собираемый на лету стор.


inspired by http://nicolasgallagher.com/redux-modules-and-code-splitting/


что надо сделать: навести порядок, прокидывание actions, ...