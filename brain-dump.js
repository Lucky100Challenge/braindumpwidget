document.addEventListener('DOMContentLoaded', () => {
  const inputArea = document.getElementById('inputArea');
  const addButton = document.getElementById('addButton');
  const clearButton = document.getElementById('clearButton');
  const logContainer = document.getElementById('logContainer');
  const toggleMode = document.getElementById('toggleMode');
  const icon = document.getElementById('icon');
  const header = document.getElementById('header');
  
  let isDarkMode = false;

  function addEntry() {
    const text = inputArea.value.trim();
    if (text) {
      const timestamp = new Date().toLocaleString();
      const entryCard = document.createElement('div');
      entryCard.classList.add('card', 'p-4', 'border', 'border-gray-300', 'rounded-md', 'shadow-md', 'relative');
      entryCard.innerHTML = `
        <button class="close-btn absolute top-2 right-2 text-xl">
          <i class="fas fa-times"></i>
        </button>
        <h2 class="text-lg font-bold mb-2">${timestamp}</h2>
        <p>${text}</p>
      `;
      const closeButton = entryCard.querySelector('.close-btn');
      closeButton.addEventListener('click', () => {
        logContainer.removeChild(entryCard);
      });
      logContainer.appendChild(entryCard);
      inputArea.value = '';
    }
  }

  function clearInput() {
    inputArea.value = '';
  }

  function toggleDarkMode() {
    isDarkMode = !isDarkMode;
    document.body.classList.toggle('dark-mode', isDarkMode);
    document.body.classList.toggle('light-mode', !isDarkMode);
    icon.classList.toggle('fa-sun', !isDarkMode);
    icon.classList.toggle('fa-moon', isDarkMode);
    header.classList.toggle('header-light', !isDarkMode);
    header.classList.toggle('header-dark', isDarkMode);
  }

  addButton.addEventListener('click', addEntry);
  clearButton.addEventListener('click', clearInput);
  toggleMode.addEventListener('click', toggleDarkMode);
});
