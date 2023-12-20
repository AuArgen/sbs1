let inp1 = document.querySelector(".inp1")
let inp2 = document.querySelector(".inp2")
let inp3 = document.querySelector(".border")
inp1.onchange = () => {
    let width = +inp1.value;
    let height = +inp2.value;
    if (width == 0) {
        document.querySelector(".error1").classList.add("active")
    } else if (width < 0) {
        document.querySelector(".error1").classList.remove("active")
        document.querySelector(".error3").classList.add("active")
    }else {
        document.querySelector(".error1").classList.remove("active")
        document.querySelector(".error3").classList.remove("active")
    }
    if (height == 0) {
        document.querySelector(".error2").classList.add("active")
    } else if (height < 0) {
        document.querySelector(".error2").classList.remove("active")
        document.querySelector(".error4").classList.add("active")
    } else {
        document.querySelector(".error2").classList.remove("active")
        document.querySelector(".error4").classList.remove("active")
    }
    document.querySelector(".box").style.width = 0 + "px";
    document.querySelector(".box").style.height = 0 + "px";
    if (width > 0) {
        if (height > 0) {
            document.querySelector(".box").style.width = width + "px";
            document.querySelector(".box").style.height = height + "px";
        }
    }
}

inp2.oninput = () => {
    let width = +inp1.value;
    let height = +inp2.value;
    if (width == 0) {
        document.querySelector(".error1").classList.add("active")
    } else if (width < 0) {
        document.querySelector(".error1").classList.remove("active")
        document.querySelector(".error3").classList.add("active")
    }else {
        document.querySelector(".error1").classList.remove("active")
        document.querySelector(".error3").classList.remove("active")
    }
    if (height == 0) {
        document.querySelector(".error2").classList.add("active")
    } else if (height < 0) {
        document.querySelector(".error2").classList.remove("active")
        document.querySelector(".error4").classList.add("active")
    } else {
        document.querySelector(".error2").classList.remove("active")
        document.querySelector(".error4").classList.remove("active")
    }
    document.querySelector(".box").style.width = 0 + "px";
    document.querySelector(".box").style.height = 0 + "px";
    if (width > 0) {
        if (height > 0) {
            document.querySelector(".box").style.width = width + "px";
            document.querySelector(".box").style.height = height + "px";
        }
    }
}

inp3.oninput = () => {
    let width = +inp1.value;
    let height = +inp2.value;
    let borderRadiusParametr = +inp3.value;
    if (width == 0) {
        document.querySelector(".error1").classList.add("active")
    } else if (width < 0) {
        document.querySelector(".error1").classList.remove("active")
        document.querySelector(".error3").classList.add("active")
    }else {
        document.querySelector(".error1").classList.remove("active")
        document.querySelector(".error3").classList.remove("active")
    }
    if (height == 0) {
        document.querySelector(".error2").classList.add("active")
    } else if (height < 0) {
        document.querySelector(".error2").classList.remove("active")
        document.querySelector(".error4").classList.add("active")
    } else {
        document.querySelector(".error2").classList.remove("active")
        document.querySelector(".error4").classList.remove("active")
    }
    document.querySelector(".box").style.width = 0 + "px";
    document.querySelector(".box").style.height = 0 + "px";
    if (width > 0) {
        if (height > 0) {
            document.querySelector(".box").style.width = width + "px";
            document.querySelector(".box").style.height = height + "px";
        }
    }

    document.querySelector(".box").style.borderRadius = borderRadiusParametr +"px";
}


document.querySelector(".select1").onchange = () => {
    let s = +document.querySelector(".select1").value
    alert(s)
}