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
            backgroundColor: "#eee",
            textColor: "#444",
            fontStyle: "italic",
    }, options);

        return this.each(function() { 
            
            var $this = $(this); 
                caption = $this.data('caption'), 
                classList = $this.attr('class'),  
                inlineStyles = $this.attr('style'), 
                imgWidth = $this.width(); 

            $this.removeAttr('class'); 
            $this.removeAttr('style'); 

            if (caption) {
                $newFigure = $this.wrap('<figure></figure>').parent(); 
                $this.after('<figcaption>' + caption + '</figcaption>');
                $newFigure
                    .css({
                    "background-color" : settings.backgroundColor,    
                    "display" : "inline-block",
                    "color": settings.textColor,
                    "font-size": "13px",
                    "font-style": settings.fontStyle,
                    "line-height": "1.2",
                    "text-align": "right"})
                    .addClass(classList)
                    .attr('style', inlineStyles)
                    .width(imgWidth)
                    .parent('p').before($newFigure); 

                $("figcaption")
                    .css({"padding":"3px"});               
            }
        });
    };
})(jQuery);
    