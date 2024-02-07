"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _findSecret = _interopRequireDefault(require("./findSecret"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//Hello, This a test for my scenario on CI/CD hacking lab
function styled() {
  (0, _findSecret["default"])();
  return "Bonjour, cette version est la bonne 7.0.0";
}

var _default = styled;
exports["default"] = _default;