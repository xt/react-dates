import shallowCompare from "react-addons-shallow-compare";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import momentPropTypes from 'react-moment-proptypes';
import { forbidExtraProps, nonNegativeInteger } from 'airbnb-prop-types';
import openDirectionShape from '../shapes/OpenDirectionShape';
import { DateRangePickerInputPhrases } from '../defaultPhrases';
import getPhrasePropTypes from '../utils/getPhrasePropTypes';
import DateRangePickerInput from './DateRangePickerInput';
import IconPositionShape from '../shapes/IconPositionShape';
import DisabledShape from '../shapes/DisabledShape';
import toMomentObject from '../utils/toMomentObject';
import toLocalizedDateString from '../utils/toLocalizedDateString';
import isInclusivelyAfterDay from '../utils/isInclusivelyAfterDay';
import isBeforeDay from '../utils/isBeforeDay';
import { START_DATE, END_DATE, ICON_BEFORE_POSITION, OPEN_DOWN } from '../constants';
var propTypes = process.env.NODE_ENV !== "production" ? forbidExtraProps({
  children: PropTypes.node,
  startDate: momentPropTypes.momentObj,
  startDateId: PropTypes.string,
  startDatePlaceholderText: PropTypes.string,
  isStartDateFocused: PropTypes.bool,
  endDate: momentPropTypes.momentObj,
  endDateId: PropTypes.string,
  endDatePlaceholderText: PropTypes.string,
  isEndDateFocused: PropTypes.bool,
  screenReaderMessage: PropTypes.string,
  showClearDates: PropTypes.bool,
  showCaret: PropTypes.bool,
  showDefaultInputIcon: PropTypes.bool,
  inputIconPosition: IconPositionShape,
  disabled: DisabledShape,
  required: PropTypes.bool,
  readOnly: PropTypes.bool,
  openDirection: openDirectionShape,
  noBorder: PropTypes.bool,
  block: PropTypes.bool,
  small: PropTypes.bool,
  regular: PropTypes.bool,
  verticalSpacing: nonNegativeInteger,
  keepOpenOnDateSelect: PropTypes.bool,
  reopenPickerOnClearDates: PropTypes.bool,
  withFullScreenPortal: PropTypes.bool,
  minimumNights: nonNegativeInteger,
  isOutsideRange: PropTypes.func,
  displayFormat: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  onFocusChange: PropTypes.func,
  onClose: PropTypes.func,
  onDatesChange: PropTypes.func,
  onKeyDownArrowDown: PropTypes.func,
  onKeyDownQuestionMark: PropTypes.func,
  customInputIcon: PropTypes.node,
  customArrowIcon: PropTypes.node,
  customCloseIcon: PropTypes.node,
  // accessibility
  isFocused: PropTypes.bool,
  // i18n
  phrases: PropTypes.shape(getPhrasePropTypes(DateRangePickerInputPhrases)),
  isRTL: PropTypes.bool
}) : {};;
var defaultProps = {
  children: null,
  startDate: null,
  startDateId: START_DATE,
  startDatePlaceholderText: 'Start Date',
  isStartDateFocused: false,
  endDate: null,
  endDateId: END_DATE,
  endDatePlaceholderText: 'End Date',
  isEndDateFocused: false,
  screenReaderMessage: '',
  showClearDates: false,
  showCaret: false,
  showDefaultInputIcon: false,
  inputIconPosition: ICON_BEFORE_POSITION,
  disabled: false,
  required: false,
  readOnly: false,
  openDirection: OPEN_DOWN,
  noBorder: false,
  block: false,
  small: false,
  regular: false,
  verticalSpacing: undefined,
  keepOpenOnDateSelect: false,
  reopenPickerOnClearDates: false,
  withFullScreenPortal: false,
  minimumNights: 1,
  isOutsideRange: function isOutsideRange(day) {
    return !isInclusivelyAfterDay(day, moment());
  },
  displayFormat: function displayFormat() {
    return moment.localeData().longDateFormat('L');
  },
  onFocusChange: function onFocusChange() {},
  onClose: function onClose() {},
  onDatesChange: function onDatesChange() {},
  onKeyDownArrowDown: function onKeyDownArrowDown() {},
  onKeyDownQuestionMark: function onKeyDownQuestionMark() {},
  customInputIcon: null,
  customArrowIcon: null,
  customCloseIcon: null,
  // accessibility
  isFocused: false,
  // i18n
  phrases: DateRangePickerInputPhrases,
  isRTL: false
};

