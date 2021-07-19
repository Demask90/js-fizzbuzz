
// Scrivi un programma che stampi i numeri da 1 a 100,

var numbers = 100;
var  y = (i + 1);

for (var i = 0; i < numbers; ++i) {

    //Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
    if ((y % 3 == 0) && (y % 5 == 0))
    { 
        console.log("FizzBuzz");
    } 
    // per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
    else if ((y % 3 == 0) && (y % 5 !== 0))
    { 
        console.log("Fizz");
    } 
    else if ((y % 5 == 0) && (y % 3 !== 0))
    {
        console.log("Buzz");
    }
    else console.log (y)

}    
    

