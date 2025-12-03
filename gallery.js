
function upDate(previewPic) {

    console.log("Event triggered! Hàm upDate đang chạy.");

  
    console.log("Alt text:", previewPic.alt);
    console.log("Source:", previewPic.src);

    
    var imageDiv = document.getElementById("image");

    imageDiv.innerHTML = previewPic.alt;

 
    imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
}

function undo() {
   
    var imageDiv = document.getElementById("image");

 
    imageDiv.style.backgroundImage = "url('')";

   
    imageDiv.innerHTML = "Hover over an image below to display here.";

}
