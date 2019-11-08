import React from 'react'
import { Dropdown } from 'semantic-ui-react'

export default (props) => {
  const handleOnChange = (e, data) => {
    props.onChange(e, data);
  }

  return (
    <Dropdown
      placeholder={props.placeholder}
      fluid
      selection
      options={props.options}
      onChange={handleOnChange}
      defaultValue={props.defaultValue} />
  )
}