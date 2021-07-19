
// Scrivi un programma che stampi i numeri da 1 a 100,

var numbers = 100;

for (var i = 0; i < numbers; ++i) {

    //Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
    if ((((i + 1) % 3) == 0) && ((i + 1) % 5) == 0)
    { 
        console.log("FizzBuzz");
    } 
        // ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
    else if ((((i + 1) % 3) == 0) && (((i + 1) % 5) !== 0))
    { 
        console.log("Fizz");
    
    } 
    else if ((((i + 1) % 5) == 0) && ((i + 1) % 3) !== 0)
    {
        console.log("Buzz");
    }
    
    else console.log(i + 1)
}    
    

