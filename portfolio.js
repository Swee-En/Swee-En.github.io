img = document.getElementById("compimg");

function getState() {
    state = "normal"

    
}


function enlargeimage() {
    // Set image size to 1.5 times original
    img.style.transform = "scale(1.5)";
    img.style.
    // Animation effect 
    img.style.transition = "transform 0.25s ease";
  }

  // Function to reset image size
  function resetImg() {
    // Set image size to original
    img.style.transform = "scale(1)";
    img.style.transition = "transform 0.25s ease";
  }