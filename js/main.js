
// Scrivi un programma che stampi i numeri da 1 a 100,

var numbers = 100;


for (var i = 0; i < numbers; ++i) {

    var  y = (i + 1);
    //Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
    //per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
    if (((y % 3) == 0) && ((y % 5) == 0))
    { 
        console.log("FizzBuzz");
    } 
    else if (((y % 3) == 0))
    { 
        console.log("Fizz");
    } 
    else if (((y % 5) == 0))
    {
        console.log("Buzz");
    }
    else console.log (y)

}    
    

