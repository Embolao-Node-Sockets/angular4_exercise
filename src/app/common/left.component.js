"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var LeftComponent = (function () {
    function LeftComponent() {
    }
    return LeftComponent;
}());
LeftComponent = __decorate([
    core_1.Component({
        selector: 'app-left-navigation',
        template: "\n  <div class=\"col-sm-12 col-md-12 col-lg-12 col-xl-12\">\n  <p class=\"left-paragraph\">\n  Left Component\n  <p>\n  ",
        styles: [
            ".left-paragraph{\n          border: 1px solid red\n      }"
        ]
    })
], LeftComponent);
exports.LeftComponent = LeftComponent;
//# sourceMappingURL=left.component.js.map