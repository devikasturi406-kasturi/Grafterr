export function initCarousel() {
  const track = document.querySelector(".carousel__track");
  const items = document.querySelectorAll(".carousel__item");
  const nextBtn = document.querySelector(".next");
  const prevBtn = document.querySelector(".prev");

  let index = 0;

  function getSlidesPerView() {
    if (window.innerWidth < 768) return 1;
    if (window.innerWidth < 1024) return 2;
    return 3;
  }

  function updateCarousel() {
    const slidesPerView = getSlidesPerView();
    const itemWidth = items[0].getBoundingClientRect().width;

    const maxIndex = items.length - slidesPerView;
    if (index > maxIndex) index = maxIndex;

    track.style.transform = `translateX(-${index * itemWidth}px)`;

    prevBtn.disabled = index === 0;
    nextBtn.disabled = index >= maxIndex;
  }

  nextBtn.addEventListener("click", () => {
    index++;
    updateCarousel();
  });

  prevBtn.addEventListener("click", () => {
    index--;
    updateCarousel();
  });

  window.addEventListener("resize", updateCarousel);

  updateCarousel();
}
