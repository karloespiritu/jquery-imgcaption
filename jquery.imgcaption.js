/*!
 * jQuery Image Caption Plugin v1.0
 * http://github.com/karloespiritu/jquery-imgcaption/
 *
 * Copyright 2014, Karlo Espiritu
 * MIT license.
 *
 */

(function($) {
    $.fn.imgcaption = function(options) {

    var settings = $.extend({
            backgroundColor: "#ccc",
            textColor: "#333",
            fontSize: ".8em",
            fontStyle: "italic",
    }, options);

        return this.each(function() { 
            
            var $this = $(this); 
                caption = $this.data('caption'), 
                imgClass = $this.attr('class'),  
                imgStyle = $this.attr('style'), 
                imgWidth = $this.width(); 

            $this.removeAttr('class'); 
            //$this.removeAttr('style'); 

            if (caption) {
                $figure = $this.wrap('<figure></figure>').parent(); 
                $this.after('<figcaption>' + caption + '</figcaption>');
                $figure
                    .css({
                       
                    "display" : "inline-block",
                    "margin-bottom": "10px"})
                    .addClass(imgClass)
                    .attr('style', imgStyle)
                    .width(imgWidth)
                    .parent('p').before($figure); 

                $("figcaption")
                    .css({"padding":"4px",
                    "font-size": settings.fontSize,
                    "font-style": settings.fontStyle,
                    "text-align": "right",
                    "color": settings.textColor,
                    "background-color" : settings.backgroundColor});            
            }
        });
    };
})(jQuery);
    