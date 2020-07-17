
const navegacion = document.querySelector('.navegacion');

const seccion = document.querySelectorAll("seccion");
const navlinks = document.querySelectorAll(".nav-link");



window.addEventListener('scroll', () =>{
  mainFn();
});

const mainFn = () => {
seccion.forEach((seccion, i) =>{
  if(window.pageYOffset >= seccion.offsetTop - 10){
      navlinks.forEach(navlinks =>{
          navlinks.classList.remove
          ("change");
      });
      navlinks[i].classList.add
      ("change");
    }
});
};

mainFn();

$(window).ready(function(){
    
});

$(window).on('scroll', function(){
  
  var wScroll = $(this).scrollTop();
  
  if (wScroll > $('#skills').offset().top - ($(window).height() / 7.2)) {
    $('.html').addClass('htmlskill');
    $('.php').addClass('phpskill');
    $('.js').addClass('jsskill');
    $('.css').addClass('cssskill');
  } else {
    $('.html').removeClass('htmlskill');
    $('.php').removeClass('phpskill');
    $('.js').removeClass('jsskill');
    $('.css').removeClass('cssskill');
  }
  
});


  