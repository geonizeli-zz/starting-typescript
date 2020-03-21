let x: [string, number] = ["String", 19];

x.forEach(element => {
  console.log(element)
});

/* OUTPUT
  String
  19
*/

/* TRANSPILATION
```
  var x = ["String", 19];
  x.forEach(function (element) {
      console.log(element);
  });
```
*/