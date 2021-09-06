const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;

var computerB,playerB;
var player;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
   engine = Engine.create();
   world = engine.world;
	
   //Create Player Base and Computer Base Object
   computerB = new ComputerBase(200,500,200,200);
   playerB = new ComputerBase(1100,500,200,200);
         
   //Create player and computer player
   Compplayer = new Player(200,330,100,200);
   player = new Player(1100,330,100,200);

  }

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

  //Knowledge of coordinates
  fill("red");
  textSize(20);
  text(mouseX+","+mouseY,mouseX,mouseY);



  //Display Playerbase and computer base 
  computerB.display();
  playerB.display();

  //display Player and computerplayer
  Compplayer.display();
  player.display();


 }
