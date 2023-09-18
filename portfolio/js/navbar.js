var showSidebar = false;
var navheader = document.getElementById('navbar')
var content = document.getElementById('main')

const textservices = document.getElementsByClassName('ç')


function toggleSidebar (){
  showSidebar = !showSidebar
  if(showSidebar){
    navheader.style.marginLeft = '-1vw'
    navheader.style.animationName = 'showSidebar'
    content.style.filter = 'blur(2px)'
  } else {
    navheader.style.marginLeft = '-100vw'
    navheader.style.animationName = ''
    content.style.filter = ''
  }
}

function closeSidebar(){
  if(showSidebar){
    toggleSidebar();
  }
}

window.addEventListener('resize', event => {
   if(window.innerWidth > 768 && showSidebar)
   {
    toggleSidebar();
   }
  }
)