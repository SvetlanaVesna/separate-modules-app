import React from 'react';
import pt from 'prop-types';
import TextField from '../../components/field/TextFieldComponent';
import {reduxForm} from "redux-form";
import Paper from "@material-ui/core/es/Paper/Paper";
import Button from "@material-ui/core/es/Button/Button";

const Auth = (
  {
    isAuthenticated,
    username,
    password,
    setUsername,
    setPassword,
    loginUser,
    logoutUser,
    classes
  }
) => (
  <div>
    {!isAuthenticated && (
      <Paper style={{left:'50%', top:'45%', position: 'fixed'}}
             className={classes.root} elevation={1}>
        <form
          name="login"
          onSubmit={e => {
            e.preventDefault();
            loginUser({ username, password })
          }}
        >
          <TextField label="Логин"
                     value={username}
                     handleChange={setUsername}
          />
          <TextField label="Пароль"
                     type="password"
                     value={password}
                     handleChange={setPassword}
          />
          <Button color="primary" variant="contained" type="submit">Войти</Button>
        </form>
      </Paper>
    )}
  </div>
);

Auth.propTypes = {};

export default (
  reduxForm({
    form: 'login',
  })(Auth));