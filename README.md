# LEXICON - Fullstack React
## Javascript
### Assignment 8

#### Prerequisite
You add your code in the index.html-file and all the scripts in the site.js file.

Solve at least first 10 tasks in Html and Js and the rest you may solve only in js file and display output in console instead of html.

Array tasks can be solved next week.

Do not rush to solve all tasks today. You can solve them till the deadline.

#### Requirements
All scrips should be placed in the Javascript file.
- The html files should only contain html code.

#### Exercise 1 – JavaScript clock:
Add an element to your page that displays the current date, time and which day of the week it is, and write a JavaScript script that updates it every second so that it always shows the current time.  
*Example: Wednesday, 2024-03-13 13:29:17*

Required Features:
- A text display on the page, showing weekday, date, and time.
- The time should be updated in real time, to ensure it stays accurate.

#### Exercise 2 – Leap year detector:
Add an input field that lets you enter a year, and tie a script to it that checks whether the year entered is a leap year or not when triggered by a push of a button

Required Features:
- An input field that takes a year and calls the script when submitted. The page should not be refreshed.
- A script that checks whether the year entered is a leap year, and presents the result on the page, as a message.

#### Exercise 3 – Is 1st of January a Sunday:
Write a script that checks whether January 1st on any given year is a Sunday.  
*Example: Input: 2024  
Expected output: Not a Sunday (or that it instead is a Monday)*

Required Features:
- An input field that takes a year and calls the script when submitted. The page should not be refreshed.
- A script that checks whether January 1st falls on a Sunday that year.

#### Exercise 4 – Guessing game:
Add an input field that lets you enter a number between 1 and 10, and tie a script to it that checks whether the number entered is the same as a random number created by the script.

Required Features:
- An input field that takes a number and calls the script when submitted. The page should not be refreshed.
- A script that checks whether the number entered is the same as the random number, and presents the result on the page, as a message either “Good Job” if guess is correct or “Did not match” if the numbers are not the same.

#### Exercise 5 – How many days until Christmas:
Add an element to your page that displays the days until Christmas.

Required Features:
- A text display on the page, showing the number of days.
- If run between Christmas and New Year then it should report days until Christmas next year.

#### Exercise 6 – Reverse input:
Add an input field that lets you enter a string of numbers or characters, and tie a script to it that reverses the input and prints it on the page.  
*Example: Input: Abc123  
Expected output: 321cbA*

Required Features:
- An input field that takes a string of numbers or characters and calls the script when submitted. The page should not be refreshed.
- A script that reverses the input, and presents the result on the page, as a message.

#### Exercise 7 – Text manipulation – Splitting:
Add an input field that lets you enter a word, and tie a script to it that generates all combinations of that word.
The order of the character should be kept the same.  
*Example: Input: “Text”  
Expected output: T, Te, Tex, Text, e, ex, ext, x, xt, t*

Required Features:
- An input field that takes a word and calls the script when submitted. The page should not be refreshed.
- A script that manipulates the string and generates all combinations, and presents the result on the page, as a message.

#### Exercise 8 – Text manipulation – Sorting:
Add an input field that lets you enter a word, and tie a script to it that organizes the letters in alphabetical order and displays it.  
*Example: Input: “javascript”  
Expected output: aaijprstv*

Required Features:
- An input field that takes a word and calls the script when submitted. The page should not be refreshed.
- A script that manipulates the string and puts the letters in alphabetical order, and presents the result on the page, as a message.

#### Exercise 9 – Text manipulation – Looping:
Add an input field that lets you enter a sentence, and tie a script to it does two things; first converts the first letter of each word to upper case and second finds the word with the most letters.  
*Example: Input: “welcome to JavaScript”  
Expected output: Welcome To JavaScript – the longest word is JavaScript*

Required Features:
- An input field that takes a sentence and calls the script when submitted. The page should not be refreshed.
- A script that manipulates the string and presents the result on the page.
- Converts the first letter of each word.
- Finds the longest word

