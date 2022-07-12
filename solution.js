// write your code here

const color = "yellow";

switch (color) {
  case "red":
    console.log("Q1: Red's a great color on you.");
    break;
  case "blue":
    console.log("Q1: Blue? Great choice.");
    break;

  case "green":
    console.log("Q1: Ok. Green it is.");
    break;
  case "yellow":
    console.log("Q1: Not what I would have picked, but yellow is fine.");
    break;
  default:
    console.log("Q1: The aim of the game is to pick a color.");
    break;
}

const grade = "B";

switch (grade) {
  case "B":
    console.log("Q2: B - Good on you!");
    break;
  case "A":
    console.log("Q2: A - Well done!");
    break;
  case "C":
    console.log("Q2: C - Good effort");
  case "D":
    console.log("Q2: D - Try harder next time...");
    break;
  default:
    console.log("Q2: Yikes...");
    break;
}

const fruit = "orange";

switch (fruit) {
  case "apple":
    console.log("Q3: An apple a day keeps the doctor away.");
    break;
  case "banana":
    console.log("Q3: Bananas are full of potassium.");
    break;
  case "orange":
    console.log("Q3: Yep, oranges. Great choice.");
    break;
  case "strawberries":
    console.log("Q3: Mmmm...nothing better than strawberries.");
    break;
  default:
    console.log("Q3: PICK A FRUIT");
    break;
}
