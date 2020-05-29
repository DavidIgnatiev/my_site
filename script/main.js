(function () {
    var header = document.querySelector('header');
  
    window.onscroll = function () {
      if (window.pageYOffset > 60) {
        header.classList.add('header_active');
      } else {
        header.classList.remove('header_active');
      }
    };
  })(); // это функция которая вызывает саму себя,
  // она сробатывает когда загружаеться страница
  // window.onscroll = проверять движения по сайту(скролинг)
  // window.pageYOffset = проверять на сколько пикселей сместилось страничка
  // = () => {} это стрелочная функция
  // header.classList.add('header_active'); обращяеться к тегу header и добавляет в class ещё один класс с эфектом
  // header.classList.remove('header_active'); удаляет класс header_active
  
  
  (function () {
    var burgerItem = document.querySelector('.burger');
    var Menu = document.querySelector('.header_nav');
    var burgerMenuClose = document.querySelector('.header_nav-close');
    burgerItem.addEventListener('click', function () {
      Menu.classList.add('header_nav-active');
    });
    burgerMenuClose.addEventListener('click', function () {
      Menu.classList.remove('header_nav-active');
    });
  })(); // Scroll to anchors = скролинг по якорям = по айди
  // это функция для плавного скролинга по странице,учитаваеться высота меню
  
  
  (function () {
    var smoothScroll = function smoothScroll(targetEl, duration) {
      var headerElHeight = document.querySelector('.header').clientHeight; // .header указываеться блок который нам нужен
      // сдесь измеряеться высота header-а
  
      var target = document.querySelector(targetEl);
      var targetPosition = target.getBoundingClientRect().top - headerElHeight; // указываеться место от куда будет показываться блок
  
      var startPosition = window.pageYOffset;
      var startTime = null; // отвечает за плавный переход,движение
  
      var ease = function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
      }; //функция анимации
  
  
      var animation = function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        var timeElapsed = currentTime - startTime;
        var run = ease(timeElapsed, startPosition, targetPosition, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
      };
  
      requestAnimationFrame(animation);
    }; // обработчик действий,когда шёлкаем по меню
  
  
    var scrollTo = function scrollTo() {
      var links = document.querySelectorAll('.js-scroll');
      links.forEach(function (each) {
        each.addEventListener('click', function () {
          var currentTarget = this.getAttribute('href');
          smoothScroll(currentTarget, 1000);
        });
      });
    };
  
    scrollTo();
  })();
