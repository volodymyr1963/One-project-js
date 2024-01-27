// Порожні масиви 25шт
const photoArray = [];


// Генерація об'єктів фото
for (let i = 1; i <= 25; i++) {   
    // const CommentsArray = generateComments();

    const photoObject = {
    id: i,
    url: `photos/${i}.jpg`,
    description: generateDescription(),
    likes: generatelikes(),
    comments: generateComments(),
};

    photoArray.push(photoObject);
}

//Генерація коментарів
function generateComments() {
    const min=1 
    const max=6
    const numberOfCommentsMax=6
    const numberOfCommentsMin=1
    const numberOfComments = Math.floor(Math.random() * numberOfCommentsMax) + numberOfCommentsMin
    //Випадкова кількість коментарів від 1 до 6
    const сomments = [];

    for (let j = 1; j <= numberOfComments; j++) {
      сomments.push({
        id: j,
        avatar: `img/avatar-${getRandomNumber(min,max)}.svg`,
        massage: getRandomComments(),
        name: getRandomName(),
      });
    }

    return сomments;
}

function getRandomNumber(min, max) {
    const getRandomNumberMin=1
    const getRandomNumberMax=25
    const getRandomNumberMinOne=1
    return Math.floor(Math.random() * (getRandomNumberMax - getRandomNumberMin + 1)) + getRandomNumberMinOne;
}

function getRandomComments(){
    const Commentslist = [
        'Все відмінно!',
        'Загалом все непогано. Але не всі.',
        'Коли ви робите фотографію, добре б прибирати палець із кадру.',
        'Зрештою, це просто непрофесійно.',
        'Моя бабуся випадково чхнула з фотоапаратом у руках  у неї вийшла фотографія краща.',
        'Я послизнувся на банановій шкірці  впустив фотоапарат на кота  у мене вийшла фотографія краще.',
        'Обличчя людей на фотці перекошені, ніби їх побивають. Як можна було зловити такий невдалий момент?',
        'Просто супер',
        'Неперевершене фото'
    ];
    return Commentslist[Math.floor(Math.random() * Commentslist.length)];
}

function getRandomName() {
    const nameslist = [
        'Михайло',
        'Вероніка',
        'Василь',
        'Діма',
        'Софія',
        'Денис',
        'Ангеліна',
    ];
    return nameslist[Math.floor(Math.random() * nameslist.length)];
}

function generateDescription() {
    const descriptionslist = [
        'Захід сонця',
        'Дивовижний краєвид',
        'Будинок на березі моря',
        'Нічне місто',
        'Дивовижні зорі',
        'Неймовірна краса сонця'
    ];
    return descriptionslist[Math.floor(Math.random() * descriptionslist.length)];
}
 function generatelikes() {
    const generatelikesMin=15
    const generatelikesMax=200
    return getRandomNumber(generatelikesMin, generatelikesMax)
 };

//Перевірка коду 
console.log(photoArray);

