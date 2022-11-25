

/* Otvírací sekce */
$('.js-tab-heading').on('click', function(){
    let currentContent = $(this).siblings()
    currentContent.slideToggle('fast', function(){

        //veměním ikonnu za mínus
        let plus_to_minus = currentContent.closest('.js-tab').find('.minus');
        plus_to_minus.toggle()
        //veměním ikonnu za plus
        let minus_to_plus = currentContent.closest('.js-tab').find('.plus');
        minus_to_plus.toggle()
    })
})



var articles_slider = tns({
    container: '.js-articles-slider',
    controlsContainer: '.js-articles-slider-controls',
    prevButton: '.js-controls-prev',
    nextButton: '.js-controls-next',
    controls: true,
    nav: true,
    items: 1,
    edgePadding: 0,
    swipeAngle: false,
    speed: 400,
    
    responsive: {
        992:{
            edgePadding: 150,
        },
        1500: {
            items: 1,
            edgePadding: 200,
        }
    }
});

$(document).on('click', '.js-show-all', function(){
    $('.tns-controls').hide()
    $('.js-articles-slider').fadeOut(500)
    $('.js-all-articles').delay(200).fadeIn(800)
})

$(document).on('click', '.js-hide-all', function(){
    $('.tns-controls').delay(800).show()
    $('.js-articles-slider').delay(500).fadeIn(800)
    $('.js-all-articles').fadeOut(800)
})



$('.js-articles-grid').on('mouseenter', function(){
    $(this).addClass('active');
    $(this).find('.js-articles-grid-heading').hide()
    $(this).find('.js-articles-grid-text').fadeIn()
})

$('.js-articles-grid').on('mouseleave', function(){
     $(this).removeClass('active');
    $(this).find('.js-articles-grid-heading').fadeIn()
    $(this).find('.js-articles-grid-text').hide()
})
