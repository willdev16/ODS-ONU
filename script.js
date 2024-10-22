function changeContent(title, description) {
    document.getElementById('card-title').textContent = title;
    document.getElementById('card-description').textContent = description;
}

document.addEventListener('click', function() {
    dropdownContent.classList.remove('active');
});

  window.addEventListener('resize', changeTitleText);
  window.addEventListener('load', changeTitleText);