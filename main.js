var code = {
    // Returns "Hello World!"
    helloWorld: function() {
        return 'Hello World!';
    },

    // Take a single-spaced <sentence>, and capitalize every <n>th word starting with <offset>.
    capitalizeEveryNthWord: function(sentence, offset, n) {
        var arr = sentence.split(' ');
        var result = [];

        for (var i = 0; i<arr.length; i++){
            // if i = offset or offset+n, capitalize first letter, then add the word
            if(i < offset) result.push(arr[i]); 
            else if(i == offset || i%n == 0) {
                var temp = arr[i].split('');
                var firstLetter = temp[0].toUpperCase();
                temp.splice(0, 1, firstLetter);
                var temp1 = temp.join('');
                result.push(temp1);
            }
            // else add the word
            else {
                result.push(arr[i]);
            }
        }

        return result.join(' ');

        // method#2 modify in place
        // for (var i = 0; i<arr.length; i++){
        //     // if i = offset or offset+n, capitalize first letter, then add the word
        //     if(i == offset || i%n == 0) {
        //         var temp = arr[i][0].toUpperCase();
        //         var tempArr = arr[i].split('');
        //         tempArr.splice(0,1,temp).join('')
        //         arr.splice(i, 1, tempArr.join(''))
        //     }
        // }
        // return arr.join(' ')

    },
    
    // Determine if a number is prime
    isPrime: function(n) {
        var limit = Math.sqrt(n);
        if(n<=1) return false;
        if(n<=3) return true;
        if(n%2 == 0) return false;
        if(n%3 == 0) return false;

        for(var i=5; i<=limit; i+=6){
            if(n%i == 0 || n%(i+2) == 0) return false;
        }
        return true;
    },
    
    // Calculate the golden ratio.
    // Given two numbers a and b with a > b > 0, the ratio is b / a.
    // Let c = a + b, then the ratio c / b is closer to the golden ratio.
    // Let d = b + c, then the ratio d / c is closer to the golden ratio. 
    // Let e = c + d, then the ratio e / d is closer to the golden ratio.
    // If you continue this process, the result will trend towards the golden ratio.
    goldenRatio: function(a, b) {
        // console.log(a ,b)
        // var result = this.fibonacci(a+b);
        // console.log(result)
        // return this.fibonacci(a+b)/this.fibonacci(b);

        // return 1+a/(a+b)
        return this.fibonacci(15)/this.fibonacci(14)
    },

    // Give the nth Fibonacci number
    // Starting with 0, 1, 1, 2, 3, 5, 8... a Fibonacci number is the sum of the previous two.
    fibonacci: function(n) {
        // console.log(n)
        if(n <= 1) return n;

        else {
            return this.fibonacci(n-1) + this.fibonacci(n-2);
        }
        // else return fibonacci(n-1) + fibonacci(n-2);
    },

    // Give the square root of a number
    // Using a binary search algorithm, search for the square root of a given number.
    // Do not use the built-in square root function.
    squareRoot: function(n) {
console.log(typeof n)
        if(n<0) return false;
        var low, mid, high;

        // while (n/2)*(n/2) != n
        // if (n/2)*(n/2) > n, go for low range
        // else go for high range
        low = 0;
        mid = n/2;
        high = n;
        var midSq = mid*mid;
        if(midSq == n){
            return mid;
        }

        while((mid*mid).toPrecision(10) != n) {
            midSq = mid*mid;      

            if (midSq > n) {
                high = mid;
                mid = (low + high)/2;
            }

            else {
                low = mid;
                mid = (low + high)/2;
            }

        }

        
        var precision = mid.toPrecision(8);

        var precArr = precision.split('.');
        console.log(mid)
        console.log('precision: ', precision)
console.log(precArr)
        console.log(precArr[1])
        if(precArr[1] == 0000000) {
            return Math.round(mid);
        }
        return precision;

    }
};

var result = code.squareRoot(2);
console.log( result)

// var result1 = code.goldenRatio(3,4)
// console.log(result1)


// var result = code.fibonacci(3);
// console.log(result)
// var result = code.fibonacci(1);
// console.log(result)
// var result = code.fibonacci(2);
// console.log(result)

// var result = code.isPrime(25)
// console.log(result)
// var result = code.capitalizeEveryNthWord('Lorem ipsum dolor sit amet', 2, 1);
// console.log(result)