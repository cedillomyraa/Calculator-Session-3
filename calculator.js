function calculate(){
    console.log("Calclator function");
let num1=Number(prompt("Enter the number 1:"))
console.log(num1);
let num2=Number(prompt("Enter the number 2:"))
console.log(num2);
// diplay the sum, subtraction, multiplication, and division
let sum,sub,mult,div;
sum=num1+num2;
sub=num1-num2
mult=num1*num2
div=num1/num2

console.log("Sum", sum); 
console.log("Subtraction", sub);
console.log("Multiplication", mult);
console.log("Division", div);

document.getElementById("results").innerHTML=
`   <p>${num1} + ${num2} = ${sum};,</p>
    <p>${num1} - ${num2} = ${sub};,</p>
    <p>${num1} * ${num2} = ${mult};,</p>
    <p>${num1} / ${num2} = ${div};,</p>

`



}



