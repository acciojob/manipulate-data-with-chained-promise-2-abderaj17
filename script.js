const outputField = document.querySelector("#output");

function PromiseChaining() {
    new Promise((resolve, reject) => {
        setTimeout(() => {
            let arr = [1, 2, 3, 4];
            resolve(arr);
        }, 1000);
    }).then((numbers) => {
        let evenNumbers = numbers.filter(num => num % 2 === 0);
        outputField.textContent = evenNumbers.join(", ");
        return evenNumbers;
    }).then((evenNumbers) => {
        setTimeout(() => {
            let multipliedNumbers = evenNumbers.map(num => num * 2);
            outputField.textContent = multipliedNumbers.join(", ");
        }, 2000);
    });
}

PromiseChaining();