const products = document.getElementById('products');
const marka = document.getElementById('marka')
const model = document.getElementById('model')
const ban = document.getElementById('ban')
const seher = document.getElementById('seher')

const arrowModel = document.getElementById('arrowModel')
const arrowBan = document.getElementById('arrowBan')
const arrowSeher = document.getElementById('arrowSeher')

const arrow = marka.querySelector(".arrow")
const inputMarka = document.querySelector(".inputMarka")
const inputModel = document.getElementById("inputModel")
const inputBan = document.getElementById("inputBan")
const inputSeher = document.getElementById("inputSeher")


const markalar = document.getElementById("markalar")
const modeller = document.getElementById("modeller")
const banlar = document.getElementById("banlar")
const seherler = document.getElementById("seherler")

const bugerMenu = document.getElementById("bugerMenu")

const secilmisMarka = document.getElementById("secilmisMarka")
const secilmisModel = document.getElementById("secilmisModel")
const secilmisBan = document.getElementById("secilmisBan")
const secilmisSeher = document.getElementById("secilmisSeher")

const wordMarka = document.getElementById("wordMarka")
const wordModel = document.getElementById("wordModel")
const wordBan = document.getElementById("wordBan")
const wordSeher = document.getElementById("wordSeher")


const inpMin = document.getElementById('inpMin');
const inpMax = document.getElementById('inpMax');
const textMin = document.getElementById('textMin');
const textMax = document.getElementById('textMax');
const divMin = document.getElementById('divMin');
const divMax = document.getElementById('divMax');
const priceİcoMin = document.getElementById('priceİcoMin');
const priceİcoMax = document.getElementById('priceİcoMax');
const currencyArrow = document.getElementById('currencyArrow');
const currencyList = document.getElementById('currencyList');
const secilmisCurrency = document.getElementById('secilmisCurrency');
const hamsi = document.getElementById('hamsi');
const minYearText = document.getElementById('minYearText');
const maxYearText = document.getElementById('maxYearText');
const yeni = document.getElementById('yeni');
const surulmus = document.getElementById('surulmus');
const kredit = document.getElementById('kredit');
const barter = document.getElementById('barter');




secilmisCurrency
const brand = new Set()
const modell = new Set()
const bann = new Set()
const seherrrr = new Set()


let secilmisModelEnd = []
let secilmisBanEnd = []
let secilmisSeherEnd = []

let filterEnd;
let isRotated = true
let isRotatedModel = true
let kreditInfo = null
let barterInfo = null

for (let i = 0; i < cars.length; i++) {
    const element = cars[i];
    brand.add(element.brand)
    bann.add(element.banType)
    seherrrr.add(element.city)

    products.innerHTML += `
        <div class="box">
        <div class="product-top">
      ${element.barter==true? `<span class="icon2">
        <i style="color:#fff;padding: 5px; border-radius: 50%; background-color: #76c81c;"
        class="fa-solid fa-rotate"></i>
      </span>`:"" }         
    ${element.credit==true? `<span class="icon1">
        <i style="color:#fff;padding: 5px 6px ; border-radius: 50%; background-color: #f3a523;"
        class="fa-solid fa-percent"></i>
    </span>`:"" }
        <img src="${element.images[0]}" 
             alt="avto-foto">
            <svg  onclick="fill(this)" class="heart-icon" width="25" height="25" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
        </div>
        <div class="product-bottom">
            <h4>${element.price} ${element.currency}</h4>
            <p class="marka-model">${element.brand} <span>${element.model}</span></p>
            <p class="year">${element.year}, ${element.engine} L, ${element.odometer} ${element.odometerUnit} </p>
        </div>
    </div>
    `
}
markalarShow()

function fill(a) {
    if (a.style.fill == 'red') {
        a.style.fill = 'none'
    } else {
        a.style.fill = 'red'
    }
}

function markaDrop() {
    if (secilmisMarka.innerHTML) {
        inputMarka.placeholder = secilmisMarka.innerHTML
    }
    inputMarka.value = ``
    if (isRotated) {
        markalarShow()
        arrow.style.rotate = 180 + "deg"
        inputMarka.style.display = "initial"
        marka.style.borderColor = "#8d94ad"
        markalar.style.height = 335 + "px"
    } else {
        arrow.style.rotate = 0 + "deg"
        inputMarka.style.display = "none"
        marka.style.borderColor = "#dfe3e9"
        markalar.style.height = 0
    }
    isRotated = !isRotated
}

