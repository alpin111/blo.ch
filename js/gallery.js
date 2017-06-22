







var dir = "portfoliofolder/" + slice;
var fileextension = ".jpg";

var max_images = slice + ".images"

   var count;

   for(count = 1; count < eval(max_images)+1; count++){
      document.write('<img src="portfoliofolder/'+
                      slice +
                      '/'+
                      count +
                      '.jpg"  type="image/jpg"><br>');

   }
