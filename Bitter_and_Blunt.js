// Bitter and Blunt Tabs
const BaBthumbnail = document.getElementById("BaBthumbnail");
const BaBsingleArt = document.getElementById("BaBsingleArt");
const BaBunusedSingleArt = document.getElementById("BaBunusedSingleArt");

const BaBthumbnailLabel = document.getElementById("BaBthumbnailLabel");
const BaBsingleArtLabel = document.getElementById("BaBsingleArtLabel");
const BaBunusedSingleArtLabel = document.getElementById("BaBunusedSingleArtLabel");

const BaBimage = document.getElementById("BaBimg");
const BaBimageLink = document.getElementById("BaBimgLink");

BaBthumbnail.addEventListener("click", function () {
  BaBthumbnailLabel.classList.add('active');
  BaBsingleArtLabel.classList.remove('active');
  BaBunusedSingleArtLabel.classList.remove('active');
  BaBimage.src = "Bitter_and_Blunt.png";
  BaBimageLink.href = "Bitter_and_Blunt.png";
});

BaBsingleArt.addEventListener("click", function () {
  BaBsingleArtLabel.classList.add('active');
  BaBthumbnailLabel.classList.remove('active');
  BaBunusedSingleArtLabel.classList.remove('active');
  BaBimage.src = "PaperAlibisStem.png";
  BaBimageLink.href = "PaperAlibisStem.png";
});

BaBunusedSingleArt.addEventListener("click", function () {
  BaBunusedSingleArtLabel.classList.add('active');
  BaBthumbnailLabel.classList.remove('active');
  BaBsingleArtLabel.classList.remove('active');
  BaBimage.src = "BitterAndBluntStem.png";
  BaBimageLink.href = "BitterAndBluntStem.png";
});