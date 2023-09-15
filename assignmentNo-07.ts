            


/* Q2...Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”*/


const userName:string= "Bahadar";
console.log( "Hello",userName,"Would you like to learn some Python today?");
                                

/*Q3...Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.*/

var personName:string= "Bahadar"
// name in lowercase

console.log("person's name in lowercase :",personName.toLowerCase());

// name in lowercase

console.log("person's name in uppercase :",personName.toUpperCase());

                                        

/*Q4...Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:

Albert Einstein once said, “A person who never made a mistake never tried anything new.”*/



const quotes:string='“A person who never made a mistake never tried anything new.”';

console.log("Albert Einstein once said, ",quotes);

                                    
/*Q5...Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:

Albert Einstein once said, “A person who never made a mistake never tried anything new.”*/

const famousPerson:string= "Albert Einstein";
const quote:string='“A person who never made a mistake never tried anything new.”'
console.log(famousPerson,"once said, ",quote);


 
                                
/*Q6...Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.*/

const personsName:string= "\t Umar Hayyat \n";
console.log("Name with Whitespace:", personsName);
const result= personsName.trim()
console.log("Name without Whitespace:", result);


                                    
/*Q7...Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.*/

console.log("Addition:",6+2);
console.log("Substration:",10-2);
console.log("Multiplication:",4*2);
console.log("Division:",16/2);

                                        
/*Q8...You should create four lines that look like this:

console.log(5 + 3) */

console.log( 4+4)
console.log(5 + 3);
console.log(10-2 )



                    

/*Q9...Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.*/

const favNumber:number= 7; //in this variable we store favourite number
const message:string= `My favorite number is ${favNumber}.`;
console.log(message);

                                        
                                        
/*Q11...Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.*/

let friendsName:string[]=["umer","Ali", "Hussain","Essa","Ibrahim", "Tayyab ","Ahamd"]

for (let index = 0; index < friendsName.length; index++) {
    console.log(friendsName[index]);
    
}

                                        
/*Q11...Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.*/

let friendName:string[]=["umer","Ali", "Hussain","Essa","Ibrahim", "Tayyab ","Ahamd"]

for (let index = 0; index < friendName.length; index++) {
    console.log(friendName[index]);
    
}

/*Q12...Greetings: Start with the array you used in Exercise --11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.*/

 
let friendsName1: string[] = ["umer", "Ali", "Bahadar", "Shahid", "Nasir",]

for (let index = 0; index < friendsName1.length; index++) {
    console.log("Hello, " + friendsName1[index] + "! I hope you are having a fantastic day.");
}

                                    

/*Q13...Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”*/

let ownArray:string[]= ["motercyle","car ","bicycle","heavy bike","bus","train"];
let properties:string[]=[" is old but fantastic."," is more comfortable."," I have to buy this because petrole is so expensive now."," is to much expensive"," is use for public transport."," is also use for public transport."]
for (let index = 0; index < ownArray.length; index++) {
    console.log(`I would like to own a ${ownArray[index]} because it${properties[index]}`);
}



                                       

/*Q14...Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.*/

let guest:string[]=["Bahadar","Shahid","Nasir"]
for (let index = 0; index < guest.length; index++) {
    console.log(`I would like to invite ${guest[index]} at dinner`);    
}



                                    

/*Q15...Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

• Start with your program from Exercise --14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

• Print a second set of invitation messages, one for each person who is still in your list. */


//Missing Person
let misGuest:string= "Nasir";
console.log(`Guest who have not come ${misGuest}`);
// Replace missing person with new person

guest.splice(2,1,"Asif");
console.log(guest);
// print secound set of invitiion message
guest.forEach((guest ) => {
    console.log(`I would like to invite ${guest} in dinner`);    
    
});

                                        

/*Q16...More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise --15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list. */


// print of exicting guest
guest.forEach((guest ) => {
    console.log(`I would like to inform ${guest} that we found big table for dinner`);    
    
});// • Add one new guest to the beginning of your array.
guest.unshift("Suleman");
console.log(guest);
// Add one new guest to the middle of your array
guest.splice(2,0,"Farhan")
console.log(guest);
// Use append() to add one new guest to the end of your list
guest.push("Waqas")

// Print a new set of invitation messages, one for each person in your list.
guest.forEach((guest ) => {
    console.log(`Dear ${guest}, you are invited in dinner.`);
 });


                                
/*Q17...Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
• Start with your program from Exercise --16. Add a new line that prints a message saying that you can invite only two people for dinner.

• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

• Print a message to each of the two people still on your list, letting them know they’re still invited.

• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.*/

