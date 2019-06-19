import UIPromptForAction from './UIClasses/UIPromptForAction';
import UIForDonar from './UIClasses/UIForDonar';

let temp = new UIPromptForAction();
let temp2;
temp.displayQuestionsAndSaveTheRequiredInfo(["What would you like to do?"]);
let ans = temp.getTheRequiredInfoAsObject();

if(ans = "Donar") {
  temp2 = new UIForDonar();
  temp2.displayQuestionsAndSaveTheRequiredInfo(["name","phone","bloodGroup", "plateletCount"]);
  temp2.getTheRequiredInfoAsObject();
}