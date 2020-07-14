

//Chapter 1 Q 1
  //alert("Welcome to our website");

//Chapter 1 Q 2
//alert("Error! please enter a valid password");

//Chapter 1 Q 3
//alert("Welcome to Js land... <br>  Happy coding!");

//Chapter 1 Q 4
// alert("Welcome to Js land");
// alert("Happy coding!");


// //Chapter 2 Q1
// //Var UserName; 

// //Chapter 2 Q2
// Var MyName = Muhammad Waseem 

// //Chapter 2 Q3
// var message = "Hello World! "
// alert(message);

// //Chapter 2 Q4
// var Name = "John Doe "
// var age = "20 years"
// var certificate = " Certified mobile app developer"
// alert(Name);
// alert(age); 
// alert(certificate); 

// //Chapter 2 Q5
// var email= "wtanoli89@yahoo.com";
// alert("your email address is " + email); 

// //Chapter 2 Q6
// var book= "A smarter way to learn JavaScript "; 
// alert("I am trying to learn from a book "+ book) 

// //Chapter 2 Q7
// document.write(" yah! i can write HTML content through JavaScript")

//   //Chapter 3 Q 1
// var age= 15;
// alert("I am"+ age + "years old");

// //Chapter 3 Q 3
// var birthYear = "1990"; document.write("My birth Year is "+ birthYear+"<br>Data type of my assigned variable is number");

//  //Chapter 4 Question 1
// // var a, b, c; 

// // Chapter 4 Question 2
// //Legal Variable 
//  var name; 
// Var age; 
// Var gender; 
// Var city; 
// Var country; 

// //Illegal Variable 
// Var alert; 
// Var  "gender";
// Var 6022;
// Var favorite hobby; 
// Var var; 

// // Chapter 4 Q 3
//  document.write("<h1> Rules for Naming JS variable </h1> <br>"+
// "variable names can only contain numbers,$ and _ sign for example : $my_1stNames <br>"+
// "variable must begin with a letter,$ or _. For example Name,$Name,_Name <br>"+
// "Variable names are case sensitive <br>"+
// "Variable names should not be JS Keyword") 

//  //Chapter 5 Q 1
// var a= +prompt("enter first number ");
// var b = +prompt ("enter second number ");
// var c= a+b;
// document.write("The sum of "+a+" and "+b+" is "+c) 

// // Chapter 5 Q 2
// //subtraction
// var a= prompt("enter first number ");
// var b = prompt ("enter second number ");
// var c= a-b;
// document.write("The subtraction of "+a+" and "+b+" is "+c) 

// //multiplication
// var a= prompt("enter first number ");
// var b = prompt ("enter second number ");
// var c= a*b;
// document.write("The multiplication of "+a+" and "+b+" is "+c);

// //modulus
// var a= prompt("enter first number ");
// var b = prompt ("enter second number ");
// var c= a%b;
// document.write("The modulus of "+a+" and "+b+" is "+c) 

// // Chapter 5 Q 3

// var a;
// document.write("Value after variable declaration is "+a)
// a=5;
// document.write("<br>initial value "+a);
// a=a+1;
// document.write("<br>Value after increment is "+a);
// a=a+7;
// document.write("<br> Value after addition is "+a); 
// a=a-1;
// document.write("<br>value after decrement is "+a); 
// a=a%3;
// document.write("<br>The reminder is "+a); 

// //Chapter5 Q 4

// var ticketPrize = +600;
// var NumOfTickets =5;
// var TotalPrize = ticketPrize*NumOfTickets; 
// document.write("The cost for buying "+NumOfTickets+" is "+ TotalPrize); 

// //Chapter 5 Q 5
// var a=+prompt("Enter number");
// for (i = 1; i < 11; i++) {
//   document.write(a+"x"+i +"="+i*a+"<br>");
// }

// //Chapter 5 Q 6
// var C=40;
// F=(C*9/5)+32;
// document.write(C+" is "+ F); 
// var F=106;
// C=(F-32)*5/9;
// document.write("<br>"+F+" is "+ C) 

// //Chapter 5 Q 7
// var prize1 = 600;
// var order1 = 3;
// var prize2 = 100;
// var order2 = 7;
// var shipping = 100;
// var item1= prize1*order1;
// var item2 = prize2 * order2;
// var c= item1+item2+shipping 
// document.write("Prize of item 1 is "+prize1 +
// "<br> order quantity of item 1 is" + order1+ 
// "<br> prize of item 2 is "+ prize2 + 
// "<br> order quantity of item 2 is "+ order2 +
// "<br> Shipping Charges "+shipping +
// "<br> Total Bill= "+c) ; 

