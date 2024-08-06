document.addEventListener('DOMContentLoaded', () => {
    const moreButton = document.getElementById('moreButton');
    const dropdownMenu = document.getElementById('dropdownMenu');

    moreButton.addEventListener('click', (event) => {
        event.preventDefault();
        dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
    });

    document.addEventListener('click', (event) => {
        if (!moreButton.contains(event.target) && !dropdownMenu.contains(event.target)) {
            dropdownMenu.style.display = 'none';
        }
    });
})