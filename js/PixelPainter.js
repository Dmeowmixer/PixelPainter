$(function(){
  function PixelPainter(width, height){
    this.artboard = $("<div>");
    this.controls = $("<div>");

  for (var i = 0; i < width*height -1; i ++){
    var div = $("<div class='test'>",{
    });
    this.artboard.append(div);
  };


  for (var j = 0; j < 25*2; j++){
    var div = $("<div class='set'>", {
    })
    this.controls.append(div);
  };
  }


  var pixelPainter = new PixelPainter(20,20);
  $("#controls").append(pixelPainter.controls);
  $("#artboard").append(pixelPainter.artboard);
});
