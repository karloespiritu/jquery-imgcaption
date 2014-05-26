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
        format      : "Source: <a href='%source_url%'>%source%</a>",
        hideTimeout : 1000,
        showSpeed   : "fast",
        hideSpeed   : "slow"
    };

    if(options) {
      $.extend(defaults, options);
    }

    return this.each(function() {
      var $this = $(this),   //Store  object
          source_name = "",
          source_url = "";


      if (this.nodeName === "IMG" && ($this.data("source") || $this.data("source-url")))
      {
        source_name = $this.data("source");
        source_url = $this.data("source-url");
      } else {
        source_url = "";
        source_name = "";
      }

      $this.data("source_name", source_name);
      $this.data("source_url", source_url);

      // mouseenter handler
      $this.mouseenter(function() {

        var image_offset = $(this).offset(),
            pos_x = image_offset.left + $(this).width() - 5,
            pos_y = image_offset.top + $(this).height() - 5;

        if (!$(".image-caption").length) {
          $("<div class='image-caption'></div>")
              .appendTo("body")
              .css("position", "absolute")
              .css("font-size", "12px")
              .css("font-style", "italic")
              .css("line-height", "1.4")
              .css("color", "rgba(0,0,0,0.6)")
              .css("z-index","9999")
              .css("padding", "1px 8px 1px 8px")
              .css("background-color", "rgba(255,255,255,0.6)")
              .css("border-radius", "10px");     
        }

        // add image caption content to div
        $(".image-caption")
              .html(defaults.format.split("%source%").join($.data(this, "source_name"))
              .split("%source_url%")
              .join($.data(this, "source_url")));

        // if url is empty, remove anchor tag
        if (!$.data(this, "source_url")) {
          $("a", ".image-caption").replaceWith($("a", ".image-caption").contents());
        } 

        // show image caption div  
        $(".image-caption")
              .css("left", (pos_x - $(".image-caption").width() - 16 )+"px")
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