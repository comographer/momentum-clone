const hello = (name) => console.log(`Hello my name is ${name}`);

hello("como");

/* 2.1 Basic Data Types
Integer: basic numbers; 1 ,13, 10000;
Float: numbers with decimal point; 1.523, 0.232;
String: texts within quotation marks(""); "hello world"
*/

/* 2.2 Variables
console.log(argument) is the basic print function for console;
JS reads your code from top to bottom;
Variable in programming is used to save or hold a value;
When you need to repeatedly use same value or need to change
certain value that is used in other parts of your code,
it is better to save that value as a variable;
In order to create a variable, code as below:
const a = 5;
Now whenever you use your variable (a) in your code, it will bring the value (5);
If your variable name is longer than a single word,
convention is to use camelCaseSystem in JS;
*/

/* 2.3 const and let
There are two ways of creating variables;
const and let;
const creates a fixed variable that cannot be changed;
let creates a changeable variable;
If you need to update your variable in the future, you should use let and otherwise const;
By default, the convention is to use const unless you need to use let;
In the past, JS only used var to create variables;
*/

/* 2.4 Booleans
Booleans are basically true or false;
It can used in various situations where you need info between two options;
Is the user logged in? true or false;
Is the video playing? true or false;
etc;
There are also data types in JS that shows there are no data;
One of them is null;
null means there is nothing in the variable and it is different from false;
Another one like null is undefined;
null = nothing, undefined = there is something on the memory but not defined;
*/

/* 2.5 Arrays
Organizing data is very important in programming;
The most basic data structure is saving data in an array;
By using array syntax [], we can save data as list as below;
const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
To find certain element in an array with index, arrayName[index];
Keep in mind that array index starts from 0 in JS;
To add one more element to the array, arrayName.push(newElement);
*/

/* 2.6 Objects
Object is the most common way to organize data in programming;
Within an object, we can store many properties and values;
const objectName = {propertyNameOne: valueOne, propertyNameTwo: valueTwo};
To call value of a property: objectName.propertyName;
To change value of a property: objectName.propertyName = newValue;
To add new property and value: objectName.newProperty = newValue;
*/

/* 2.7 Functions part One
Function is a piece of code that you can execute repeatedly;
To minimize duplication, programmers create and use function;
To create a function: function functionName(arguments) {functionCode};
In ES6: const functionName = (arguments) => {functionCode};
To execute the function: functionName();
To execute a function with additional info, we give arguments to the function;
Arguments are given inside () part of the function;
*/
