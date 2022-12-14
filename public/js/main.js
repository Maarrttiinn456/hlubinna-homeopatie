//Import článků
import { articles } from "./articles.js";
let all_articles = articles;
console.log("Články:",all_articles)


/* Výpis článků */ 
const container_slider = document.querySelector('.js-articles-slider');
const conatiner_all_articles = document.querySelector('.js-all-articles-list');


for(let i = 0; i < all_articles.length; i++)
{
    let article = all_articles[i];
    let counter = i + 1;
    
    if(counter < 10)
    {
        counter = `0${counter}`
    }

    if(container_slider != null)
    {
        container_slider.innerHTML += `
            <div class="bg-center-cover articles-slider-item h-50 md:h-60" style="background-image: url(${article.image}) ;">
                <div class="container min-h-full flex flex-col justify-between px-5 sm:px-10 md:px-15 py-5 md:py-10">
                    <div>
                        <div data-id="${i}" class="text-white h4 md:h3 cursor-pointer select-none">${article.title}</div>
                        <div class="text-white mt-3 text-sm  md:text-base select-none">
                            ${article.perex}
                        </div>
                    </div>
                    <div class="flex justify-end md:justify-between items-center text-white w-full">
                        <div class="h2 text-shadow hidden md:block">
                            ${counter}
                        </div>
                        <a data-id="${i}" href="./clanek/${article.path}.html" class="js-lighter-before text text-white font-bold js-set-storage cursor-pointer z-50 hover:underline transition duration-500 select-none"> 
                            Číst více...
                        </a>
                    </div>
                </div>
            </div>
        `
    }
    
}


function showArticle ()
{
    const number_articles  = $('#articles-container').attr('data-show')

    if (number_articles >= 0)
    {
        let arctcles_heading = all_articles[number_articles].title;
        let articles_content = all_articles[number_articles].text;
        let articles_img = all_articles[number_articles].image;

        $('.js-modal-heading').html(arctcles_heading);
        $('.js-modal-content').html(articles_content);
        $('.js-modal-img').attr('src', articles_img)
    }

}

showArticle()




for(let i = 0; i < all_articles.length; i++)
{
    let article = all_articles[i];

    if(container_slider != null)
    {
        conatiner_all_articles.innerHTML += `
            <div class="flex flex-col justify-between shadow-md hover:shadow-lg transition duration-300">
                <div>
                    <div data-id="${i}" class="px-2 h-20 flex items-end font-semibold js-show-modal cursor-pointer bg-center-cover" style="background-image: url(${article.image});">

                        <div class="inline-flex px-1 py-1 bg-white text-primary text-lg  max-w-4/5 hover:underline">
                            ${article.title}
                        </div>
                    </div>
                    <div class="text-sm mt-2 px-2">${article.perex}</div>
                </div>
                <div data-id="${i}"
                    class="inline-flex justify-end mt-2 px-2 mb-2 text-primary text-sm font-semibold text-right cursor-pointer js-show-modal hover:underline">Číst
                    více</div>
            </div>
        `
    }
    
} 



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


/*Slider*/

if($('.js-articles-slider').length > 0)
{
    var articles_slider = tns({
        container: '.js-articles-slider',
        controlsContainer: '.js-articles-slider-controls',
        prevButton: '.js-controls-prev',
        nextButton: '.js-controls-next',
        controls: true,
        nav: false,
        items: 1,
        edgePadding: 0,
        swipeAngle: false,
        speed: 400,
        mouseDrag:true,

        responsive: {
            1500: {
                items: 1,
                edgePadding: 200,
            }
        }
    });
}



$(document).on('click', '.slider-switcher-item', function(){
    $('.slider-switcher-item').removeClass('active')
    $(this).addClass('active')
})

$( document ).ready(function() {
    //Musím skrý vše spojené se sliderem
    $(document).on('click', '.js-show-all', function(){
        $('.tns-controls').hide()
        $('.js-articles-slider-controls').addClass('active')
        $('.js-articles-slider').fadeOut(600)
        $('.js-all-articles').delay(500).fadeIn(800)
    })
    //Odkrýt vše spojené se sliderem
    $(document).on('click', '.js-hide-all', function(){
        $('.tns-controls').delay(800).fadeIn();
        setTimeout( function(){ $('.js-articles-slider-controls').removeClass("active"); }, 1500 );
        $('.js-articles-slider').delay(500).fadeIn(800)
        $('.js-all-articles').fadeOut(900)
    })
    /*Vípis všech článku hover*/
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
});




$(document).on('click', '.js-nav-scroll', function(e){
    e.preventDefault()
    const scrollTo = '#'+$(this).attr('data-slide')
    $('html, body').animate({
        scrollTop: $(scrollTo).offset().top
    }, 500);

    $(scrollTo).find('.js-tab-content').show()
    $(scrollTo).find('.js-tab-content').closest('.js-tab').find('.minus').hide()
})


$(document).on('mouseenter mouseleave', '.js-lighter-before', function(){
    $(this).closest('.articles-slider-item').toggleClass('active')
})




