const colorinput = document.getElementById('input')
const body = document.getElementById('body')

colorinput.addEventListener('input', rgb)
function rgb(){
    const color = colorinput.value;
    body.style.backgroundColor = color 


}