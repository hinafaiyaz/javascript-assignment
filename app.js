// Chapter:1
// Question: 1
// alert("Hello World!");


// Question:2
// alert("Error! Please enter a valid password");

// Question:3
// alert("Welcome to JS land...\nHappy Coding!");

// Question:4
// alert("Welcome to JS land...");
// alert("Happy Coding!");

// Question:5 written in browser console

// Chapter:2
// Question: 1
// var username;

// Question: 2
// var myname;
// myname = " Hina Faiyaz";


// Question:3

// var message;
// message = " Hello World";
// alert(message);


// Question:4

// var name;
// name = " Jhone Dhoe";
// alert(name);


// var age;
// age = " 15 years old";
// alert(age); 


// var course;
// course = " Certified Mobile Application Development";
// alert(course); 

// Question:5
// var pizza = " PIZZA \n PIZZ \n PIZ \n PI \n P";
// alert(pizza);

// Question:6

// var email =" My email address is ";
// var a = "hina_faiyaz@hotmail.com";
// var b = email + a
// alert(b);

// Question:7
// var a= "I am trying to learn from the Book ";
// var book= "A smarter way to learn JavaScript.";
// var b = a + book;
// alert(b);

// Question:8
// var a = "Yah! I can write HTML content through JavaScript";
// document.write (a);

// Question:9

// var a= "▬▬▬▬▬▬▬▬▬ஜ ۩۞۩ ஜ▬▬▬▬▬▬▬▬▬";
// alert(a);



// Chapter:3

// Question: 1
// var a = "I am ";
// var age= 15 ;
// var b= " years old"
// alert(a + age + b);



// Question 2:
// var a="You have visited this site " ;
// var originalNum = 13 ;
// var newNum = originalNum + 1 ;
// var b=" times" ;
// alert(a + newNum + b);


// Question: 3
// var a ="My birth year is ";
// var birthYear= 1995 ;
// var b="Data type of my ddeclared number is variable";
// document.write(a + birthYear + "<br>" + b);


// Question:4
// var name = "John Doe" ;
// var product= "5 T-shirts" ;
// var website="XYZ Clothing.com" ;
// document.write(name + " ordered " + product + " on " +  website)



// chapter 4
// Question: 1
// var a = "My name "
//   , b = "is "
//   , c = "Hina" ;
// alert(a + b + c);

// Question: 2
// illegal:
// var -month, 1hina, @hina, b+c, My Name, 


// Legal:
// var $money, apple1apple, MyName, _money, hina123


// Question:3

// var a= "Variable names can only contain numbers, $, and _. For example $my_1stVariable";
// var b= "Variables must begin with a letter, $ or _. For example $name, _name or name";
// var c="Variable names are case sensitive"; 
// var d= "Variable names should not be JS keyword";
// document.write("<h1>Rules for naming JS variables</h1>" + "<br>" + a + "<br>" + b + "<br>" + c + "<br>" + d)


// Chapter: 5
// Question: 1
// var a="The sum of 3 and 5 is ";
// var b= 3 + 5 ;

// document.write(a + b)


// Question: 2


// var a= 5-3 ;
// document.write(a)

// var a= 5*3 ;

// document.write(a)

// var a= 5/3 ;

// document.write(a)

// var a= 5%3 ;

// document.write(a)

// Question:3
// var b= "Value after variable declaration is: 5";
// document.write(b+ "<br>");
// var c= 5;
// document.write("Initial value:" + c +"<br>");
// var d=5;
// var e= d++;
// document.write("Value after increment is: " + d +"<br>");
// var f= d+7
// document.write("Value after addition is: " + f +"<br>");
// var g= f;
// var h= --f;
// document.write("Value after decrement is:" +h+"<br>");
// var i= h%3;
// document.write("The remainder is : " + i);





// Question: 4

// var a="Total cost of buying 5 tickets to a movie is ";
// var b= 5*600 ;
// var c= " PKR";
// document.write(a + b + c);



// Question: 5
// var a= "Table of 4";
// for (var i=1; i<11; i++){
    
//     document.write( " 4 " + " * " + i + " = " + 4*i + "<br>")
// }


// Question: 6
// var celsius= 35;
// var convert = (celsius* 9/5) + 32;
// document.write(celsius + "°C is " + convert +" °F" + "<br>");


// var fahrenheit= 98;
// var conversion = (fahrenheit-32) * 5/9;
// document.write(fahrenheit + "°F is " + conversion +" °C");

