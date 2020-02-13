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

$('.lazy').Lazy({
    onError: function(element) {
        console.log('error loading ' + element.data('src'));
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
