"use strict";
exports.__esModule = true;
var BloodGroup = /** @class */ (function () {
    function BloodGroup(bloodGroup) {
        this.bloodGroup = null;
        switch (bloodGroup) {
            case 'O+':
                this.bloodGroup = bloodGroup;
                break;
            case 'O-':
                this.bloodGroup = bloodGroup;
                break;
            default:
                throw Error("Blood group not supported!");
        }
    }
    BloodGroup.prototype.getBloodGroup = function () {
        return this.bloodGroup;
    };
    return BloodGroup;
}());
exports["default"] = BloodGroup;
