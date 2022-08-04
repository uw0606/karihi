'use strict';

// ハンバーガーメニュー
{
  const open = document.getElementById('open');
  const overlay = document.querySelector('.overlay');
  const close = document.getElementById('close');
  const footer = document.querySelector('footer')
  open.addEventListener('click', () => {
    overlay.classList.add('show');
    footer.classList.add('hide');
    open.classList.add('hide');
  });
  close.addEventListener('click', () => {
    overlay.classList.remove('show');
    footer.classList.remove('hide');
    open.classList.remove('hide');
  });
}

// ーーーカルーセルーーー
{
  const prev = document.getElementById('prev');
  const next = document.getElementById('next');
  const ul = document.querySelector('.carousel ul');
  const slides = ul.children;
  let currentIndex = 0;


  function playSlideshow() {
    next.click();
    setTimeout(() => {
      
      playSlideshow();
    }, 6000);
  }

  playSlideshow();

  function updateButtons() {

    if (currentIndex < 0) {
      currentIndex = slides.length - 1;
    }
    if (currentIndex === slides.length) {
      currentIndex = 0;
    }
  }

  // ナビタグ
  const dots = [];
  
  function updateDpts() {
    dots.forEach(dot => {
      dot.classList.remove('current');
    });
    dots[currentIndex].classList.add('current');
  }

  function setupDots() {
    for (let i = 0; i < slides.length; i++) {
      const button = document.createElement('button');
      button.addEventListener('click', () => {
        currentIndex = i;
        updateDpts();
        updateButtons();
        moveSlides();
      });
      dots.push(button);
      document.querySelector('.btn').appendChild(button);
    }
    
    dots[0].classList.add('current');
  }
  // ナビタグ



  function moveSlides() {
    const slideWidth = slides[0].getBoundingClientRect().width;
    ul.style.transform = `translateX(${-1 * slideWidth * currentIndex}px)`;
  }
  
  updateButtons();
  setupDots();

  // ボタンをクリック
  prev.addEventListener('click', () => {
    currentIndex--;
    updateButtons();
    updateDpts();
    moveSlides();
  });
  next.addEventListener('click', () => {
    currentIndex++;
    updateButtons();
    updateDpts();
    moveSlides();
  });

  // 大きさの違う画像を調整
  window.addEventListener('resize', () => {
    moveSlides();
  });
}

// ーーー渋谷カルーセルーーー
{
  const next = document.getElementById('shibuyanext');
  const prev = document.getElementById('shibuyaprev');
  const shibuyacarousel = document.querySelector('.shibuyacarousel') ;
  const slides = shibuyacarousel.children;
  let currentIndex = 0;

  function playSlideshow() {
    next.click();
    setTimeout(() => {
      
      playSlideshow();
    }, 6000);
  }

  playSlideshow();

  function updateButtons() {
    if (currentIndex < 0) {
      currentIndex = slides.length -4;
    }
    if (currentIndex === slides.length - 3) {
      currentIndex = 0;
    }
  }

  function moveSlides() {
    const slidewidth = slides[0].getBoundingClientRect().width;
    shibuyacarousel.style.transform = `translateX(${-1 * 300 * currentIndex}px)`;
  }

  updateButtons();


  next.addEventListener('click', () => {
    currentIndex++;
    updateButtons();
    moveSlides();
  });

  prev.addEventListener('click', () => {
    currentIndex--;
    updateButtons();
    moveSlides();
  });
}


// ーーー新宿カルーセルーーー
{
  const next = document.getElementById('shinjukunext');
  const prev = document.getElementById('shinjukuprev');
  const shinjukucarousel = document.querySelector('.shinjukucarousel') ;
  const slides = shinjukucarousel.children;
  let currentIndex = 0;

  function playSlideshow() {
    next.click();
    setTimeout(() => {
      
      playSlideshow();
    }, 6000);
  }

  playSlideshow();

  function updateButtons() {
    if (currentIndex < 0) {
      currentIndex = slides.length -4;
    }
    if (currentIndex === slides.length - 3) {
      currentIndex = 0;
    }
  }

  function moveSlides() {
    const slidewidth = slides[0].getBoundingClientRect().width;
    shinjukucarousel.style.transform = `translateX(${-1 * 300 * currentIndex}px)`;
  }

  updateButtons();


  next.addEventListener('click', () => {
    currentIndex++;
    updateButtons();
    moveSlides();
  });

  prev.addEventListener('click', () => {
    currentIndex--;
    updateButtons();
    moveSlides();
  });
}
