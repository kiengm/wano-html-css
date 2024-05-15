function loadNotification() {
  let isDisplay = false;
  alert("xin chao");
}

let a = false;
function changeLogo() {
  const image = document.getElementById("id-image");

  if (image.style.border) {
    document.getElementById("id-image").style.removeProperty("border");
    document.getElementById("id-image").style.removeProperty("borderRadius");
    document.getElementById("id-image").src = "./public/asset/Ellipse 93.png";
  } else {
    document.getElementById("id-image").style.border = "2px solid blue";
    document.getElementById("id-image").style.borderRadius = "50%";
    document.getElementById("id-image").src = "./public/asset/Group 3616.png";
  }
}
