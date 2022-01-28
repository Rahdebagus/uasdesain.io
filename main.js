$(window).on('load', function () {
  $('#carouselExampleCaptions').addClass('active');
});

$(window).scroll(function () {
  const scroll = $(this).scrollTop();

  if (scroll > $('#foto').offset().top - 30) {
    $('.navbar').addClass('aktif');
  }
});

$(window).scroll(function () {
  const scroll = $(this).scrollTop();

  if (scroll > $('#foto').offset().top - 250) {
    $('.malem').addClass('active');
  }

  if (scroll > $('.objekwisata').offset().top - 350) {
    $('.objek-judul').addClass('active');
  }

  if (scroll > $('.sarana').offset().top - 350) {
    $('.judul-sarana').addClass('active');
  }

  if (scroll > $('.sarana').offset().top - 300) {
    $('.atas-kiri-sarana').addClass('active');
  }

  if (scroll > $('.sarana').offset().top - 300) {
    $('.atas-kanan-sarana').addClass('active');
  }

  if (scroll > $('.sarana').offset().top - 200) {
    $('.bawah-kiri-sarana').addClass('active');
  }
  if (scroll > $('.sarana').offset().top - 200) {
    $('.bawah-kanan-sarana').addClass('active');
  }

  if (scroll > $('.kunjungan').offset().top - 250) {
    $('.judul-kunjungan').addClass('active');
  }

  if (scroll > $('.kunjungan').offset().top - 250) {
    $('.progress').each(function (i) {
      setTimeout(function () {
        $('.progress').eq(i).addClass('active');
      }, 200 * (i + 1));
    });
  }

  if (scroll > $('.wawasan').offset().top - 350) {
    $('.judul-wawasan').addClass('active');
  }

  if (scroll > $('.wawasan').offset().top - 300) {
    $('.wawasan-kiri').addClass('active');
  }

  if (scroll > $('.wawasan').offset().top - 300) {
    $('.wawasan-kanan').addClass('active');
  }
  if (scroll > $('.mid').offset().top - 300) {
    $('.aksi').addClass('aktif');
  }
});

// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg');
var modalImg = document.getElementById('img01');
var captionText = document.getElementById('caption');
img.onclick = function () {
  modal.style.display = 'block';
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
};

// Get the <span> element that closes the modal
var span = document.getElementsByClassName('close')[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = 'none';
};

// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('mymg');
var modalImg = document.getElementById('img01');
var captionText = document.getElementById('caption');
img.onclick = function () {
  modal.style.display = 'block';
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
};

// Get the <span> element that closes the modal
var span = document.getElementsByClassName('close')[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = 'none';
};

let sliderItem = $('.fortofolio').children('.active');
sliderItem.prev('.row').css({
  left: -200,
});
