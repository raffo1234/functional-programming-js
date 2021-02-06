const withCount = (fn) => {
  let count = 0;
  return (...args) => {
    console.log(`Count: ${++count}`);
    return fn(...args);
  };
};

const add = (...args) => [...args].reduce((a, b) => a + b, 0);

const countedAdd = withCount(add);

console.log(countedAdd(1, 1, 1));
console.log(countedAdd(2, 2, 2));