// //Chapter 5 Q8

// var Total= 1050;
// var obtain= 771;
// var percent = (obtain*100)/Total; 
// document.write("Total Marks= "+ Total +"<br> Obtain Marks= "+ obtain +"<br>Percentage = " +percent); 

// //Chapter 5 Q 9

// var usd= 10;
// var sr= 25;
// var pkr = (usd*104.80)+(sr*28);
// document.write("Total Currency in PKR is "+ pkr); 

// //Chapter 5 Q 10

// var a= 10 ;
// var b= (a+5)*10 /2;
// document.write(b); 

// //Chapter 5 Q 11
// var Current = 2020;
// var Birth = 1997;
// var age = Current - Birth; 
// document.write("Current Year = "+ Current +"<br>Birth Year = "+Birth +"<br>Age = "+ age); 


// //Chapter 5 Q 12
// var r= 20;
// var a= 3.142*(r*r); 
// var c= 2*3.142*r
// document.write("Radius of a Circle : "+r+"<br> Circumference of a Circle : "+c+"<br> Area of a Circle: "+a); 

// //Chapter 6-9 Q 1

// var a= 10;
// document.write("The value of a is "+ a); 
// a= ++a;
// document.write("<br>The value of a after increment is "+a); 
// document.write("<br>The value of a++ is "+a++);
// document.write("<br> Now the value of a is "+a); 
// document.write("<br>The value of --a is "+--a); 
// document.write("<br>The value of a-- is "+ a--);
// document.write("<br>Now the value of a is "+a); 

// //Chapter 6-9 Q 2

// var a= 2;
// var b=1;
// var result = --a; 
// document.write("var a: "+ a +"<br> var b: "+ b+
// "<br>Result: "+result); 

// var a= 2;
// var b=1;
// var result = --a- --b; 
// document.write("var a: "+ a +"<br> var b: "+ b+
// "<br>Result: "+result); 

// var a= 2;
// var b=1;
// var result = --a- --b + ++b; 
// document.write("var a: "+ a +"<br> var b: "+ b+
// "<br>Result: "+result); 


// var a= 2;
// var b=1;
// var result = --a- --b + ++b +b--; 
// document.write("var a: "+ a +"<br> var b: "+ b+
// "<br>Result: "+result); 

// //Chapter 6-9 Q3

// var Name= prompt("Your Name here");
// document.write(Name+"!<br> Welcome to our world")*/

//Chapter 6-9 Q5

