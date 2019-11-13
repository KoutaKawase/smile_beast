export const drawImageOnCanvas = (imageSrc) => {
    const canvas = document.getElementById('canvas');
    const context = canvas.getContext('2d');

    const image = new Image();
    image.src = imageSrc;

    image.addEventListener('load', () => {
        context.drawImage(image, 0, 0);
    }, false);
}