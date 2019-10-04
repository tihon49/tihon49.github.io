let name1  = document.querySelectorAll('input')[0],
    liters1 = document.querySelectorAll('input')[1],
    name2  = document.querySelectorAll('input')[2],
    liters2 = document.querySelectorAll('input')[3],
    out    = document.querySelector('.out'),
    button = document.querySelector('button'),
    clearBtn = document.querySelector('.clear'),

    sum1 = 0,
    sum2 = 0,
    litersSum1 = 0,
    litersSum2 = 0,
    totalPrice = 0;

name1.addEventListener('change', function() {
    sum1 = +this.value;
});

name2.addEventListener('change', function() {
    sum2 = +this.value;
});

liters1.addEventListener('change', function() {
    litersSum1 = +this.value;
})

liters2.addEventListener('change', function() {
    litersSum2 = +this.value;
})

function getTotalPrice() {
    totalPrice = sum1 * litersSum2 / litersSum1;
    console.log(totalPrice);
    return totalPrice;
}

button.addEventListener('click', function() {
    getTotalPrice();
    out.textContent = totalPrice.toFixed() + ' руб.';
    name1.style.boxShadow = '0 0 20px red';
    out.style.boxShadow = '0 0 20px red';
    liters2.style.boxShadow = '0 0 20px red';
});

clearBtn.addEventListener('click', function() {
    name1.value = '';
    name2.value = '';
    liters1.value = '';
    liters2.value = '';
    out.textContent = '...';
    name1.style.boxShadow = '0 0 10px rgb(218, 233, 6)';
    liters2.style.boxShadow = '0 0 10px rgb(218, 233, 6)';
    out.style.boxShadow = '0 0 10px rgb(218, 233, 6)';
});