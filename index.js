// // 1 
// // Write a program that allow to user enter number then printit

// const userInput = prompt("Please enter a number:");

// const number = parseFloat(userInput);

// if (!isNaN(number)) {
//     console.log(Output: ${number});
// } else {
//     console.log("Invalid input. Please enter a valid number.");
// }



// // -----------------------------------------------------------------------



// // 2
// // Write a program that take number from user then print yes if that number can divide by3 and 4 otherwise print no


// const userInput = prompt("Please enter a number:");

// const number = parseFloat(userInput);

// if (!isNaN(number)) {
//     if (number % 3 === 0 && number % 4 === 0) {
//         console.log("Yes");
//     } else {
//         console.log("No");
//     }
// } else {
//     console.log("Invalid input. Please enter a valid number.");
// }


// // -----------------------------------------------------------------------


// // 3

// const num1 = parseInt(prompt("Enter the first integer:"));
// const num2 = parseInt(prompt("Enter the second integer:"));

// if (!isNaN(num1) && !isNaN(num2)) {
//     if (num1 > num2) {
//         console.log(Output: ${num1});
//     } else {
//         console.log(Output: ${num2});
//     }
// } else {
//     console.log("Invalid input. Please enter valid integers.");
// }



// // -----------------------------------------------------------------------


// // 4

// const userInput = prompt("Please enter an integer:");

// const number = parseInt(userInput);

// if (!isNaN(number)) {
//     if (number < 0) {
//         console.log("negative");
//     } else {
//         console.log("positive");
//     }
// } else {
//     console.log("Invalid input. Please enter a valid integer.");
// }


// // -----------------------------------------------------------------------




// // 5
// const num1 = parseInt(prompt("Enter the first integer:"));
// const num2 = parseInt(prompt("Enter the second integer:"));
// const num3 = parseInt(prompt("Enter the third integer:"));

// if (!isNaN(num1) && !isNaN(num2) && !isNaN(num3)) {
//     let max = num1;
//     if (num2 > max) {
//         max = num2;
//     }
//     if (num3 > max) {
//         max = num3;
//     }

//     let min = num1;
//     if (num2 < min) {
//         min = num2;
//     }
//     if (num3 < min) {
//         min = num3;
//     }

//     console.log(Max element = ${max});
//     console.log(Min element = ${min});
// } else {
//     console.log("Invalid input. Please enter valid integers.");
// }


// // -----------------------------------------------------------------------


// // 6

// const userInput = prompt("Please enter an integer:");

// const number = parseInt(userInput);

// if (!isNaN(number)) {
//     if (number % 2 === 0) {
//         console.log(${number} is even.);
//     } else {
//         console.log(${number} is odd.);
//     }
// } else {
//     console.log("Invalid input. Please enter a valid integer.");
// }



// // -----------------------------------------------------------------------



// // 7

// const userInput = prompt("Please enter an integer:");

// const number = parseInt(userInput);

// if (!isNaN(number)) {
//     if (number % 2 === 0) {
//         console.log("even");
//     } else {
//         console.log("odd");
//     }
// } else {
//     console.log("Invalid input. Please enter a valid integer.");
// }




// // -----------------------------------------------------------------------


// // 8


// const userInput = prompt("Please enter a character:");

// const char = userInput.toLowerCase();

// if (char.length === 1 && /[a-z]/.test(char)) {
//     if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
//         console.log("vowel");
//     } else {
//         console.log("consonant");
//     }
// } else {
//     console.log("Invalid input. Please enter a single alphabet character.");
// }



// // -----------------------------------------------------------------------


// // 9

// const userInput = prompt("Please enter an integer:");

// const number = parseInt(userInput);

// if (!isNaN(number) && number > 0) {
//     const numbers = [];

//     for (let i = 1; i <= number; i++) {
//         numbers.push(i);
//     }

//     console.log(numbers.join(", "));
// } else {
//     console.log("Invalid input. Please enter a positive integer.");
// }



// // -----------------------------------------------------------------------


// // 10