#### Exercise 10 – Is this a prime number:
Add an input field that lets you enter a number, and tie a script to it that checks whether the number entered is a prime or not.

Required Features:
- An input field that takes a number and calls the script when submitted. The page should not be refreshed.
- A script that checks whether the number entered is a prime, and presents the result on the page, as a message.

#### Exercise 11 – Type:
Create a method in JavaScript that accepts a single value as a parameter. The method should log the value type of the parameter to the console, no matter what it is (if a string is sent in, it should output “string” to the console, etc.).

Required Features:
- An input field that takes a value and calls the script when submitted. The page should not be refreshed.
- A script that checks the type of the value entered and presents the result on the page, as a message.

#### Exercise 12 – if statement inside a loop:
Add a script for loop that will iterate from 0-15 and for every iteration display if the number is even or odd.  
*Example Expected output: “0 is even” “1 is odd” “2 is even” “3 is odd”….*

Required Features:
- A script that will loop for 15 times and display if the current number is even or odd and presents the result on the page, as a message

#### Exercise 13 – Loop calculations:
Add a script to display the first 10 ["happy numbers"](
https://en.wikipedia.org/wiki/Happy_number).

Required Features:
- A script that will find the first 10 happy numbers and presents the result on the page, as a message

#### Exercise 14 – Array - Display:
Add a script to join the elements in an array into a string and display it.  
*Example: Input: var workDays = [“Monday”, “Tuesday”, “Wednesday”, “Thursday”, “Friday”];  
Expected output: Monday, Tuesday, Wednesday, Thursday and Friday are workdays.*

Required Features:
- A script that will take the variables in an array and join them into a string and presents the result on the page, as a message

#### Exercise 15 – Array – Sorting:
Add a script that will sort the numbers in an array according to size and display it.  
*Example: Input: var numbers = [4, 1, 9, -2, 5]  
Expected output: -2, 1, 4, 5, 9.*

Required Features:
- An input field that takes an array of numbers and calls the script when submitted. The page should not be refreshed.
- A script that will take the numbers in an array and sort the according to size and presents the result on the page, as a message

#### Exercise 16 – Array – Duplicates:
Add a script that will remove duplicates items in an array.  
*Example: Input: var numbers = [4, 17, -2, 4, 7, 4, 17, 42]  
Expected output: 4, 17, -2, 7, 42*

Required Features:
- An input field that takes an array of items and calls the script when submitted. The page should not be refreshed.
- A script that will find the duplicates of items in the array and presents the result on the page, as a message

#### Exercise 17 – Array – Manipulation:
Add a script that will remove the ‘null’ and ‘0’ values in an array.  
*Example: Input: var numbers = [3, 4, , 6, 0, 8]  
Expected output: 3, 4, 6, 8*

Required Features:
- An input field that takes an array of values and calls the script when submitted. The page should not be refreshed.
- A script that will find the ‘null’ and ‘0’ values in the array and presents the result on the page, as a message

#### Exercise 18 – Number of days in specific a month:
Add a script that will find and display the number of days in a given month.  
*Example: Input: February 2024  Expected output: 29 days  
Example: Input: February 1712  Expected output: 30 days

Required Features:
- Two input fields that takes a month and a year and then calls the script when submitted. The page should not be refreshed.
- A script that will find the month and year and gets the number of days in that month and presents the result on the page, as a message

#### Exercise 19 – Time Conversion:
Add a script that will convert the number of minutes into hours and minutes.  
*Example: Input: 92  
Expected output: 1 hour(s) and 32 minute(s).*

Required Features:
- An input field that take the number of minutes and calls the script when submitted. The page should not be refreshed.
- A script that will convert the number of minutes into the number of hours and minutes and presents the result on the page, as a message

#### Exercise 20 – Get the time difference:
Add a script that will calculate the time difference from a given year to now.  
*Example: Input: 1980  
Expected output: 1980 was 44 years ago. (assuming current year is 2024)*

Required Features:
- An input field that takes a year and calls the script when submitted. The page should not be refreshed.
- A script that will calculate the time from the input until today presents the result on the page, as a message
