// Bitter and Blunt Tabs
const BBthumbnail = document.getElementById("BBthumbnail");
const BBsingleArt = document.getElementById("BBsingleArt");

const BBthumbnailLabel = document.getElementById("BBthumbnailLabel");
const BBsingleArtLabel = document.getElementById("BBsingleArtLabel");

const BBimage = document.getElementById("BBimg");
const BBimageLink = document.getElementById("BBimgLink");

BBthumbnail.addEventListener("click", function () {
  BBthumbnailLabel.classList.add('active');
  BBsingleArtLabel.classList.remove('active');
  BBimage.src = "BlueBird.png";
  BBimageLink.href = "BlueBird.png";
});

BBsingleArt.addEventListener("click", function () {
  BBsingleArtLabel.classList.add('active');
  BBthumbnailLabel.classList.remove('active');
  BBimage.src = "BlueBirdStem.png";
  BBimageLink.href = "BlueBirdStem.png";
});
