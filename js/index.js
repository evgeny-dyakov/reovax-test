$(() => {
  let win = $(window)
  let nav = $('.header__nav')
  let header = $('.header')

  let scrolled
  let scrollPrev

  win.scroll(() => {
    scrolled = win.scrollTop()

    if (scrolled > 110 && scrolled > scrollPrev) {
      nav.slideUp(200)
      nav.addClass('header__nav--hide')
    } else {
      nav.slideDown(200)
      nav.removeClass('header__nav--hide')
    }
    scrollPrev = scrolled;
  })

  header.mouseover(() => {
    if (nav.hasClass('header__nav--hide')) {
      nav.slideDown(200)
      nav.removeClass('header__nav--hide')
    }
  })
})
