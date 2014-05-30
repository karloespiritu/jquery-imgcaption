Image Caption jQuery Plugin
======================

A simple image caption jQuery plugin

## Usage

1. Include jQuery:

  ```html
  <script src="http://ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min.js"></script>
  ```

2. Include plugin's code:

  ```html
  <script src="js/jquery.imgcaption.min.js"></script>
  ```  

3. Call the plugin:

  ```javascript
     $(window).load(function() {
         $('img[data-caption]').imgcaption();           
     });
  ```
  // or with options

   $(window).load(function() {
       $('img[data-caption]').imgcaption({
        'backgroundColor': "#eee",
        'textColor':'#444',
        'fontSize': '0.8rem',
        'fontStyle': 'italic'
       });           
   });
   
## Available Options


  * `textColor`  {string}  default:`#333`  - The text color of text caption.
  * `fontSize` {string}  default:`.82em`  - The font size.
  * `fontStyle`  {string}  default:`italic`  - font style default.
  * `lineHeight`  {string} default:`1rem`  - Line height default setting.


Requirements
------------

jQuery is required, tested on 1.7+. 


## License

Copyright (c) 2014 Karlo Espiritu

The MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