// Question: 7
// var item1= 100;
// var item2= 200;
// var item1Quantity= 4;
// var item2Quantity= 2;
// var charges= 35;
// var totalCost= (item1*item1Quantity) + (item2*item2Quantity) + charges;
// document.write("<h1>Shopping Cart</h1>" + "<br>" + "Price of item 1 is " + item1 + "<br>"+ "Quantity of item 1 is " + item1Quantity + "<br>" + "Price of item 2 is " + item2 + "<br>" + "Quantity of item 2 is " + item2Quantity + "<br>" + "Shipping charges " + charges + "<br>" + "Total cost of your order is " + totalCost);


// Question: 8
// var total= 980;
// var obtained= 804;
// var pert = 804/980*100;
// document.write("<h1>Marks Sheet</h1>" + "<br>" + "Total Marks: " + total + "<br>" + "Marks obtained: " + 804 +"<br>" + "Percentage: " + pert + "%");


// Question 9:
// var a= (10*104.80) + (25*28);
// document.write("<h1>Currency in PKR</h1>" + "Total currency in PKR: " + a);

// Question: 10
// var a= 2+5 * 10 / 2;
// document.write(a);


// Question: 11

// var currentYear = 2020;
// var birthYear= 1995;
// var age = currentYear - birthYear;
// document.write("<h1>Age Calculator</h1>" + "<br>" + "Current Year is: " + currentYear + "<br>" + "Birth Year is: " + birthYear + "<br>" + "Your age is: " + age + "<br>" + "They are either " + " 24 " + " or " + 25 + " years old");


// Question:12
// var radius = 20;
// var circumference= 2*3.142*radius;
// var area= 3.142 *(radius*radius);
// document.write("<h1>The Geometerizer</h1>" + "<br>" +"Radius of a circle is: " + radius + "<br>" + "The circumference is: " + circumference + "<br>" + "The area is: " + area );

// Question:13
// var snacks= "Lays";
// var currentAge= 25;
// var maxAge = 50;
// var perDay= 2;
// var calculation= (maxAge-currentAge)*perDay;
// document.write("<h1>The LifeTime Supply Calculator</h1>" + "<br>" +"Faourite Snack: " + snacks + "<br>" + "Current age is: " + currentAge + "<br>" + "Estimated Maximum age: " + maxAge+ "<br>" + "Amount of snack per day: " + perDay + "<br>" + "You will need " + calculation +  " to last you until the ripe old age of " + maxAge);



// Chapter: 6-9
// Question:1
// var a= 10;
// document.write("Result:" + "<br>" + "The Vaule of a is: " + a + "<br>" + "....................................." + "<br>");


// var b = ++a;
// document.write("The value of ++a is: " + b + "<br>" + "Now the value of a is: " + a + "<br>" );



// var c = a++;
// document.write("The value of a++ is: " + c + "<br>" + "Now the value of a is: " + a + "<br>" );


// var d = --a;
// document.write("The value of --a is: " + d + "<br>" + "Now the value of a is: " + a + "<br>");


// var e = a--;
// document.write("The value of a-- is: " + e + "<br>" + "Now the value of a is: " + a);


// Question:2

// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// document.write("a is: 2 " +  "<br>" + "b is: 1" + "<br>" + "result is: " + result);


// --a; -1
// --a - --b; 1 - 0
// --a - --b + ++b; 1 - 0 + 1
// --a - --b + ++b + b--; 1 - 0 + 1 + 1 = 3



// Question: 3
// var userName= prompt ("Enter your name", "Your name is");
// alert("Hello! " + userName);

// Question: 5

// var x=prompt("Enter your number");


// for (var i=1; i<11; i++){
//     if(x== 0){
//         document.write( 5 +  " * " + i + " = " + 5*i + "<br>")
//     }

//   else{
//     document.write( x +  " * " + i + " = " + x*i + "<br>")
//   }  
            
//         }


// Question: 6
   
// var subj1=prompt("Enter subject 1");
// var subj2=prompt("Enter subject 2");
// var subj3=prompt("Enter subject 3");
// var total=100;

// var subj1Obtained=prompt("Enter Your Marks" );

// var subj2Obtained=prompt("Enter Your Marks" );
// var subj3Obtained=prompt("Enter Your Marks" );
// var marksTotal= (total+ total +total);
// var totalObtained= ((+subj1Obtained)+ (+subj2Obtained)+ (+subj3Obtained) );
// var pecent1= (subj1Obtained/total)*100;
// var pecent2= (subj2Obtained/total)*100;
// var pecent3= (subj3Obtained/total)*100;
// var percentTotal= (pecent1+pecent2+pecent3)/3;

