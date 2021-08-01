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

// Subject: Array   Date 01/08/2021
var Animals=["Tiger","Lion","Elephant","Bull","Camel","Kangro","Cat","Dog","Goat","Monkey"]
console.log(Animals);


// To defined the perticular elment
console.log(Animals[0]);
console.log(Animals[4]);
console.log(Animals[7]);

// to view the undefined elements
console.log(Animals[13]);

// To konw the length of the arrya
console.log(Animals.length);

// // To add the new elemet at first
Animals.unshift("xyz")
console.log(Animals);

// To remove the customElements
Animals.shift()
console.log(Animals);

// To add the new elemet at last
Animals.push("abcd");
console.log(Animals);

// To Remove the element at last 
Animals.pop();
console.log(Animals);

// To reverse the entire element
Animals.reverse();
console.log(Animals);

// To add the element @ middle of the Array
Animals.splice(3,0,"xyz");      //Adding a new element after 3index
console.log(Animals);

// To Remove & Repalce the new Element

Animals.splice(3,1,"panda");     //Repalcing xyz to panda
console.log(Animals);

// Interating over an Array
 for (var i=0; i<=Animals.length-1; i++){
     console.log(Animals[i]);
 }


