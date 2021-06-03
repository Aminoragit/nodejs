var f = function(){
  console.log(1+1); //2
  console.log(1+2); //3
}


var a = [f];//function인 f 자체를 값으로 가짐

a[0](); //a[0]();
console.log(a[0]); //function : f
// console.log(a[0]()); //2 3 undefined

var o={
  func:a[0]() //2 3
}


var j={
  func:f //무반응
}
j.func(); //2 3

//
// var o = {
//   func:f
// }
// o.func();
