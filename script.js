const fontSelect = document.getElementById('font');
const sizeSelect = document.getElementById('size');
const colorRadios = document.querySelectorAll('input[name="color"]');
const arrangementSelect = document.getElementById('arrangement');
const alignmentRadios = document.querySelectorAll('input[name="alignment"]');
const neonText = document.getElementById('neonText');
const textInputsContainer = document.getElementById('textInputs');

let textInputs = [];

arrangementSelect.addEventListener('change', updateTextInputs);
fontSelect.addEventListener('change', updatePreview);
sizeSelect.addEventListener('change', updatePreview);
colorRadios.forEach(radio => radio.addEventListener('change', updatePreview));
alignmentRadios.forEach(radio => radio.addEventListener('change', updatePreview));

function updateTextInputs() {
  const arrangement = parseInt(arrangementSelect.value);
  clearTextInputs();

  for (let i = 0; i < arrangement; i++) {
    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = `Line ${i + 1}`;
    input.addEventListener('input', updatePreview);
    textInputsContainer.appendChild(input);
    textInputs.push(input);
  }

  updatePreview();
}

function clearTextInputs() {
  textInputsContainer.innerHTML = '';
  textInputs = [];
}

function updatePreview() {
  const font = fontSelect.value;
  const size = `${sizeSelect.value}`;
  const color = getSelectedColor();
  const alignment = getSelectedAlignment();

  neonText.innerHTML = '';
  neonText.style.textAlign = alignment;

  textInputs.forEach((input, index) => {
    const span = document.createElement('span');
    span.textContent = input.value || '';
    span.style.fontFamily = font;
    span.style.fontSize = size + 'px';
    span.style.color = '#ffffff';
    span.style.textShadow = `0 0 10px ${color}, 0 0 20px ${color}, 0 0 30px ${color}, 0 0 40px ${color}, 0 0 70px ${color}, 0 0 80px ${color}, 0 0 100px ${color}`;
    span.style.display = 'block';
    neonText.appendChild(span);
  });
}

function getSelectedColor() {
  const selectedColor = document.querySelector('input[name="color"]:checked');
  return selectedColor ? selectedColor.value : '#ff0000';
}

function getSelectedAlignment() {
  const selectedAlignment = document.querySelector('input[name="alignment"]:checked');
  return selectedAlignment ? selectedAlignment.value : 'left';
}

updateTextInputs();
