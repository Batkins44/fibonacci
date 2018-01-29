var fibStart = 1
var fibLast= 0
var fibonacci = 1
var fibNext = 0

function fib(){
fibNext = (fibonacci + fibStart);
console.log(fibonacci);
console.log(fibStart);
console.log(fibNext);
fibPrev = fibStart;
fibonacci = fibNext + fibPrev;
console.log(fibonacci);
for (i = 0;i < 10;i++){
fibPrev = fibNext
fibNext = fibonacci
fibonacci = fibNext + fibPrev;
console.log(fibonacci);
}

}

fib();