// const userInput = prompt("Please enter an integer:");

// const number = parseInt(userInput);

// if (!isNaN(number)) {
//     for (let i = 1; i <= 12; i++) {
//         console.log(${number} x ${i} = ${number * i});
//     }
// } else {
//     console.log("Invalid input. Please enter a valid integer.");
// }




// // -----------------------------------------------------------------------

// // 11


// const userInput = prompt("Please enter a number:");

// const number = parseInt(userInput);

// if (!isNaN(number) && number > 0) {
//     const evenNumbers = [];

//     for (let i = 1; i <= number; i++) {
//         if (i % 2 === 0) {
//             evenNumbers.push(i); // Add the even number to the array
//         }
//     }

//     console.log(evenNumbers.join(" "));
// } else {
//     console.log("Invalid input. Please enter a positive number.");
// }




// // -----------------------------------------------------------------------

// // 12

// const base = parseInt(prompt("Enter the base number:"));
// const exponent = parseInt(prompt("Enter the exponent:"));

// if (!isNaN(base) && !isNaN(exponent)) {
//     let result = 1;

//     for (let i = 1; i <= exponent; i++) {
//         result *= base; 
//     }

//     console.log(Output: ${result});
// } else {
//     console.log("Invalid input. Please enter valid integers.");
// }



// // -----------------------------------------------------------------------


// // 12-2



// const subject1 = parseFloat(prompt("Enter marks of subject 1:"));
// const subject2 = parseFloat(prompt("Enter marks of subject 2:"));
// const subject3 = parseFloat(prompt("Enter marks of subject 3:"));
// const subject4 = parseFloat(prompt("Enter marks of subject 4:"));
// const subject5 = parseFloat(prompt("Enter marks of subject 5:"));

// if (!isNaN(subject1) && !isNaN(subject2) && !isNaN(subject3) && !isNaN(subject4) && !isNaN(subject5)) {
//     const totalMarks = subject1 + subject2 + subject3 + subject4 + subject5;

//     const averageMarks = totalMarks / 5;

//     const percentage = (totalMarks / 500) * 100;

//     console.log(Total marks = ${totalMarks});
//     console.log(Average marks = ${averageMarks});
//     console.log(Percentage = ${percentage});
// } else {
//     console.log("Invalid input. Please enter valid marks for all subjects.");
// }



// // -----------------------------------------------------------------------

// // 13


// const monthNumber = parseInt(prompt("Enter month number (1-12):"));

// if (monthNumber >= 1 && monthNumber <= 12) {
//     let daysInMonth;

//     switch (monthNumber) {
//         case 1: 
//         case 3: 
//         case 5: 
//         case 7: 
//         case 8: 
//         case 10: 
//         case 12: 
//             daysInMonth = 31;
//             break;
//         case 4: 
//         case 6: 
//         case 9: 
//         case 11: 
//             daysInMonth = 30;
//             break;
//         case 2: 
//             daysInMonth = 28; 
//             break;
//     }

//     console.log(Days in Month: ${daysInMonth});
// } else {
//     console.log("Invalid input. Please enter a number between 1 and 12.");
// }



// // -----------------------------------------------------------------------


// // 14


// const physics = parseFloat(prompt("Enter marks of Physics:"));
// const chemistry = parseFloat(prompt("Enter marks of Chemistry:"));
// const biology = parseFloat(prompt("Enter marks of Biology:"));
// const mathematics = parseFloat(prompt("Enter marks of Mathematics:"));
// const computer = parseFloat(prompt("Enter marks of Computer:"));

// if (!isNaN(physics) && !isNaN(chemistry) && !isNaN(biology) && !isNaN(mathematics) && !isNaN(computer)) {
//     const totalMarks = physics + chemistry + biology + mathematics + computer;

//     const percentage = (totalMarks / 500) * 100;

