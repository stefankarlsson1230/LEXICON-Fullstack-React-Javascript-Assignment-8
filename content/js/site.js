"use strict"


// Menu system
const articles = document.querySelectorAll('article');
hideAll();
document.getElementById('chooseExercise').addEventListener('change', function() {
        switchExercise(this.value);
});


// Functions
function hideAll() {
    for(let a of articles) {
        a.style.display = 'none';
    }
}

function switchExercise(ex) {
    hideAll();
    document.getElementById(ex).style.display = 'block';
}


// Exercises

// -------------------- Exercise 1 --------------------

setInterval(getDate, 1000);

function getDate() {
    const dateEx1 = new Date();
    let ex1Weekday;

    switch (dateEx1.getDay()) {
        case 0: ex1Weekday = 'Sunday'; break;
        case 1: ex1Weekday = 'Monday'; break;
        case 2: ex1Weekday = 'Tuesday'; break;
        case 3: ex1Weekday = 'Wednesday'; break;
        case 4: ex1Weekday = 'Thursday'; break;
        case 5: ex1Weekday = 'Friday'; break;
        case 6: ex1Weekday = 'Saturday'; break;
    }

    document.getElementById('ex1Weekday').innerText = ex1Weekday;
    document.getElementById('ex1Date').innerText = dateEx1.toLocaleDateString('sv-sv');
    document.getElementById('ex1Time').innerText = dateEx1.toLocaleTimeString('sv-sv');
}


// -------------------- Exercise 2 --------------------

document.getElementById('ex2Button').addEventListener('click', checkForLeapYear);

function checkForLeapYear() {
    const ex2Year = Number(document.getElementById('ex2year').value);
    let ex2IsLeapYear;
    const ex2Result = document.getElementById('ex2Result');

    // A year is a leap year if it is divisible by 4, unless it is divisible by 100 but not by 400. 
    if (ex2Year % 4 === 0){
        if(ex2Year % 100 === 0 && ex2Year % 400 !== 0) ex2IsLeapYear = false;
        else ex2IsLeapYear = true;
    }
    else ex2IsLeapYear = false;

    if(ex2IsLeapYear) ex2Result.innerText = `${ex2Year} is a leap year`;
    else ex2Result.innerText = `${ex2Year} is not a leap year`;
}


// -------------------- Exercise 3 --------------------

const ex3YearInput = document.getElementById('ex3year');     
const ex3Button = document.getElementById('ex3Button');
const ex3ResultOutput = document.getElementById('ex3Result'); 

ex3Button.addEventListener('click', ex3FirstWeekDayOfYear);

function ex3FirstWeekDayOfYear() {
    const ex3Date = new Date(ex3YearInput.value, 0, 1);
    let ex3Weekday;

    switch (ex3Date.getDay()) {
        case 0: ex3Weekday = 'Sunday'; break;
        case 1: ex3Weekday = 'Monday'; break;
        case 2: ex3Weekday = 'Tuesday'; break;
        case 3: ex3Weekday = 'Wednesday'; break;
        case 4: ex3Weekday = 'Thursday'; break;
        case 5: ex3Weekday = 'Friday'; break;
        case 6: ex3Weekday = 'Saturday'; break;
    }

    if (ex3Weekday === 'Sunday') ex3ResultOutput.innerText = 'Yes! It is a Sunday';
    else ex3ResultOutput.innerText = `Not a Sunday (it's a ${ex3Weekday})`;
}


// -------------------- Exercise 4 --------------------

const ex4PlayerGuess = document.getElementById('ex4Number');     
const ex4Button = document.getElementById('ex4Button');
const ex4ResultOutput = document.getElementById('ex4Result'); 

ex4Button.addEventListener('click', ex4GuessNumber);

function ex4GuessNumber() {
    const random = Math.floor((Math.random() * 10)) + 1;

    if (random === Number(ex4PlayerGuess.value)) ex4ResultOutput.innerText = 'Good Job';
    else ex4ResultOutput.innerText = `Did not match! My number was ${random}`;
}


// -------------------- Exercise 5 --------------------

let ex5Today = new Date();
const ex5Result = document.getElementById('ex5Result');
let ex5Milliseconds;
let ex5Days;

// I do not compensate for leap-years
if (ex5Today.getMonth() === 11 && ex5Today.getDate() > 24) ex5Milliseconds = new Date(ex5Today.getFullYear() + 1, 11, 24) - ex5Today;
else ex5Milliseconds = new Date(ex5Today.getFullYear(), 11, 24) - ex5Today;

ex5Days = Math.ceil(ex5Milliseconds / 1000 / 60 / 60 / 24);

ex5Result.innerText = ex5Days;



// -------------------- Exercise 6 --------------------

const ex6Input = document.getElementById('ex6Input');     
const ex6Button = document.getElementById('ex6Button');
const ex6ResultOutput = document.getElementById('ex6Result'); 

ex6Button.addEventListener('click', ex6Reverse);

