function bGallery() {
    const bigimg = document.querySelector('.b-gallery__big-img');
    const smallimgs = document.querySelectorAll('.b-gallery__preview img');


    smallimgs.forEach(smallimg => {
        smallimg.addEventListener('click', function () {
            const smallerImg = this.src;
            const biggerImg = smallerImg.replace('small', 'big');
            bigimg.src = biggerImg;
            smallimgs.forEach(smallimg => smallimg.classList.remove('b-active'));
            smallimg.classList.add('b-active');
        });
    });
}

bGallery();


