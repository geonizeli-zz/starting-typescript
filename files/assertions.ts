let someValue: any = "this is a string";

let strLength: number = (someValue as string).length;

// or: let strLength: number = (<string>someValue).length;


console.log(strLength)

/* OUTPUT
  16
*/

/* TRANSPILATION
  var someValue = "this is a string";
  var strLength = someValue.length;
  // or: let strLength: number = (<string>someValue).length;
  console.log(strLength);
*/