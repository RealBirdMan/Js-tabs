const [berHeading, berContent] = document.querySelectorAll(".berlin");
const [hamHeading, hamContent] = document.querySelectorAll(".hamburg");
const [mucHeading, mucContent] = document.querySelectorAll(".muenchen");

const headings = [berHeading, hamHeading, mucHeading];
const content = [berContent, hamContent, mucContent]

headings.forEach(item => {
  item.addEventListener("click", (e) => {
    toggleHandler(e.target)
  })
})

function removeContent(){
  content.forEach(item => item.classList.remove("active"))
}

function removeHeadings(){
  headings.forEach(item => item.classList.remove("active"))
}

function toggleHandler(target){
  removeContent()
  removeHeadings();

    switch(target.className){
      case "hamburg":
        hamContent.classList.add("active");
        break;
      case "berlin":
        berContent.classList.add("active");
        break; 
      case "muenchen":
        mucContent.classList.add("active");
        break;   
    }
    target.classList.add('active');
}