/*var a= prompt("Enter Number");
if(a===""){a=5};
for (i=1; i<11; i++){document.write(a+"x"+i+"="+a*i+"<br>"); 
}

//Chapter 6-9 Q6




var Subject1= prompt("Enter subject 1 ");
var Subject2= prompt ("Enter subject 2");
var Subject3= prompt ("Enter subject 3");
var Total = 300;
var obt1 = +prompt("Enter "+ Subject1 +" Marks");
var obt2 = +prompt("Enter"+ Subject2+" Marks");
var obt3 = +prompt("Enter"+ Subject3+" Marks");
var sbjct=100;
var percent1= obt1*100/sbjct;
var percent2= obt2*100/sbjct; 
var percent3 = obt3*100/sbjct; 
var obtain = obt1+(obt2)+(obt3);
var percent = (obtain*100)/Total; 
document.write("<b> Subject "+"  "+"Total Marks"+"  "+"Obtained Marks"+"  "+ "  "+"Percentage </b><br>");
document.write(Subject1+"  "+sbjct+"  "+obt1+"  "+percent1);
document.write("<br>"+Subject2+"  "+sbjct+"  "+obt2+"  "+percent2);
document.write("<br>"+Subject3+"  "+sbjct+"  "+obt3+"  "+percent3);

document.write("<br>Total "+"  "+Total+"  "+obtain+"  "+percent);





// Chapter 9-11 Q 1

var city= prompt("Enter city Name");

if (city==="Karachi"){
    document.write("welcome to city of lights");
}



//Chapter 9-11 Q 2

var gender= prompt ("Enter gender" );
if (gender === "Male"){
    document.write("Good Morning Sir");}
    else if(gender === "Female"){
            document.write ("Good Morning Ma'am");}
            else {
                document.write ("please Enter valid gender ");
            } 


//Chapter 9-11 Q 3


var color= prompt ("Enter traffic light color");

if (color==="red"){
    document.write("You Must Stop");
}
else if(color === "yellow"){
    document.write ('Ready to go');
}
else if(color === "green"){
    document.write("Go Now!")
}
else {
    document.write (color +" is Not a traffic light color");
}

//chapter 9-11 Q 4


// var fuel= +prompt("Enter Remaining fuel in litres");

// if(fuel<0.25){
//     document.write("please refill your fuel")
// }


// //  chapter 9-11 Q 6


// var marks1=+prompt("Enter English marks");
// var marks2=+prompt("Enter English marks");
// var marks3=+prompt("Enter English marks");

// var total=300;
// var obt= marks1+(marks2)+(marks3);

// var percent = obt*100/total;

// document.write("Total Marks: " + total +"<br>" );
// document.write("Obtain Marks: " + obt +"<br>" );
// document.write("Percentage: " + obt +"<br>" );

// if (percent>=80){
//     document.write("Grade: A-one <br> Remarks: Excellent");
// }
// else if (percent>=70 && percent <80){
//     document.write("Grade: A <br> Remarks: Good");
// }
// else if (percent>=60 && percent <70){
//     document.write("Grade: B <br> Remarks: You need to improve");
// }
// else if (percent<60){
//     document.write("Grade: Fail <br> Remarks: Sorry");
// }


// //  chapter 9-11 Q 7


// var num= 7;

// var guess= +prompt("Guess Number");

// if (guess===num){
//     document.write("Bingo! Correct answer");
// }
// else if (guess===++num){
//     document.write("Close enough to Correct answer");
// }


// //  chapter 9-11 Q 8

// var Num= +prompt("Enter Number");
// var a= Num%3;

// if (a===0){
//     document.write(Num+" is divisible by 3");
// }
// else{
//     document.write(Num+" is not divisible by 3");
// }

// //  chapter 9-11 Q 9

// var Num= +prompt("Enter Number");
// var a= Num%2;

// if (a===0){
//     document.write(Num+" is even number");
// }
// else{
//     document.write(Num+" is odd number");
// }


// //  chapter 9-11 Q 10



// var T = +prompt("Enter Temprature");

// if(T>40){
//     document.write("It's too hot outside");
// }
// else if(T>30 && T<40){
//     document.write("Today the weather outside is normal");
// }
// else if(T>20 && T<30){
//     document.write("Today's weather is Cool");
// }
// else if( T<10){
//     document.write("OMG! Today's weather is so Cool");
// }


// //  chapter 9-11 Q 11


// var num1 = +prompt("Enter First Number");

// var num2 = +prompt("Enter Second Number");
// var ops = prompt("Enter Operation");


// if(ops==="+"){
//     document.write(num1+"+"+num2+"="+(num1) +(num2));
// }
// else if(ops==="-"){
//     document.write (num1+"-"+num2+"="+num1-num2);
// }
// else if(ops==="*"){
//     document.write (num1+"*"+num2+"="+num1*num2);
// }
// else if(ops==="%"){
//     document.write (num1+"%"+num2+"="+num1%num2);
// }


// //  chapter 12-13 Q1


// var Num= prompt("Enter Number");
// a=Num.charCodeAt();

// if (a>=65 && a<=90){
//     document.write("This is UPPERCASE letter");
// }
// else if (a>=97 && a<=126){
//     document.write("This is LOWERCASE letter");
// }
// else {
//     document.write ("This is Number")
// }

// //  chapter 12-13 Q2


// var Num= prompt("Enter Number 1");
// var Num2 = prompt ("Enter Number 2");

// if (Num > Num2 ){
//     document.write(Num+" is greater"+Num2);
// }
// else if (Num2 > Num){
//     document.write(Num2 +" is greater than "+Num);
// }
// else if (Num2 = Num){
//     document.write(Num2 +" is equal to "+Num);
// }

// else {
//     document.write ("Enter a valid Number")
// }

// //  chapter 12-13 Q3


// var Num= prompt("Enter Number 1");

// if (Num >0 ){
//     document.write("This is a positive number");
// }
// else if (Num === 0){
//     document.write("The Number is Zero ");
// }

// else if(Num <0) {
//     document.write ("This is a negative Number")
// }
// else {
//     document.write ("Enter a valid Number")
// }


// //  chapter 12-13 Q4


// var Num= prompt("Enter alphabets");

// if (Num === "a"|| Num === "e" || Num === "i" || Num === "o" || Num === "u"){
//     document.write(" This is a vowel");
// }

// else {
//     document.write ("This is not a vowel")
// }

// //  chapter 12-13 Q5


// var pwd = "LovePakistan"
// var pwd1 = prompt("Enter alphabets");
// if (pwd1===""){
//     document.write("please enter your password")
// }
// else if (pwd1===pwd){
//     document.write("Correct! The password you entered matches original password")
// }
// else {
//     document.write("Incorrect password ")
// }


// //  chapter 12-13 Q6


// var greeting;
// var hour = 13;
// if (hour < 18) {
// document.write("Good day");}
// else{
// document.write  ("Good evening");
// }

// //  chapter 12-13 Q7


// var hour = prompt ("Enter time in 24 hrs format");
// if (hour >=0000 && hour <1200 ) {
// document.write("Good Morning");}

// else if (hour >=1200 && hour <1700 ) {
// document.write("Good AfterNoon");}

// else if (hour >=1700 && hour <2100 ) {
// document.write("Good Evening");}

// else if (hour >=2100 && hour <2359 ) {
// document.write("Good Night");}

// else{
// document.write  ("Enter valid time");
// }

// //   chapter 14-16 Q 1,2,3,4

// var arr=[];
// var arr=["apple", "banana", "peach"];
// var arrNum=[2,6,7,8];


// //   chapter 14-16 Q 7

// var arr=["SSC", "HSC"," BCS", 
// "BS"," BCOM"," MS"," MPhil", "PhD"];


// for(j=0; j<arr.length ; j++){
//         document.write(j+")"+arr[j]+"<br>")

// }


// //   chapter 14-16 Q 8


// var arr=["ali", "waseem"," basit"];
// var score = [400,380,370];
// var total = 500;

// var percent = [score[0]*100/total,score[1]*100/total,score [2]*100/total]

// document.write("score of "+arr[0]+" is "+score[0]+". Percentage: "+percent[0]+"<br>" )

// document.write("score of "+arr[1]+" is "+score[1]+". Percentage: "+percent[1]+"<br>" )

// document.write("score of "+arr[2]+" is "+score[2]+". Percentage: "+percent[2]+"<br>" )



// //   chapter 14-16 Q 9


// var arr=["orange","yellow","pink","red"];
// document.write (arr+"<br>");
// // a
// var unshift= prompt ("Enter color at begining");
// arr.unshift(unshift)
// document.write (arr+"<br>")
// //   b
// var endColor=prompt("Enter color at end");
// arr.push(endColor);
// document.write (arr+"<br>")
// //     c
// arr.unshift("cyan", "black");
// document.write (arr+"<br>");
// //      d
// arr.shift(1);
// document.write (arr+"<br>");
// //         e
// arr.pop();
// document.write (arr+"<br>")
// //f
// var color = prompt("Enter color");
// var target= +prompt ("Select your desired index")
// arr.splice(target,0,color);
// document.write(arr+"<br>");
// //g
// var targetIndex=+prompt("select the index number");
// var dlt = +prompt("select how many indexes you want to delete")
// arr.splice (targetIndex , dlt );
// document.write (arr+"<br>");*/

