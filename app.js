window.addEventListener("DOMContentLoaded", () => {
  let btn = document.getElementById("setting");
  let light_theme = document.getElementById("light_theme");
  let dark_theme = document.getElementById("dark_theme");

  let darkText = document.getElementsByClassName("dark");
  darkText = Array.from(darkText)
  btn_sound = new Audio("./Assets/btn_sound.mp3");

  let themeBox = document.getElementById("theme");
  btn.addEventListener("click", () => {
    btn_sound.currentTime = 0;
    btn_sound.play();
    themeBox.classList.toggle("setting");
  });

  light_theme.addEventListener("click", () => {
    document.body.style.backgroundColor = "#ffffff";
    themeBox.classList.toggle("setting");
    btn_sound.currentTime = 0;
    btn_sound.play();
    darkText.forEach(element => {
      element.classList.remove("dark_text");
    });
  
  });

  dark_theme.addEventListener("click", () => {
    document.body.style.backgroundColor = "#333333";
    themeBox.classList.toggle("setting");
    btn_sound.currentTime = 0;
    btn_sound.play();
    darkText.forEach(element => {
      element.classList.add("dark_text");
    });

  });

  // ++++++++ SCROLL TO TOP ++++++++++++++++++++++
  let mybtn = document.getElementById("myBtn");
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 200 ||
      document.documentElement.scrollTop > 200
    ) {
      mybtn.style.display = "block";
    } else {
      mybtn.style.display = "none";
    }
  }

  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  mybtn.addEventListener("click",topFunction);



  //  ++++++++++++     Scrolling with javascript +++++++++++++

  let course = document.getElementById("course");
  let about = document.getElementById("about");
  let sub = document.getElementById("subscribe");

  // -----------------------------------------------
  let courses = document.getElementById("courses");
  let about_to = document.getElementById("about_to");
  let new_course = document.getElementById("new_course");

  course.addEventListener("click",()=>{
    courses.scrollIntoView();

  })
  about.addEventListener("click",()=>{
    about_to.scrollIntoView();

  })
  sub.addEventListener("click",()=>{
    new_course.scrollIntoView();

  })
});
