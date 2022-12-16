"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.ReactSampleComponente = void 0;
var react_1 = __importDefault(require("react"));
;
var ReactSampleComponente = function (_a) {
    var children = _a.children;
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("p", null,
            "ReactSampleComponente: ",
            children ? '' : 'No Content'),
        children));
};
exports.ReactSampleComponente = ReactSampleComponente;
//# sourceMappingURL=react-sample.componente.js.map