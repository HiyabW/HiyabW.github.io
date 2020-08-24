$(document).ready(function () {
  $("[type|= 'button4']").click(function () {
    $('html,body').animate({ scrollTop: $('.HomePage').offset().top }, 'slow')
  })

  $("[type|= 'button']").click(function () {
    $('html,body').animate({ scrollTop: $('.AboutMe').offset().top }, 'slow')
  })

  $("[type|='button2']").click(function () {
    $('html,body').animate({ scrollTop: $('.WorkExperience').offset().top }, 'slow')
  })

  $("[type|='button3']").click(function () {
    $('html,body').animate({ scrollTop: $('.Projects').offset().top }, 'slow')
  })

  $(function () {
    $(document).scroll(function () {
      var $nav = $('#mainNavbar')
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height())
    })
  })
})
