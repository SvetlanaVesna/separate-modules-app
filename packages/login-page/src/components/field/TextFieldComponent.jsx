import React from 'react';
import pt from 'prop-types';

import TextField from '@material-ui/core/TextField';

class TextFieldComponent extends React.Component {

  render() {
    const {
      label,
      handleChange,
      id,
      value,
      type,
      disabled
    } = this.props;
    return (
      <div>
        <TextField
          id={id}
          label={label}
          value={value}
          type={type}
          onChange={e => handleChange(e.target.value)}
          margin="normal"
          disabled={disabled}
        />
      </div>
    );
  }
}
TextFieldComponent.propTypes = {
  id: pt.string.isRequired,
  value: pt.string,
  label: pt.string.isRequired,
  type: pt.string,
  handleChange: pt.func.isRequired
};

export default TextFieldComponent;