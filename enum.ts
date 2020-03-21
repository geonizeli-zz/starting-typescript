enum Color {Red, Green, Blue}

let r: Color = Color.Red
let g: Color = Color.Green
let b: Color = Color.Blue

console.log("Enum input: 'null', 'null', 'null' ")
console.log("Enum output:", r, g, b)

enum Color1 {Red = 50, Green = 150, Blue}

let r1: Color1 = Color1.Red
let g1: Color1 = Color1.Green
let b1: Color1 = Color1.Blue

console.log("Enum input: '50', '150', 'null' ")
console.log("Enum output:", r1, g1, b1)

// this is very interesting:
enum Color2 {Red = 1, Green, Blue}
let colorName: string = Color[2];

console.log("Enum value name:", colorName);

/* OUTPUT
  var Color;
  (function (Color) {
      Color[Color["Red"] = 0] = "Red";
      Color[Color["Green"] = 1] = "Green";
      Color[Color["Blue"] = 2] = "Blue";
  })(Color || (Color = {}));
  var r = Color.Red;
  var g = Color.Green;
  var b = Color.Blue;
  console.log("Enum input: 'null', 'null', 'null' ");
  console.log("Enum output:", r, g, b);
  var Color1;
  (function (Color1) {
      Color1[Color1["Red"] = 50] = "Red";
      Color1[Color1["Green"] = 150] = "Green";
      Color1[Color1["Blue"] = 151] = "Blue";
  })(Color1 || (Color1 = {}));
  var r1 = Color1.Red;
  var g1 = Color1.Green;
  var b1 = Color1.Blue;
  console.log("Enum input: '50', '150', 'null' ");
  console.log("Enum output:", r1, g1, b1);
  // this is very interesting:
  var Color2;
  (function (Color2) {
      Color2[Color2["Red"] = 1] = "Red";
      Color2[Color2["Green"] = 2] = "Green";
      Color2[Color2["Blue"] = 3] = "Blue";
  })(Color2 || (Color2 = {}));
  var colorName = Color[2];
  console.log("Enum value name:", colorName);
*/