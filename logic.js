let nav = document.querySelector(".navbar");
    window.onscroll=function(){
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("header_scrolled");
    }
    else{
        nav.classList.remove("header_scrolled");
    }
    }


  document.getElementById('themebtn').addEventListener('click', function()
   {
    document.querySelector('nav').classList.toggle('.dark-theme');
  });