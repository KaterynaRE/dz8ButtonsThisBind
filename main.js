// 1. Створити дві різні кнопки (колір, розмір шрифту, колір тексту, висота, ширина).
// Стилі прописати inline. При натисканні на кнопку відобразити всю цю інформацію в div (це HTML елемент).
// Наприклад: колір червоний...

// const btnFirst = document.getElementById('btnFirst');
// const divFirst = document.getElementById('firstDiv');
// function CreateDivForFirst() {
//     btnFirst.onclick = function () {
//         divFirst.textContent = `Колір: ${this.style.backgroundColor}, Розмір шрифту: ${this.style.fontSize}, Колір тексту: ${this.style.color}, Висота: ${this.style.height}, Ширина: ${this.style.width}`;
//     }
// }
// CreateDivForFirst();

// const btnSecond = document.getElementById('btnSecond');
// const divSecond = document.getElementById('secondDiv');
// function CreateDivForSecond() {
//     btnSecond.onclick = function () {
//         divSecond.textContent = `Колір: ${this.style.backgroundColor}, Розмір шрифту: ${this.style.fontSize}, Колір тексту: ${this.style.color}, Висота: ${this.style.height}, Ширина: ${this.style.width}`;
//     }
// }
// CreateDivForSecond();


// 2*. Модифікуємо попередню задачу. Інформація про кожну властивість виводиться з паузою в одну секунду.

// const btnFirst = document.getElementById('btnFirst');
// const divFirst = document.getElementById('firstDiv');
// function InfoProperties(element) {
//     const properties = [
//         `Колір: ${element.style.backgroundColor}`,
//         `Розмір шрифту: ${element.style.fontSize}`,
//         `Колір тексту: ${element.style.color}`,
//         `Висота: ${element.style.height}`,
//         `Ширина: ${element.style.width}`
//     ];

//     let index = 0;

//     function displayNextProperty() {
//         if (index < properties.length) {
//             if (properties[0]) {
//                 btnFirst.innerText = '';
//                 btnFirst.appendChild(divFirst);
//             }
//             divFirst.textContent = properties[index];            
//             index++;
//             setTimeout(displayNextProperty, 1000);
//         }
//     }
//     displayNextProperty();
// }
// btnFirst.addEventListener('click', () => InfoProperties(btnFirst));


// const btnSecond = document.getElementById('btnSecond');
// const divSecond = document.getElementById('secondDiv');
// function InfoPropertiesSecond(element) {
//     const properties = [
//         `Колір: ${element.style.backgroundColor}`,
//         `Розмір шрифту: ${element.style.fontSize}`,
//         `Колір тексту: ${element.style.color}`,
//         `Висота: ${element.style.height}`,
//         `Ширина: ${element.style.width}`
//     ];

//     let index = 0;

//     function displayNextPropertySecond() {
//         if (index < properties.length) {
//             // if (properties[0]) {
//             //    btnSecond.innerText = '';
//             //    btnSecond.appendChild(divSecond);
//             // }
//             divSecond.textContent = properties[index];            
//             index++;
//             setTimeout(displayNextPropertySecond, 1000);
//         }
//     }
//     displayNextPropertySecond();
// }
// btnSecond.addEventListener('click', () => InfoPropertiesSecond(btnSecond));


// 3**. Модифікуємо попередню задачу. Стилі винести в окремий файл (руками!).
// Як у цьому проекті створений файл style.css.
// І запустити попереднє рішення.
// Програма перестане коректно працювати, вирішити проблему.

const btnSecond = document.getElementById('btnSecond');
const btnFirst = document.getElementById('btnFirst');
const infoDiv = document.getElementById('infoDiv');


function rgbToColorName(rgb) {
    const colors = {
        "rgb(255, 0, 0)": "Red",
        "rgb(255, 235, 205)": "Blanchedalmond",
        "rgb(169, 245, 220)": "Magic Mint",
        "rgb(14, 87, 63)": "Dark Green"       
    };
    return colors[rgb] || rgb;
}

function InfoProperties(element) {
    const properties = {
        "Колір фону": rgbToColorName(getComputedStyle(element).backgroundColor),
        "Розмір шрифту": getComputedStyle(element).fontSize,
        "Колір тексту": rgbToColorName(getComputedStyle(element).color),
        "Висота": getComputedStyle(element).height,
        "Ширина": getComputedStyle(element).width
    };

    let index = 0;
    
    const propertyEntries = Object.entries(properties);
    function displayNextProperty() {
        console.log(this);
        if (index < propertyEntries.length) {
            const [key, value] = propertyEntries[index];
            infoDiv.textContent = `${key}: ${value}`;
            index++;
            setTimeout(displayNextProperty.bind(this), 1000);
        }
    }
    displayNextProperty.bind(properties)();    
}
btnFirst.addEventListener('click', () => InfoProperties(btnFirst))
btnSecond.addEventListener('click', () => InfoProperties(btnSecond));