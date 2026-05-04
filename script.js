
// =========================
// BODY CARD CLICK
// =========================
function openCard(card){
    card.classList.toggle("active");
   }
   
   // =========================
   // GALLERY SCROLL
   // =========================
   function scrollGallery(id, direction){
   const gallery = document.getElementById(id);

   const scrollAmount = 300;

   gallery.scrollBy({
   left: direction * scrollAmount,
   behavior: "smooth"
 });
}
   
   // =========================
   // FULLSCREEN IMAGES (ALL PAGES)
   // =========================
   document.addEventListener("DOMContentLoaded", ()=>{
   
    const images = document.querySelectorAll("img");
   
    images.forEach(img=>{
     img.addEventListener("click", (e)=>{
   
       // iwas click sa nav or icons
       if(img.closest("nav")) return;
   
       // ONLY for gallery + progress images
       if(img.closest(".gallery") || img.closest(".card")){
         openModal(img.src);
       }
   
     });
    });
   
   });
   
   // =========================
   // MODAL
   // =========================
    function openModal(src){
    
      const old = document.querySelector(".modal");
      if(old) old.remove();
    
      const modal = document.createElement("div");
      modal.className = "modal";
      modal.style.display = "flex";
    
      modal.innerHTML = `<img src="${src}">`;
    
      modal.addEventListener("click", ()=> modal.remove());
    
      document.body.appendChild(modal);
    }

   // TYPING EFFECT
      const text = "DISCIPLINE TRANSFORMS YOU";
      let i = 0;

      function typing(){
      if(i < text.length){
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typing, 70);
      }
      }
      typing();
      // click expand
function openCard(card){
  card.classList.toggle("active");
}

// scroll reveal animation
const revealItems = document.querySelectorAll(".reveal");

function showOnScroll(){
  revealItems.forEach(el=>{
    const top = el.getBoundingClientRect().top;

    if(top < window.innerHeight - 80){
      el.classList.add("show");
    }
  });
}

window.addEventListener("scroll", showOnScroll);
showOnScroll();
