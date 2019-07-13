
function applyForVisa(docs)  {
    console.log('pending...');
    let promise = new Promise((resolve, reject) => {
      setTimeout(function () {
        Math.random() > .5 ? resolve({}) : reject('К сожалению в визе отказано из за не полного пакета документов');
     }, 2000);
   });
    return promise;
}

function bookHotel(visa){
    console.log(visa);
    console.info('Бронирование номера в отеле...');
    return Promise.resolve(visa);
}
function buyTickets(booking){
    console.info('Билет заказан на 14:25, 24.06');
    console.info('бронь... ', booking);
}

function getVisa(visa) {
    console.info('Поздравляем, Вам открыли визу. Приятного путишествия!');
    return new Promise((resolve, reject) => {
        resolve({});
    });
}

let documents = {};

applyForVisa(documents)
.then(getVisa)
.then(bookHotel)
.then(buyTickets)
.catch(error => console.error(error));