// //   chapter 14-16 Q 10


// var score = [320,230,480,120];
// score.sort(function (a,b){return a-b});
// document.write(score)



// // chapter 14-16. Q 11


// var arr=["karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];

// var Newarr= arr.slice(1,3);
// document.write(Newarr);


// // chapter 14-16. Q 12


// var arr = ["This ", " is", " my ", " cat"];
// document.write(arr.join(" "));


// chapter 14-16. Q 13


// var arr = ["Keyboard ", " Mouse", " Printer ", " Monitor"];
// for(i=0; i<arr.length ; i++){
// document.write("Out: <br>"+arr[i]);
// }


// // chapter 14-16. Q 14


// var arr = ["Keyboard ", " Mouse", " Printer ", " Monitor"];
// for(i=arr.length ; i>=0 ; i--){
// document.write("<br> Out: <br>"+arr[i]);
// }


// // chapter 14-16. Q 15


// document.write("<select>")
// var arr = ["Keyboard ", " Mouse", " Printer ", " Monitor"];

// for(i=0; i<arr.length ; i++){
// document.write ("<option>"+arr[i]+"</option>")
// }
// document.write("</select>") 


// chapter 17-20. Q 3

// for (var i=1; i<=10; i++)
// document.write("<br>"+i)


// // chapter 17-20. Q 4


