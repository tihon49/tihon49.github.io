let price1  = document.querySelectorAll('input')[0],    //цена 1
    liters1 = document.querySelectorAll('input')[1],    //литраж 1 
    price2  = document.querySelectorAll('input')[2],    //цена 2
    liters2 = document.querySelectorAll('input')[3],    //литраж 2
    out    = document.querySelector('.out'),            //вывод итога
    button = document.querySelector('button'),          //кнопка "расчитать"
    clearBtn = document.querySelector('.clear'),        //кнопка "сбросить"
    overlay = document.querySelector('.overlay'),       //оверлэй
    overlayBtn = document.querySelector('.overlayBtn'), //кнопка "я все понял"
    qwestionBtn = document.querySelector('.qwestion'),  //кнопка "че за...?"
    count = 0,                                          //счетчик

    sum1 = 0,                                           //значение из цены 1
    sum2 = 0,                                           //значение из цены 2
    litersSum1 = 0,                             
    litersSum2 = 0,
    totalPrice = 0;

//получаем значения из полей
price1.addEventListener('change', function() {
    sum1 = +this.value;
});

price2.addEventListener('change', function() {
    sum2 = +this.value;
});

liters1.addEventListener('change', function() {
    litersSum1 = +this.value;
})

liters2.addEventListener('change', function() {
    litersSum2 = +this.value;
})


//функция расчета
function getTotalPrice() {
    totalPrice = sum1 * litersSum2 / litersSum1;
    console.log(totalPrice);
    return totalPrice;
}


//кнопка "расчитать" с проверкой введенных данных
button.addEventListener('click', function() {
    getTotalPrice();
    if (isNaN(totalPrice)) {
        out.style.fontSize = '20px';
        out.textContent = 'не верные данные...';
        count++;
    } else {
        out.textContent = totalPrice.toFixed() + ' руб.';
        price1.style.boxShadow = '0 0 20px red';
        out.style.boxShadow = '0 0 20px red';
        liters2.style.boxShadow = '0 0 20px red';
    }

    if (count > 3) {
        out.style.fontSize = '20px';
        out.textContent = 'уже бухой чтоли?';
        count = 0;
    }
});


//кнопка очистки всех полей
clearBtn.addEventListener('click', function() {
    price1.value = '';
    price2.value = '';
    liters1.value = '';
    liters2.value = '';
    out.textContent = '...';
    price1.style.boxShadow = '0 0 10px rgb(218, 233, 6)';
    liters2.style.boxShadow = '0 0 10px rgb(218, 233, 6)';
    out.style.boxShadow = '0 0 10px rgb(218, 233, 6)';
});


//кнопка "сбросить"
qwestionBtn.addEventListener('click', function() {
    overlay.style.display = 'block';
});


//кнопка "я все понял"
overlayBtn.addEventListener('click', function() {
    overlay.style.display = 'none';
});