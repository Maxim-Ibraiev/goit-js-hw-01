const countryName = "КитаЙ";

const CANCELED_BY_USER = 'Отменено пользователем!';
const NO_DELIVERY = 'В выбранную страну доставка недоступна.';
const CHINA = 'Китай';
const AUSTRALIA = 'Австралия';
const INDIA = 'Индия';
const JAMAICA = 'Ямайка';
let message;
let price = 0;
let country;
if (countryName === null) {
  message = CANCELED_BY_USER;
} else {
  country = countryName[0].toUpperCase() + countryName.slice(1, 10).toLowerCase(); // Write code on this line
    console.log(country)
  switch (country) {
  // Write code under this line
    case 'Китай':
    country = CHINA;
    price = 100;
    break;
    
    case 'Австралия':
    country = AUSTRALIA;
    price = 170 ;
    break;
    
    case 'Индия':
    country = INDIA;
    price = 80;
    break;
    
    case 'Ямайка':
    country = JAMAICA;
    price = 120 ;
    break;
    
  }
}
if (price > 0) { // Write code on this line
  message = `Доставка в ${country} будет стоить ${price} кредитов`;
}else if (countryName !== null) {
message = NO_DELIVERY;
}

console.log(message);

//если countryName равно "КитаЙ"
// то значение message будет равно
// 'Доставка в Китай будет стоить 100 кредитов'

//если countryName равно null
// то значение message будет равно
// 'Отменено пользователем!'

//если countryName равно "Чили"
// то значение message будет равно
// 'В выбранную страну доставка недоступна.'const CANCELED_BY_USER = 'Отменено пользователем!';const NO_DELIVERY = 'В выбранную страну доставка недоступна.';const CHINA = 'Китай';const AUSTRALIA = 'Австралия';const INDIA = 'Индия';const JAMAICA = 'Ямайка';let message;let price = 0;let country;if (countryName === null) {  message = CANCELED_BY_USER;} else {  switch (country) {  // Write code under this line  }}  message = `Доставка в ${country} будет стоить ${price} кредитов`;}//если countryName равно "КитаЙ"// то значение message будет равно// 'Доставка в Китай будет стоить 100 кредитов'//если countryName равно null// то значение message будет равно// 'Отменено пользователем!'//если countryName равно "Чили"// то значение message будет равно// 'В выбранную страну доставка недоступна.'