var DateRangePickerInputController =
/*#__PURE__*/
function (_ref) {
  _inherits(DateRangePickerInputController, _ref);

  _createClass(DateRangePickerInputController, [{
    key: !React.PureComponent && "shouldComponentUpdate",
    value: function value(nextProps, nextState) {
      return shallowCompare(this, nextProps, nextState);
    }
  }]);

  function DateRangePickerInputController(props) {
    var _this;

    _classCallCheck(this, DateRangePickerInputController);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DateRangePickerInputController).call(this, props));
    _this.onClearFocus = _this.onClearFocus.bind(_assertThisInitialized(_this));
    _this.onStartDateChange = _this.onStartDateChange.bind(_assertThisInitialized(_this));
    _this.onStartDateFocus = _this.onStartDateFocus.bind(_assertThisInitialized(_this));
    _this.onEndDateChange = _this.onEndDateChange.bind(_assertThisInitialized(_this));
    _this.onEndDateFocus = _this.onEndDateFocus.bind(_assertThisInitialized(_this));
    _this.clearDates = _this.clearDates.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(DateRangePickerInputController, [{
    key: "onClearFocus",
    value: function onClearFocus() {
      var _this$props = this.props,
          onFocusChange = _this$props.onFocusChange,
          onClose = _this$props.onClose,
          startDate = _this$props.startDate,
          endDate = _this$props.endDate;
      onFocusChange(null);
      onClose({
        startDate: startDate,
        endDate: endDate
      });
    }
  }, {
    key: "onEndDateChange",
    value: function onEndDateChange(endDateString) {
      var _this$props2 = this.props,
          startDate = _this$props2.startDate,
          isOutsideRange = _this$props2.isOutsideRange,
          minimumNights = _this$props2.minimumNights,
          keepOpenOnDateSelect = _this$props2.keepOpenOnDateSelect,
          onDatesChange = _this$props2.onDatesChange;
      var endDate = toMomentObject(endDateString, this.getDisplayFormat());
      var isEndDateValid = endDate && !isOutsideRange(endDate) && !(startDate && isBeforeDay(endDate, startDate.clone().add(minimumNights, 'days')));

      if (isEndDateValid) {
        onDatesChange({
          startDate: startDate,
          endDate: endDate
        });
        if (!keepOpenOnDateSelect) this.onClearFocus();
      } else {
        onDatesChange({
          startDate: startDate,
          endDate: null
        });
      }
    }
  }, {
    key: "onEndDateFocus",
    value: function onEndDateFocus() {
      var _this$props3 = this.props,
          startDate = _this$props3.startDate,
          onFocusChange = _this$props3.onFocusChange,
          withFullScreenPortal = _this$props3.withFullScreenPortal,
          disabled = _this$props3.disabled;

      if (!startDate && withFullScreenPortal && (!disabled || disabled === END_DATE)) {
        // When the datepicker is full screen, we never want to focus the end date first
        // because there's no indication that that is the case once the datepicker is open and it
        // might confuse the user
        onFocusChange(START_DATE);
      } else if (!disabled || disabled === START_DATE) {
        onFocusChange(END_DATE);
      }
    }
  }, {
    key: "onStartDateChange",
    value: function onStartDateChange(startDateString) {
      var endDate = this.props.endDate;
      var _this$props4 = this.props,
          isOutsideRange = _this$props4.isOutsideRange,
          minimumNights = _this$props4.minimumNights,
          onDatesChange = _this$props4.onDatesChange,
          onFocusChange = _this$props4.onFocusChange,
          disabled = _this$props4.disabled;
      var startDate = toMomentObject(startDateString, this.getDisplayFormat());
      var isEndDateBeforeStartDate = startDate && isBeforeDay(endDate, startDate.clone().add(minimumNights, 'days'));
      var isStartDateValid = startDate && !isOutsideRange(startDate) && !(disabled === END_DATE && isEndDateBeforeStartDate);

      if (isStartDateValid) {
        if (isEndDateBeforeStartDate) {
          endDate = null;
        }

        onDatesChange({
          startDate: startDate,
          endDate: endDate
        });
        onFocusChange(END_DATE);
      } else {
        onDatesChange({
          startDate: null,
          endDate: endDate
        });
      }
    }
  }, {
    key: "onStartDateFocus",
    value: function onStartDateFocus() {
      var _this$props5 = this.props,
          disabled = _this$props5.disabled,
          onFocusChange = _this$props5.onFocusChange;

      if (!disabled || disabled === END_DATE) {
        onFocusChange(START_DATE);
      }
    }
  }, {
    key: "getDisplayFormat",
    value: function getDisplayFormat() {
      var displayFormat = this.props.displayFormat;
      return typeof displayFormat === 'string' ? displayFormat : displayFormat();
    }
  }, {
    key: "getDateString",
    value: function getDateString(date) {
      var displayFormat = this.getDisplayFormat();

      if (date && displayFormat) {
        return date && date.format(displayFormat);
      }

      return toLocalizedDateString(date);
    }
  }, {
    key: "clearDates",
    value: function clearDates() {
      var _this$props6 = this.props,
          onDatesChange = _this$props6.onDatesChange,
          reopenPickerOnClearDates = _this$props6.reopenPickerOnClearDates,
          onFocusChange = _this$props6.onFocusChange;
      onDatesChange({
        startDate: null,
        endDate: null
      });

      if (reopenPickerOnClearDates) {
        onFocusChange(START_DATE);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props7 = this.props,
          children = _this$props7.children,
          startDate = _this$props7.startDate,
          startDateId = _this$props7.startDateId,
          startDatePlaceholderText = _this$props7.startDatePlaceholderText,
          isStartDateFocused = _this$props7.isStartDateFocused,
          endDate = _this$props7.endDate,
          endDateId = _this$props7.endDateId,
          endDatePlaceholderText = _this$props7.endDatePlaceholderText,
          isEndDateFocused = _this$props7.isEndDateFocused,
          screenReaderMessage = _this$props7.screenReaderMessage,
          showClearDates = _this$props7.showClearDates,
          showCaret = _this$props7.showCaret,
          showDefaultInputIcon = _this$props7.showDefaultInputIcon,
          inputIconPosition = _this$props7.inputIconPosition,
          customInputIcon = _this$props7.customInputIcon,
          customArrowIcon = _this$props7.customArrowIcon,
          customCloseIcon = _this$props7.customCloseIcon,
          disabled = _this$props7.disabled,
          required = _this$props7.required,
          readOnly = _this$props7.readOnly,
          openDirection = _this$props7.openDirection,
          isFocused = _this$props7.isFocused,
          phrases = _this$props7.phrases,
          onKeyDownArrowDown = _this$props7.onKeyDownArrowDown,
          onKeyDownQuestionMark = _this$props7.onKeyDownQuestionMark,
          isRTL = _this$props7.isRTL,
          noBorder = _this$props7.noBorder,
          block = _this$props7.block,
          small = _this$props7.small,
          regular = _this$props7.regular,
          verticalSpacing = _this$props7.verticalSpacing;
      var startDateString = this.getDateString(startDate);
      var endDateString = this.getDateString(endDate);
      return React.createElement(DateRangePickerInput, {
        startDate: startDateString,
        startDateId: startDateId,
        startDatePlaceholderText: startDatePlaceholderText,
        isStartDateFocused: isStartDateFocused,
        endDate: endDateString,
        endDateId: endDateId,
        endDatePlaceholderText: endDatePlaceholderText,
        isEndDateFocused: isEndDateFocused,
        isFocused: isFocused,
        disabled: disabled,
        required: required,
        readOnly: readOnly,
        openDirection: openDirection,
        showCaret: showCaret,
        showDefaultInputIcon: showDefaultInputIcon,
        inputIconPosition: inputIconPosition,
        customInputIcon: customInputIcon,
        customArrowIcon: customArrowIcon,
        customCloseIcon: customCloseIcon,
        phrases: phrases,
        onStartDateChange: this.onStartDateChange,
        onStartDateFocus: this.onStartDateFocus,
        onStartDateShiftTab: this.onClearFocus,
        onEndDateChange: this.onEndDateChange,
        onEndDateFocus: this.onEndDateFocus,
        showClearDates: showClearDates,
        onClearDates: this.clearDates,
        screenReaderMessage: screenReaderMessage,
        onKeyDownArrowDown: onKeyDownArrowDown,
        onKeyDownQuestionMark: onKeyDownQuestionMark,
        isRTL: isRTL,
        noBorder: noBorder,
        block: block,
        small: small,
        regular: regular,
        verticalSpacing: verticalSpacing
      }, children);
    }
  }]);

  return DateRangePickerInputController;
}(React.PureComponent || React.Component);

export { DateRangePickerInputController as default };
DateRangePickerInputController.propTypes = process.env.NODE_ENV !== "production" ? propTypes : {};
DateRangePickerInputController.defaultProps = defaultProps;