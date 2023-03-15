let abc = ["karachi" , "lahore" , "islamabad"];
let state1 = ["alphabets","numbers", "$ and _"];
let state2 = ["letter","$ or _"];
let state3 = "case";
let state4 = "JS keyword";

document.write('<br>' + "Variable names can only contain" + state1[0] + "," + state1[1] + "and" + state1[2] + '<br>' + `for example $my_1stVariable`);


document.write('<br>' + "Variable must begin with a " + state2[0] + " or " + state2[1] + "." + `for example : $name,_name or name`);

document.write('<br>' + "variable name are  " + state3 + "sensitive")

document.write('<br>' + "variable names should not be " + state4);
