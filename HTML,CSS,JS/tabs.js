// Väntar på att hela DOMen ska laddas
document.addEventListener('DOMContentLoaded', () => {
  // Väljer alla box-element
  const boxes = document.querySelectorAll('.box');
  // Väljer alla panel-element
  const panels = document.querySelectorAll('.panel');

  // Funktion för att ta bort 'active'-klassen från alla boxar och paneler
  function removeActiveClasses() {
    boxes.forEach(box => {
      box.classList.remove('active');
    });
    panels.forEach(panel => {
      panel.classList.remove('active');
    });
  }

  // Funktion för att växla 'active'-klassen på boxar och paneler
  function toggleActive(box) {
    // Om boxen som klickades på redan är aktiv, inaktivera den
    if (box.classList.contains('active')) {
      box.classList.remove('active');
      const panelId = box.dataset.panel;
      const panel = document.getElementById(panelId);
      panel.classList.remove('active');
    } else {
      // Ta bort aktiva klasser innan nya läggs till
      removeActiveClasses();
      // Aktivera den klickade boxen
      box.classList.add('active');
      // Aktivera motsvarande panel
      const panelId = box.dataset.panel;
      const panel = document.getElementById(panelId);
      panel.classList.add('active');
    }
  }

  // Lägger till klick-eventlyssnare för varje box
  boxes.forEach(box => {
    box.addEventListener('click', () => toggleActive(box));
  });
});