// var a=+prompt("Enter number");
// var b= +prompt ("Enter length of table");

// for (i = 1; i <= b; i++) {

//   document.write(a+"x"+i +"="+i*a+"<br>");
// }


// // chapter 17-20. Q 5


// fruits = ["apple", "banana", "mango", "orange", 
// "strawberry"];

// for (i = 0; i < fruits.length  ; i++) {

//   document.write("Item at index "+i +" is "+fruits[i]+"<br>");
// }


// // chapter 17-20. Q 6

// //   a
// document.write ("Counting: ")
// for (i = 1; i <= 15 ; i++) {

//   document.write(i+",");
// }

// //   b
// document.write ("<br> Reverse Counting: ")

// for (i = 10; i >= 1 ; i--) {

// document.write(i+",");

// }
// //    c
// document.write ("<br> Even: ")
// for (i = 1; i <= 15 ; i++) {
//     if(i%2===0){
//         document.write(i+",")
//     }
// }

// //    d
// document.write ("<br> odd: ")
// for (i = 1; i <= 15 ; i++) {
//     if(i%2===1){
//         document.write(i+",")
//     }
// }

// //    e
// document.write ("<br> series: ")
// for (i = 1; i <= 15 ; i++) {
//     if(i%2===0){
//         document.write(i+"k,")
//     }
// }


// //   chapter 17-20 Q7

// var str = ["cake","apple", "pie", "cookie", "chips", "patties"];
// var t= prompt("What you want to order");
//   var n = str.indexOf(t);
//   if(n!==-1){

// document.write(t+" is <b>available</b> in our bakery")
// }
// else {
//     document.write(t+" is <b>Not available</b> in our bakery");
// }




// // chapter 17-20. Q 8


// A = [24, 53, 78, 91, 12];

// document.write("Array items: "+A);

// document.write ("The highest num in Array is "+ A.max());


// // chapter 17-20. Q 9


// A = [24, 53, 78, 91, 12];

// document.write("Array items: "+A);

// document.write ("The lowest num in Array is "+ A.min());


// // chapter 17-20 Q10

// for(i=1; i<=100; i++){
// if(i%5===0){
// document.write(i+", ")
// }
// }




// //   chapter 21-25 Q1

// var fName = prompt ("Enter first Name");
// var LName = prompt ("Enter last Name");
// var FullName = fName +" "+ LName ;

// function greet(){
//     document.write("Dear "+FullName + " Welcome to our Land");
// }

// greet();


// //   chapter 21-25 Q2

// var a= prompt ("Enter your favourite phone");
// var b= a.split("");
// document.write ("My favourite phone is "+ a)
// document.write("<br> Length of string is "+b.length )


//   chapter 21-25 Q3

// var a= "pakistani";
// var b= a.indexof("n");
// document.write ("string: "+ a)
// document.write("<br> index of 'n' : "+b )


// //   chapter 21-25 Q4

// var a= "Hello World!";
// var b= a.lastindexof("l");
// document.write ("string: "+ a)
// document.write("<br> Last index of 'n' : "+b )


// //   chapter 21-25 Q5

// var a= "pakistani";
// var b= a.split("");
// document.write ("string: "+ a)
// document.write("<br> character at index 3: "+b[3])


// //   chapter 21-25 Q7

// var a= "hyderabad";
// var b = a.split("");
// var c= b.splice(0,5,"islam")
// var d=b.join("");
// document.write ("city: "+ a)
// document.write("<br> after replacememt: "+d);



// //   chapter 21-25 Q8

// var message = ("Ali and Sami are best friends. They play cricket and football together.");
// var NewMessage = message.replace(/and/g,"&");
// document.write(NewMessage );


// //   chapter 21-25 Q9

// var a= 421;
// document.write("value:"+a+"<br>Type:"+typeof a);
// var b= String (a);
// document.write("<br>value:"+a+"<br> Type: "+typeof b);


// //   chapter 21-25 Q10

