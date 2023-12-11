/* Carousel image script */
const buttons = document.querySelectorAll("[data-carousel-button]")

// Itererar över varje knapp som hör till karusellen
buttons.forEach(button => {
  // Lägger till en händelsehanterare för klickhändelse på varje knapp
  button.addEventListener("click", () => {
    // Bestämmer offset baserat på om knappen är 'next' eller 'prev'
    const offset = button.dataset.carouselButton === "next" ? 1 : -1;

    // Hittar föräldern till den aktuella knappen och sedan dess barn som har attributet 'data-slides'
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]");

    // Hittar den nuvarande aktiva bilden/sliden
    const activeSlide = slides.querySelector("[data-active]");
    // Beräknar index för nästa slide baserat på offset
    let newIndex = [...slides.children].indexOf(activeSlide) + offset;
    // Loopar till första sliden om den går förbi sista slidens index
    if (newIndex < 0) newIndex = slides.children.length - 1;
    // Loopar till sista sliden om den går förbi första slidens index
    if (newIndex >= slides.children.length) newIndex = 0;

    // Sätter den nya sliden som aktiv och tar bort aktiv-status från den nuvarande
    slides.children[newIndex].dataset.active = true;
    delete activeSlide.dataset.active;
  });
});