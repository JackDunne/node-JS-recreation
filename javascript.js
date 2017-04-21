(function(){
  const doc = document;
  let buttons = doc.querySelectorAll("article div");
  for(let x = 0;x<buttons.length;x++){
  buttons[x].addEventListener("mouseover",function(){
    buttons[x].style.opacity = "0.75";
  });
  }

  for(let x = 0;x<buttons.length;x++){
  buttons[x].addEventListener("mouseout",function(){
    buttons[x].style.opacity = "1";
  });
  }
})();
