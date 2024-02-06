let timer = setInterval(f1, 10)

let s = 0
let timerClass = document.querySelector(".timer")
let blockText = document.querySelector(".blockText .text")
let text = blockText.textContent
let textN = text.length
let ts = ''
blockText.textContent = ts;

function f1() {
    s++;
    timerClass.textContent = s
    if (s < textN) {
        writerText()
    }
    if (s === textN) {
        document.querySelector(".blockText .line").classList.remove('active')
    }

}

function f2() {
    clearInterval(timer)
}

function f3() {
    timer = setInterval(f1, 10)
}

function writerText() {
    ts = text[s]
    blockText.textContent += ts
}