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


/*
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