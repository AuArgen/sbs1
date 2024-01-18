

let container = document.querySelector('.container')

for(let i = 1; i <= 10; i++) {
    let block = `
        <div class="block" id = 'block_${i}'>
            <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" alt="">
            <h2>Lorem primer #${i}</h2>
            <input type="radio" id = 'radio_${i}' name='radio'>
        </div>
        `
    container.innerHTML += block
}

container.onclick = () => {
    for(let i = 1; i <= 10; i++) {
        // document.querySelector(`#block_${i}`).onclick = () => {
        //     if(document.querySelector('.block.green')) {
        //           document.querySelector('.block.green').classList.remove('green') 
        //     }
        //     document.querySelector(`#block_${i}`).classList.add('green');
        // }
        if(document.querySelector(`#radio_${i}`).checked) {
            if(document.querySelector('.block.green')) {
                document.querySelector('.block.green').classList.remove('green') 
            }
            document.querySelector(`#block_${i}`).classList.add('green');
        }
    }
}
let lables = document.querySelectorAll('.test label')
for (let i = 0; i < lables.length; i++){
    lables[i].classList.add(`l_${i+1}`)
}
document.querySelector('.btn-answer').onclick = () => {
let ans = 0;

    for (let i = 1; i <= 12; i++) {
        let r = document.querySelector(`#r${i}`)
        lables[i-1].style.background ='none'
        if (r.checked && (i === 2 || i == 5 || i === 11)) {
            lables[i-1].style.background = 'green';
            ans ++;
        }else if (r.checked) {
            lables[i-1].style.background = 'red';
        }
    }
    alert(ans)
}
