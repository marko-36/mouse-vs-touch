window.inputMode = `undetected`;
window.mousemovecount = 0;
window.permanentDetection = true;
window.preventSimMousemove = false;
var body = document.querySelector("body");

removeInputModeListeners = () => {
    document.removeEventListener('touchstart', setInputModeT)
    //document.removeEventListener('touchmove', setInputModeT)
    document.removeEventListener('mousemove', addMouseMoves)
    document.removeEventListener('mousedown', () =>{window.mousemovecount = 0})
    document.removeEventListener('click', () => { window.preventSimMousemove = false })
}

setInputModeT = () => {
    window.inputMode = 'touch';
    window.preventSimMousemove = true;    
    body.className ='touch';
    console.log('inputMode: touch')
    if (!window.permanentDetection) {removeInputModeListeners()}
}

addMouseMoves = () => {
    if (!window.preventSimMousemove){
        window.mousemovecount++;
        if (window.mousemovecount > 1){
            window.inputMode = 'mouse';
            body.className = 'mouse';
            console.log('inputMode: mouse')
            if (!window.permanentDetection) {removeInputModeListeners()}                    
        }
    }    
}

document.addEventListener('touchstart', setInputModeT)
//document.addEventListener('touchmove', setInputModeT)
document.addEventListener('mousemove', addMouseMoves)
document.addEventListener('mousedown', () =>{window.mousemovecount = 0})
document.addEventListener('click', () => { window.preventSimMousemove = false })