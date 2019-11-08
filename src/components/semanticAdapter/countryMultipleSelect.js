import { Dropdown } from 'semantic-ui-react'
import React, {useEffect} from 'react'
import _ from 'lodash'
import countryDefaultList from './countryCodeDefault';

const countryList = countryDefaultList;

const stateOptions = _.map(countryList, (country, index) => ({
  key: country.key,
  text: country.text,
  value: country.value,
}))

export const CountryMultipleSelect = (props) => {
  const handleOnChange = (e, data) => {
    console.log(data);
    props.onChange(e, data);
  }
  return (
    <Dropdown
      placeholder='Select Country'
      fluid
      multiple
      search
      selection
      options={stateOptions} 
      defaultValue={props.defaultValue}
      onChange={handleOnChange} >
    </Dropdown>
  )
}