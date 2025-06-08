function saveProgress() {
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  const progress = Array.from(checkboxes).map(cb => cb.checked);
  localStorage.setItem("progress", JSON.stringify(progress));
}

window.onload = () => {
  const progress = JSON.parse(localStorage.getItem("progress"));
  if (progress) {
    document.querySelectorAll('input[type="checkbox"]').forEach((cb, i) => {
      cb.checked = progress[i];
    });
  }
};
