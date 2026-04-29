(function () {

    /*=====================================
    Sticky
    ======================================= */
    window.onscroll = function () {
        var header_navbar = document.querySelector(".navbar-area");
        var sticky = header_navbar.offsetTop;

        if (window.pageYOffset > sticky) {
            header_navbar.classList.add("sticky");
        } else {
            header_navbar.classList.remove("sticky");
        }



        // show or hide the back-top-top button
        var backToTo = document.querySelector(".scroll-top");
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            backToTo.style.display = "flex";
        } else {
            backToTo.style.display = "none";
        }
    };

    // section menu active
	function onScroll(event) {
		var sections = document.querySelectorAll('.page-scroll');
		var scrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;

		for (var i = 0; i < sections.length; i++) {
			var currLink = sections[i];
			var val = currLink.getAttribute('href');
			var refElement = document.querySelector(val);
			var scrollTopMinus = scrollPos + 73;
            if(refElement){
                if (refElement.offsetTop <= scrollTopMinus && (refElement.offsetTop + refElement.offsetHeight > scrollTopMinus)) {
                    document.querySelector('.page-scroll').classList.remove('active');
                    currLink.classList.add('active');
                } else {
                    currLink.classList.remove('active');
                }
            }
		}
	};

    window.document.addEventListener('scroll', onScroll);
    
    // for menu scroll 
    var pageLink = document.querySelectorAll('.page-scroll');

    pageLink.forEach(elem => {
        elem.addEventListener('click', e => {
            e.preventDefault();
            document.querySelector(elem.getAttribute('href')).scrollIntoView({
                behavior: 'smooth',
                offsetTop: 1 - 60,
            });
        });
    });

    "use strict";

}) ();

document.addEventListener('DOMContentLoaded', ()=>{

    if(document.querySelector('.header-swiper')){

        const headerSwiper = new Swiper('.header-swiper', {
            autoplay: {
                delay: 4000,
                speed: 1000,
                disableOnInteraction: false,
            },
            loop: true,
            effect: 'coverflow',
            coverflowEffect: {
                rotate: 50,
                slideShadows: false,
            },
        })

        // headerSwiper.autoplay.stop()

    }

    if(document.querySelector('.testimonial-active')){
        new tns({
            container: '.testimonial-active',
            items: 2,
            slideBy: 'page',
            autoplay: false,
            mouseDrag: true,
            gutter: 0,
            nav: true,
            autoplay: true,
            autoplayHoverPause: true,
            autoplayButtonOutput: false,
            autoplayTimeout: 4000,
            controls: false,
            responsive: {
                0: {
                    items: 1,
                },
                992: {
                    items: 2,
                }
            }
        });
    }

})
