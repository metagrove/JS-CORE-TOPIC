// var  - global access {}
// let const - local or block scope{}

var a = 10;
a =20;
if (a != 20){
    console.log("a is global access")
    let b = 20;
    console.log(`block locally access is ${b}`)
}

//console.log(b) // b is not defined
console.log(a) // a is defined


const val = 10;
// val = 20; // TypeError: Assignment to constant variable.
console.log(val) // val is defined

var data_1 = "hello";
function data(){
    console.log("test with local and golbal");
    let data_2 = "World";
    console.log(data_1+=data_2)
}
//console.log(data_1+=data_2);
data(); // helloWorld