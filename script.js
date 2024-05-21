document.addEventListener('DOMContentLoaded', () => {
  const inputText = document.getElementById('inputText');
  const fontSelect = document.getElementById('fontSelect');
  const fontSize = document.getElementById('fontSize');
  const fontColor = document.getElementById('fontColor');
  const preview = document.getElementById('preview');

  const updatePreview = () => {
    preview.textContent = inputText.value;
    preview.style.fontFamily = fontSelect.value;
    preview.style.fontSize = `${fontSize.value}px`;
    preview.style.color = fontColor.value;
  };

  inputText.addEventListener('input', updatePreview);
  fontSelect.addEventListener('change', updatePreview);
  fontSize.addEventListener('input', updatePreview);
  fontColor.addEventListener('input', updatePreview);

  updatePreview(); // Initialize preview with default values
});
