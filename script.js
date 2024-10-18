document.querySelectorAll('.gallery-item img').forEach((img) => {
    const originalSrc = img.src;
    const gifSrc = img.getAttribute('data-gif');
  
    img.addEventListener('mouseover', () => {
      img.src = gifSrc;
    });
  
    img.addEventListener('mouseout', () => {
      img.src = originalSrc;
    });
  });



  function toggleOverlay(section) {
    const overlay = document.getElementById("about-overlay");
    const video = document.querySelector(".video-container iframe");
    let works=document.querySelector(".gallery-container")


    if (section === "about") {
      overlay.classList.toggle("hidden");
      video.classList.toggle("blur");
      works.style.display="none"
      overlay.style.display="flex";

    }

    if (overlay.classList.contains("hidden")) {
      video.classList.remove("blur");
    }
  }

  // Show the menu after 7 seconds
  window.onload = function () {
    setTimeout(function () {
      document.querySelector(".menu").classList.remove("hidden");
    }, 5000);
  };


  function work(){
    let works=document.querySelector(".gallery-container")
    const overlay = document.getElementById("about-overlay");

    if (works.style.display === "none") {
      works.style.display = "grid";
  } else {
      works.style.display = "none";
  }
      
  

    overlay.style.display="none";

    

  }
  