function manipulateData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([1, 2, 3, 4]);
    }, 3000);
  })
  .then(numbers => {
    const evenNumbers = numbers.filter(num => num % 2 === 0);
    document.getElementById('output').textContent = evenNumbers.join(", ");
    return evenNumbers;
  })
  .then(evenNumbers => {
    setTimeout(() => {
      const multipliedNumbers = evenNumbers.map(num => num * 2);
      document.getElementById('output').textContent = multipliedNumbers.join(", ");
    }, 2000);
  });
}

manipulateData();