function modelDrop() {
    if (secilmisMarka.innerHTML !== '') {

        if (secilmisModel.innerHTML) {
            inputModel.placeholder = secilmisModel.innerHTML
        }

        inputModel.value = ``
        if (isRotatedModel) {
            arrowModel.style.rotate = 180 + "deg"
            inputModel.style.display = "initial"
            model.style.borderColor = "#8d94ad"
            modeller.style.height = 335 + "px"
            secilmisModel.style.display = 'block'

        } else {
            arrowModel.style.rotate = 0 + "deg"
            inputModel.style.display = "none"
            model.style.borderColor = "#dfe3e9"
            modeller.style.height = 0

        }
        isRotatedModel = !isRotatedModel
    }
}

banlarrShow()

function banDrop() {

    if (secilmisBan.innerHTML) {
        inputBan.placeholder = secilmisBan.innerHTML
    }
    inputBan.value = ``
    if (isRotatedModel) {
        arrowBan.style.rotate = 180 + "deg"
        inputBan.style.display = "initial"
        ban.style.borderColor = "#8d94ad"
        banlar.style.height = 335 + "px"
        secilmisBan.style.display = 'block'

    } else {
        arrowBan.style.rotate = 0 + "deg"
        inputBan.style.display = "none"
        ban.style.borderColor = "#dfe3e9"
        banlar.style.height = 0

    }
    isRotatedModel = !isRotatedModel
}
seherrlerShow()

function seherrDrop() {

    if (secilmisSeher.innerHTML) {
        inputSeher.placeholder = secilmisSeher.innerHTML
    }

    inputSeher.value = ``
    if (isRotatedModel) {
        arrowSeher.style.rotate = 180 + "deg"
        inputSeher.style.display = "initial"
        seher.style.borderColor = "#8d94ad"
        seherler.style.height = 335 + "px"
        secilmisSeher.style.display = 'block'

    } else {
        arrowSeher.style.rotate = 0 + "deg"
        inputSeher.style.display = "none"
        seher.style.borderColor = "#dfe3e9"
        seherler.style.height = 0

    }
    isRotatedModel = !isRotatedModel
}

function markalarShow() {
    markalar.innerHTML = `<li onclick="markaSifirla()" ><i style="color: red; margin-right: 7px;"  class="fa-solid fa-xmark"></i>Sıfırla</li>`
    brand.forEach(element => markalar.innerHTML += `<li onclick="markaSec(this)"  >${element}</onclick=>`);

}

function modellerrShow() {
    modeller.innerHTML = `<li onclick="modelSifirla()"><i style="color: red; margin-right: 7px;" class="fa-solid fa-xmark"></i>Sıfırla</li>`;
    modell.forEach(element => modeller.innerHTML += `<li class="licek" onclick="modelSec(this)">${element}  <input style=" width: 18px; height: 18px; accent-color: red;" type="checkbox" >
</li>`);
}

function banlarrShow() {
    banlar.innerHTML = `<li onclick="banSifirla()"><i style="color: red; margin-right: 7px;" class="fa-solid fa-xmark"></i>Sıfırla</li>`;
    bann.forEach(element => banlar.innerHTML += `<li class="licek" onclick="banSec(this)">${element}  <input style=" width: 18px; height: 18px; accent-color: red;" type="checkbox" >
</li>`);
}

function seherrlerShow() {
    seherler.innerHTML = `<li onclick="seherSifirla()"><i style="color: red; margin-right: 7px;" class="fa-solid fa-xmark"></i>Sıfırla</li>`;
    seherrrr.forEach(element => seherler.innerHTML += `<li class="licek" onclick="seherSec(this)">${element}  <input style=" width: 18px; height: 18px; accent-color: red;" type="checkbox" >
</li>`);
}

function filterMarka() {
    markalar.innerHTML = `<li onclick="markaSifirla()"><i  style="color: red; margin-right: 7px;"  class="fa-solid fa-xmark"></i>Sıfırla</li>`
    brand.forEach(element => {
        if (element.toLowerCase().includes(inputMarka.value)) {
            markalar.innerHTML += `<li  onclick="markaSec(this)">${element}</li>`
        }
    });
}

function filterModel() {
    modeller.innerHTML = `<li onclick="modelSifirla()"><i  style="color: red; margin-right: 7px;"  class="fa-solid fa-xmark"></i>Sıfırla</li>`
    modell.forEach(element => {
        if (element.toLowerCase().includes(inputModel.value)) {
            modeller.innerHTML += `<li  class="licek" onclick="modelSec(this)">${element}<input style=" width: 18px; height: 18px; accent-color: red;" type="checkbox" > </li>`
        }
    });
}

