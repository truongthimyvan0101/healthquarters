  $(document).ready(function(){
    $('.menu').click(function(){
      $('.menu').toggleClass('active')
      $('.w-header .list-item').slideToggle('slow');
    })
    
    $('.design-list').click(function(){
      $('.design-list').toggleClass('active')
      $('.dropdown').slideToggle('slow');
    })
   
  });
  $('.w-design .bannerSlider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          arrows: false
        }
      }
    ]
  });

