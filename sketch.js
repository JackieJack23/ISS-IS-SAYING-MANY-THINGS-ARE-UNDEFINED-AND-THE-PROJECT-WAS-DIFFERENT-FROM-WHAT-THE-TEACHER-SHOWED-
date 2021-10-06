function setup() {
  var bg = loadImage("iss.png")
  var sleep = loadImage("sleep.png")
  var brush = loadImage("brush.png")
  var gym = loadAnimation("gym21.png", "gym22.png")
  var eat = loadAnimation("eat1", "eat2")
  var drink = loadAnimation("drink1", "drink2")
  var move = loadAnimation("move", "move1")
  createCanvas(400, 400);
}

function draw() {
  background(220);
  background = createSprite(200, 200, 400, 400)
  background.addImage("background", bg)

  astronaut = createSprite(300, 290)
  astronaut.addAnimation("sleeping", sleep)
  astronaut.scale = 0.1

  Edges = createEdgeSprite()
  astronaut.bounceOff(Edges)

  if (keyDown("UP_ARROW")) {
    astronaut.addAnimation("brushing", brush)
    astronaut.changeAnimation("brushing")
    astronaut.y = 350
    astronaut.velocityX = 0
    astronaut.velocityY = 0
  }

  drawSprites()
}