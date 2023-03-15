let num1  = 8;
let num2 = 2;

document.write('<br>'+ "sum of " + num1 + " and " + num2 + " is " +(num1+num2));


document.write('<br>'+ "subtraction of " + num1 + " and " + num2 + " is " +(num1-num2));


document.write('<br>'+ "Multiplication of " + num1 + " and " + num2 + " is " +(num1*num2));


document.write('<br>'+ "division of " + num1 + " and " + num2 + " is " +(num1/num2));


document.write('<br>'+ "modulus of " + num1 + " and " + num2 + " is " +(num1%num2));

document.write('<br>'+"value after variable is undefined")


document.write('<br>'+"initial value : " + num1);


document.write('<br>'+"value after increment is : " + (num1++));


document.write('<br>'+"value after addition is : " + (num1+5));


document.write('<br>'+"value after decrement is : " + (num1--)); 


document.write('<br>'+"the remainder is : " + (0)); 

let ticket = 600;

document.write('<br>' + "the total cost to buy 5 tickets to a movie is " + (ticket*5) + "PKR");
let i = 3;
document.write('<br>' + "table of 3" + '<br>');
for(let j = 1; j<=10; j++){
    document.write(i +'*' + j + '=' + (i*j) + '<br>');
}

let celsius = 28;
document.write(celsius + " celsius is " + ((celsius*9/5)+32) + " fahrenheit");

let fahrenheit = 82.2;
document.write('<br>' + fahrenheit + " fahrenheit is " + ((fahrenheit - 32) * 5/9) + " celsius" + '<br>');

let item1 = 500;
let item2 = 100;
let quantity1 = 10;
let quantity2 = 8;
let charges = 150;

document.write("price of item 1 is " + item1 + '<br>');
document.write("quantity of item 1 is " + quantity1 + '<br>');

document.write("price of item 2 is " + item2 + '<br>');
document.write("quantity of item 2 is " + quantity2 + '<br>');
document.write("shipping charges " + charges + '<br>');
document.write('<br>'+"Total cost of your order is " + (500+100+10+8+150));

let total_marks = 900;
let mark_obtained = 780;

document.write('<br>'+"total marks: " + total_marks);
document.write( '<br>'+"Marks obtained: " + mark_obtained);
document.write('<br>'+"Percentage: " + ((mark_obtained/total_marks)*100) + '%');

let dollar = 10;
let riyal = 25;

document.write('<br>'+ "total dollar in PKR is " + (dollar*279));
document.write('<br>'+ "total riyal in PKR is " + (riyal*279));

let initial = 2
document.write((initial+5*10/2));

let year = 1999;
let current_year = 2023;
document.write("their age is" + (year-current_year));


let radius = 50;
let pie = 3.142;
document.write('<br>' + "the circumference is " + (2*pie*radius));

document.write('<br>' + "the area is " + (pie*radius*radius));

let snack = "lays";
let current_age = 18;
let maximum_age = 40;
let amount = 2;


document.write('<br>' + "favourite snack: " + snack);
document.write('<br>' + "current age: " + current_age);
document.write('<br>' + "estimated maximun age: " + maximum_age);
document.write('<br>' + "amount of snacks per day: " + maximum_age);
document.write('<br>' +"you will need " + ((maximum_age*365)*amount) + "to last you until the ripe old age of" + maximum_age);