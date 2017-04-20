function buttons(){
  const doc = document;
  let buttons = doc.querySelectorAll("article div");
  for(let x = 0;x<buttons.length;x++){
  buttons[x].addEventListener("mouseover",function({
    button[x].style.opacity = "75%";
    }));
  }
}
