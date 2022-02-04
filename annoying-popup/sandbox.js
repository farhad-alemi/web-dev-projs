const button = document.querySelector('button');
const wrapper = document.querySelector('.popup-wrapper')
const close = document.querySelector('.popup-wrapper .popup-close')


button.addEventListener('click', () => {
    wrapper.style.display = 'block';
});

close.addEventListener('click', () => {
    wrapper.style.display = 'none';
});

wrapper.addEventListener('click', () => {
    wrapper.style.display = 'none';
});

document.querySelector('body').addEventListener('mouseenter', () => {
    wrapper.style.display = 'block';
});