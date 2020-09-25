/* 
Big O Notation is a Matethematical notation that describes the limiting
behavior of a function when the argument tends towers a particular value
or infinity.

We use Big O to describe the performance of an alhorithm and see if it
scales or not
*/

/* O(1): algorithms that runs in a constant time */
const o1 = (array) => console.log(array[0]);

/* O(n): algorithms that grows linearly with the size of the input */
const oN = (array) => array.forEach(el => console.log(el));

/* Note if we have a oN2 function like: */
const oN2 = (array) => array.forEach(el => {
  console.log(el); // O(n)
  console.log(el); // O(n) which give us O(2n)
});

/* Even though we have a O(2n) we still write O(n), because the algorithm
runtime cost still growing linearly with the input array. */

/* Another example: oN3 */
const oN3 = (arr1, arr2) => {
  arr1.forEach(el => console.log(el)); // O(n)
  arr2.forEach(el => console.log(el)); // O(m) which gives us O(n + m)
}

/* Still the complexity being O(n) because O(n + m) = O(n) since the complexity
still grows linearly. Think we could merge arr1 + arr2 in a single arr. */

/* We learned that simple loops runs in a constant time. 
Let's check nested loops */
const nSquare = (arr) => {
  arr.forEach(a => { // O(n)
    arr.forEach(b => console.log(b)); // O(n)
  });
}

/* For each element in the array, it will iterate again printing all the elements
that means we have O(n * n) that we represent with O(n²) and we say this algorithm
runs in a quadratic time.*/

/* Let's see what happens if we add another O(n) in nSquare function */
const nSquare2 = (arr) => {
  arr.forEach(el => console.log(el)); // O(n)

  arr.forEach(a => { // O(n²)
    arr.forEach(b => console.log(b));
  });
}

/* We ended up with O(n + n²). Remember that the square of the input will always
be greater (or equals if input = 1) than the input itself. n² will grows faster
than n and we can simplify O(n + n²) to O(n²). The Big O notation its about 
approximation or behaviors, not exact time. */

/* What if a cube? */
const nCube = (arr) => {
  arr.forEach(a => { // O(n)
    arr.forEach(b => { // O(n)
      arr.forEach(c => console.log(c)); // O(n)
    });
  });
}

/* This is far slower than O(n²) and its complexity is O(n³) */

/* What about the logarithm grow?
We have logarithm grow when we reduce the work by half in every step. 
A common example of this is the Binary Search. But since we didn't reach this
type of non-linear DS, the take away for the moment is that logarithm algos
are more scalable compared to linear or quadratic algos. Think in the curves
and you will see.*/

/* The oposite of the logarithm grow is the exponential grow.
Logarithm curve slows down as the input grows, but the exponential grows faster
and faster. Obviously an algorithm that grows in exponential time isn't scalable
at all. It become very slow, very soon. */