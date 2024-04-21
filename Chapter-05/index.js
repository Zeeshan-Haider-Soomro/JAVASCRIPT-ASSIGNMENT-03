// QUESTION 01, 02

// var num1 = 3
// var num2 = 5
// document.write(`sum of 3 and 5 is ${num1+num2} <br/>`)

// var num1 = 3
// var num2 = 5
// document.write(`sum of 3 and 5 is ${num1-num2} <br/>`)

// var num1 = 3
// var num2 = 5
// document.write(`sum of 3 and 5 is ${num1*num2} <br/>`)

// var num1 = 3
// var num2 = 5
// document.write(`sum of 3 and 5 is ${num1/num2} <br/>`)

// var num1 = 3
// var num2 = 5
// document.write(`sum of 3 and 5 is ${num1%num2} <br/>`)

// // QUESTION 03

// var declare;
// document.write("Value after variable declaration is ",declare, "<br/>" );
// declare = 5;
// document.write("initial value: ", declare , "<br/>");
// declare = ++declare;
// document.write("value after increment is : " , declare , "<br/>");
// declare = declare + 7;
// document.write("value after addition is : ", declare, "<br/>");
// declare = --declare;
// document.write("value after decrement is : ", declare, "<br/>");
// declare = declare%3
// document.write("the remainder is : ", declare, "<br/>");

// // QUESTION 04

// var ticketPrice = 600;
// var totalticketPrice = ticketPrice*5;
// document.write("total cost to 5 tickets to a movie is ", totalticketPrice, "PKR");

// // QUESTION 05

// var table = +prompt("enter any number ", 4);
// document.write("table of ", table, "<br/>");
// document.write(table, " x ", " 1 ", " = ", table , "<br/>");
// document.write(table, " x ", " 2 ", " = ", table, "<br/>");
// document.write(table, " x ", " 3 ", " = ", table, "<br/>");
// document.write(table, " x ", " 4 ", " = ", table ,"<br/>");
// document.write(table, " x ", " 5 ", " = ", table , "<br/>");
// document.write(table, " x ", " 6 ", " = ", table, "<br/>");
// document.write(table, " x ", " 7 ", " = ", table , "<br/>");
// document.write(table, " x ", " 8 ", " = ", table , "<br/>");
// document.write(table, " x ", " 9 ", " = ", table, "<br/>");
// document.write(table, " x ", " 10", " = ", table , "<br/>");

// // QUESTION 06

// var cel = 76;
// fah = (cel *9/5)+ 32
// document.write(cel, "<sup>o</sup>C is ", fah, "<sup>o</sup>F <br/>");

// var fah = 234;
// cel = (fah - 32)* 5/9;
// document.write(cel, "<sup>o</sup>C is ", fah, "<sup>o</sup>F ")

// QUESTION 07

// document.write("<h1>Shopping Cart</h1><br/>")

// var item_1_price = +prompt("Enter price of item 1:");
// document.write("Price of item 1 is ",item_1_price,"<br/>");

// var order_quantity_1 = +prompt("How many times item 1 do you want to purchase:");
// document.write("Quantity of item 1 is ",order_quantity_1,"<br/>");

// var item_2_price = +prompt("Enter price of item 2:");
// document.write("Price of item 2 is ",item_2_price,"<br/>");

// var order_quantity_2 = +prompt("How many times item 2 do you want to purchase:");
// document.write("Quantity of item 2 is ",order_quantity_2,"<br/>");

// var shipping_charges = 100;
// document.write("Shipping charges ",shipping_charges,"<br/>");

// var total_cost = item_1_price*order_quantity_1+item_2_price*order_quantity_2+shipping_charges;
// document.write("Total cost of your order is: ",total_cost);

// QUESTION 08

// document.write("<h1>Marks Sheet</h1><br/>");

// var total_marks = +prompt("Enter total marks:");
// document.write("Total marks: ",total_marks,"<br/>");

// var obtained_marks = +prompt("Enter obtained marks");
// document.write("Marks obtained: ",obtained_marks,"<br/>");

// var per = (obtained_marks/total_marks)*100;
// document.write("Percentage: ",per);

// QUESTION 09

// document.write("<h1>Currency in PKR</h1><br/>");

// let usDollar = 300;
// let dollar = +prompt("How much US Dollars you want?");

// let saudiRiyals = 75;
// let riyals = +prompt("How much Saudi Riyals you want?");

// document.write("Total Currency in PKR: " , usDollar*dollar+saudiRiyals*riyals);

// QUESTION 10

// var in_value = +prompt("Enter any number");
// document.write((in_value+5*10)/2);

// QUESTION 11

// document.write("<h1>Age Calculator</h1><br/>");

// var currentYear = +prompt("Enter Current Year");
// document.write("Current Year: ",currentYear,"<br>");

// var birthYear = +prompt("Enter Birth Year");
// document.write("Birth Year: ",birthYear,"<br>");

// var age = currentYear - birthYear;

// document.write("Your Age is: " , age);

// QUESTION 12

// document.write("<h1>The Geometrizer</h1><br/>");

// var radius = +prompt("Enter any value for radius:");
// document.write("Radius of a circle: ",radius,"<br>")

// const pie = 3.142;
// var circumference = 2*pie*radius;
// document.write("The Circumference is: ",circumference,"<br/>");

// var area = pie*radius*radius
// document.write("The Area is: ",area,"<br>")

// QUESTION 13

var favSnack = "Biryani";
document.write("Favourite Snack: ",favSnack,"<br>");

var currentAge = 19;
document.write("Current Age: ",currentAge,"<br>");

var maxAge = 90;
document.write("Estimated Maximum Age: " ,maxAge,"<br>");

var snack_amount_per_day = 1;
document.write("Amount of Snacks per day: ",snack_amount_per_day,"<br>");

var avgAge = maxAge - currentAge;

document.write("You will need " , avgAge , " to last you until the ripe old age of " , maxAge);













