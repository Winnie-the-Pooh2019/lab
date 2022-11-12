document.getElementById("love").addEventListener('click', () => {
    const first = prompt("Его Имя");
    const second = prompt("Ее имя");

    alert(`${first} подходит к ${second} на ${Math.floor(Math.random() * 100)} процентов!`);
});

document.getElementById("mass-index").addEventListener('click', () => {
    const height = prompt('Введите ваш рост в метрах');
    const weight = prompt('Введите ваш вес в килограммах');

    const res = weight / Math.pow(height, 2);
    console.log(res);

    if (res <= 18.5)
        alert("Недостаток веса");
    else if (res > 18.5 && res <= 25)
        alert("Нормальный вес");
    else if (res > 25 && res <= 30)
        alert("У вас излишек веса");
    else
        alert("Ожирение");
});

document.getElementById("year").addEventListener('click', () => {
    const year = prompt("Введите год");

    if (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0))
        alert("Високосный год");
    else
        alert("Не является високосным");
});

document.getElementById("dinner").addEventListener('click', () => {
    const size = prompt("Количество человек:");

    people = [];

    for (i = 0; i < size; ++i)
        people.push(prompt(`Введите имя ${i + 1}`));
        
    alert(`Оплачивать будет: ${people[Math.floor(Math.random() * size)]}`);
});