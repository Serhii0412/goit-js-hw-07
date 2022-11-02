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
        <a class="gallery__link" href=${item.original}>
        <img class="gallery__image"
        src=${item.preview}
        data-source=${item.original}
        alt=${item.description}/>
        </a>
        </div>`;
    })
    .join("");
}

let instance;

function clickOnImage(event) {
  event.preventDefault();

  instance = basicLightbox.create(
    `<img src="${event.target.dataset.source}" alt="${event.target.dataset.description}">`
  );

  instance.show();
}

document.addEventListener("keydown", (evt) => {
  if (evt.key === "Escape") {
    gallery.removeEventListener("keydown", evt);
    instance.close();
  }
});

console.log(galleryItems);
