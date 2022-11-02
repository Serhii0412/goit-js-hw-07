import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");
const newGallery = createElements(galleryItems);
gallery.innerHTML = newGallery;
gallery.addEventListener("click", clickOnImage);

function createElements() {
  return galleryItems
    .map((item) => {
      return `<div class ="gallery__item">
              <a class="gallery__item" href=${item.original}>
                <img class="gallery__image" 
                  src=${item.preview} 
                  alt=${item.description} />
              </a>;
              </div>`;
    })
    .join("");
}

function clickOnImage(event) {
  event.preventDefault();
}

let lightbox = new SimpleLightbox(".gallery a", {
  captionType: "alt",
  captionDelay: 250,
});
console.log(galleryItems);