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


    if (section === "about") {
      overlay.classList.toggle("hidden");
      video.classList.toggle("blur");
      

    }
    

    if (overlay.classList.contains("hidden")) {
      video.classList.remove("blur");
    }
    
  }




  function toggleOverlayTwo(section) {
    const overlaytwo = document.getElementById("work-overlay-sec");
    const video = document.querySelector(".video-container iframe");


    if (section === "work") {
      overlaytwo.classList.toggle("hidden-two");
      video.classList.toggle("blur");
     

    }

    if (overlaytwo.classList.contains("hidden-two")) {
      video.classList.remove("blur-two");
    }
  }


  // Show the menu after 7 seconds
  window.onload = function () {
    setTimeout(function () {
      document.querySelector(".menu").classList.remove("hidden");
      // document.querySelector(".menu").classList.remove("hidden2");
    }, 3000);
  };

