    const photos = [
      'Cover.png','p1.jpg','p2.jpg','p3.jpg','p4.jpg','p5.jpg','p6.jpg', 'p7.jpg','p8.jpg'
    ];
    let current = 0;

    const flipbook = document.getElementById('flipbook');
    const photo = document.getElementById('photo');

    function openFlipbook(e) {
      e.preventDefault();
      flipbook.style.display = 'flex';
      current = 0;
      photo.src = photos[current];
    }

    function closeFlipbook() {
      flipbook.style.display = 'none';
    }

    function nextPhoto() {
      if (current < photos.length - 1) {
        current++;
        photo.src = photos[current];
      }
    }

    function prevPhoto() {
      if (current > 0) {
        current--;
        photo.src = photos[current];
      }
    }