function ibg(){
    let ibg=document.querySelectorAll(".ibg");
    for (var i = 0; i < ibg.length; i++) {
        if(ibg[i].querySelector('img')){
            ibg[i].style.backgroundImage = 'linear-gradient(rgba(4,9,30,0.7),rgba(4,9,30,0.7)), url('+ibg[i].querySelector('img').getAttribute('src')+')';
        }
    }
}
ibg();


let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.navigation');
menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
})
