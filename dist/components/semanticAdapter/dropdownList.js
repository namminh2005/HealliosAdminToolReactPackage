import React from 'react';
import { Dropdown } from 'semantic-ui-react';
export default (props => {
  const handleOnChange = (e, data) => {
    props.onChange(e, data);
  };

  return React.createElement(Dropdown, {
    placeholder: props.placeholder,
    fluid: true,
    selection: true,
    options: props.options,
    onChange: handleOnChange
  });
});