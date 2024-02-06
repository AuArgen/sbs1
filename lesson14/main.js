function texterea(x,y) {
    document.querySelector(`.text_${y}`).textContent = x
}
for (let i = 0; i <= 10; i++) {
    let ans = '<br>'
    for (let j = 0; j <= i; j++) {
        ans +='<div class="gl"></div>'
    }
    document.querySelector('.for .info').innerHTML += ans
}
for (let i = 10; i > -1; i--) {
    let ans = '<br>'
    for (let j = 0; j <= i; j++) {
        ans +='<div class="gl"></div>'
    }
    document.querySelector('.for .info1').innerHTML += ans
}

for (let i = 0; i <= 10; i++) {
    let ans = '<br>'
    for(let j = 0; j < 10 - i; j++){
        ans +='<div class="ga"></div>'
    }
    for (let j = 0; j <= i; j++) {
        ans +='<div class="gl"></div>'
    }
    for (let j = 1; j <= i; j++) {
        ans +='<div class="gl"></div>'
    }
    document.querySelector('.for .info2').innerHTML += ans
}
for (let i = 9; i >= 0; i--) {
    let ans = ''
    for(let j = 0; j < 10 - i; j++){
        ans +='<div class="ga"></div>'
    }
    for (let j = 0; j <= i; j++) {
        ans +='<div class="gl"></div>'
    }
    for (let j = 1; j <= i; j++) {
        ans +='<div class="gl"></div>'
    }
    ans += '<br>'
    document.querySelector('.for .info3').innerHTML += ans
}

for (let i = 0; i <= 10; i++) {
    let ans = '<br>'
    for(let j = 0; j < 10 - i; j++){
        ans +='<div class="ga"></div>'
    }
    for (let j = 0; j <= i; j++) {
        if(j == 0)ans +='<div class="gl"></div>'
        else ans +='<div class="ga"></div>'
    }
    for (let j = 1; j <= i; j++) {
        if(j == i)ans +='<div class="gl"></div>'
        else ans +='<div class="ga"></div>'
    }
    document.querySelector('.for .info4').innerHTML += ans
}
for (let i = 9; i >= 0; i--) {
    let ans = '<br>'
    for(let j = 0; j < 10 - i; j++){
        ans +='<div class="ga"></div>'
    }
    for (let j = 0; j <= i; j++) {
        if(j == 0)ans +='<div class="gl"></div>'
        else ans +='<div class="ga"></div>'
    }
    for (let j = 1; j <= i; j++) {
        if(j == i)ans +='<div class="gl"></div>'
        else ans +='<div class="ga"></div>'
    }
    document.querySelector('.for .info5').innerHTML += ans
}

for (let i = 0; i <= 10; i++) {
    let ans = '<br>'
    for(let j = 0; j < 10 - i; j++){
        ans +='<div class="ga"></div>'
    }
    for (let j = 0; j <= i; j++) {
        if (j == 10 && i == 10) ans +='<div class="gl gr"></div>'
        else if(j == 0 || j == i || i == 10)ans +='<div class="gl"></div>'
        else ans +='<div class="ga"></div>'
    }
    for (let j = 1; j <= i; j++) {
        
        if(j == i || i == 10)ans +='<div class="gl"></div>'
        else ans +='<div class="ga"></div>'
    }
    document.querySelector('.for .info6').innerHTML += ans
}
for (let i = 9; i >= 0; i--) {
    let ans = ''
    for(let j = 0; j < 10 - i; j++){
        ans +='<div class="ga"></div>'
    }
    for (let j = 0; j <= i; j++) {
        if(j == 0 || j == i)ans +='<div class="gl"></div>'
        else ans +='<div class="ga"></div>'
    }
    for (let j = 1; j <= i; j++) {
        if(j == i)ans +='<div class="gl"></div>'
        else ans +='<div class="ga"></div>'
    }
    ans += "<br>"
    document.querySelector('.for .info7').innerHTML += ans
}