// document.write("Subjects"+ "&nbsp" + " Total Marks" + "&nbsp" + "Obtained Marks" + "&nbsp" + "Percentage"+ "<br>" + subj1 + "&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+ "&nbsp"+"&nbsp"+"&nbsp"+"&nbsp" + total+ "&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+ "&nbsp"+"&nbsp"+"&nbsp"+"&nbsp" + "&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+ "&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+subj1Obtained + "&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+ "&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+ "&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+ "&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+ pecent1+ "%"+ "<br>" + subj2 + "&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+ "&nbsp"+"&nbsp"+"&nbsp"+"&nbsp" + "&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+ total + "&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+ "&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+ "&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+subj2Obtained+ "&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+ "&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+ "&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+ pecent2 +"%"+ "<br>" + subj3  + "&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+ "&nbsp"+"&nbsp"+"&nbsp"+"&nbsp" + total + "&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+ "&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+ "&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+subj3Obtained +"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+ "&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+ "&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+ "&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+ pecent3+"%" +"<br>" + "&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+ "&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+ marksTotal+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+ "&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+ "&nbsp"+"&nbsp"+"&nbsp"+"&nbsp" + "&nbsp"+ totalObtained + "&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+ "&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+ "&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+ "&nbsp"+ percentTotal+"%");
// Chapter: 9-11
// Question: 1

// var city= prompt("Your city name", "Enter your city name");
// if (city == "karachi"){
//     alert ("Welcome to city of lights")
// }

// Question: 2
// var gender= prompt("Your gender", "Enter your gender");
// if (gender == "male"){
//     alert ("Good Morning Sir")

// }
// else if (gender== "female"){
//     alert ("Good Morning Ma’am") 
// }


// Question: 3
// var color= prompt("Traffic Signal", "Enter signal color");
// if (color == "red"){
//     alert ("Must Stop")

// }
// else if (color== "yellow"){
//     alert ("Ready to move") 
// }

// else {
//     alert ("Move Now") 
// }

// Question: 4
// var currentFuel= prompt("Enter fuel", "Enter fuel in liters");
// if (currentFuel < 0.25 + "Liters"){
//     alert("Please refill the fuel in your car")
// }

// Question: 5
// var a = 4; if (++a === 5){ alert("given condition for variable a is true"); }
// Output = given condition for variable a is true

// var b = 82; if (b++ === 83){ alert("given condition for variable b is true"); }
// Output = No output


// var c = 12; if (c++ === 13){ alert("condition 1 is true"); } if (c === 13){ alert("condition 2 is true"); } if (++c < 14){ alert("condition 3 is true"); } if(c === 14){ alert("condition 4 is true"); }
// Output= condition 2 is true

// var materialCost = 20000; 
// var laborCost = 2000; 
// var totalCost = materialCost + laborCost; 
// if (totalCost === laborCost + materialCost){ alert("The cost equals"); }
// Output= the cost equal


// if (true){ alert("True"); } if (false){ alert("False"); }
// Output= true

// if("car" < "cat"){ alert("car is smaller than cat"); }
// Output=car is smaller than cat


// Question:6


// var percent= prompt("Enter your percentage")
// var marksObtained= (percent/100)*300;
// if (percent >=80 && percent <=100){
//     document.write("<h1>Marks Sheet</h1>"+ "<br>" + "Total Marks: 300" + "<br>" + "Marks Obtained: " + marksObtained +"<br>" + "Percentage: " + percent +  "%" + "<br>" + "Grade: A-One" + "<br>" + "Remarks: " +"Excellent");
    
// }

// if (percent >=70 && percent <=80){
//     document.write("<h1>Marks Sheet</h1>"+ "<br>" + "Total Marks: 300" + "<br>" + "Marks Obtained: " + marksObtained +"<br>" + "Percentage: " + percent +  "%"+ "<br>" + "Grade: A" + "<br>" + "Remarks: " +"Good");
    
// }

// if (percent >=60 && percent <=70){
//     document.write("<h1>Marks Sheet</h1>"+ "<br>" + "Total Marks: 300" + "<br>" + "Marks Obtained: " + marksObtained +"<br>" + "Percentage: " + percent +  "%" + "<br>" + "Grade: B" + "<br>" + "Remarks: " +"You need to improve");
    
