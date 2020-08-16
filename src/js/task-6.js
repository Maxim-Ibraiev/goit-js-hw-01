let counter = 0;
let total = 0;

do {
    counter = prompt('Ведите число' )
    total += Number(counter);
}
while (counter !== null)

if (Number.isNaN(total)) {
    alert('Было введено не число, попробуйте еще раз')
}else {   
    console.log(total);
    console.log(typeof total);
    alert(`Общая сумма чисел равна ${total}`)
}
