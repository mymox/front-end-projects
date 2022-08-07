// MENU
const divtoShow = 'nav .menu'
const divPopup = document.querySelector(divtoShow);
const divTrigger = document.querySelector('.m-trigger')

divTrigger.addEventListener('click' , ()=>{
    setTimeout(()=>{
        if(!divPopup.classList.contains('show')){
            divPopup.classList.add('show');
            document.body.classList.add('menu-visible')
        }
    }, 250)
})

// closing automatically after clicking outside of the menu
document.addEventListener('click',(e)=>{ 
    const isClosest = !e.target.closest(divtoShow);

    if(isClosest && divPopup.classList.contains('show')){
        divPopup.classList.remove('show');
        document.body.classList.remove('menu-visible');
    }
})

// search 

const sTrigger = document.querySelector('.s-trigger');
const addclass = document.querySelector('.site');
sTrigger.addEventListener('click', ()=>{
    addclass.classList.toggle('showsearch')
})

// slider


const theSlider = new Swiper('.thumb-big', {
    loop: true,
    slidePerView: 1,
    // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },
 
  autoplay: {
    delay: 3000,
  },
  

  });



  // products slider
const tabbedNav = new Swiper('.tnav' , {
    spaceBetween: 20,
    slidesPerView:6,
    centeredSlides:true,
    slidesPerGroup:false,

});



const theTab = new Swiper('.tabbed-item', {
    loop: true,
    slidePerView: 1,
    autoHeight:true,
  
  thumbs:{
    swiper:tabbedNav
  }
  

  });

//   on scroll animation

const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.intersectionRatio > 0){
            entry.target.classList.add('this')
        }
    })
})

const box = document.querySelectorAll('.animate'); 
box.forEach((el) => {
    io.observe(el);
})