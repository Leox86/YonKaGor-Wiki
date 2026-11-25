// Circus Hop Tabs

const img1 = "Circus_Hop.png"
const img2 = "CircusHopStem.png"

const Thumbnail = document.getElementById("Thumbnail");
const singleArt = document.getElementById("SingleArt");

const thumbnailLabel = document.getElementById("ThumbnailLabel");
const singleArtLabel = document.getElementById("SingleArtLabel");

const Image = document.getElementById("Img");
const imageLink = document.getElementById("ImgLink");

Thumbnail.addEventListener("click", function () {
  thumbnailLabel.classList.add('active');
  singleArtLabel.classList.remove('active');
  Image.src = img1;
  imageLink.href = img1;
});

singleArt.addEventListener("click", function () {
  singleArtLabel.classList.add('active');
  thumbnailLabel.classList.remove('active');
  Image.src = img2;
  imageLink.href = img2;
});