// shrinking list
guest.forEach((guest ) => {
    console.log(`Dear ${guest}, I have space for only two guests`);
 });


//  Remove guests from your list 
while (guest.length >2) {
    let removeGuest= guest.pop()
    console.log(`sorry ${removeGuest} you are not invited on dinner`);
    
}

// Print a message to each of the two people still on your list
guest.forEach((guest ) => {
    console.log(`Dear ${guest}, you're still invited`);
 });


//  Remove the last two names from your list
guest.pop();
guest.pop();
console.log(`empty list at the end of your program: ${guest}`);


                            

//Q18... Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.

var places:string[]= ["Makkah", "Madina ","Europe","Turkey","Afghanistan"];
// • Print your array in its original order.
console.log(places);
// • Print your array in alphabetical order without modifying the actual list.
let modifyArray=[...places].sort();
console.log("sorted arrray",modifyArray);
// • Show that your array is still in its original order by printing it.
 console.log("original array",places);
//  • Print your array in reverse alphabetical order without changing the order of the original list.
console.log("array in reverse alphabetical order without changing the order of the original list",[...places].reverse());

// • Show that your array is still in its original order by printing it again.
console.log("Show that your array is still in its original order by printing it again",places);
// • Reverse the order of your list again. Print the list to show it’s back to its original order.

console.log("reverse the order of your list again",places.reverse());
console.log("Print the list to show it's back to its original order",places.reverse());

// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log("stored in alphabetical order",places.sort());

// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log("stored in reverse alphabetical order",places.reverse());

                                            
                                        

//Q19... Dinner Guests: Working with one of the programs from Exercise --s 14 through 18, print a message indicating the number of people you are inviting to dinner.
console.log("people you are inviting to dinner",guest.length);
  

                                        
//Q20... Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.

let countryList:string[]=["Pakistan","UAE","Bangladash","Seria","Iran","Turkey","Sudia Arabia"];
for (let index = 0; index < countryList.length; index++) {
    
    console.log(countryList[index]);
    
}

                                    
//Q21...They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

const itemObject={
    Name:"Mian Haroon",
    Age:19,
    isStudent:true,
    Hobbies: ["Codding","Codding"]
    
};
console.log(itemObject);
 
 
                                    
//Q22... Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.



// Correct the error by accessing a valid index
const validIndex = 2; // Change this to a valid index within the array length
const validElement = myArray[validIndex];
console.log(`Element at index ${validIndex}: ${validElement}`);

                                    
/*Q23...Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:*/



                    
/*Q24...More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:*/


                                
/*Q25...Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'. */

var alien_color:string[]=["green", "yellow", "red"];

// • Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.


// • Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)






                            
//Q26... Alien Colors #2: Choose a color for an alien as you did in Exercise --25, and write an if-else chain.
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.


// • Write one version of this program that runs the if block and another that runs the else block.




                                
//Q27... Alien Colors #3: Turn your if-else chain from Exercise --5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.



                    
//Q28... Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
let userAge:number=55;
if (userAge<2) {
    console.log(" the person is a baby."); 
    
} else if(userAge>=2 && userAge<4) {
    console.log(" the person is a toddler.");   
    
}else if(userAge>=4 && userAge<13) {
    console.log(" the person is a kid."); 
    
}else if(userAge>=13 && userAge<20) {
    console.log(" the person is a Teenager.");  
    
} else if(userAge>=20 && userAge<65) {
    console.log(" the person is a adult.");  
}
else if(userAge>=65) {
    console.log(" the person is an elder.");  
    
}



//Q29... Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.

// Make an array of your three favorite fruits
const favorite_fruits: string[] = ['Mango', 'apple', 'Banana'];

// Write five independent if statements to check for certain fruits
if (favorite_fruits.includes('Mango')) {
  console.log("You really like Mangos!");
}

if (favorite_fruits.includes('apple')) {
  console.log("You're a fan of apples!");
}

if (favorite_fruits.includes('Banana')) {
  console.log("Bananas are one of your favorites!");
}

if (favorite_fruits.includes('orange')) {
  console.log("You enjoy oranges!");
} else {
  console.log("Oranges are not in your favorites.");
}

if (favorite_fruits.includes('grape')) {
  console.log("Grapes are among your favorite fruits!");
} else {
  console.log("Grapes didn't make it to your top three.");
}



//Q30... Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
let usernames: string[] = ['admin', 'Bahadar', 'Nasir', 'Shahid', 'Asif'];

// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?

for (const username of usernames) {
    if (username === 'admin') {
        console.log("Hello admin, would you like to see a status report?");
    } else {
        console.log(`Hello ${username}, thank you for logging in again.`);
    }
}



