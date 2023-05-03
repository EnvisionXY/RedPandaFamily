const images = document.querySelectorAll('.card img');

images.forEach(image => {
  image.style.opacity = 0;
  image.addEventListener('load', () => {
    let opacity = 0;
    const interval = setInterval(() => {
      if (opacity < 1) {
        opacity += 0.1;
        image.style.opacity = opacity;
      } else {
        clearInterval(interval);
      }
    }, 50);
  });
});
