function verify(param: any) {
  console.log(typeof param)
}

verify(1)
verify('one')
verify(0.5)
verify(true)
verify([])

/* OUTPUT
  number
  string
  number
  boolean
  object
*/

/* TRANSPILATION
  function verify(param) {
    console.log(typeof param);
  }
  verify(1);
  verify('one');
  verify(0.5);
  verify(true);
  verify([]);
*/