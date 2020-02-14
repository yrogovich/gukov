import simpleParallax from 'simple-parallax-js';

console.log('ok');

$('.burger').click(function()  {            
    $('.menu').slideToggle(300, function() {
        if($(this).css('display') === 'none')
            $(this).removeAttr('style');
    });
});

$('.accordion .head').click(function() {
    $('.accordion').removeClass('active');
    $(this).parent('.accordion').toggleClass('active');;
});

$('.lightbox-card').mouseover(function() {
    let targetName = $(this).data('phone');
    $(`.large-phone[data-phone="${targetName}"]`).addClass('active');
});
$('.lightbox-card').mouseout(function() {
    let targetName = $(this).data('phone');
    $(`.large-phone[data-phone="${targetName}"]`).removeClass('active');
});


$('.lazy').Lazy({
    onError: function(element) {
        console.log('error loading ' + element.data('src'));
    },
    // called after an element was successfully handled
    afterLoad: function(element) {
        try {
            //Add parallax effect
            if(element[0].classList.contains('petal-top__img')) {
                let petalsTop = element[0];
                new simpleParallax(petalsTop, {
                    delay: 0,
                    orientation: 'up',
                    scale: 2.5,
                    overflow: true,
                    delay: .8,
                    transition: 'cubic-bezier(0,0,0,1)',
                });
            }
            else if(element[0].classList.contains('petal-bottom__img')) {
                let petalsBottom = element[0];
                new simpleParallax(petalsBottom, {
                    delay: 0,
                    orientation: 'up',
                    scale: 3,
                    overflow: true,
                    delay: .8,
                    transition: 'cubic-bezier(0,0,0,1)',
                });
            }
        } catch (error) {
            console.log(`Parralax error: ${error}`);
        }
    }
});

// Youtube
(function() {
	let youtube = document.querySelectorAll( ".youtube" );	
	for (let i = 0; i < youtube.length; i++) {		
		let source = "https://img.youtube.com/vi/"+ youtube[i].dataset.embed +"/sddefault.jpg";		
		let image = new Image();
        image.src = source;
        image.classList.add('preview-img');
        image.addEventListener( "load", function() {
            youtube[ i ].appendChild( image );
        }( i ) );		
        youtube[i].addEventListener( "click", function() {
            let iframe = document.createElement( "iframe" );
                    iframe.setAttribute( "frameborder", "0" );
                    iframe.setAttribute( "allowfullscreen", "" );
                    iframe.setAttribute( "src", "https://www.youtube.com/embed/"+ this.dataset.embed +"?rel=0&showinfo=0&autoplay=1" );
                    this.innerHTML = "";
                    this.appendChild( iframe );
        } );	
	};	
})();
