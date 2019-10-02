/*global console*/
/* eslint no-console: "off" */
console.log('Hello World!!!');


//var firstName = 'John';
//console.log(firstName);

//var lastName = 'Smith';
//var age = 28;

//var fullAge = true;
//console.log(fullAge);
/*
var job;
console.log(job);
job = 'Teacher';
console.log(job);
//var _3years = 3;
//var $4years = 4;
//var johnMark = 'John and Mark';
var firstName = 'John';
var age = 28;
console.log(firstName + ' ' + age); 
var now = 2018;
var yearJohn = 1989;
var fullAge = 18;
//Multiple operators
var isFullAge = now - yearJohn >= fullAge;
console.log(isFullAge);
//Grouping
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);
//Multiple assignments
var x, y;
x = y = (3 + 5) * 4 - 6; // 8 + 4 - 6// 32 - 6 // 26
//Right to left. It starts with solving the right equation then to y then to x.
console.log(x, y); //assign two results at the same time 
// 2 + 4 + 5. Left to right
// 
// More operators
x = x * 2;
x *= 2; 
//They are the same.
console.log(x);
x += 10;
console.log(x);
//Increment by 1
x++;
console.log(x);
x--;
console.log(x);
//Coding challenge
/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true"). 
GOOD LUCK 😀
*/
/*
var markMassKg = 50;
var markHeightM = 180;
var johnMassKg = 60;
var johnHeightM = 200;
var markBMI = markMassKg / (markHeightM)^2;
var johnBMI = johnMassKg / (johnHeightM)^2;
var isBMIHigh = markBMI > johnBMI;
console.log('Is Mark\'s BMI higher than John\'s?' + ' ' + isBMIHigh);
//if else statement
var firstName = 'John';
var civilStatus = 'single';
/*if (civilStatus == 'married') {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully marry soon :)');
}
*/
/*
var isMarried = false;
if (isMarried) {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully marry soon :)');
}
//Boolean logic
//AND &&, OR ||, NOT ! = inverts true/false value.
if (age < 13) {
    console.log(firstName + ' is a boy.'); 
} else if (age >= 13 && age < 20){ //between 13 and 30 = age >= 13 AND age < 20.
    console.log(firstName + ' is a teenager.');
} else {
    console.log(firstName + ' is a man.');
}
//Ternary operator and switch statements
//if          true
 age >= 18 ? console.log(firstName + ' drinks beer.')
//else
: console.log(firstName + ' drinks juice.');
var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);
/*
if(age >= 18) {
   var drink = 'beer';
} else {
   var drink = 'juice';
}
*/

//switch statement
/*
var job = 'teacher';
switch (job) {
    case 'teacher':
    case 'instructor':
            console.log(firstName + ' teaches kids how to code.');
            break;
    case 'driver':
            console.log(firstName + ' drives an uber in Lisbon.');
            break;
    case 'designer':
            console.log(firstName + ' designs beautiful websites.');
            break;
    default:
            console.log(firstName + ' does something else.');
}
switch (true) {
    case age < 13:
        console.log(firstName + ' is a boy.');
        break;
    case age >= 13 && age < 20:
        console.log(firstName + ' is a teenager.');
        break;
    case age >= 20 && age < 30:
        console.log(firstName + ' is a young man.');
        break;
}
//Truthy and Falsy values and equality operators
// falsy values: undefined, null, 0, '', Not a number
// truthy values: NOT falsy values
var height; 
height = 23;
//height = 0; //not been defined
if (height || height == 0) {
    console.log('Variable is defined');
} else {
    console.log('Variable has not been defined');
}
if (height == '23') {
    console.log('The == operator does type coercion')
}
//meaning can convert number to string
/*****************************
* CODING CHALLENGE 2
*/

/*
John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.
1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)
4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. HINT: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
5. Like before, change the scores to generate different winners, keeping in mind there might be draws.
GOOD LUCK 😀
*/
/*
var jTeam = (89 + 120 + 103)/3;
var mTeam = (116 + 94 + 123)/3;
var mrTeam = (97 + 134 + 105)/3;
if (jTeam > mTeam && jTeam > mrTeam) {
    console.log("John's team wins.")
} else if (mTeam > jTeam && mTeam > mrTeam) {
    console.log("Mike's team wins.")
} else {
    console.log("Mary's team wins.")
}
//Functions
//like containers and can pass code
function calculateAge(birthYear) {
    return 2019 - birthYear;
}
/*var ageJohn = calculateAge(1998);
console.log(ageJohn);
*/
/*
var ageJohn = calculateAge(1998);
var ageMike = calculateAge(1990);
var ageMary = calculateAge(1969);
console.log(ageJohn, ageMary, ageMike);
/*function yearsUntilRetirement(year, firstName) {
    var age = calculateAge(year);
    var retirement = 65 - age;
    console.log(firstName + ' retires in ' + retirement + ' years.');
}*/
/*
yearsUntilRetirement(1990, 'John');
function yearsUntilRetirement(year, firstName) {
    var age = calculateAge(year);
    var retirement = 65 - age;
    
    if (retirement > 0) {
        console.log(firstName + ' retires in ' + retirement + ' years.');
    } else {
        console.log(firstName + ' is already retired.');
    }
}
//function statements and expressions
//function declaration
//function whatDoYouDo(job, firstName) {}
//function expression
var whatDoYouDo = function(job, firstName) {
    switch(job) {
        case 'teacher' :
            return firstName + ' teaches kids how to code.';
            //dont need break because it immediately quits once condition is met
        case 'driver' :
            return firstName + ' drives a cab in Lisbon.';
        case 'designer' :
            return firstName + ' designs beautiful websites.';
        default:
            return firstName + ' does something else.';
    }
}
console.log(whatDoYouDo('teacher', 'John'));
console.log(whatDoYouDo('designer', 'Jane'));
console.log(whatDoYouDo('retired', 'Mark'));
//produce result is expression & function but function declarations do not
//statements perform actions but dont produce immediate results: if (true) { console.log(23);}
//Arrays
var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990, 1969, 1948); 
/*
console.log(names[0]);
console.log(names.length);
names[1] = 'Ben';
console.log(names);
names[5] = 'Mary';
console.log(names);
*/

