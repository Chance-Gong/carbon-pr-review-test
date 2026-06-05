// File with intentional style inconsistencies

// ISSUE: Inconsistent indentation
function badIndentation() {
  const x = 1;
    const y = 2;
      const z = 3;
  return x + y + z;
}

// ISSUE: Inconsistent naming conventions
const user_name = 'John';
const UserAge = 25;
const USEREMAIL = 'john@example.com';
const user_Phone_Number = '555-1234';

// ISSUE: Inconsistent quotes
const str1 = "double quotes";
const str2 = 'single quotes';
const str3 = `template literal`;
const str4 = "mixed 'quotes' here";

// ISSUE: Inconsistent spacing
function badSpacing(a,b,c){
    const result=a+b+c;
    if(result>10){
        return result*2;
    }else{
        return result/2;
    }
}

// ISSUE: Missing semicolons (inconsistent)
function missingSemicolons() {
    const a = 1
    const b = 2;
    const c = 3
    return a + b + c;
}

// ISSUE: Inconsistent brace style
function braceStyle1() 
{
    return true;
}

function braceStyle2() {
    return true;
}

function braceStyle3() 
    {
    return true;
    }

// ISSUE: Inconsistent line breaks
function lineBreaks(param1, param2, param3, param4, param5) { return param1 + param2 + param3 + param4 + param5; }

function anotherFunction(
    param1,
    param2,
    param3
) {
    return param1 + 
           param2 + 
           param3;
}

// ISSUE: Inconsistent commenting style
// Single line comment
/* Multi-line comment */
/** JSDoc style comment */
//No space after slashes

// ISSUE: Mixed formatting
const obj1={name:'John',age:30,email:'john@example.com'};
const obj2 = {
  name: 'Jane',
  age: 25,
  email: 'jane@example.com'
};
const obj3 = { name: 'Bob', age: 35, email: 'bob@example.com' };

// ISSUE: Inconsistent array formatting
const arr1=[1,2,3,4,5];
const arr2 = [
    1,
    2,
    3,
    4,
    5
];
const arr3 = [ 1, 2, 3, 4, 5 ];

// ISSUE: Trailing whitespace and extra blank lines



function extraSpaces()    {
    return true;    
}


// ISSUE: Inconsistent function declarations
const func1 = function() { return 1; };
function func2() { return 2; }
const func3 = () => 3;
const func4 = () => { return 4; };

module.exports={badIndentation,badSpacing,missingSemicolons,braceStyle1,braceStyle2,braceStyle3,lineBreaks,anotherFunction,extraSpaces,func1,func2,func3,func4};

// Made with Bob
