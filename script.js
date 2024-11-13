//your JS code here. If required.
const outputField = document.querySelector("#output");

function PromiseChaining(){
    let display = new Promise((resolve, reject)=>{
        setTimeout(() => {
            let arr = [1,2,3,4];
            resolve(arr);
        }, 3000);
    }).then((numbers)=>{
        // Filter out the odd numbers
        let evenNumbers = numbers.filter(num => num % 2 === 0);
        outputField.textContent = evenNumbers.join(", ");
        return evenNumbers;
    }).then((evenNumbers) => {
        // Multiply the even numbers by 2
        let multipliedNumbers = evenNumbers.map(num => num * 2);
        setTimeout(() => {
            outputField.textContent = multipliedNumbers.join(", ");
        }, 2000);
    });
}

PromiseChaining();