// }


// if (percent <=60){
//     document.write("<h1>Marks Sheet</h1>"+ "<br>" + "Total Marks: 300" + "<br>" + "Marks Obtained: " + marksObtained +"<br>" + "Percentage: " + percent +  "%" + "<br>" + "Grade: Fail" + "<br>" + "Remarks: " +"Sorry");
    
// }

// Question:7

// var x=prompt("Guess the number");
// if (x==5){
//     alert("Bingo! Correct answer")
// }

// if (x==6 ){
//     alert("Close enough to the correct answer")
// }



// Question: 8
// var number= prompt("Enter a number")

// if (number%3 == 0){
//    alert( number + " is divisible by 3");
    
// }




// Question: 9

// var number= prompt("Enter a number")

// if (number%2 == 0){
//    alert( number + " is an even number");
    
// }

// else {alert (number + " is an odd number");
// }



// Question:10
// var temp= prompt("Enter temperature")

// if (temp>40){
//    alert("It is too hot outside.")
    
// }

// if (temp>30 && temp<40){
//     alert("The Weather today is Normal.")
// }


// if (temp>20 && temp<30){
//     alert("Today’s Weather is cool.")
// }


// if (temp>10 && temp<20){
//     alert("OMG! Today’s weather is so Cool..")
// }



// Question: 11

// var val1=prompt("Enter your first value");

// var sign=prompt("Enter your operator");
// var val2=prompt("Enter your second value");

// console.log(val1 + sign + val2)
// if (sign ==="+"){
//     alert((+val1) + (+val2))
// }

// else if (sign ==="-"){
//     alert(val1-val2)
// }

// else if (sign ==="*"){
//     alert(val1 * val2)
// }

// else if (sign ==="/"){
//     alert(val1/val2)
// }





// Chapter 12-13




// Question:2 
// var num1 = prompt("Input the First integer");
// var num2 = prompt("Input the second integer");

// if (num1 > num2){
//     alert("The larger of "+ num1+ " and "+ num2+ " is "+ num1+ ".");
// }
                                                
  
// else
//   if(num2 > num1) 
//   {
//   alert("The larger of "+ num1+" and "+ num2+ " is "+ num2+ ".");
//   }                  
// else
//   {
//    alert("The values "+ num1+ " and "+num2+ " are equal.");
//   }


// Question:3

// var num=prompt("Enter a number");
// if(num > 0)
// {
//     alert("Number is POSITIVE");
// }
// if(num < 0)
// {
//     alert("Number is NEGATIVE");
// }
// if(num == 0)
// {
//     alert("Number is ZERO");
// }









// Question:6
// var hour=prompt("Enter hour");
 
// if (hour < 18) { 
//     alert ( "Good day")
// }

//  else {
//      alert("Good evening")
//     }



// Question:7
// var time=prompt("Enter hour");
 
// if (time =1900) { 
//     alert ( "Good day")
// }

//  else {
//      alert("Good evening")
//     }


// Chapter: 14-16


// Question: 1

// var students= {"first Name": " " , "last name" : " "};

// Question: 2
// var students= {first Name: " ", last name: " " };


// Question:3

// var city=["Karachi"];
// alert("Welcome to " + city);

// Question:4

// var cities = ["Karachi", "Islamabad", "Lahore"];
// alert("Welcome to " + cities[2]);



// Question:7
// var education = ["SSC", "HSC",  "BCS", "BS", "BCOM", "MS", "M.Phil.", "PhD"];
// document.write("<h1>Qualifications</h1>" +"<br>" + "1) " + education[0]+ "<br>" + "2) " + education[1]+ "<br>"+ "3) " + education[2]+ "<br>" +"4) " + education[3]+ "<br>" +"5) " + education[4]+ "<br>"+ "6) " + education[5]+ "<br>" + "7) " + education[6]+ "<br>" +"8) " + education[7]);

// Question:8
// var names = ["Michael", "John",  "Tony"];
// var score= [320,230,480];
// var percentage=[ [score[0]/500*100], [score[1]/500*100], [score[2]/500*100]]
// document.write("Score " + " of " + names[0] + " is " + score[0] + "." + " Percentage " + " is " + percentage[0] + "%" + "<br>" + "Score " + " of " + names[1] + " is " + score[1] + "." + " Percentage " + " is " + percentage[1] + "%" + "<br>"+ "Score " + " of " + names[2] + " is " + score[2] + "." + " Percentage " + " is " + percentage[2] + "%");


