const toggleButton = document.getElementById('toggleMode');
    const body = document.body;

    toggleButton.addEventListener('click', () => {
      const isDarkMode = body.getAttribute('data-theme') === 'dark';

      if (isDarkMode) {
        body.setAttribute('data-theme', 'light');
        toggleButton.textContent = 'Switch to Dark Mode';
      } else {
        body.setAttribute('data-theme', 'dark');
        toggleButton.textContent = 'Switch to Light Mode';
      }
    });