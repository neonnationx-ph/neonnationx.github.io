document.addEventListener('DOMContentLoaded', () => {
    const inputText = document.getElementById('inputText');
    const fontButtons = document.querySelectorAll('.font-button');
    const fontSize = document.getElementById('fontSize');
    const fontColor = document.getElementById('fontColor');
    const preview = document.getElementById('preview');

    const updatePreview = (font) => {
        preview.textContent = inputText.value || "Your Text Here";
        preview.style.fontFamily = font;
        preview.style.fontSize = `${fontSize.value}px`;
        preview.style.color = fontColor.value;
    };

    fontButtons.forEach(button => {
        button.addEventListener('click', () => {
            const selectedFont = button.dataset.font;
            updatePreview(selectedFont);
        });
    });

    inputText.addEventListener('input', () => updatePreview());
    fontSize.addEventListener('input', () => updatePreview());
    fontColor.addEventListener('input', () => updatePreview());

    updatePreview();  // Initialize preview with default values
});
