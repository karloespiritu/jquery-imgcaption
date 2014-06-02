Image Caption jQuery Plugin
===========================

jQuery.imgcaption is a simple, lightweight image caption plugin that allows you to easily add and display text captions to images using HTML5's `figure` and `figcaption` elements. 

Most image caption plugins available use the `alt` or the `title` attributes which don't seem to fit the function if you are placing a long description or source attibution of the image. The `title` attribute is displayed by browsers as tooltips while the `alt` attribute is used as alternative label of the image.

The plugin uses a custom attribute, `data-caption`, to display caption to images. To use the plugin, just add a `data-caption` custom attribute to all your `img` elements that require text captions.

## Usage

1. Include jQuery:

  ```html
  <script src="http://ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min.js"></script>
  ```

2. Include plugin's code:

  ```html
  <script src="js/jquery.imgcaption.min.js"></script>
  ```  

3. Add `data-caption` custom attibute to `img` tags that needs caption

  ```
      <img src="images\myimage.jpg" data-caption="My awesome image caption" alt="my image" title="My awesome image title">
  ```
4. Call the plugin:

  ```javascript
     $(window).load(function() {
         $('img[data-caption]').imgcaption();           
     });
  ```
  // or with options
  ```
   $(window).load(function() {
       $('img[data-caption]').imgcaption({
        'textColor':'#333',
        'textAlign':'right',
        'fontSize':'0.8rem',
        'fontStyle':'italic'
       });           
   });
  ```
## Available Options


  * `textColor`  {string}  default:`#333`  - The text color of text caption.
  * `textAlign` {string} default:`right`  - The text alignment of the text caption. Possible values can be - `left`, `right`, or `center`.
  * `fontSize` {string}  default:`.82em`  - The font size.
  * `fontStyle`  {string}  default:`italic`  - font style default.
  * `lineHeight`  {string} default:`1rem`  - Line height default setting.


## Requirements

jQuery is required, tested on 1.7+. 
