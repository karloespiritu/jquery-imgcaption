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
            textColor: "#333",
            textAlign: "right",
            fontSize: ".82em",
            fontStyle: "italic",

    }, options);

        return this.each(function() { 
            
            var $this = $(this); 
                caption = $this.data("caption"), 
                imgClass = $this.attr("class"),  
                imgStyle = $this.attr("style"), 
                imgWidth = $this.width(); 

            $this.removeAttr("class"); 
            $this.removeAttr("style"); 

            if (caption) {
                $figure = $this.wrap("<figure></figure>").parent(); 
                $this.after("<figcaption>" + caption + "</figcaption>");
                
                $figure.css({
                    "display" : "inline-block"
                    })
                    .addClass(imgClass)
                    .attr("style", imgStyle)
                    .width(imgWidth);

                $("figcaption").css({
                    "margin": "0px",
                    "padding": "5px",
                    "color": settings.textColor,
                    "font-size": settings.fontSize,
                    "font-style": settings.fontStyle,
                    "line-height": "1rem",
                    "text-align": settings.textAlign
                });            
            } //check if data-caption is not empty 
        });
    };
})(jQuery);
    