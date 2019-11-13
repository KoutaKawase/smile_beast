import yeahSound from '../assets/yeah.mp3';

window.addEventListener('load', () => {
  const annyoiElement = document.getElementById('annyoi');
  const sliderElement = document.getElementById('slider');
  const DEFAULT_OPACITY = 1;
  const RANGE_MAX = 10;

  sliderElement.addEventListener('input', e => {
    const rangeValue = parseInt(e.currentTarget.value, 10);
    if (rangeValue === RANGE_MAX) {
      const audio = new Audio(yeahSound);
      audio.volume = 0.25;
      audio.play();
    }
    annyoiElement.style.opacity = DEFAULT_OPACITY - rangeValue / 10;
  });
});
