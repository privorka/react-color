'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ShetchFields = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactcss = require('reactcss');

var _reactcss2 = _interopRequireDefault(_reactcss);

var _color = require('../../helpers/color');

var _color2 = _interopRequireDefault(_color);

var _reactAddonsShallowCompare = require('react-addons-shallow-compare');

var _reactAddonsShallowCompare2 = _interopRequireDefault(_reactAddonsShallowCompare);

var _common = require('../common');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ShetchFields = exports.ShetchFields = function (_React$Component) {
  _inherits(ShetchFields, _React$Component);

  function ShetchFields() {
    var _ref;

    var _temp, _this, _ret;

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _classCallCheck(this, ShetchFields);

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ShetchFields.__proto__ || Object.getPrototypeOf(ShetchFields)).call.apply(_ref, [this].concat(args))), _this), _this.shouldComponentUpdate = _reactAddonsShallowCompare2.default.bind(_this, _this, arguments[0], arguments[1]), _this.handleChange = function (data) {
      if (data.hex) {
        _color2.default.isValidHex(data.hex) && _this.props.onChange({
          hex: data.hex,
          source: 'hex'
        });
      } else if (data.r || data.g || data.b) {
        _this.props.onChange({
          r: data.r || _this.props.rgb.r,
          g: data.g || _this.props.rgb.g,
          b: data.b || _this.props.rgb.b,
          a: _this.props.rgb.a,
          source: 'rgb'
        });
      } else if (data.a) {
        if (data.a < 0) {
          data.a = 0;
        } else if (data.a > 100) {
          data.a = 100;
        }

        data.a = data.a / 100;
        _this.props.onChange({
          h: _this.props.hsl.h,
          s: _this.props.hsl.s,
          l: _this.props.hsl.l,
          a: data.a,
          source: 'rgb'
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ShetchFields, [{
    key: 'render',
    value: function render() {
      var styles = (0, _reactcss2.default)({
        'default': {
          fields: {
            display: 'flex',
            paddingTop: '4px'
          },
          single: {
            flex: '1',
            paddingLeft: '6px'
          },
          alpha: {
            flex: '1',
            paddingLeft: '6px'
          },
          double: {
            flex: '2'
          },
          input: {
            width: '100%',
            padding: '4px 10% 3px',
            border: 'none',
            boxShadow: 'inset 0 0 0 1px #ccc',
            fontSize: '11px'
          },
          label: {
            display: 'block',
            textAlign: 'center',
            fontSize: '11px',
            color: '#222',
            paddingTop: '3px',
            paddingBottom: '4px',
            textTransform: 'capitalize'
          }
        },
        'disableAlpha': {
          alpha: {
            display: 'none'
          }
        }
      }, this.props);

      return _react2.default.createElement(
        'div',
        { style: styles.fields, className: 'flexbox-fix' },
        _react2.default.createElement(
          'div',
          { style: styles.double },
          _react2.default.createElement(_common.EditableInput, {
            style: { input: styles.input, label: styles.label },
            label: 'hex',
            value: this.props.hex.replace('#', ''),
            onChange: this.handleChange
          })
        ),
        _react2.default.createElement(
          'div',
          { style: styles.single },
          _react2.default.createElement(_common.EditableInput, {
            style: { input: styles.input, label: styles.label },
            label: 'r',
            value: this.props.rgb.r,
            onChange: this.handleChange,
            dragLabel: 'true',
            dragMax: '255'
          })
        ),
        _react2.default.createElement(
          'div',
          { style: styles.single },
          _react2.default.createElement(_common.EditableInput, {
            style: { input: styles.input, label: styles.label },
            label: 'g',
            value: this.props.rgb.g,
            onChange: this.handleChange,
            dragLabel: 'true',
            dragMax: '255'
          })
        ),
        _react2.default.createElement(
          'div',
          { style: styles.single },
          _react2.default.createElement(_common.EditableInput, {
            style: { input: styles.input, label: styles.label },
            label: 'b',
            value: this.props.rgb.b,
            onChange: this.handleChange,
            dragLabel: 'true',
            dragMax: '255'
          })
        ),
        _react2.default.createElement(
          'div',
          { style: styles.alpha },
          _react2.default.createElement(_common.EditableInput, {
            style: { input: styles.input, label: styles.label },
            label: 'a',
            value: Math.round(this.props.rgb.a * 100),
            onChange: this.handleChange,
            dragLabel: 'true',
            dragMax: '100'
          })
        )
      );
    }
  }]);

  return ShetchFields;
}(_react2.default.Component);

exports.default = ShetchFields;