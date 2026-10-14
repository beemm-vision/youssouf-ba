/* Youssouf BA — V1 */
(function(){
  'use strict';
  document.getElementById('yr').textContent = new Date().getFullYear();

  /* nav solide au scroll */
  var nav = document.getElementById('nav');
  var onScroll = function(){
    nav.classList.toggle('solid', window.scrollY > 40);
  };
  onScroll();
  window.addEventListener('scroll', onScroll, {passive:true});

  /* menu mobile */
  var burger = document.getElementById('burger');
  var sheet  = document.getElementById('sheet');
  var toggle = function(force){
    var open = (typeof force === 'boolean') ? force : !sheet.classList.contains('on');
    sheet.classList.toggle('on', open);
    burger.classList.toggle('on', open);
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    document.body.style.overflow = open ? 'hidden' : '';
  };
  burger.addEventListener('click', function(){ toggle(); });
  sheet.querySelectorAll('a').forEach(function(a){
    a.addEventListener('click', function(){ toggle(false); });
  });
  document.addEventListener('keydown', function(e){
    if (e.key === 'Escape') toggle(false);
  });

  /* reveals */
  var items = document.querySelectorAll('.rv');
  if (!('IntersectionObserver' in window)) {
    items.forEach(function(el){ el.classList.add('in'); });
    return;
  }
  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(en){
      if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
    });
  }, {rootMargin:'0px 0px -12% 0px', threshold:0.12});
  items.forEach(function(el){ io.observe(el); });
})();