//Mutate array data
/*
names[1] = 'Ben';
names[names.length] = 'Mary'; //because names.length is 3. so index 3 ada nama mary.
console.log(names);
console.log(years);
//Different data types
var john = ['John', 'Smith', 1990, 'teacher', false];
john.push('blue'); //add this at the end of the array
john.unshift('Mr.'); //add this at the beginning of the array
console.log(john);
john.pop(); //removes element at the end
john.pop();
john.shift(); //removes element at the beginning
console.log(john);
console.log(john.indexOf(1990)); //returns position in the array. if not present it will return -1
var isDesigner = john.indexOf('designer') === -1 ? 'John is not a designer' : 'John is a designer';
console.log(isDesigner);
/*****************************
* CODING CHALLENGE 3
*/

/*
John and his family went on a holiday and went to 3 different restaurants. The bills were $124, $48 and $268.
To tip the waiter a fair amount, John created a simple tip calculator (as a function). He likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.
In the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip).
(NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)
GOOD LUCK 😀
*/

/*
var tipCalc = function(bill) {
        if ( bill < 50 ) {
            return bill * 0.2;
            //dont need break because it immediately quits once condition is met
        } else if ( bill > 50 && bill < 200 ) {
            return bill * 0.15;
        } else {
            return bill * 0.1;
        }
}
var bills = [124, 48, 268];
var tip = [tipCalc(bills[0]), tipCalc(bills[1]), tipCalc(bills[2])];
function finalBill (tip, x) {
    return tip + bills[x] 
}
var final = [finalBill(tip[0],0), finalBill(tip[1],1), finalBill(tip[2],2)];
console.log(tip);
console.log(final);
*/

//Objects and properties

//object literal
/*
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher', 
    isMarried: false
};
//retrieve data from object
console.log(john.firstName);
console.log(john['lastName']);
var x = 'birthYear';
console.log(john[x]);
//mutate data in object
john.job = 'designer';
john['isMarried'] = true;
console.log(john);
//initialising/new object
var jane = new Object();
jane.name = 'Jane';
jane.age = 28;
jane.birthYear = 1990;
jane['lastName'] = 'Smith';
console.log(jane);
*/

/*******************************************************************************************
IMPORTANT! IMPORTANT!**********************************************************************/

//objects and methods =(attach function to objects)

/*
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher', 
    isMarried: false,
    //function expression. this is a method of john
    /*calcAge: function(birthYear) {
        return 2019 - birthYear;
    }
    calcAge: function() {
        return 2019 - this.birthYear;
    }
    //pun boleh buat
    calcAge: function() {
        this.age = 2019 - this.birthYear;
    }
    
};
//console.log(john.calcAge(john.birthYear));
//john.age = john.calcAge();
john.calcAge();
console.log(john);
/*****************************
* CODING CHALLENGE 4
*/

/*
Let's remember the first coding challenge where Mark and John compared their BMIs. Let's now implement the same functionality with objects and methods.
1. For each of them, create an object with properties for their full name, mass, and height
2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method.
3. In the end, log to the console who has the highest BMI, together with the full name and the respective BMI. Don't forget they might have the same BMI.
Remember: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).
GOOD LUCK 😀
*/
/*
var john = {
    fullname : 'John Ali',
    mass : 90,
    height : 2.50,
    calcBMI : function () {
    this.BMI = this.mass / (this.height)^2;
    return this.BMI;
    }
};
var mark = {
    fullname : 'Mark Boo',
    mass : 80,
    height : 2,
    calcBMI : function () {
    this.BMI = this.mass / (this.height)^2;
    return this.BMI;
    }
};
    if (john.calcBMI() > mark.calcBMI()) {
        console.log(john.fullName + ' has highest BMI at ' + john.BMI);
    } else if (mark.calcBMI() > john.calcBMI()) {
        console.log(mark.fullName + ' has highest BMI at ' + mark.BMI); 
    } else {
        console.log(mark.fullname + ' and ' + john.fullname + ' has the same BMI.');
    }
*/
//Loops and iteration
/*
for(var i = 0; i < 10; i++)
console.log(i);
 */
