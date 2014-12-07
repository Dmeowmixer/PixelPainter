$(function(){
  function PixelPainter(width, height){
    this.artboard = $("<div>");
    this.controls = $("<div>");

  // for (var i = 0; i < width*height -1; i ++){
  //   var div = $("<div class='test'>",{
  //   });
  //   this.artboard.append(div);
  // };
  for (var i = 0; i < height; i ++){
    var row = $("<div class='row'>");
    for (var j = 0; j < width; j++){
      var cell = $("<div class='cell'>");
      row.append(cell);
    }
    this.artboard.append(row);

    }
  }

  // for (var j = 0; j < height; j++){
  //   var roo = $("<div class='roo'>");
  //   for (var k = 0; k < width; k++){
  //     var cee = $("<div class='cee'");
  //     roo.append(cee);
  //   }
  //   this.controls.append(div);
  //   })
  // };
  // }


  var pixelPainter = new PixelPainter(20,20);
  $("#controls").append(pixelPainter.controls);
  $("#artboard").append(pixelPainter.artboard);
});
