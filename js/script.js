{
 
   const removePicture = () => {
     const button = document.querySelector(".button");
     const Picture = document.querySelector(".Picture");
 
 
     button.addEventListener("click", () => {
       Picture.remove();
     });
 
 
   };
 
   removePicture();
 };