/*
var john1 = ['John', 'Smith', 1000, 'designer', false];
//for(var i = 0; i < john.length; i++)
  //  console.log(john1[i]);
var i = 0;
while(i < john1.length) {
    console.log(john1[i]);
    i++;
}
//continue and break statements
for(var i = 0; i < john1.length; i++) {
    if(typeof   john1[i] !== 'string') 
        break; //continue;
    console.log(john1[i]);
     //if this is diff from a string x print
}
//break = dia encounter integer then dia stop
for(var i = john1.length; i > -1; i--) {
    console.log(john1[i]);
}*/

/*****************************
* CODING CHALLENGE 5
*/

/*
Remember the tip calculator challenge? Let's create a more advanced version using everything we learned!
This time, John and his family went to 5 different restaurants. The bills were $124, $48, $268, $180 and $42.
John likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.
Implement a tip calculator using objects and loops:
1. Create an object with an array for the bill values
2. Add a method to calculate the tip
3. This method should include a loop to iterate over all the paid bills and do the tip calculations
4. As an output, create 1) a new array containing all tips, and 2) an array containing final paid amounts (bill + tip). HINT: Start with two empty arrays [] as properties and then fill them up in the loop.
*/

var john = {
    bill : [124, 48, 268, 42],
    calcTip: function () {
    this.finalBill = []; //tak perlu letak var
    this.tipOnly = [];
    var tip = 0;
    var final = 0;
    for(var i = 0; i < this.bill.length; i++) {
    if (this.bill < 50) {
        tip = this.bill[i] * 0.2;
        this.tipOnly[i] = tip;
        final = tip + this.bill[i];
        this.finalBill[i] = final;
        console.log("John Tip: " + tip + "\nFinal bill: " + final);

    } else if (this.bill > 50 || this.bill < 200) {
        tip = this.bill[i] * 0.15;
        this.tipOnly[i] = tip;
        final = tip + this.bill[i];
        this.finalBill[i] = final;
        console.log("John Tip: " + tip + "\nFinal bill: " + final);

    } else {
        tip = this.bill[i] * 0.1;
        this.tipOnly[i] = tip;
        final = tip + this.bill[i];
        this.finalBill[i] = final;
        console.log("John Tip: " + tip + "\nFinal bill: " + final);
            }

        }

    }

};


/*
EXTRA AFTER FINISHING: Mark's family also went on a holiday, going to 4 different restaurants. The bills were $77, $375, $110, and $45.
Mark likes to tip 20% of the bill when the bill is less than $100, 10% when the bill is between $100 and $300, and 25% if the bill is more than $300 (different than John).
5. Implement the same functionality as before, this time using Mark's tipping rules
6. Create a function (not a method) to calculate the average of a given array of tips. HINT: Loop over the array, and in each iteration store the current sum in a variable (starting from 0). After you have the sum of the array, divide it by the number of elements in it (that's how you calculate the average)
7. Calculate the average tip for each family
8. Log to the console which family paid the highest tips on average
GOOD LUCK 😀
*/
var mark = {
    bill : [77, 375, 110, 45],
    calcTip: function () {
    this.finalBill = [];
    this.tipOnly = [];
    var tip = 0;
    var final = 0;
    for(var i = 0; i < this.bill.length; i++) {
    if (this.bill < 100) {
        tip = this.bill[i] * 0.2;
        this.tipOnly[i] = tip;
        final = tip + this.bill[i];
        this.finalBill[i] = final;
        console.log("Mark Tip: " + tip + "\nFinal bill: " + final);

    } else if (this.bill > 100 || this.bill < 300) {
        tip = this.bill[i] * 0.1;
        this.tipOnly[i] = tip;
        final = tip + this.bill[i];
        this.finalBill[i] = final;
        console.log("Mark Tip: " + tip + "\nFinal bill: " + final);

    } else {
        tip = this.bill[i] * 0.25;
        this.tipOnly[i] = tip;
        final = tip + this.bill[i];
        this.finalBill[i] = final;
        console.log("Mark Tip: " + tip + "\nFinal bill: " + final);
            }

        }

    }

};



/*function tipAvg (array) {
    var sum = 0;
    var pointer = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] < pointer) {
            pointer += array[i];
        } else if (array[i] > pointer) {
            sum += array[i];
        }
    }
    
    return sum / array.length; //INGAT UNTUK LETAK RETURN!!
} */

function calcAverage(tips) {
    var sum = 0;
    for (var i = 0; i < tips.length; i++) {
        sum = sum + tips[i];
    }
    return sum / tips.length;
}

john.calcTip();
mark.calcTip();

var markAvgTip = calcAverage(mark.tipOnly);
var johnAvgTip = calcAverage(john.tipOnly);

if (markAvgTip > johnAvgTip) {
        console.log('MARK\'S FAMILY TIP is higher than JOHN\'S');
} else {
        console.log('JOHN\'S FAMILY TIP is higher than JOHN\'S');
}