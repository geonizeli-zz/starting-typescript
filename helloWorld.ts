function greeter(person: string) {
  return "Hello, " + person;
}

let user = "João Victor";

console.log(greeter(user));


/* OUTPUT
  ```
  function greeter(person) {
      return "Hello, " + person;
  }
  var user = "João Victor";
  console.log(greeter(user));
  ```

  Observations:
    The transpiler finds an error in using an integer where it should be a string, but does not stop transpiling.

*/