// var a= prompt("enter word");
// var b= a.toUpperCase();
// document.write("User Input:"+ a);
// document.write("<br> Upper Case:"+ b);


// //   chapter 21-25 Q12

// var a= 35.36;
// document.write("Number:"+a);
// var b= String (a);
// var arr= b.split("");
// c=arr.splice(2,1);
// var final = arr.join("");
// document.write("<br>Result:"+ final );


// // ch 21-25 Q13

// var userName = prompt ("Enter user name");
// var arr= userName.split("");
// for(i=0; i<arr.length; i++){
//     var  a= arr.charCodeAt(i);
//  if (a===33 || a=== 44 || a===46 || a===64){
//         document.write("please enter a valid user Name")
//     }
//     else {
//         document.write(userName);
//     }
// }


//   chapter 21+25 Q14

// var str = ["cake","apple", "pie", "cookie", "chips", "patties"];
// var t= prompt("What you want to order");
// var s= t.toLowerCase();
//   var n = str.indexOf(s);
//   if(n!==-1){

// document.write(s+" is <b>available</b> in our bakery")
// }
// else {
//     document.write(s+" is <b>Not available</b> in our bakery");
// }




// // chapter 21-25 Q16

// var uni = "University of karachi";
// arr= uni.split("");
// for (i=0; i<arr.length ; i++){
//     document.write("<br>"+ arr[i]);
// }


// // chapter 21-25 Q17

// var a = prompt ("Enter keyword");
// arr= a.split("");
// var b= arr.length -1;
// document.write ("user input :"+ a)
//     document.write("<br> Last character of input : "+arr[b]);
  

// //   ch 21-25 Q18

// var a = "the quick brown fox jumps over the lazy dog.";
// var b= a.split("the").length -1;
// document.write("Text: "+a);
// document.write("<br> There are "+b+ " occurence of word 'the' ")


// //   ch 26-30 Q1

// var b= +prompt ("Enter number");
// var a= Math.abs(b)
// document.write("Number: "+ a)
// document.write("<br> Round off value: "+ Math.round(a))
// document.write("<br> Floor value: "+ Math.floor(a))
// document.write("<br> Ceil value: "+ Math.ceil(a))


// //   ch 26-30 Q2

// var a= +prompt ("Enter number");
// document.write("Number: "+ a)
// document.write("<br> Round off value: "+ Math.round(a))
// document.write("<br> Floor value: "+ Math.floor(a))
// document.write("<br> Ceil value: "+ Math.ceil(a))


// //   ch 26-30 Q3

// var a= +prompt ("Enter number");
// document.write("The absolute value of "+ a+" is "+Math.abs(a))


// //   ch 26-30 Q4

// var a= Math.floor(Math.random()*10);
// document.write("Random dice number: "+a);


// //   ch 26-30 Q5

// var a= Math.floor(Math.random()*2+1);
// if (a===1){
//     document.write(a+"<br> Random coin value : Heads")
// }
// else {
//     document.write(a+"<br> Random coin value : Tails")
// }


// //   ch 26-30 Q6

// var a= Math.floor(Math.random()*100+1);
//     document.write(" Random Number between 1 and 100: "+a)


// //   ch 26-30 Q8

// var a= Math.floor(Math.random()*10+1);
// var b = +prompt("Enter the number between 1 and 10.");
// if(a===b){
//     document.write("Congrats! you are the lucky winner");
// }
// else {
//     document.write ("Try again!");
// }
 

//   chapter 31-34 Q1

// var a= new Date ();
// document.write(a);


//   chapter 31-34 Q2

// var a= new Date ();
// var x = a.toString("");
// var c= x.split("");
// var d= c.slice(4,7)
// var b= d.join("");
// document.write(b);


//   chapter 31-34 Q3

// var a= new Date ();
// var x = a.toString("");
// var c= x.split("");
// var d= c.slice(0,3)
// var b= d.join("");
// document.write("Today is "+b);


//   chapter 31-34 Q4

// var a= new Date ();
// var x = a.toString("");
// var c= x.split("");
// var d= c.slice(0,3)
// var b= d.join("");
// if(b==="Sat"|| b==="Sun"){
// document.write("It is Fun Day "+b);
// }


// //   chapter 31-34 Q5

// var a= new Date();
// var b = a.getDate();
// if(b<=15){
// document.write("First fifteen days of month");
// }
// else  {
// document.write("Last fifteen days of month");
// }



