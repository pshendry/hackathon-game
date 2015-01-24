window.addEventListener('load',function() {
  var Q = Quintus({
    development: true,
    //audioPath: "assets/audio/",
    imagePath: "assets/images/",
    dataPath: "assets/data/"
  })
  .include("Sprites, Scenes, Input, TMX, Anim, 2D, Touch, UI, Audio")
  .setup("quintusContainer")
  .controls()
  .touch()
  .enableSound();

  Q.gravityX = 0;
  Q.gravityY = 0;
  
  initComponents(Q);
  initSprites(Q);

  Q.scene("start",function(stage) {
    Q.stageTMX('stage1.tmx', stage);

    // A basic sprite shape a asset as the image
    var player = stage.insert(new Q.Player({ x: 10*Q.DEFAULT_CELL_WIDTH, y: 998*Q.DEFAULT_CELL_HEIGHT}));
    stage.insert(createBug(Q, 11, 990));
    stage.insert(createBug(Q, 10, 991));
    stage.insert(createBug(Q, 9, 992));
    stage.insert(createBug(Q, 8, 993));
    stage.insert(createBug(Q, 12, 995));

    stage.add('viewport').follow(player);
    console.log("added player");
  });

  Q.loadTMX(
    'stage1.tmx, tiles.png, ' +
    'sprites/coder.png',
	'sprites/bug.png',
    function() {
      // Start the show
      Q.stageScene("start");

      // Turn on default keyboard controls
      Q.input.keyboardControls();
  });
});

