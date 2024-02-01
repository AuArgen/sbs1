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