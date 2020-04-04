class EvenUnder25 {
    constructor(evenNumbers) {
        this.evenNumbers = evenNumbers;

    }

    sayEvenNumber() {
        let MyRandomEven = this.evenNumbers[Math.floor(Math.random() * this.evenNumbers.length)];
        document.getElementById('RandomNumber').innerHTML = MyRandomEven;
    }


}

let EvenGenerator = new EvenUnder25([2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24]);


class OddUnder25 {
    constructor(oddNumbers) {
        this.oddNumbers = oddNumbers;
    }
    sayOddNumber() {
        let MyRandomOdd = this.oddNumbers[Math.floor(Math.random() * this.oddNumbers.length)];
        document.getElementById('RandomNumber').innerHTML = MyRandomOdd;
    }
}  

let OddGenerator = new OddUnder25([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25]);

class EvenOver25 {
    constructor(GreaterEvenNumber) {
        this.GreaterEvenNumber = GreaterEvenNumber;
    }
    GenerateEvenNumber() {
        let MyGreaterRandomEven = this.GreaterEvenNumber[Math.floor(Math.random() * this.GreaterEvenNumber.length)];
        document.getElementById('RandomNumber').innerHTML = MyGreaterRandomEven;

    }
}   
let EvenOver25Generator = new EvenOver25([26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50]);

class OddOver25 {
    constructor(GreaterOddNumber) {
        this.GreaterOddNumber = GreaterOddNumber;

    }
    GenerateOddNumber() {
        let MyGreaterRandomOdd = this.GreaterOddNumber[Math.floor(Math.random() * this.GreaterOddNumber.length)];
        document.getElementById('RandomNumber').innerHTML = MyGreaterRandomOdd;
    }

}

let OddOver25Generator = new OddOver25([27, 29, 31, 33, 35, 37, 39, 41, 43, 45, 47, 49]);


