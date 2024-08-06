document.getElementById('footer-toggle-button').addEventListener('click', function() {
    var dropdown = document.getElementById('footer-dropdown-content');
    if (dropdown.style.display === 'block') {
        dropdown.style.display = 'none';
    } else {
        dropdown.style.display = 'block';
    }
});