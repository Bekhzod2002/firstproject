// let n = prompt(`Введите число`);
// let arr = [];
// let arr1 = [];

// for (let i = 0; i < n; i++) {
//     arr.push(1);
//     for (let j = 0; j < n; j++) {
//         if (i < n - 1) {
//             arr1.push(1);
//         } else {
//             arr1.push(5);
//         }
//     }
//     arr[i] = arr1;
// }
// console.log(arr);

// let coin = parseInt(prompt(`Укажите начальный взнос`));
// let year = prompt(`Укажите кол-во лет`);


// alert(coin);
let block = document.getElementsByClassName("coin-window")[0];
let name = prompt(`Здравствуйте, как вас зовут?`);
let secondName = prompt(`Какая ваша фамилия?`);
let age = prompt(`Сколько вам лет?`);
let helloWindow = document.getElementsByClassName('first-window')[0];
let helloSpan = document.createElement('span');
helloSpan.classList.add('hello-span');
helloSpan.style.display = "block";
helloSpan.innerText = `Здравствуйте, ${name[0].toUpperCase()}${name.slice(1, name.length)} ${secondName[0].toUpperCase()}${secondName.slice(1, secondName.length)}, ${age} лет`;
helloWindow.style.transitionProperty = "opacity";
helloWindow.style.transitionDuration = "3s";


let btnCon = document.createElement('button');
btnCon.classList.add('btn');
btnCon.innerText = 'Продолжить';
btnCon.onclick = () => { showBlock(block) };

helloWindow.append(helloSpan);
helloWindow.append(btnCon);

function showBlock(block) {
    helloWindow.style.opacity = "0";
    setTimeout(() => {
        helloWindow.classList.add("coin-window");
        block.classList.add("coin-window--on");
    }, 3000);
}

function showCreadit() {
    let credit = document.getElementsByClassName("credit--off")[0];
    let ipot = document.getElementsByClassName("ipot--on")[0];
    let nac = document.getElementsByClassName("nac--on")[0];
    if (ipot) {
        ipot.classList.remove("ipot--on");
        ipot.classList.add("ipot--off");
    }
    if (nac) {
        nac.classList.remove("nac--on");
        nac.classList.add("nac--off");
    }
    if (credit) {
        credit.classList.remove("credit--off");
        credit.classList.add("credit--on");
    }
}

function showIpot() {
    let credit = document.getElementsByClassName("credit--on")[0];
    let ipot = document.getElementsByClassName("ipot--off")[0];
    let nac = document.getElementsByClassName("nac--on")[0];
    if (credit) {
        credit.classList.remove("credit--on");
        credit.classList.add("credit--off");
    }
    if (nac) {
        nac.classList.remove("nac--on");
        nac.classList.add("nac--off");
    }
    if (ipot) {
        ipot.classList.remove("ipot--off");
        ipot.classList.add("ipot--on");
    }
}

function showNac() {
    let credit = document.getElementsByClassName("credit--on")[0];
    let ipot = document.getElementsByClassName("ipot--on")[0];
    let nac = document.getElementsByClassName("nac--off")[0];
    if (credit) {
        credit.classList.remove("credit--on");
        credit.classList.add("credit--off");
    }
    if (ipot) {
        ipot.classList.remove("ipot--on");
        ipot.classList.add("ipot--off");
    }
    if (nac) {
        nac.classList.remove("nac--off");
        nac.classList.add("nac--on");
    }
}

function getCredit() {
    let year = document.getElementsByClassName("credit-year")[0].value;
    let coin = document.getElementsByClassName("credit-sum")[0].value;
    let stave = document.getElementsByClassName("credit-stave")[0];
    let result = document.getElementsByClassName("credit-result")[0];
    if ((year && !(year == "0")) && (coin && !(coin == "0"))) {
        while (year > 0) {
            year--;
            coin *= 1 + Number(`${stave.value / 100}`);
        }
        result.value = Math.floor(Number(coin));
    }
}

function getIpot() {
    let year = document.getElementsByClassName("ipot-year")[0].value;
    let coin = document.getElementsByClassName("ipot-sum")[0].value;
    let stave = document.getElementsByClassName("ipot-stave")[0];
    let result = document.getElementsByClassName("ipot-result")[0];
    if ((year && !(year == "0")) && (coin && !(coin == "0"))) {
        while (year > 0) {
            year--;
            coin *= 1 + Number(`${stave.value / 100}`);
        }
        result.value = Math.floor(Number(coin));
    }
}

function getNac() {
    let year = document.getElementsByClassName("nac-year")[0].value;
    let coin = document.getElementsByClassName("nac-sum")[0].value;
    let stave = document.getElementsByClassName("nac-stave")[0];
    let result = document.getElementsByClassName("nac-result")[0];
    if ((year && !(year == "0")) && (coin && !(coin == "0"))) {
        while (year > 0) {
            year--;
            coin *= 1 + stave.value / 100;
        }
        result.value = Math.floor(coin);
    }
}



