import { useEffect, useState } from "react";

function App() {

  let [showText, setShowText] = useState("");
  let [imageURL, setImageURL] = useState("");

  useEffect(() => {
    if (imageURL.length > 0) {
      console.log("here");
      const encodedParams = new URLSearchParams();
      encodedParams.append("data", imageURL);
      encodedParams.append("lang", "eng");

      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'X-RapidAPI-Key': process.env.REACT_APP_IMAGE2TEXT_API_KEY,
          'X-RapidAPI-Host': 'ocr-100-image-text-extractor.p.rapidapi.com'
        },
        body: encodedParams
      };

      fetch('https://ocr-100-image-text-extractor.p.rapidapi.com/ocr', options)
        .then(response => {
          console.log(response);
          return response.text();
        })
        .then(response => {
          console.log(response);
          setShowText(response);
        })
        .catch(err => console.log(err.toString()));
    }
  }, [imageURL]);

  async function textExtract() {
    let image = document.getElementById("imageFile").files[0];
    if (image !== undefined) {
      console.log(image);
      let data = new FormData();
      console.log(process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET);
      data.append('upload_preset', process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET);
      data.append('file', image);
      await fetch("https://api.Cloudinary.com/v1_1/kunalpal215/image/upload", {
        method: 'POST',
        body: data
      }).then((resp) => resp.json()).then((jsonResp) => { setImageURL(jsonResp["secure_url"]) });
    }
  }

  return (
    <>
      <nav class="navbar bg-info">
        <div class="container-fluid">
          <h3>Image2Text & Image Uploader</h3>
        </div>
      </nav>
      <div class="m-3">
        <input class="form-control" type="file" id="imageFile" accept="image/x-png,image/gif,image/jpeg" />
      </div>
      <div class="d-grid gap-2 col-6 mx-auto my-3">
        <button class="btn btn-primary" type="button" onClick={textExtract}>Extract Text & Upload image</button>
      </div>
      <div class="card mx-auto my-3" style={{ width: "90%" }}>
        <div class="card-body">
          <h5 class="card-title">Extracted Text: </h5>
          <p class="card-text">{showText.length === 0 ? "Select an image to see" : showText}</p>
        </div>
      </div>
      <div class="card mx-auto my-3" style={{ width: "90%" }}>
        <div class="card-body">
          <h5 class="card-title">Uploaded Image URL: </h5>
          <p class="card-text">{imageURL.length === 0 ? "Select an image to see" : imageURL}</p>
        </div>
      </div>
    </>
  );
}

export default App;