// //   chapter 31-34 Q6

// var a= new Date();
// var b = a.getTime();
// var c= b/(1000*60)
// document.write("Current Date: "+a +"<br>")
// document.write("Elapsed miliseconds since midnight jan 01, 1970: "+b +"<br>")
// document.write("Elapsed minutes since midnight jan 01, 1970: "+c +"<br>")


// //   chapter 31-34 Q7

// var a= new Date();
// var b = a.getHours();
// if(b<=11){
// document.write("It's AM");
// }
// else  {
// document.write("It's PM");
// }



// chapter 31-34 Q8

// var a= new Date("Dec 31,2020");
// document.write(a);


// // chapter 31-34 Q9

// var a = new Date ();
// var b= new Date("Jun 18,2015");
// var diff = a.getTime()- b.getTime();
// var days = diff/(1000*60*60*24)
// document.write(Math.floor(days)+ " days passed since 1st Ramadan 2015");


// chapter 31-34 Q10

// var a= new Date ();
// var b= new Date("Jan 01,2015");
// var diff = a.getTime()- b.getTime();
// var days = diff/(1000)
// document.write(Math.floor(days)+" Seconds had passed since begining of 2015");


// chapter 31-34 Q13

// var age= +prompt ("Enter your age");
// var a= new Date();
// var b = a.getFullYear();
// var BirthYear= b-age;
// document.write(BirthYear )


// chapter 31-34 Q14

// var Name= "Customer Name";
// var Month= "Current Month";
// var Units= 410;
// var perUnit= 16;
// var netAmount = Units*perUnit;
// var lateSurcharge= 465;
// var grossAmount = netAmount + lateSurcharge ;
// document.write("Customer Name: "+ Name +"<br>");
// document.write("Billing Month: "+ Month  +"<br>");
// document.write("Total Units: "+ Units  +"<br>");
// document.write("Charges per Unit: "+ perUnit  +"<br>");
// document.write("Net Amount payable (within due date): "+ netAmount  +"<br>");
// document.write("Late Surcharge: "+ lateSurcharge  +"<br>");
// document.write("Gross amount payable (after due date): "+ grossAmount  +"<br>");


// chapter 35-38 Q1

// function date(){
//     var a= new Date ();
//     document.write(a)
// }
// date();


//    chapter 35-38 Q2

// function greet(){
//     var fname= prompt("Enter first name");
//     var lname= prompt("Enter last name");
//     var fullName = fname +" " +lname ;
//     document.write("Good Morning "+ fullName);
// }
// greet();



//    chapter 35-38 Q3

// function sum(){
//     var num1= +prompt("Enter first number");
//     var num2= +prompt("Enter second number");
//     var add = num1 + num2  ;
//     document.write("Sum is "+ add);
// }
// sum();


//    chapter 35-38 Q4

// function calc(){
//     var num1= +prompt("Enter first number");
//     var opr = prompt ("Enter operator");
//     var num2= +prompt("Enter second number");
//     switch (opr){
//         case "+":
//         document.write(num1 + num2 );
//         break ;
//         case "-":
//         document.write(num1 - num2 );
//         break ;
//         case "*":
//         document.write(num1 * num2 );
//         break ;
//         case "/":
//         document.write(num1 / num2 );
//         break ;
//     }
    
// }
// calc();


//    chapter 35-38 Q5

// function calc(){
//     var num1= +prompt("Enter first number");
//     document.write(Math.pow(num1 ,2); 
// }
// calc();


//    chapter 35-38 Q6

// function factorial(n) { return (n != 1) ? n * factorial(n - 1) : 1; } alert( factorial(5) );


//    chapter 35-38 Q7

// function count(){
//    var a = +prompt("Enter start number");
//     var b = +prompt("Enter end number");
//     for (i=a; i<=b; i++){
//         document.write(i+"<br>")
//     }
// }
// count();


//      chapter 35-38 Q10

// var a= prompt ("Enter word");
// a= a.split("");
// var j= a.join("");
// var b= a.reverse();
// if(b==a){
// document.write(j+" is palindrome word");
// }
// else {
//    document.write(j+" is not palindrome word"); 
// }


//      chapter 35-38 Q13

// function letter(){
// var a = prompt("Enter para");
// var c= prompt ("enter letter");

// var b= a.split(c).length -1;

