$(function(){
  function PixelPainter(width, height){
      this.artboard = $("<div class = 'grid'>");
      this.controls = $("<div class = 'colorgrid'>");

    for (var i = 0; i < height; i ++){

      var row = $("<div class='row'>");

      for (var j = 0; j < width; j++){

        var cell = $("<div class='cell'>");

        row.append(cell);
      }
      this.artboard.append(row);
    }

    for (var k = 0; k < 20; k++){

      var roo = $("<div class ='roo'>");

      for(var h = 0; h < 30; h++){

        var cee = $("<div class = 'cee'>");

        var rgb = [];

        for(var l = 0 ; l < 3; l++){
          rgb.push(Math.floor(Math.random()*255));
        }
        console.log("rgb(" + rgb.join(',')+ ")" )
        cee.css( 'background-color', "rgb(" + rgb.join(',')+ ")" );

        roo.append(cee);
      }
      this.controls.append(roo);
    };
    cee.click(function(){
      var colorhold = $( input ).val();
    }); 
  }



  var pixelPainter = new PixelPainter(20,20);
  $("#controls").append(pixelPainter.controls);
  $("#artboard").append(pixelPainter.artboard);
});
