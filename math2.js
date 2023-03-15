let a = 10;
document.write('<br>' +'<br>' + "the value of ++a is: " + (++a));
document.write('<br>' + "Now the value of a is: " + (++a));

document.write('<br>' +'<br>' + "the value of a++ is: " + (a++));
document.write('<br>' + "Now the value of a is: " + (a++));

document.write('<br>' +'<br>' + "the value of --a is: " + (--a));
document.write('<br>' + "Now the value of a is: " + (--a));

document.write('<br>' +'<br>' + "the value of a-- is: " + (a--));
document.write('<br>' + "Now the value of a is: " + (a--));

document.write('<br>' +'<br>' + "result");
document.write('<br>' + "the value of a is: " + (11));

let b = 2, c = 1;

document.write('<br>' +'<br>'+"step1 --a= " + (--a));
document.write('<br>' +'<br>'+"step2 --a - --b= " + (--a - --b));
document.write('<br>' +'<br>'+"step3 --a - --b + ++b = " + (--a - --b + ++b));
document.write('<br>' +'<br>'+"step4 --a - --b + ++b + b--= " + (--a - --b + ++b + b--));

document.write('<br>' +'<br>'+"result is " + (--a - --b + ++b + b--));

let greeting = prompt("write your name");
let hello = greeting + " assalam u alaikum";
alert(hello);

let table = prompt("enter a number");

let k = table;
document.write('<br>' + "table of 3" + '<br>');

for(let l = 1; l<=10; l++){
    document.write(k +'*' + l + '=' + (k*l) + '<br>');
}

let subject1 = prompt("enter subject");
let t_marks1 = prompt("enter total mark") ;
let o_marks1 = prompt("enter marks obtaied");

document.write('<br>' +"the percentage of " + subject1 + " is " + (o_marks1/t_marks1*100));


let subject2 = prompt("enter subject");
let t_marks2 = prompt("enter total mark") ;
let o_marks2 = prompt("enter marks obtaied");

document.write('<br>' +"the percentage of " + subject2 + " is " + (o_marks2/t_marks2*100));


let subject3 = prompt("enter subject");
let t_marks3 = prompt("enter total mark") ;
let o_marks3 = prompt("enter marks obtaied");

document.write( '<br>' +"the percentage of  " + subject3 + " is  " + (o_marks3/t_marks3*100));

document.write('<br>' + "total percentage is " + ((o_marks1+o_marks2+o_marks3)/(t_marks1+t_marks2+t_marks3)*100));
