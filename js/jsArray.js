var ages = [32, 33, 16, 40];

function checkAdult(age) {
    return age >= 18;
}

var myFunction = {

  haha: function() {
    var str = new Array();
    str.push(1);
    str.push(2);
    console.log(str);
    str.pop();
    console.log(str);
  },
  id : 1,
  print: function(){
    console.log(this.id);
  }
}
function Parent(){
  this.name = "Larry";
  this.Age = 24;
}
Parent.prototype.gege = 9;
myFunction.haha();
console.log(myFunction);
console.log(Parent.prototype)
!function(e){
  console.log(e.name);
}(new Parent());

function gaga(a){
  console.log(a);
  var ctn = document.getElementById(a);
  console.log(ctn);
  ctn.scrollTop=0;
}
var date = new Date();
console.log(date);
console.log(String(date));

var myFunction1 = {
  id: 2
}
function aaaaaa(){
  var str = new Array();
  str.push(1);
  str.push(2);
  console.log(str);
  str.pop();
  console.log(str);
}
aaaaaa();