function filterBan() {
    banlar.innerHTML = `<li onclick="banSifirla()"><i  style="color: red; margin-right: 7px;"  class="fa-solid fa-xmark"></i>Sıfırla</li>`
    bann.forEach(element => {
        if (element.toLowerCase().includes(inputBan.value)) {
            banlar.innerHTML += `<li class="licek"  onclick="banSec(this)">${element}<input style=" width: 18px; height: 18px; accent-color: red;" type="checkbox" > </li>`
        }
    });
}

function filterSeher() {
    seherler.innerHTML = `<li onclick="seherSifirla()"><i  style="color: red; margin-right: 7px;"  class="fa-solid fa-xmark"></i>Sıfırla</li>`
    seherrrr.forEach(element => {
        if (element.toLowerCase().includes(inputSeher.value)) {
            seherler.innerHTML += `<li  class="licek" onclick="seherSec(this)">${element}<input style=" width: 18px; height: 18px; accent-color: red;" type="checkbox" > </li>`
        }
    });
}

function markaSec(a) {
    modell.clear()
    modelSifirla()
    secilmisModelEnd = []
    wordMarka.style.fontSize = 13 + 'px'
    secilmisMarka.style.display = 'block'
    secilmisMarka.innerHTML = a.innerText
    markaDrop()
    cars.forEach(element => {
        if (element.brand == secilmisMarka.innerHTML) {
            modell.add(element.model)
        }
    });
    modellerrShow();
    wordModel.style.fontSize = 'initial';
    secilmisModel.style.display = 'none';
    secilmisModel.innerHTML = '';
    inputModel.placeholder = 'Model yazın';

}

function modelSec(a) {
    const checkBox = a.querySelector("input");
    if (checkBox.checked) {
        checkBox.checked = false;
        secilmisModelEnd = secilmisModelEnd.filter(model => model !== a.innerText);
    } else {
        checkBox.checked = true;
        secilmisModelEnd.push(a.innerText);
    }

    if (secilmisModelEnd.length > 0) {
        secilmisModel.innerHTML = secilmisModelEnd[0];

        if (secilmisModelEnd.length > 1) {
            secilmisModel.innerHTML += `, ${secilmisModelEnd[1]}`;
        }

        if (secilmisModelEnd.length > 2) {
            secilmisModel.innerHTML += '...';
        }
    } else {
        secilmisModel.innerHTML = 'Model';
    }

    inputModel.placeholder = secilmisModel.innerHTML;
}

function banSec(a) {

    const checkBox = a.querySelector("input");
    if (checkBox.checked) {
        checkBox.checked = false;
        secilmisBanEnd = secilmisBanEnd.filter(item => item !== a.innerText);
    } else {
        checkBox.checked = true;
        secilmisBanEnd.push(a.innerText);
    }

    if (secilmisBanEnd.length > 0) {
        secilmisBan.innerHTML = secilmisBanEnd[0];

        if (secilmisBanEnd.length > 1) {
            secilmisBan.innerHTML += `, ${  secilmisBanEnd[1]}`;
        }

        if (secilmisBanEnd.length > 2) {
            secilmisBan.innerHTML += '...';
        }
    } else {
        secilmisBan.innerHTML = 'Ban';
    }

    inputBan.placeholder = secilmisBan.innerHTML;
}

function seherSec(a) {

    const checkBox = a.querySelector("input");
    if (checkBox.checked) {
        checkBox.checked = false;
        secilmisSeherEnd = secilmisSeherEnd.filter(item => item !== a.innerText);
    } else {
        checkBox.checked = true;
        secilmisSeherEnd.push(a.innerText);
    }

    if (secilmisSeherEnd.length > 0) {
        secilmisSeher.innerHTML = secilmisSeherEnd[0];

        if (secilmisSeherEnd.length > 1) {
            secilmisSeher.innerHTML += `, ${  secilmisSeherEnd[1]}`;
        }

        if (secilmisSeherEnd.length > 2) {
            secilmisSeher.innerHTML += '...';
        }
    } else {
        secilmisSeher.innerHTML = 'Ban';
    }

    inputSeher.placeholder = secilmisSeher.innerHTML;
}


function markaSifirla() {
    markaDrop()
    wordMarka.style.fontSize = 'initial'
    secilmisMarka.style.display = 'none'
    secilmisMarka.innerHTML = ''
    isRotatedModel = false
    modelSifirla()

}

