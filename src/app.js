"use strict";
exports.__esModule = true;
var UIPromptForAction_1 = require("./UIClasses/UIPromptForAction");
var UIForDonar_1 = require("./UIClasses/UIForDonar");
var temp = new UIPromptForAction_1["default"]();
var temp2;
temp.displayQuestionsAndSaveTheRequiredInfo(["What would you like to do?"]);
var ans = temp.getTheRequiredInfoAsObject();
if (ans = "Donar") {
    temp2 = new UIForDonar_1["default"]();
    temp2.displayQuestionsAndSaveTheRequiredInfo(["name", "phone", "bloodGroup", "plateletCount"]);
}