function ex6Reverse (){
    let ex6Text = ex6Input.value;
    let ex6Result = '';

    for(let i = ex6Text.length - 1; i >= 0; i--) ex6Result += ex6Text[i];

    ex6ResultOutput.innerText = ex6Result;
}


// -------------------- Exercise 7 --------------------

const ex7Input = document.getElementById('ex7Input');     
const ex7Button = document.getElementById('ex7Button');
const ex7ResultOutput = document.getElementById('ex7Result'); 

ex7Button.addEventListener('click', ex7Combinations);

function ex7Combinations() {
    let ex7Text = ex7Input.value;
    let ex7Words = [];
    
    for(let start = 0; start < ex7Text.length; start++) {
        for (let end = start; end < ex7Text.length; end++) {
            ex7Words.push(ex7Text.slice(start, end + 1));
        }
    }

    ex7ResultOutput.innerHTML = ex7Words.join(', ');
}


// -------------------- Exercise 8 --------------------

const ex8Input = document.getElementById('ex8Input');     
const ex8Button = document.getElementById('ex8Button');
const ex8ResultOutput = document.getElementById('ex8Result'); 

ex8Button.addEventListener('click', ex8Reorganize);

// This is limited as it only works for only lowercase or only uppercase
function ex8Reorganize() {
    let ex8Array = ex8Input.value.split("");
    ex8Array.sort();
    ex8ResultOutput.innerHTML = ex8Array.join("");
}


// -------------------- Exercise 9 --------------------

const ex9Input = document.getElementById('ex9Input');     
const ex9Button = document.getElementById('ex9Button');
const ex9ResultOutput = document.getElementById('ex9Result'); 

ex9Button.addEventListener('click', ex9Reorganize);

function ex9Reorganize() {
    let ex9Longest = "";
    let ex9Array = ex9Input.value.split(" ");
    let ex9Word;

    for(let i = 0; i < ex9Array.length; i++) {
        ex9Word = ex9Array[i][0].toUpperCase() + ex9Array[i].slice(1);
        ex9Array[i] = ex9Word;
        if (ex9Word.length > ex9Longest.length) ex9Longest = ex9Word;
    }

    ex9ResultOutput.innerText = ex9Array.join(" ") + ` - the longest word is ${ex9Longest}`;
}


// -------------------- Exercise 10 --------------------

const ex10Input = document.getElementById('ex10Input');     
const ex10Button = document.getElementById('ex10Button');
const ex10ResultOutput = document.getElementById('ex10Result'); 

ex10Button.addEventListener('click', ex10CheckIfPrime);

// A prime number is a whole number greater than 1 that has exactly two factors: itself and 1. 
// It cannot be formed by multiplying other whole numbers. Examples include 2, 3, 5, 7, 11, and 13. 
// The number 1 is not prime because it only has one factor.

function ex10CheckIfPrime() {
    let ex10isPrime = true;
    let ex10Number = Number(ex10Input.value);

    if (ex10Number <= 1) ex10isPrime = false;
    else if (ex10Number === 2) ex10isPrime = true;
    else {
        for (let i = 2; i < ex10Number; i++) {
            if(ex10Number % i === 0) ex10isPrime = false;
        }
    }

    if(ex10isPrime) ex10ResultOutput.innerText = `${ex10Number} is a prime`;
    else ex10ResultOutput.innerText = `${ex10Number} is not a prime`;
}


// -------------------- Exercise 11 --------------------

const ex11Input = document.getElementById('ex11Input');     
const ex11Button = document.getElementById('ex11Button');
const ex11ResultOutput = document.getElementById('ex11Result'); 

ex11Button.addEventListener('click', ex11Convert);

function ex11Convert() {
    const ex11Value = ex11Input.value.trim();
    if (ex11Value === 'true' || ex11Value === 'false') ex11ResultOutput.innerText = `${ex11Value} is a Boolean`;
    else if (!Number.isNaN(Number(ex11Value))) ex11ResultOutput.innerText = `${ex11Value} is a Number`;
    else ex11ResultOutput.innerText = `${ex11Value} is just a string`;
}


// -------------------- Exercise 12 --------------------

const ex12ResultOutput = document.getElementById('ex12Result'); 

function ex12Loop() {
    let ex12Str = '';

    for(let i = 0; i <= 15; i++) {
        if (i % 2 === 0) ex12Str += `\"${i} is even\"   `;
        else ex12Str += `\"${i} is odd\"   `;
    }

    ex12ResultOutput.innerText = ex12Str;
}

ex12Loop();



// -------------------- Exercise 13 --------------------

const ex13ResultOutput = document.getElementById('ex13Result'); 

function sumOfSquares(n) {
    let sum = 0;
    let rest = n;

    while (rest > 9) {
        sum += Math.pow(rest % 10, 2);
        rest = Math.floor(rest / 10);
    }
    sum += Math.pow(rest, 2);

    return sum;
}

