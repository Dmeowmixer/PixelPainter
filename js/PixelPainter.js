$(function(){
  function PixelPainter(width, height){
    this.artboard = $("<div class = 'grid'>");
    this.controls = $("<div class = 'colorgrid'>");
    this.colorhold = null;
    this.cell = null;
    var self = this;


    for (var i = 0; i < height; i ++){

      var row = $("<div class='row'>");

      for (var j = 0; j < width; j++){

        cell = $("<div class='cell'>");

        cell.click(function(){
          $(this).css("background-color", self.colorhold);
        });

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
        // console.log("rgb(" + rgb.join(',')+ ")" )
        cee.css( 'background-color', "rgb(" + rgb.join(',')+ ")" );
        cee.click(function(){
          self.colorhold = $(this).css('background-color');
          console.log(self.colorhold);
        });

        roo.append(cee);
      }
      this.controls.append(roo);
    };
  $('body').append('<button class="clear">Clear</button>');
  $('button.clear').on('click',function(){
    $('div.row').css('background-color', 'white');
    $('div.cell').css('background-color', 'white');
    });
  $('body').append('<button class="eraser">Eraser</button>');
    $('button.eraser').on('click', function(){
      $('div.row').on('click', function(){
        self.colorhold = $(this).css('background-color', 'white');
      })
    })
    $('button.eraser').on('click', function(){
      $('div.cell').on('click', function(){
        self.colorhold = $(this).css('background-color', 'white');
      });

    })



  }


  var pixelPainter = new PixelPainter(20,20);
  $("#controls").append(pixelPainter.controls);
  $("#artboard").append(pixelPainter.artboard);
});



  // $('body').append('<button class="eraser">Eraser</button>');
  // $('button.eraser').on('click' function(){
    // $('cell').on('click' function() {
    //   $(this).css('background-color', 'white');