function modelSifirla() {
    secilmisModelEnd = []
    modelDrop();
    wordModel.style.fontSize = 'initial';
    secilmisModel.style.display = 'none';
    secilmisModel.innerHTML = '';
    inputModel.placeholder = 'Model yazın';
    modellerrShow();
}

function banSifirla() {
    banDrop();
    wordBan.style.fontSize = 'initial';
    secilmisBan.style.display = 'none';
    secilmisBan.innerHTML = '';
    inputBan.placeholder = 'Ban yazın';
    secilmisBanEnd = []
    banlarrShow();
}

function seherSifirla() {
    isRotatedModel = false
    seherrDrop();
    wordSeher.style.fontSize = 'initial';
    secilmisSeher.style.display = 'none';
    secilmisSeher.innerHTML = '';
    inputSeher.placeholder = 'Şəhər yazın';
    secilmisSeherEnd = []
    seherrlerShow();
}

function minYaz() {
    divMin.style.display = 'block';
    inpMin.style.display = 'initial';
    textMin.style.fontSize = '13px';
    priceİcoMin.style.display = 'initial';
    if (!inpMax.value) {
        baglaMax()

    }
}

function maxYaz() {
    divMax.style.display = 'block';
    inpMax.style.display = 'initial';
    textMax.style.fontSize = '13px';
    priceİcoMax.style.display = 'initial';
    if (!inpMin.value) {

        baglaMin()
    }
}

function baglaMin(event) {
    if (event) {
        event.stopPropagation();
    }
    inpMin.style.display = 'none';
    inpMin.value = ''

    textMin.style.fontSize = 'initial';
    priceİcoMin.style.display = 'none';
    divMin.style.display = 'flex';

}

function baglaMax(event) {
    if (event) {
        event.stopPropagation();
    }
    inpMax.style.display = 'none';
    textMax.style.fontSize = 'initial';
    priceİcoMax.style.display = 'none';
    divMax.style.display = 'flex';
    inpMax.value = ''


}


function kreditSec(a, b) {

    if (a.style.color == "rgb(202, 16, 22)") {
        a.style.backgroundColor = 'transparent'
        a.style.borderColor = '#dfe3e9'
        a.style.color = 'initial'
        kreditInfo = null

    } else {
        a.style.backgroundColor = '#ffe6e5'
        a.style.borderColor = '#ca1016'
        a.style.color = '#ca1016'
        kreditInfo = true
    }
    if (b == 0) {
        a.style.backgroundColor = 'transparent'
        a.style.borderColor = '#dfe3e9'
        a.style.color = 'initial'
        kreditInfo = null
    }
}

function barterSec(a, b) {

    if (a.style.color == "rgb(202, 16, 22)") {
        a.style.backgroundColor = 'transparent'
        a.style.borderColor = '#dfe3e9'
        a.style.color = 'initial'
        barterInfo = null
    } else {
        a.style.backgroundColor = '#ffe6e5'
        a.style.borderColor = '#ca1016'
        a.style.color = '#ca1016'
        barterInfo = true
    }
    if (b == 0) {
        a.style.backgroundColor = 'transparent'
        a.style.borderColor = '#dfe3e9'
        a.style.color = 'initial'
        barterInfo = null
    }
}
let currencyRotate = true

function currencyDrop() {
    if (currencyRotate) {
        currencyArrow.style.rotate = 180 + "deg"
        currencyList.style.height = 105 + 'px'
        currencyRotate = false
    } else {
        currencyArrow.style.rotate = 0 + "deg"
        currencyList.style.height = 0
        currencyRotate = true
    }
}

function currencySec(a) {
    secilmisCurrency.innerHTML = a.innerHTML
    currencyDrop()
}
let activebox = null;

function changeColor(box) {
    if (activebox) {
        activebox.style.backgroundColor = 'initial'
        activebox.style.color = 'initial'
    }
    box.style.backgroundColor = '#ca1016'
    box.style.color = '#fff'
    activebox = box
}
changeColor(hamsi)
let kod = `<li  style="font-size:14px;"  onclick="yearSifirla()"><i  style="color: red; margin-right: 7px; "  class="fa-solid fa-xmark"></i>Sıfırla</li>`
for (let i = 2024; i >= 1905; i--) kod += `<li onclick="yearSec(this)" >${i}</li>`