//     let grade;
//     if (percentage >= 90) {
//         grade = "Grade A";
//     } else if (percentage >= 80) {
//         grade = "Grade B";
//     } else if (percentage >= 70) {
//         grade = "Grade C";
//     } else if (percentage >= 60) {
//         grade = "Grade D";
//     } else if (percentage >= 40) {
//         grade = "Grade E";
//     } else {
//         grade = "Grade F";
//     }

//     console.log(Percentage = ${percentage}%);
//     console.log(Grade = ${grade});
// } else {
//     console.log("Invalid input. Please enter valid marks for all subjects.");
// }





// // -----------------------------------------------------------------------

// // 15 
// // Write a program to print total number of days in month


// function isLeapYear(year) {
//   if (year % 4 === 0) {
//       if (year % 100 === 0) {
//           if (year % 400 === 0) {
//               return true;
//           } else {
//               return false;
//           }
//       } else {
//           return true;
//       }
//   } else {
//       return false;
//   }
// }

// function getDaysInMonth(month, year) {
//   if (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12) {
//       return 31;
//   }
//   else if (month === 4 || month === 6 || month === 9 || month === 11) {
//       return 30;
//   }
//   else if (month === 2) {
//       if (isLeapYear(year)) {
//           return 29;
//       } else {
//           return 28;
//       }
//   } else {
//       return "Invalid month";
//   }
// }

// const month = 3;
// const year = 2025

// const daysInMonth = getDaysInMonth(month, year);
// console.log(The number of days in month ${month} of year ${year} is: ${daysInMonth});




// // -----------------------------------------------------------------------


// // 16
// // Write a program to check whether an alphabet is vowel or consonant 


// function checkVowelOrConsonant(char) {
//   char = char.toLowerCase();

//   if (char.length !== 1 || !/[a-z]/.test(char)) {
//       return "Invalid input. Please enter a single alphabet character.";
//   }

//   if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
//       return ${char} is a vowel.;
//   } else {
//       return ${char} is a consonant.;
//   }
// }

// const inputChar = 'L'; 
// const result = checkVowelOrConsonant(inputChar);
// console.log(result);





// // -----------------------------------------------------------------------


// // 17
// // Write a program to find maximum between two numbers 

// function findMaximum(num1, num2) {
//   if (num1 > num2) {
//       return ${num1} is greater than ${num2}.;
//   } else if (num2 > num1) {
//       return ${num2} is greater than ${num1}.;
//   } else {
//       return "Both numbers are equal.";
//   }
// }

// const number1 = 10; 
// const number2 = 5;

// const result = findMaximum(number1, number2);
// console.log(result);






// // -----------------------------------------------------------------------


// // 18
// // Write a program to check whether a number is even or odd 


// function checkEvenOrOdd(number) {
//   if (number % 2 === 0) {
//       return ${number} is even.;
//   } else {
//       return ${number} is odd.;
//   }
// }

// const num = 5
// const result = checkEvenOrOdd(num);
// console.log(result);




// // -----------------------------------------------------------------------

// // 19
// // Write a program to check whether a number is positive or negative or zero

// function checkNumberType(number) {
//   if (number > 0) {
//       return ${number} is positive.;
//   } else if (number < 0) {
//       return ${number} is negative.;
//   } else {
//       return ${number} is zero.;
//   }
// }

// const num = -5;
// const result = checkNumberType(num);
// console.log(result);





// // -----------------------------------------------------------------------


// // 20
// // Write a program to create Simple Calculator 


// function simpleCalculator(num1, num2, operation) {
//   let result;

//   if (operation === '+') {
//       result = num1 + num2;
//   } else if (operation === '-') {
//       result = num1 - num2;
//   } else if (operation === '*') {
//       result = num1 * num2;
//   } else if (operation === '/') {
//       if (num2 !== 0) {
//           result = num1 / num2;
//       } else {
//           return "Error: Division by zero is not allowed.";
//       }
//   } else {
//       return "Error: Invalid operation.";
//   }

//   return Result: ${num1} ${operation} ${num2} = ${result};
// }

// const num1 = 10;
// const num2 = 5;  
// const operation = '+'; 

// const result = simpleCalculator(num1, num2, operation);
// console.log(result);