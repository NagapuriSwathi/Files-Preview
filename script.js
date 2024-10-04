let fileInput = document.getElementById("file-input");
let previewFile = document.getElementById("preview-file");
let uploadButton = document.getElementById("upload-button");
let previewImage = document.getElementById("preview-image");
let previewAudio = document.getElementById("preview-audio");
let previewVideo = document.getElementById("preview-video");
let previewPdf = document.getElementById("preview-pdf");

function readFile(event){
  event.preventDefault();
  let fileReader = new FileReader();
  let inputFile = fileInput.files[0];
    
    if(inputFile){
        fileReader.readAsDataURL(inputFile);
        fileReader.addEventListener("load", () =>{
          let fileContent = fileReader.result;

            if(inputFile.type.startsWith("image/")){
              previewFile.style.display = "block";
              previewImage.classList.add("file-content");
              previewImage.src = fileContent;
            }
            else if(inputFile.type.startsWith("audio/")){
              previewFile.style.display = "block";
              previewAudio.classList.add("file-content");
              previewAudio.setAttribute("controls", true);
              previewAudio.src = fileContent;
            }
            else if(inputFile.type.startsWith("video/")){
              previewFile.style.display = "block";
              previewVideo.classList.add("file-content");
              previewVideo.setAttribute("controls", true)
              previewVideo.src = fileContent;
            }
            else if(inputFile.type == "application/pdf"){
              previewFile.style.display = "block";
              previewPdf.classList.add("file-content");
              previewPdf.style.height = "30rem";
              previewPdf.src = fileContent;
            }
            else{
              alert("Please upload an image, audio, video or a pdf file")
            }
          
          })
        }
    else{
      alert("Please choose a file")
    }

}

uploadButton.addEventListener("click", readFile);
