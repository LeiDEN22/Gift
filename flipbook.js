    const photos = [
      'image/Cover.png',
      'image/p1.jpg',
      'image/p2.jpg',
      'image/p3.jpg',
      'image/p4.jpg',
      'image/p5.jpg',
      'image/p6.jpg',
      'image/p7.jpg',
      'image/p8.jpg'
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
