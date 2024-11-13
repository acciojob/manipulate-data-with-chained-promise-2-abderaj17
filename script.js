function manipulateData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([1, 2, 3, 4]);
    }, 3000);
  })
  .then(numbers => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const evenNumbers = numbers.filter(num => num % 2 === 0);
        document.getElementById('output').textContent = evenNumbers.join(", ");
        resolve(evenNumbers);
      }, 1000);
    });
  })
  .then(evenNumbers => {
    setTimeout(() => {
      const multipliedNumbers = evenNumbers.map(num => num * 2);
      document.getElementById('output').textContent = multipliedNumbers.join(", ");
    }, 2000);
  });
}

manipulateData();