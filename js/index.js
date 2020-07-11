const randomClick=document.querySelector('.random');
const passShow=document.getElementById('pass');
const cloneClick=document.querySelector('.clone');
randomClick.addEventListener('click',random);
cloneClick.addEventListener('click',copy);

function random(){
    var chars='';
    var pass='';
    for(let i=33;i<127;i++){
        chars+=String.fromCharCode(i);
    }

    for(let i=0;i<16;i++){
        var randomPass=Math.floor(Math.random()*chars.length);
        pass+=chars.substring(randomPass,randomPass+1);
    }
    passShow.value=pass;
}

function copy(){
    var passCopy=document.getElementById('pass');

    passCopy.select();
    passCopy.setSelectionRange(0,99999);
    document.execCommand('copy');

    alert("Đã copy" + passCopy.value)
}