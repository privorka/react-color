'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Checkboard = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactcss = require('reactcss');

var _reactcss2 = _interopRequireDefault(_reactcss);

var _reactAddonsShallowCompare = require('react-addons-shallow-compare');

var _reactAddonsShallowCompare2 = _interopRequireDefault(_reactAddonsShallowCompare);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var checkboardCache = {};

function renderCheckboard(c1, c2, size) {
  if (typeof document === 'undefined') return null; // Dont Render On Server
  var canvas = document.createElement('canvas');
  canvas.width = canvas.height = size * 2;
  var ctx = canvas.getContext('2d');
  if (!ctx) return null; // If no context can be found, return early.
  ctx.fillStyle = c1;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = c2;
  ctx.fillRect(0, 0, size, size);
  ctx.translate(size, size);
  ctx.fillRect(0, 0, size, size);
  return canvas.toDataURL();
}

function getCheckboard(c1, c2, size) {
  var key = c1 + ',' + c2 + ', ' + size;
  var checkboard = renderCheckboard(c1, c2, size);

  if (checkboardCache[key]) {
    return checkboardCache[key];
  }
  checkboardCache[key] = checkboard;
  return checkboard;
}

var Checkboard = exports.Checkboard = function (_React$Component) {
  _inherits(Checkboard, _React$Component);

  function Checkboard() {
    var _ref;

    var _temp, _this, _ret;

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _classCallCheck(this, Checkboard);

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Checkboard.__proto__ || Object.getPrototypeOf(Checkboard)).call.apply(_ref, [this].concat(args))), _this), _this.shouldComponentUpdate = _reactAddonsShallowCompare2.default.bind(_this, _this, arguments[0], arguments[1]), _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Checkboard, [{
    key: 'render',
    value: function render() {
      var styles = (0, _reactcss2.default)({
        'default': {
          grid: {
            absolute: '0px 0px 0px 0px',
            background: 'url(' + getCheckboard(this.props.white, this.props.grey, this.props.size) + ') center left'
          }
        }
      });

      return _react2.default.createElement('div', { style: styles.grid, ref: 'grid' });
    }
  }]);

  return Checkboard;
}(_react2.default.Component);

Checkboard.defaultProps = {
  size: 8,
  white: 'transparent',
  grey: 'rgba(0,0,0,.08)'
};

exports.default = Checkboard;