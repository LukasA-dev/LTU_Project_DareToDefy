// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
    // Select all the boxes
    const boxes = document.querySelectorAll('.box');
    // Select all the panels
    const panels = document.querySelectorAll('.panel');
  
    // Function to remove 'active' class from all boxes and panels
    function removeActiveClasses() {
      boxes.forEach(box => {
        box.classList.remove('active');
      });
      panels.forEach(panel => {
        panel.classList.remove('active');
      });
    }
  
    // Function to toggle the 'active' class on boxes and panels
    function toggleActive(box) {
      // If the clicked box is already active, deactivate it
      if (box.classList.contains('active')) {
        box.classList.remove('active');
        const panelId = box.dataset.panel;
        const panel = document.getElementById(panelId);
        panel.classList.remove('active');
      } else {
        // Remove active classes before adding new ones
        removeActiveClasses();
        // Activate the clicked box
        box.classList.add('active');
        // Activate the corresponding panel
        const panelId = box.dataset.panel;
        const panel = document.getElementById(panelId);
        panel.classList.add('active');
      }
    }
  
    // Add click event listeners to each box
    boxes.forEach(box => {
      box.addEventListener('click', () => toggleActive(box));
    });
  });
  