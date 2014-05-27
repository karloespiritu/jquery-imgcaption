/*!
 * jQuery Image Caption Plugin v1.0
 * http://github.com/karloespiritu/jquery-imgcaption/
 *
 * Copyright 2014, Karlo Espiritu
 * MIT license.
 *
 */

;(function($, window, document, undefined ) {
  $.fn.imgcaption = function(options) {
    //set the default options
    var defaults = {
        hideTimeout : 1200,
        showSpeed   : "fast",
        hideSpeed   : "slow"
    };

    if(options) {
      $.extend(defaults, options);
    }

    return this.each(function() {
      var $this = $(this),   //Store  object
          caption = "",
          source_name = "",
          source_url = "";

      if (this.nodeName === "IMG" && $this.data("caption"))
      {
        caption = $this.data("caption");
      } else {
        caption = "";
      }

      //$this.data("caption", caption);

      // mouseenter handler
      $this.mouseenter(function() {

        var image_offset = $(this).offset(),
            pos_x        = image_offset.left + $(this).width(),
            pos_y        = image_offset.top + $(this).height();

        if (!$(".image-caption").length) {
          $("<div class='image-caption'></div>")
              .appendTo("body")
              .css("position", "absolute")
              .css("font-size", "12px")
              .css("font-style", "italic")
              .css("line-height", "1.4")
              .css("color", "rgba(0,0,0,0.6)")
              .css("z-index","9999")
              .css("padding", "1px 5px 1px 5px")
              .css("background-color", "rgba(255,255,255,0.7)")
              .css("border-radius", "0px");     
        }

        // add caption content to div
        $(".image-caption")
              .html(caption)
              .css("left", (pos_x - $(".image-caption").width() - 10 )+"px")
              .css("top", (pos_y - $(".image-caption").height() - 2 )+"px")
              .fadeIn(defaults.showSpeed);
              

        clearTimeout($(".image-caption").data("hide-timeout"));
      });
  
      // mouseleave handler
      $this.mouseleave(function() {
        // on mouseleave, save timeout in hide-timeout attr 
        $(".image-caption").data(
            "hide-timeout", 
            setTimeout(function(){ 
              $(".image-caption").fadeOut(defaults.hideSpeed); 
            }, 
            defaults.hideTimeout)
        );
      });
    }); //end each
  };
})(jQuery, window, document );