import inquirer from "inquirer";
console.log("BMI CALCULATOR");
console.log("=================");


const answer = await inquirer.prompt([
  {message:"Enter your name:", type:"string",name:"name1"},
  { message: "Enter your Age:", type: "number", name: "Age" },
  { message: "Enter your weight(in kg):", type: "number", name: "Weight" },
  {
    message: "Please choose your preferred unit of height:",
    type: "list",
    name: "unit",
    choices: ["Centimeter", "Meter", "Feet and inches"],
  },
]);
let myheight;
if (answer.unit === "Centimeter") {
  const united1 = await inquirer.prompt([
    {
      message: `Enter your height in ${answer.unit}: `,
      type: "number",
      name: "Height",
    },
  ]);

  myheight =( united1.Height / 100);
} else if (answer.unit === "Meter") {
  const united2 = await inquirer.prompt([
    {
      message: `Enter your height in ${answer.unit}: `,
      type: "number",
      name: "Height",
    },
  ]);
  myheight = united2.Height;
} else if ((answer.unit = "Feet and inches")) {
  const united3 = await inquirer.prompt([
    { message: "Enter your height in feet: ", type: "number", name: "feet" },
    { message: "Enter your height in inches: ", type: "number", name: "inches" }
  ]);
        
  const heightInInches = united3.feet * 12 + united3.inches;
  const heightInMeters = heightInInches * 0.0254; 
   myheight=heightInMeters
   
 }

let classes: string = "";
  let bmi = answer.Weight /(myheight**2);


if (bmi >= 30) {
  classes = "Obese";
} else if (bmi >= 25 && bmi <= 29.9) {
  classes = "Overweight";
} else if (bmi >= 18.5 && bmi <= 24.9) {
  classes = "Healthy weight";
} else if (bmi <= 18.4) {
  classes = "Thinness";
} else {
  console.log("Invalid input!");
}
console.log(`Dear ${answer.name1}`);

console.log(`Your BMI is: ${bmi}`);
console.log(`You are classified under ${classes}`);
