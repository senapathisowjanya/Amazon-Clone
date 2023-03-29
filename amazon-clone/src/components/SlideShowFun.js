function slideshowFun(images){
 
    let index = 0;
    setInterval(() => {
      let image = movieImages[index];
      let cele = document.createElement("img");
      cele.setAttribute("src",image);
      document.getElementById("slideshow").innerHTML="";
      document.getElementById("slideshow").append(cele);
      index++;
      if(index===movieImages.length){
       index=0
      }
      },2000)
   }
   slideshowFun();
  
  
  var movieImages = ["./images/s10.png","./images/s12.png","./images/s13.png","./images/s14.png","./images/s15.png"]
  
   window.addEventListener("load", function () {
  
       slideshowFun();
   });

   export default slideshowFun;