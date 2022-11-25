


$('.js-tab-heading').on('click', function(){
    let currentContent = $(this).siblings()
    currentContent.slideToggle('fast', function(){
        //zobrazím tlačítko zavřít


        //veměním ikonnu za mínus
        let plus_to_minus = currentContent.closest('.js-tab').find('.minus');
        plus_to_minus.toggle()
        //veměním ikonnu za plus
        let minus_to_plus = currentContent.closest('.js-tab').find('.plus');
        minus_to_plus.toggle()
    })
})