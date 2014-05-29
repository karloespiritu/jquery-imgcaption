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
            backgroundColor: "#fff",
            textColor: "#333",
            fontSize: ".82em",
            fontStyle: "italic",
            lineHeight: "1rem"
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
                    "display" : "inline-block"})
                    .addClass(imgClass)
                    .attr("style", imgStyle)
                    .width(imgWidth);

                $("figcaption").css({
                    "margin": "0px",
                    "padding": "5px", 
                    "font-size": settings.fontSize,
                    "font-style": settings.fontStyle,
                    "line-height": settings.lineHeight,
                    "text-align": "right",
                    "color": settings.textColor,
                    "background-color": settings.backgroundColor
                });            
            } //check if data-caption is not empty 
        });
    };
})(jQuery);
    