function yearShow(a) {
    const arrow = a.querySelector('label')
    const list = a.querySelector('ul')
    list.innerHTML = kod
    if (arrow.style.transform === 'rotate(180deg)') {
        arrow.style.transform = 'rotate(0deg)';
        list.style.height = 0

    } else {
        arrow.style.transform = 'rotate(180deg)';
        list.style.height = 300 + 'px'
    }
}

function yearSec(a) {

    const selectedYear = a.innerHTML;
    const isMinYear = a.closest('#yearMin');
    const isMaxYear = a.closest('#yearMax');
    if (isMinYear) {
        minYearText.innerHTML = selectedYear;
    } else if (isMaxYear) {
        maxYearText.innerHTML = selectedYear;
    }

}

function yearSifirla() {
    const minYearText = document.getElementById('minYearText');
    const maxYearText = document.getElementById('maxYearText');
    minYearText.innerHTML = '';
    maxYearText.innerHTML = '';
    const illerElements = document.querySelectorAll('.iller');
}

function FilterElan() {
    let filteredCars = cars
    if (secilmisMarka.innerHTML) {
        filteredCars = filteredCars.filter(item => item.brand == secilmisMarka.innerHTML)
    }
    if (secilmisModelEnd.length > 0) {
        filteredCars = filteredCars.filter(item => secilmisModelEnd.includes(item.model))
    }
    if (secilmisBanEnd.length > 0) {
        filteredCars = filteredCars.filter(item => secilmisBanEnd.includes(item.banType))

    }
    if (secilmisSeherEnd.length > 0) {
        filteredCars = filteredCars.filter(item => secilmisSeherEnd.includes(item.city))

    }
    if (kreditInfo != null) {
        filteredCars = filteredCars.filter(car => car.credit == true);
    }

    if (barterInfo != null) {
        filteredCars = filteredCars.filter(car => car.barter == true);
    }
    if (inpMin.value) {
        filteredCars = filteredCars.filter(car => car.price > inpMin.value);

    }
    if (inpMax.value) {
        filteredCars = filteredCars.filter(car => car.price < inpMax.value);
    }
    if (minYearText.innerHTML) {

        filteredCars = filteredCars.filter(car => car.year > minYearText.innerHTML);
    }
    if (maxYearText.innerHTML) {
        filteredCars = filteredCars.filter(car => car.year < maxYearText.innerHTML);

    }
    if (yeni.style.backgroundColor == 'rgb(202, 16, 22)') {
        filteredCars = filteredCars.filter(car => car.odometer == 0);
    }
    if (surulmus.style.backgroundColor == 'rgb(202, 16, 22)') {
        filteredCars = filteredCars.filter(car => car.odometer > 0);
    }
    products.innerHTML = ""
    if (filteredCars.length == 0) {
        products.innerHTML = `<img style="width: 35%; margin:auto;" src="https://www.shutterstock.com/shutterstock/photos/1127749553/display_1500/stock-vector-upset-magnifying-glass-cute-not-found-symbol-unsuccessful-search-zoom-icon-no-suitable-1127749553.jpg" alt="">`

    } else {
        filteredCars.forEach(element => {

            products.innerHTML += `
            <div class="box">
            <div class="product-top">
          ${element.barter==true? `<span class="icon2">
            <i style="color:#fff;padding: 5px; border-radius: 50%; background-color: #76c81c;"
            class="fa-solid fa-rotate"></i>
          </span>`:"" }         
        ${element.credit==true? `<span class="icon1">
            <i style="color:#fff;padding: 5px 6px ; border-radius: 50%; background-color: #f3a523;"
            class="fa-solid fa-percent"></i>
        </span>`:"" }
            <img src="${element.images[0]}" 
                 alt="avto-foto">
                <svg  onclick="fill(this)" class="heart-icon" width="25" height="25" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
            </div>
            <div class="product-bottom">
                <h4>${element.price} ${element.currency}</h4>
                <p class="marka-model">${element.brand} <span>${element.model}</span></p>
                <p class="year">${element.year}, ${element.engine} L, ${element.odometer} ${element.odometerUnit} </p>
            </div>
        </div>
        `
        });

    }
}

function allSifirla() {
    isRotated = false
    isRotatedModel = false
    modelDrop()
    markaSifirla()
    modelSifirla()
    banSifirla()
    seherSifirla()
    baglaMax()
    baglaMin()
    yearSifirla()
    changeColor(hamsi)
    kreditSec(kredit, 0)
    barterSec(barter, 0)

}
function burgerShow() {
    bugerMenu.style.right=0
}
function burgerBagla() {
    bugerMenu.style.right=-500+'px'

}