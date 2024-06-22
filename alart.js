<script>
    const toggleButton = document.querySelector('#day-night-toggle');
    const body = document.body;

    toggleButton.addEventListener('click', () => {
        body.classList.toggle('night-mode');
        toggleButton.classList.toggle('fa-sun');
        toggleButton.classList.toggle('fa-moon');
    });

    // Set the initial icon based on the mode
    if (body.classList.contains('night-mode')) {
        toggleButton.classList.add('fa-moon');
    } else {
        toggleButton.classList.add('fa-sun');
    }
</script>
