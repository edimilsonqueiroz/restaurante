
window.addEventListener('scroll',monitorarScroll);


function monitorarScroll(){
    if(window.scrollY > 0){
        document.querySelector('.scrollButton').style.display = 'block';
    }else{
        document.querySelector('.scrollButton').style.display = 'none';
    }
}


/* FUNCÕES */
function scrollTopo(){
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
}




