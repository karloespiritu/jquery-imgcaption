Image Caption jQuery Plugin
===========================

jQuery.imgcaption is a simple, lightweight image caption plugin that allows you to easily add and display text captions to images using HTML5's `figure` and `figcaption` elements.

Most image caption plugins available use the `alt` or the `title` attributes which don't seem to fit the function if you are placing a long description or source attibution of the image. The `title` attribute is displayed by browsers as tooltips while the `alt` attribute is used as alternative label of the image.

The plugin uses a custom attribute, `data-caption`, to display caption to images. To use the plugin, just add a `data-caption` custom attribute to all your `img` elements that require text captions.

You can also customize the the text alignment of the image caption by adding an optional `data-caption-align` attribute. Possible values are -- `left`, `right`, ot `center`. By default, this attribute is set to `left`.

```html
<img
     src="https://source.unsplash.com/random/1440x600"
     data-caption="My center-aligned image caption"
     alt="My image"
     title="My image title"
     data-caption-align="center"
>
```

## Usage

1. Include jQuery:

  ```html
  <script src="http://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  ```

2. Include plugin's code:

  ```html
  <script src="js/jquery.imgcaption.min.js"></script>
  ```

3. Add `data-caption` custom attibute to `img` tags that needs caption

  ```
      <img src="images/myimage.jpg" data-caption="My awesome image caption" alt="my image" title="My awesome image title">
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
        'fontSize':'0.8rem',
        'fontStyle':'italic'
       });
   });
  ```

## Available Options

  * `textColor`  {string}  default:`#333`  - The text color of text caption.
  * `fontSize` {string}  default:`.82em`  - The font size.
  * `fontStyle`  {string}  default:`italic`  - font style default.
  * `lineHeight`  {string} default:`1rem`  - Line height default setting.


## Optional Attribute

Use the optional attribute `data-caption-align` to change the text alignment of the image caption. Possible values are: `left`, `right`, or `center`. It defaults to `left` if not specified.

## Requirements

jQuery is required, tested on 2.x or higher.
