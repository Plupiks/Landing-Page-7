$(window).on('load resize change', function () {
  // Вирівнюю текст у блоках по висоті
  if (window.matchMedia('(min-width:992px)').matches) {
    textAlignHeight();
    textAlignHeight2();
  }
});

// Вирівнюю текст у about по висоті
function textAlignHeight() {
  // Заголовок
  const aboutTitles = document.querySelectorAll('.tc__title');
  const aboutTitlesHeight = Array.from(aboutTitles).map((e) => e.offsetHeight);
  const maxHeightTitle = Math.max(...aboutTitlesHeight);
  for (let i = 0; i < aboutTitles.length; i++) {
    aboutTitles[i].style.minHeight = maxHeightTitle + 'px';
  }

  // Текст
  const aboutText = document.querySelectorAll('.tc__text');
  const aboutTextHeight = Array.from(aboutText).map((e) => e.offsetHeight);
  const maxHeightText = Math.max(...aboutTextHeight);
  for (let i = 0; i < aboutText.length; i++) {
    aboutText[i].style.minHeight = maxHeightText + 'px';
  }
}

// Вирівнюю текст у team по висоті
function textAlignHeight2() {
  // Заголовок
  const teamTitles = document.querySelectorAll('.tc__title');
  const teamTitlesHeight = Array.from(teamTitles).map((e) => e.offsetHeight);
  const maxHeightTitle = Math.max(...teamTitlesHeight);
  for (let i = 0; i < teamTitles.length; i++) {
    teamTitles[i].style.minHeight = maxHeightTitle + 'px';
  }

  // Текст
  const teamText = document.querySelectorAll('.tc__text');
  const teamTextHeight = Array.from(teamText).map((e) => e.offsetHeight);
  const maxHeightText = Math.max(...teamTextHeight);
  for (let i = 0; i < teamText.length; i++) {
    teamText[i].style.minHeight = maxHeightText + 'px';
  }
}

// Burger menu
const burgerMenu = document.querySelector('#showBtn');
const backdrop = document.querySelector('.backdrop');
const menuBody = document.getElementById('menu');
let clickCountMenu = 0;

burgerMenu.addEventListener('click', function () {
  clickCountMenu++;
  if (clickCountMenu % 2 !== 0) {
    backdrop.style.opacity = 1;
    backdrop.style.pointerEvents = 'all';
    menuBody.style.pointerEvents = 'all';
    menuBody.style.display = 'block';
  } else {
    backdrop.style.opacity = 0;
    backdrop.style.pointerEvents = 'none';
    menuBody.style.pointerEvents = 'none';
    menuBody.style.display = 'none';
  }
  console.log('click');
});

backdrop.addEventListener('click', function () {
  if (clickCountMenu % 2 !== 0) {
    clickCountMenu++;
    burgerMenu.checked = false;
    backdrop.style.opacity = 0;
    backdrop.style.pointerEvents = 'none';
    menuBody.style.pointerEvents = 'none';
    menuBody.style.display = 'none';
  }
});

const links = document.querySelectorAll('.nav-box--link');

links.forEach(function (el) {
  el.addEventListener('click', function () {
    clickCountMenu++;
    burgerMenu.checked = false;
    backdrop.style.opacity = 0;
    backdrop.style.pointerEvents = 'none';
    menuBody.style.pointerEvents = 'none';
    menuBody.style.display = 'none';
  });
});

// Плавна прокрутка до блоку
const anchors = document.querySelectorAll('a[href^="#s-"]');

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const blockID = anchor.getAttribute('href');
    if (window.matchMedia('(min-width: 900px)').matches) {
      document.querySelector('' + blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    } else {
      document.querySelector('' + blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  });
}

// Прокрутка до геро блока
const headerLink = document.querySelector('.header--logo');
headerLink.addEventListener('click', (e) => {
  e.preventDefault;
  document.querySelector('#s-hero').scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
});

// Прокрутка до геро блока
const headerLink2 = document.querySelector('.fli--logo');
headerLink2.addEventListener('click', (e) => {
  e.preventDefault;
  document.querySelector('#s-hero').scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
});

// Активний клас для навігації при скролі
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (window.matchMedia('(min-width: 992px)').matches) {
        if (entry.isIntersecting) {
          document.querySelectorAll('a[href^="#s-"]').forEach((link) => {
            // Забираємо хештег і зрівнюємо id
            if (link.getAttribute('href').replace('#', '') === entry.target.id) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });
        }
      } else {
        document.querySelectorAll('a[href^="#s-"]').forEach((link) => {
          link.classList.remove('active');
        });
      }
    });
  },
  {
    threshold: 0.4,
  }
);

document.querySelectorAll('section').forEach((section) => {
  observer.observe(section);
});

//Count UP
const easingFn = function (t, b, c, d) {
  var ts = (t /= d) * t;
  var tc = ts * t;
  return b + c * (tc + -3 * ts + 3 * t);
};
const options = {
  easingFn,
  suffix: '%',
  enableScrollSpy: true,
  scrollSpyOnce: true,
};

let startAnimation = false;

function countUpStart() {
  let countUp1 = new CountUp('sc__percent_1', 50, options);
  let countUp2 = new CountUp('sc__percent_2', 16, options);
  let countUp3 = new CountUp('sc__percent_3', 20, options);
  let countUp4 = new CountUp('sc__percent_4', 13, options);
}

countUpStart();
