(function ($) {
    "use strict";

    // ==========================================
    // 1. SPINNER (LOADING ANIMATION)
    // ==========================================
    // Menghilangkan loading spinner setelah halaman dimuat
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner(0);
    
    // ==========================================
    // 2. INITIALIZE WOW JS (ANIMASI SCROLL)
    // ==========================================
    new WOW().init();

    // ==========================================
    // 3. STICKY NAVBAR LOGIC
    // ==========================================
    // Menambah class sticky-top saat di-scroll ke bawah > 45px
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });

    

    // ==========================================
    // 4. BACK TO TOP BUTTON
    // ==========================================
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });

    // ==========================================
    // 5. CAROUSEL CONFIGURATIONS
    // ==========================================
    
    // A. Hero Header Carousel (Slider Utama)
    $(".header-carousel").owlCarousel({
        animateOut: 'fadeOut',
        items: 1,
        margin: 0,
        stagePadding: 0,
        autoplay: true,
        smartSpeed: 500,
        dots: true,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
    });

    // B. Blog / Activities Carousel
    $(".blog-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        center: false,
        dots: false,
        loop: true,
        margin: 25,
        nav : true,
        navText : [
            '<i class="fa fa-angle-right"></i>',
            '<i class="fa fa-angle-left"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0:{ items:1 },
            576:{ items:1 },
            768:{ items:2 },
            992:{ items:2 },
            1200:{ items:3 }
        }
    });

    // News Featured Carousel (Berita Utama)
    $(".news-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,           // Menampilkan 1 berita besar
        dots: true,         // Menampilkan titik navigasi
        loop: true,
        nav: true,          // Menampilkan panah navigasi
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
    });

    // C. Testimonial Carousel (Alumni)
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        center: false,
        dots: true,
        loop: true,
        margin: 25,
        nav : true,
        navText : [
            '<i class="fa fa-angle-right"></i>',
            '<i class="fa fa-angle-left"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0:{ items:1 },
            576:{ items:1 },
            768:{ items:2 },
            992:{ items:2 },
            1200:{ items:3 }
        }
    });

    // D. Team Carousel (Asisten Lab)
    // Menampilkan 4 foto sekaligus di layar lebar agar semua asisten terlihat
    $(".team-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: false,
        margin: 25,
        dots: true,       
        loop: true,       
        nav : false,      
        responsiveClass: true,
        responsive: {
            0:{ items:1 },   // HP
            576:{ items:2 }, // Tablet Kecil
            768:{ items:3 }, // Tablet Standar
            992:{ items:4 }  // PC / Laptop
        }
    });

    // ==========================================
    // 6. FACTS COUNTER
    // ==========================================
    $('[data-toggle="counter-up"]').counterUp({
        delay: 5,
        time: 2000
    });

})(jQuery);