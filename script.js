document.write("JavaScript works!");
console.log("Hello console!");
console.warn("This is only a test!");

let myName="Jakob";
let workFromHome="true";
let side="15";
let radius="10";

console.log("my name is " + myName);
console.log("I work from home: " + workFromHome);
console.log("The length of each side of the square is " + side);
console.log("The radius os the circle is " + radius);

let squareArea = 15 * 15;
let squarePerimeter = 4 * 15;
let circleArea = Math.PI * 10 * 10;
let circlePerimeter = 2 * Math.PI * radius;

console.log("The square area is " + squareArea + " and the perimeter is " + squarePerimeter);
console.log("The circle area is " + circleArea + " and the perimeter is " + circlePerimeter);

let travel="The travel options are: ";
let travelOptions = ["foot", "bike", "car", "airplane"];
travelOptions[0]= "foot";
travelOptions[1]= "bike";
travelOptions[2]= "car";
travelOptions[3]= "airplane";

console.log(travel)
console.log(`1) ${travelOptions[0]}`)
console.log(`2) ${travelOptions[1]}`)
console.log(`3) ${travelOptions[2]}`)
console.log(`4) ${travelOptions[3]}`)

let travelType= prompt("How would you like to travel");

console.log("Travel Type:" +  travelType)

let distance = 100;
let time = 0;
let cost = 0;

if (travelType === "foot"){
    console.log("Walking is free! Speed is 3 mph.");
    cost = 0;
    time = distance / 3;

} else if (travelType === "bike"){
    let rentBike = prompt("Do you need to rent the bike? (yes or no)");
    if (rentBike === "yes") {
        console.log("Bike rental is $45! Speed is 10mph");
        cost = 45;
    } else {
    console.log("Biking is free! Speed is 10 mph.");
    cost = 0;
    }
    time = distance / 10;

} else if (travelType === "car"){
    console.log("Driving is $0.25/mi. Speed is 60mph.");
    cost = 0.25 * distance;
    time = distance / 60;

} else if (travelType ==="airplane"){
    let passengerCount = prompt("How many passengers");
    console.log("Flying is $0.10/mi per passenger. Speed is 400mph.");
    cost = 0.10 * distance * passengerCount;
    time = distance / 400;
} else {
    console.log(`Sorry. ${travelType} is an invalid option.`)
}

console.log(`Traveling ${distance} miles by ${travelType} took ${time} hours and cost $${cost}!`);

let costBar = "Cost: ";
// if this loop repeats 5 times...
for (let i=1; i<=cost; i++) {
    costBar += "$";
}
console.log(costBar); // "Cost: $$$$$"

let timeBar = "Time: ";
for (let i=1; i<=time; i++) {
    timeBar += "/";
}
console.log(timeBar);