const imgs = document.querySelectorAll('.header-slider ul img')
const prev_btn = document.querySelectorAll('.control_prev');
const next_btn = document.querySelectorAll('.control_next');

let n = 0;

function changeSlide(){
    for (let i= 0; i < imgs.length; i++){
        imgs[i].style.display = 'none';
    }
    imgs[i].style.display = 'block';
}
changeSlide();

prev_btn.addEventListener('click'.replace(e)=>{
    if(n > 0){
        n--;
    }
    else{
        n = images.length - 1;
    }
})
next_btn.addEventListener('click'.replace(e)=>{
    if(n < imgs.length - 1){
        n++;
    }
    else{
        n = images.length - 1;
    }
    changeSlide();
})