function fibonacci(n: number) {
  if (n <= 1) {
    return n
  }
  else {
    return fibonacci(n - 1) + fibonacci(n - 2)
  }
}


let list: number[] = [1, 2, 4, 8, 16, 32, 64, 128, 256];

// or: let list: Array<number> = [1, 2, 4, 8, 16, 32, 64, 128, 256];


list.forEach(element => {
  console.log(fibonacci(element))
});

/* OUTPUT
  1
  1
  3
  21
  987
  2178309
*/

/* TRANSPILATION
```
  function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
  }
  var list = [1, 2, 4, 8, 16, 32, 64, 128, 256];
  list.forEach(function (element) {
      console.log(fibonacci(element));
  });
```
*/