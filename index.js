// var a=10;
// var b=20;
// console.log(a+b);       
// console .log(typeof a)    
// console .log(typeof b)

// var c="Mohammed";
// console.log(c);
// console .log(typeof c )

// var d=true;   
// console.log(d)


// function print(){
//     console.log("All ways be Happy");
// }
// print()


// function add(c,d){
//     var s=c+d;
//     return s;
// }
// var res = add(6,8);
// console.log(res);

// 
// Example-1 
//  function md(){
//  console.log("Ahmed");
// }

// // Example-2
//  md()
// function mohammed(a,b,c){
//     R=(a+b+c);
//     return R;
// }
//  res=mohammed(10,15,5);
// console.log(res);


// m=4;
// console.log(m>1);
// output is true

// m=4
// console.log(m<1);
// output is false

// x=3
// console.log(x<=3);
// console.log(x>=3);
// output is true 
// Becuse
//  = indicate as assign


// example:1 using swich type
// function marks(m){
//  switch(true){
//     case m<35:
//     console.log("You are fail ,Repeat the exam");
//     break;
//      case  m>=35 && m<50:
//     console.log("You Pass");
//     break;
//     case m>=50 && m<60:
//     console.log("You achived Second class"); 
//     break;
//     case m>=60 && m<80:
//     console.log("You achived First class");
//     break;
//     case m>=80 && m<100:
//     console.log("You achived Ditinction ");
//  }
// }
// marks(79); 

// multilpy using Function
// function flooring(l,b){
// //    console.log((l)*(b));
// }
// flooring(2,2); //add the length,breadth
//   //output 4

// // Subject: Array   Date 01/08/2021
// var Animals=["Tiger","Lion","Elephant","Bull","Camel","Kangro","Cat","Dog","Goat","Monkey"]
// console.log(Animals);


// // To defined the perticular elment
// console.log(Animals[0]);
// console.log(Animals[4]);
// console.log(Animals[7]);

// // to view the undefined elements
// console.log(Animals[13]);

// // To konw the length of the arrya
// console.log(Animals.length);

// // // To add the new elemet at first
// Animals.unshift("xyz")
// console.log(Animals);

// // To remove the customElements
// Animals.shift()
// console.log(Animals);

// // To add the new elemet at last
// Animals.push("abcd");
// console.log(Animals);

// // To Remove the element at last 
// Animals.pop();
// console.log(Animals);

// // To reverse the entire element
// Animals.reverse();
// console.log(Animals);

// // To add the element @ middle of the Array
// Animals.splice(3,0,"xyz");      //Adding a new element after 3index
// console.log(Animals);

// // To Remove & Repalce the new Element

// Animals.splice(3,1,"panda");     //Repalcing xyz to panda
// console.log(Animals);

// // Interating over an Array
//  for (var i=0; i<=Animals.length-1; i++){
//      console.log(Animals[i]);
//  }

// // comparision parameters
// var a = 35
// var b = 25
// c=a===b;
// document.write(c);
// console.log(c);
 

// Objects 07-08-2021
var student1={
    name:"mohammed",
    Age:25,
    Mobile:'+91-8892265369',
    state:'Karnataka',
}
console.log(student1);
console.log(student1.name);   //dot notation
console.log(student1.Age);

console.log(student1["Mobile"]);   // object notation
console.log(student1['state']);



var  student1={
    name :'Mohammed Musaib',
    Age :25,
    Mobile:8892265369,
    Address :{
        State:'Karnataka',
        Country:'India',
    }
    
}
console.log(student1);
console.log(student1.Address);
console.log(student1.Address.State);
console.log(student1['Address']['Country']);

student1.gender="Male"
console.log(student1.gender);
var student2=student1;

console.log(student2);
// Fucntion with in the object called method

var video = {
    name: 'access JS class',
    play : function () {
        console.log('Video Played');
    },
    time: ['start',0, 30, 90,'end'],
}
console.log(video);
console.log(video.play());

console.log(video.time);
console.log(video.time[2]);




// by using Array,fucntion,in the object method

var Biodata={
    name:'Moahmmed Shuaib',
    DoB:'00-00-1995',
    Adress:'Tg tank Road',
    animals:['Dog','Cat','Lion'],
    Fruit : function(){
        return 'Banana';
    }
}
console.log(Biodata);         //{name: "Moahmmed Shuaib", DoB: "00-00-1995", Adress: "Tg tank Road", animals: Array(3), Fruit: ƒ}
console.log(Biodata.Fruit());  //Banana
console.log(Biodata.animals);  //(3) ["Dog", "Cat", "Lion"]
console.log(Biodata.animals[2]);  //Lion


// if else statement in javascript
var Age=18;

if(Age>=18 && Age<=60){
    console.log('You are eligible to Drive');
}
else{
    console.log('You are Not eligible to Drive');
}


var names="Mohamed Musaib";
var gender="male";

if(gender=='male'){
    document.write("Hello Mr." + names);
}
else{
    document.write("Hello Miss" + names);
}

//  mtr to ft using function in javascript
function feet(l,b){
    console.log(l*3.28+b*3.28);
}
feet(3,0)

// if else if statement in javascript 9-08-2021

var Musaib = 70;

if(Musaib>=70 && Musaib<=100){
    console.log("You are in FCD list")
}
else if(Musaib>=60 && Musaib<70){
    console.log("You are in FC list")
}
else if(Musaib>=50 && Musaib<60){
    console.log("You are in SC list")
}
else if(Musaib>=35 && Musaib<50){
    console.log("You are in Pass list")
}
else if( Musaib<35){
    console.log("You are in Fail list")
}
else {
    console.log("please input excats marks")
}


// if else if statement in javascript 9-08-2021

var time=11.7;

if(time>=1 && time<6){
    console.log("Mid Night");
}
else if(time>=6 && time<12){
    console.log("Good Morning");   
}
else if(time>=12 && time<18){
    console.log("Good Afternoon");
}
else if(time>=18 && time<24){
    console.log("Good Night");
}
else {
    console.log("plese set the time properly");
}

// swich statement in javascript

var d=1;
    switch (d) {
        case d=1: 
            console.log("Today id Monday");
            break;
            case d=2:
                console.log("Today id Tuesday");
                break;
                cased3:
               console.log("Today id Wednesday");
               break;
                 case d=4:
              console.log("Today id Thursday");
                break;
    
                case d=5:
                console.log("Today id Friday");
                break;
                case 6:
                 console.log("Today id Saturday");
              break;
              case 7:
                 console.log("Today id Sunday");
              break;
    
        default:
            console.log('Enter the Valid day');
            break;
    }

// use of switch statement and fucntion

function day(d){
    switch (d) {
        case d=1:
            console.log("Today id Monday");
            break;
            case d=2:
                console.log("Today id Tuesday");
                break;
                cased3:
               console.log("Today id Wednesday");
               break;
                 case d=4:
              console.log("Today id Thursday");
                break;
    
                case d=5:
                console.log("Today id Friday");
                break;
                case 6:
                 console.log("Today id Saturday");
              break;
              case 7:
                 console.log("Today id Sunday");
              break;
    
        default:
            console.log('Enter the Valid day');
            break;
    }

}

day(5)


