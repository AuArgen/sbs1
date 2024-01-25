let container = document.getElementById('container')
let n = 30
for (let i = 1; i <= n; i++) {
    container.innerHTML += `
    <div class="block" id="block_${i}" onclick="boe(${i})">
        <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" alt="">
        <h3>Hello</h3>
    </div>
    `;
}

function boe(x) {
    if (document.querySelector('.block.active')) {
        document.querySelector('.block.active').classList.remove('active')
    }
    document.getElementById(`block_${x}`).classList.add('active')
}


function myCalc() {
    let v1 = document.querySelector('.num1').value
    let v2 = document.querySelector('.num2').value
    let v3 = document.querySelector('.num3').value
    let ans = 0;
    if (v1 === '' || v2 === '' || v3 === '') ans = 'Баарына сан жазыныз!!!'
    else ans = +v1 + +v2 + +v3

    document.querySelector('.result').textContent = ans
}

