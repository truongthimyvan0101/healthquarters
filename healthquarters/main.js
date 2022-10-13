  $(document).ready(function(){
    $(".menu").click(function (e) { 
        $(this).toggleClass("active");
    });
    
    $(".menu").click(function (e) { 
        $(this).removeClass("active");
    });
    $('.menu-nav .menu').click(function(){
      $('.menu-nav .menu').toggleClass('active')
      $('.w-header .list-item').slideToggle('slow');
    })
    
    $('.design-list').click(function(){
      $('.design-list').toggleClass('active')
      $('.dropdown').slideToggle('slow');
    })
   
  });
  $('.w-design').slick({
    infinite: true,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToScroll: 2000,
  });
