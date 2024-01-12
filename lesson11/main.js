let div = document.querySelector("div")
let verbase_name = "Enter your text"
let userText = ''
if (div.innerHTML === '') {
    div.innerHTML = verbase_name
}

let au = new Audio("./mp3/m.mp3");
let play_music = 0
document.querySelector("button").onclick = () => {
    if (play_music === 0) {
        au.play();
        play_music = 1
        document.querySelector("button").textContent = 'Pause music'
    }else {
        au.pause();
        play_music = 0
        document.querySelector("button").textContent = 'Play music'
    }
}
let left = 0;
let tops = 0;
let width_body = +document.querySelector('body').offsetWidth
window.onkeydown = (e) => {
    e = e.key
    if (e >= '1' && e <='8') {
        let a = new Audio(`./mp3/sound${+e+8}.mp3`);
        a.play();
    }
    if(e === 'ArrowRight') {
        if (left >= width_body - 40) left = -10
        left += 10
        document.querySelector('p').style.marginLeft = left +'px'; 
        return 0;
    }
    if(e === 'ArrowLeft') {
        if (left <= 0) {
            left = width_body - 20
        }
        left -= 10
        document.querySelector('p').style.marginLeft = left +'px'; 
        return 0;
    }
    if(e === 'ArrowUp') {
        tops += 10
        document.querySelector('p').style.marginTop = tops +'px'; 
        return 0;
    }
    if(e === 'ArrowDown') {
        tops -= 10
        document.querySelector('p').style.marginTop = tops +'px'; 
        return 0;
    }
    if (e === 'Alt' || e === 'Shift' || e ==='Tab' || e === 'Control' || e === 'CapsLock'){
        return 0;
    }
    if (div.innerHTML === verbase_name) {
        userText = ''
    }
    if (e === 'Backspace') {
        userText = userText.substr(0,userText.length-1);
    }
    else {
        userText += e 
    }

    
    

    div.textContent = userText
}

window.onkeyup = (e) => {
    e = e.key
    if (e === 'W') {
        document.querySelector("body").style = 'background:white; color:black;';
    }
    if (e === 'B') {
        document.querySelector("body").style = 'background:Black; color:green;';
        
    }
}