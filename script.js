document.addEventListener("DOMContentLoaded", function () {
  const textInputsContainer = document.getElementById('textInputs');
  const fontSelect = document.getElementById('font');
  const sizeSelect = document.getElementById('size');
  const lineHeightSlider = document.getElementById('lineHeight');
  const colorRadios = document.querySelectorAll('input[name="color"]');
  const arrangementSelect = document.getElementById('arrangement');
  const alignmentRadios = document.querySelectorAll('input[name="alignment"]');
  const neonText = document.getElementById('neonText');

  function updatePreview() {
    const font = fontSelect.value;
    const size = sizeSelect.value;
    const lineHeight = lineHeightSlider.value;
    const color = document.querySelector('input[name="color"]:checked').value;
    const alignment = document.querySelector('input[name="alignment"]:checked').value;
    const lines = parseInt(arrangementSelect.value, 10);

    neonText.style.fontFamily = font;
    neonText.style.fontSize = `${size}px`;
    neonText.style.lineHeight = lineHeight;
    neonText.style.color = 'rgb(255, 255, 255)';
    neonText.style.textAlign = alignment;

    const texts = Array.from(textInputsContainer.querySelectorAll('input')).map(input => input.value);
    neonText.innerHTML = texts.slice(0, lines).join('<br>');

    // Apply the neon glow effect based on the selected color
    neonText.style.textShadow = `
      0 0 5px ${color},
      0 0 10px ${color},
      0 0 20px ${color},
      0 0 40px ${color},
      0 0 80px ${color},
      0 0 90px ${color},
      0 0 100px ${color},
      0 0 150px ${color}
    `;
  }

  function createTextInputs(lines) {
    textInputsContainer.innerHTML = '';
    for (let i = 0; i < lines; i++) {
      const input = document.createElement('input');
      input.type = 'text';
      input.placeholder = `Line ${i + 1}`;
      input.addEventListener('input', updatePreview);
      textInputsContainer.appendChild(input);
    }
  }

  fontSelect.addEventListener('change', updatePreview);
  sizeSelect.addEventListener('change', updatePreview);
  lineHeightSlider.addEventListener('input', updatePreview);
  colorRadios.forEach(radio => radio.addEventListener('change', updatePreview));
  arrangementSelect.addEventListener('change', () => {
    createTextInputs(arrangementSelect.value);
    updatePreview();
  });
  alignmentRadios.forEach(radio => radio.addEventListener('change', updatePreview));

  // Initialize the inputs and preview
  createTextInputs(arrangementSelect.value);
  updatePreview();
});
