const key = document.querySelector("#key");
const keyCode = document.querySelector("#keyCode");

window.addEventListener("keydown", function(e){
    if(e.keyCode == 32){
        key.textContent = "You pressed: space";
    }else{
        key.textContent = `You pressed: ${e.key}`;
    }
});

window.addEventListener("keydown", function(e){
    keyCode.textContent = `Code: ${e.keyCode}`;
});