function ex13HappyNumbers() {
    let result = '';
    let counter = 1;
    let happyNumbers = 0;

    while (happyNumbers < 10) {
        let temp = counter;
        do {
            temp = sumOfSquares(temp);
        } while (temp > 9);

        if (temp === 1) {
            result += `${counter}  |  `;
            happyNumbers++;
        }

        counter++;
    }

    ex13ResultOutput.innerText = result;
}

ex13HappyNumbers();


// -------------------- Exercise 14 --------------------

const ex14ResultOutput = document.getElementById('ex14Result'); 

const workDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']; 
let ex14Result = '';

ex14Result = workDays.slice(0, 4) + ' and ' + workDays.slice(4) + ' are workdays';

ex14ResultOutput.innerText = ex14Result;


// -------------------- Exercise 15 --------------------
const ex15Input = document.getElementById('ex15Input');     
const ex15Button = document.getElementById('ex15Button');
const ex15ResultOutput = document.getElementById('ex15Result'); 

ex15Button.addEventListener('click', ex15Sort);

function ex15Sort() {
    let numbers = ex15Input.value.split(',');

    for(let i = 0; i < numbers.length; i++) {
        numbers[i] = Number(numbers[i]);
    }

    numbers.sort((a, b) => a - b);

    ex15ResultOutput.innerText = numbers;
}


// -------------------- Exercise 16 --------------------

const ex16Input = document.getElementById('ex16Input');     
const ex16Button = document.getElementById('ex16Button');
const ex16ResultOutput = document.getElementById('ex16Result'); 

ex16Button.addEventListener('click', ex16RemoveDuplicates);

function ex16RemoveDuplicates() {
    let oldArray = ex16Input.value.split(',');
    
    for(let i = 0; i < oldArray.length; i++) {
        oldArray[i] = oldArray[i].trim();
    }
    
    let newArray = [];

    for(let a of oldArray) {
        if(newArray.indexOf(a) === -1) newArray.push(a);
    }

    oldArray = newArray;

    ex16ResultOutput.innerText = oldArray;
}


// -------------------- Exercise 17 --------------------

const ex17Input = document.getElementById('ex17Input');     
const ex17Button = document.getElementById('ex17Button');
const ex17ResultOutput = document.getElementById('ex17Result'); 

ex17Button.addEventListener('click', ex17RemoveEmpty);

function ex17RemoveEmpty() {
    let oldArray = ex17Input.value.split(',');
    for(let i = 0; i < oldArray.length; i++) {
        oldArray[i] = oldArray[i].trim();
    }

    let newArray = [];

    for(let i = 0; i < oldArray.length; i++) {
        if(oldArray[i] === null || oldArray[i] == 0) continue;
        else newArray.push(oldArray[i]);
    }

    oldArray = newArray;

    ex17ResultOutput.innerText = oldArray;
}


// -------------------- Exercise 18 --------------------

const ex18YearInput = document.getElementById('ex18InputYear');
const ex18MonthInput = document.getElementById('ex18InputMonth');
const ex18Button = document.getElementById('ex18Button');
const ex18ResultOutput = document.getElementById('ex18Result'); 

ex18Button.addEventListener('click', ex18DaysInMonth);

function ex18IsLeapYear(year) {

    // A year is a leap year if it is divisible by 4, unless it is divisible by 100 but not by 400. 
    if (year % 4 === 0){
        if(year % 100 === 0 && year % 400 !== 0) return false;
        else return true;
    }
    else return false;
}

function ex18DaysInMonth() {
    let year = Number(ex18YearInput.value);
    let month = ex18MonthInput.value;
    let days;

    if (month === 'feb') {
        if (year === 1712) days = 30;
        else if(ex18IsLeapYear(year)) days =  29;
        else days = 28; 
    }
    else switch (month) {
        case 'jan': 
        case 'mar': 
        case 'may': 
        case 'jul': 
        case 'aug': 
        case 'oct': 
        case 'dec': days = 31; break;
        case 'apr':    
        case 'jun': 
        case 'sep': 
        case 'nov': days = 30; break;
    }

    ex18ResultOutput.innerText = days + ' days';
}


// -------------------- Exercise 19 --------------------

const ex19Input = document.getElementById('ex19Input');     
const ex19Button = document.getElementById('ex19Button');
const ex19ResultOutput = document.getElementById('ex19Result'); 

ex19Button.addEventListener('click', ex19Calculate);

function ex19Calculate() {
    let min = Number(ex19Input.value);

    ex19ResultOutput.innerText = `${Math.floor(min / 60)} hour(s) and ${min % 60} minute(s).`;
}


// -------------------- Exercise 20 --------------------

const ex20Input = document.getElementById('ex20Input');     
const ex20Button = document.getElementById('ex20Button');
const ex20ResultOutput = document.getElementById('ex20Result'); 

ex20Button.addEventListener('click', ex20Calculate);

function ex20Calculate() {
    let year = Number(ex20Input.value);

    ex20ResultOutput.innerText = `${year} was ${new Date().getFullYear() - year} years ago.`
}

