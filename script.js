function seasons() {
    let month = Number (prompt ('Введите номер месяца (от 1 до 12) и вы узнаете к какому времени года он относится'));
    switch (month) {
        case 12:
        case 1:
        case 2:
            alert ('Зима, брр');
            break;
        case 3:
        case 4:
        case 5:
            alert ('Весна! Просыпаемся!');
            break;
        case 6:
        case 7:
        case 8:
            alert ('Лето, пора ехать на море!');
            break;
        case 9:
        case 10:
        case 11:
            alert ('Осень. Может переиграем на лето?');
            default:
        alert( 'Это явно не из этой оперы =)' );
    }
    }
    
    function Remember() {
        let fruitsArray = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
        fruitsArray = fruitsArray.sort(() => Math.random() - 0.5);
        alert (fruitsArray);
        let firstfruit = String(prompt('Какой фрукт был первым?'));
        let lastfruit = String(prompt('Какой фрукт был последним?'));
        if (firstfruit.toLocaleLowerCase()===fruitsArray[0].toLocaleLowerCase()&&lastfruit.toLocaleLowerCase()===fruitsArray[6].toLocaleLowerCase()) {
            alert ('Правильно!');
        }
        else if (firstfruit.toLocaleLowerCase()===fruitsArray[0].toLocaleLowerCase()||lastfruit.toLocaleLowerCase()===fruitsArray[6].toLocaleLowerCase()){
            alert ('Почти угадал!');
        }
        else if (firstfruit!=String()||lastfruit!=String()) {
                alert ('Вы точно поняли задание?');
        }
        else {
        alert( 'не угадал(!' );
        };
        };

        function riddles() {
        const riddlesObject = {
            question: 'Стоит дуб, в нем двенадцать гнезд, в каждом гнезде по четыре яйца, в каждом яйце по семь цыпленков.',
            help: ['по 31 веточке в гнезде, но иногда по 30, а в самом маленьком то 28 то 29','всего веточек 365 куда очевидней'],
            answer: 'год',
            victory: 'Молодец! в году 12 месяцев, по 4 недели в каждом, а в неделе 7 дней.',
            over: 'Сегодня не твой день(',
            lose : ['Не угадал, попробуем подсказать', 'Может со второй подсказкой все получится?'],
        };
        const start = () => {    
    let keyWord = prompt (riddlesObject.question).toLocaleLowerCase();
    if (keyWord==riddlesObject.answer) {
        alert (riddlesObject.victory)
        }
    else {
        if (riddlesObject.lose.length > 0) {
            alert (riddlesObject.lose[0])
            alert (riddlesObject.help[0])
            riddlesObject.lose.shift();
            riddlesObject.help.shift();
            start();
        }
        else {
            alert (riddlesObject.over)
        }
    }
}
start();
}