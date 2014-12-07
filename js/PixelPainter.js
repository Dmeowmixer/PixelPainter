$(function(){
  function pixelPainter(width, height){
    $("#artboard").on();
    $("#controls").on();

  
  for (var i = 0; i < width; i ++){
    var div = $("<div>",{
      class: maindiv,
    })

}
  for (var j = 0; j < height; j++){
    $("<div></div>", {
      "class":"maindiv",

    });
  }


    var pixelPainter = PixelPainter(20,20);
    $("#controls").append(pixelPainter.controls);
    $("#artboard").append(pixelPainter.artboard);


  };
});