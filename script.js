document.addEventListener('DOMContentLoaded', () => {
    const inputText = document.getElementById('inputText');
    const fontButtons = document.querySelectorAll('.font-button');
    const fontSize = document.getElementById('fontSize');
    const colorButtons = document.querySelectorAll('.color-button');
    const preview = document.getElementById('preview');

    const updatePreview = () => {
        preview.textContent = inputText.value || "Your Text Here";
        preview.style.fontSize = `${fontSize.value}px`;
    };

    fontButtons.forEach(button => {
        button.addEventListener('click', () => {
            const selectedFont = button.dataset.font;
            updatePreview(selectedFont);
        });
    });

    colorButtons.forEach(button => {
        button.addEventListener('click', () => {
            const selectedColor = button.dataset.color;
            preview.style.color = selectedColor;
            preview.style.textShadow = `0 0 10px ${selectedColor}`; // Neon glow effect
        });
    });

    inputText.addEventListener('input', updatePreview);
    fontSize.addEventListener('input', updatePreview);

    updatePreview();  // Initialize preview with default values
});
