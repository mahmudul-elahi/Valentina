$(document).ready(function () {
  //Count Down
  var countDownDate = new Date('Jun 21, 2023').getTime()

  var countValue = () => {
    var toDay = new Date().getTime()
    var distance = countDownDate - toDay

    var days = Math.floor(distance / (1000 * 60 * 60 * 24))
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    )
    var mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    var secs = Math.floor((distance % (1000 * 60)) / 1000)

    $('#days').html(days)

    $('#hours').html(hours)

    $('#mins').html(mins)

    $('#secs').html(secs)
  }
  setInterval(countValue, 1000)

  //Slider

  $('.slider-main').slick({
    nextArrow:
      '<div class="slider-arrow right"><i class="fas fa-angle-right"></i></div>',
    prevArrow:
      '<div class=" slider-arrow left"><i class="fas fa-angle-left"></i></div>',
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  })

  //Stiky Navbar

  var navbar = $('#navbar')

  $(window).scroll(() => {
    var scrollPosition = $(this).scrollTop()

    if (scrollPosition > 300) {
      navbar.addClass('navbar-fixed')
    } else if (scrollPosition <= 0) {
      navbar.removeClass('navbar-fixed')
    }
  })

  //Preloader
  $(window).load(() => {
    setInterval(() => {
      $('#preloader').fadeOut()
    }, 4000)
  })

  // //Mouse Move
  // var effect = $('.effect')
  // $('body').on('mousemove', (e) => {
  //   effect.style.left = e.clientX + 'px'
  // })
})
