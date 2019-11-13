import { drawImageOnCanvas } from './canvas';
import yajuSmileImage from '../assets/yaju_smile.jpeg';
import yajuAnnyoiImage from '../assets/yaju_annyoi.png';

const slider = document.getElementById('slider');

window.addEventListener('load', () => {
  drawImageOnCanvas(yajuSmileImage);
  drawImageOnCanvas(yajuAnnyoiImage);
});

slider.addEventListener('input', e => {
  console.log(e.currentTarget.value);
});