// document.write("The occurence of letter "+ c + " in "+a+" is "+b);
// }
// letter ();


//      chapter 35-38 Q14

// function calcCircumference(){
// var a = prompt("Enter radius of circle");
// var b= 2*3.142*a;

// document.write("Circumferrence of circle: "+b);
// }
// calcCircumference  ();


// function calcArea(){
// var a = prompt("Enter radius of circle");
// var b= 3.142*a*a;

// document.write("Area of circle: "+b);
// }
// calcArea ();



        // chapter 38-42 Q1

        // function power(){
        //     var a= +prompt("Enter base");
        //     var b= +prompt("Enter power");  
        //     console.log(Math.pow(a,b))
        // }
        // power();

        // chapter 38-42 Q2

        // function leap(){
        //     var year= prompt("Enter year");
        //     if(year%4===0){
        //         document.write(year+" is a Leap year")
        //     }
        //     else{
        //         document.write(year+" is not a Leap year") 
        //     }
        // }
        // leap();

        // chapter 38-42 Q3

        // var a= +prompt("Enter sides of triangle");
        // var b= +prompt("Enter sides of triangle");
        // var c= +prompt("Enter sides of triangle");
        // function TriArea(){
        //     var x= (a+b+c)/2;
        //     area = x*(x-a)*(x-b)*(x-c);
        //     document.write("Area of triangle having sides "+a+", "+b+" and "+c+" is "+ area)
        // }
    
        // function area(){
        //     return TriArea();;
        // }
        // area();

        // chapter 38-42 Q4

        // var Eng= +prompt("Enter english marks");
        // var Math= +prompt("Enter Math marks");
        // var Bio= +prompt("Enter Bio marks");
        // var total= 300;

        // function average(){
        //    var a= (Eng+Math+Bio)/3
        //    document.write("Average marks: "+ a + "<br>");
        // }
        // function percent(){
        //     var per = (Eng+Math+Bio)*100/total;
        //     document.write("Percentage: "+ per)
        // }
        // function main(){
        //     return  average() + percent();
        // }
        // main();

          // chapter 38-42 Q6
 
//  var a= "a quick brown fox jumps over the lazy dog"
//  var b= a.split("");
// for(i=0 ; i<b.length ; i++){
//      if(b[i]=== "a"||b[i]=== "e" || b[i]=== "i"
//      ||b[i]=== "o" ||b[i]=== "u"){
//         var c= b.splice(i,1)
//      }
//  }
//  var final= b.toString()
//  document.write(final )



  // chapter 38-42 Q8
 
//  var dist = +prompt("Enter distance in KM of two points");
 
// function meter(){
//     var mtr = dist * 1000;
//     document.write("Distance in meters is "+ mtr +"<br>")
// }

// function feet(){
//     var feet = dist * 1000 * 3.3;
//     document.write("Distance in feets is "+ feet  +"<br>")
// }
// function inches(){
//     var inch = dist * 1000* 3.3*12;
//     document.write("Distance in inches is "+ inch  +"<br>")
// }
// function cm(){
//     var cm = dist * 1000*100;
//     document.write("Distance in Centi meters is "+ cm +"<br>")
// }


// meter ()
// feet()
// inches ()
// cm()


//   chapter 38-42 Q9

// function otPay(){
// var rate= 12;
// var time = +prompt ("Enter hours ");
// var pay = rate * time;
// document.write(pay);
// }
// otPay ()


//   chapter 38-42 Q10

// function CalcAmount(){
// var amount= +prompt ("Enter amount to withdraw");
// var hund= amount % 100
// var hundred = (amount - hund)/100;
// var fif = hund %50;
// var fifty = (hund - fif )/50
// var ten = (fif- fif%10)/10

// document.write("you will have "+hundred+" hundred notes "+ fifty+" fifty notes "+ten+" tens notes");
// }
// CalcAmount ()


//      chapter 43-48 Q1

// function alert(){
//     alert("Thank you")
// }

//      chapter 43-48 Q2

// function msg(){
//     alert("Thank you for visiting")
// }

//      chapter 43-48 Q5
// var a=0;
// function increase(){
//     var b= ++a;
// var count = document.getElementById("counter");
// count.innerHTML = b;
// }
// function decrease(){
//     var b= --a;
// var count = document.getElementById("counter");
// count.innerHTML = b;
// }


function remove(){
    var element = this.id;
    element.remove();
}




