// Question:13

// var arr=["keybord ", " mouse ", " printer ", " monitor "]

// for (var i=0; i<1; i++){

//              document.write( "Devices:" + "<br>" + arr + "<br>"+ "Out:" + "<br>" + arr[0] + "<br>"+ "Out:" + "<br>" + arr[1]+ "<br>"+ "Out:" + "<br>" + arr[2]+ "<br>"+ "Out:" + "<br>" + arr[3])
//             }

     
     
// Question: 15

// var arr=["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"]
// document.write("<select>")
// for (var i= 0; i < arr.length; i++) {
//     document.write("<option>" +arr[i]+"</option>")
// }

// document.write("</select>")




// Chapter: 17-20

// Question:1

// var empty =  [
//         [" "],
//         [" "],
//         [" "]
//       ];
//     document.write( empty[0] + "<br>" +empty[1] + "<br>" + empty[2]);

// Question:2
// var matrix = [
//     ["0 1 2 3"],
//     ["1 0 1 2"],
//     ["2 1 0 1"]
//   ];
  
  
//   document.write( matrix[0] + "<br>" + matrix[1] + "<br>" + matrix[2]);
// Question:3


// for (var a = 1; a <=10; a++){
//     document.write (a + "<br>")
// }


// Question:4

// var x=prompt("Enter your number");
// var range=prompt("Enter your number");

//     for (var i=1; i<=range; i++){
     
//             document.write( x +  " * " + i + " = " + x*i + "<br>")
//         }


// Question:5


// var fruits = ["Apple", "Banana", "Mango", "Orange", "Strawberry"];

// for (var i = 0; i < fruits.length; i++) {
// 	document.write(fruits[i] + "<br>");
// }

// document.write("Element at index 0 is " + fruits[0] + "<br>" + "Element at index 1 is " + fruits[1] + "<br>" + "Element at index 2 is " + fruits[2] + "<br>" + "Element at index 3 is " + fruits[3] + "<br>" + "Element at index 4 is " + fruits[4])



    

// Question:6
// Counting:
// for (var i=1; i<16; i++){

//              document.write( i + "," + " " )
//             }


// Reverse Counting:
// for (var i=10; i>=1; i--){

//                 document.write(i + "," + " " )
//                } 




// Even:
// for (var i=1; i<=20; i++){
//     if (i % 2 ===0)
//     document.write(i + "," + " " )
//                    } 


// Odd:
// for (var i=1; i<=20; i++){
//         if (i % 2 !=0)
//         document.write(i + "," + " " )
//                        } 

// Series:
// for (var i=1; i<=20; i++){
//         if (i % 2 ===0)
//         document.write(i + "k" + " ," + " " )
//                        } 


    
// Question:7

// var items=["cake", "apple pie", "cookie", "chips", "patties"];
// var search=prompt("Enter search item");

// if(items.indexOf(search,"Cake") !== -1){
//     alert( search + " is available in our bakery at index" + items.indexOf(search,"Cake"));
// }

// if(items.indexOf(search,"apple pie") !== -1){
//     alert( search + " is available in our bakery at index " + items.indexOf(search,"apple pie"));
// }

// if(items.indexOf(search,"cookie") !== -1){
//     alert( search + " is available in our bakery at index " + items.indexOf(search,"cookie"));
// }

// if(items.indexOf(search,"chips") !== -1){
//     alert( search + " is available in our bakery at index " + items.indexOf(search,"chips"));
// }

// if(items.indexOf(search,"patties") !== -1){
//     alert( search + " is available in our bakery at index " + items.indexOf(search,"patties"));
// }

// else{
//     alert(" We are sorry " + search + " is not available in our bakery ");
// }






      


// Question: 8
// var array = [24, 53, 78, 91, 12];
// var largest= 91;

// for (i=0; i<=largest;i++){
//     if (array>largest) {
//         var largest=array[i];
//     }
// }

// document.write("Array items: " + array + "<br>" + "The largest number is " + largest);


// Question: 9
// var array = [24, 53, 78, 91, 12];
// var smallest= 12;

// for (i=0; i>=smallest;i++){
//     if (array>smallest) {
//         var smallest=array[i];
//     }
// }

// document.write("Array items: " + array + "<br>" + "The smallest number is " + smallest);




// Question: 10
// for(i=1;i<=100;i++){
//     if(i%5==0)
//         document.write(i + "," + " ")
//     }





