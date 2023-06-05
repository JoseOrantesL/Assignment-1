const hauntings = class {
  
  
  // static functions can be called even if no hauntings object is initialized
  static flickerText(intensity, flicker){
    //console.log("flicker is running")
      flicker = ! flicker;
      
      let flickerText = document.getElementsByClassName("flickerText");
      for (let x = 0; x < flickerText.length; x++){
        //console.log(flickerText[x].style)
        if (flicker && Math.random() < intensity)
          flickerText[x].style.fontSize = (Math.random() *20 + 30) + "pt";
        else
          flickerText[x].style.fontSize = "75pt";
      }
      
   }
   
   
   
  static flickerImage(intensity, flicker){
      flicker = ! flicker;
      
      
      let flickerImage = document.getElementsByClassName("flickerImage");
      for (let x = 0; x < flickerImage.length; x++){
        
        if (flicker && Math.random() < intensity)
          flickerImage[x].style.mixBlendMode = "normal";
        else
          flickerImage[x].style.mixBlendMode = "exclusion";
        }
    }
    
  static textReplacement(intensity, data){
    let phrases = ["LIVE AS ONE!", "<strong>", "</strong>"];
    if (data.pagesVisited["Many Happy Returns of The Day; story"])
      phrases.push("<strong>WE'RE COMING FOR YOU!</strong>")
    if (data.pagesVisited["Dog Pics"])
        phrases.push('<iframe width="560" height="315" src="https://www.youtube.com/embed/BobA5ujHkvU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>');

    let paragraphs = document.getElementsByTagName("p");
    for (let x = 0; x < paragraphs.length; x++){
      
      if (Math.random() < intensity){
        let textArray = paragraphs[x].innerHTML.split(" ");
        let insertionText = phrases[Math.floor(Math.random()*phrases.length)];
        let start = Math.floor(Math.random()*(textArray.length-insertionText.length))
        let end = start + insertionText.split(" ").length;
        textArray.splice(start, end, insertionText);
        let newInnerHtml = textArray.join(" ");
        paragraphs[x].innerHTML = newInnerHtml;
      }
    }
    
    
    
  }    
    
}

/*
    function runAway(event, element){

    console.log(event, element)
    element.style.top = event.ScreenY + 5
    }
    */