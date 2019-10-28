import React from 'react';
import 'react-dates/initialize';
import {DateRangePicker} from 'react-dates';
import isInclusivelyAfterDay from 'react-dates/src/utils/isInclusivelyAfterDay';
import 'react-dates/lib/css/_datepicker.css';
import { DateRangePickerPhrases } from 'react-dates/src/defaultPhrases';
import omit from 'lodash/omit';
import moment from 'moment';
import {
  START_DATE,
  END_DATE,
  HORIZONTAL_ORIENTATION,
  ANCHOR_LEFT,
  NAV_POSITION_TOP
} from 'react-dates/constants';

const defaultProps = {
  // example props for the demo
  autoFocus: false,
  autoFocusEndDate: false,
  initialStartDate: null,
  initialEndDate: null,

  // input related props
  startDateId: START_DATE,
  startDatePlaceholderText: 'Start Date',
  endDateId: END_DATE,
  endDatePlaceholderText: 'End Date',
  disabled: false,
  required: false,
  screenReaderInputMessage: '',
  showClearDates: false,
  showDefaultInputIcon: false,
  customInputIcon: null,
  customArrowIcon: null,
  customCloseIcon: null,
  block: false,
  small: false,
  regular: false,

  // calendar presentation and interaction related props
  renderMonthText: null,
  orientation: HORIZONTAL_ORIENTATION,
  anchorDirection: ANCHOR_LEFT,
  horizontalMargin: 0,
  withPortal: false,
  withFullScreenPortal: false,
  initialVisibleMonth: null,
  numberOfMonths: 1,
  keepOpenOnDateSelect: false,
  reopenPickerOnClearDates: false,
  isRTL: false,

  // navigation related props
  navPosition: NAV_POSITION_TOP,
  navPrev: null,
  navNext: null,
  onPrevMonthClick() {},
  onNextMonthClick() {},
  onClose() {},

  // day presentation and interaction related props
  renderCalendarDay: undefined,
  renderDayContents: null,
  minimumNights: 1,
  enableOutsideDays: false,
  isDayBlocked: () => false,
  isOutsideRange: day => !isInclusivelyAfterDay(day, moment()),
  isDayHighlighted: () => false,

  // internationalization
  displayFormat: () => moment.localeData().longDateFormat('L'),
  monthFormat: 'MMMM YYYY',
  phrases: DateRangePickerPhrases,

  stateDateWrapper: date => date,
};

class DateRangePickerWrapper extends React.Component{
  constructor(props){
    super(props)

    let focusedInput = null;
    if (props.autoFocus) {
      focusedInput = START_DATE;
    } else if (props.autoFocusEndDate) {
      focusedInput = END_DATE;
    }

    this.state = {
      focusedInput,
      startDate: props.initialStartDate,
      endDate: props.initialEndDate,
    };

    this.onDatesChange = this.onDatesChange.bind(this);
    this.onFocusChange = this.onFocusChange.bind(this);
  }

  onDatesChange({ startDate, endDate }) {
    const { stateDateWrapper } = this.props;
    this.setState({
      startDate: startDate && stateDateWrapper(startDate),
      endDate: endDate && stateDateWrapper(endDate),
    });
    console.log({ startDate, endDate });
  }

  onFocusChange(focusedInput) {
    this.setState({ focusedInput });
  }

  render(){
    const { focusedInput, startDate, endDate } = this.state;

    const props = omit(this.props, [
      'autoFocus',
      'autoFocusEndDate',
      'initialStartDate',
      'initialEndDate',
      'stateDateWrapper',
    ]);

    return (
      <DateRangePicker 
        {...props}
        startDateId='asdfasdaaasssf'
        endDateId='eeeeas211'
        onDatesChange={this.onDatesChange}
        onFocusChange={this.onFocusChange}
        focusedInput={focusedInput}
        startDate={startDate}
        endDate={endDate} />
    )
  }
}

DateRangePickerWrapper.defaultProps = defaultProps;

export default DateRangePickerWrapper;