
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var Top;
var Bob1 , Bob2 , Bob3 , Bob4 , Bob5 ;
var thread1 , thread2 , thread3 , thread4 , thread5 ;



function setup() {
	createCanvas(1200,400);


	engine = Engine.create();
	world = engine.world;

	Top = new TOP( 400 , 100 , 200 , 20 );
	Bob1 = new bob( 310 , 150 , 25 );
	Bob2 = new bob( 355 , 150 , 25 );
	Bob3 = new bob( 400 , 150 , 25 );
	Bob4 = new bob( 455 , 150 , 25 );
	Bob5 = new bob( 510 , 150 , 25 );
	thread1 = new chain( Bob1.body , { x : 310 , y : 100 } , 200 , 1 );
	thread2 = new chain( Bob2.body , { x : 355 , y : 100 } , 200 , 1 );
	thread3 = new chain( Bob3.body , { x : 400 , y : 100 } , 200 , 1 );
	thread4 = new chain( Bob4.body , { x : 455 , y : 100 } , 200 , 1 );
	thread5 = new chain( Bob5.body , { x : 510 , y : 100 } , 200 , 1 );

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(250);
    Top.display("black");
    Bob1.display(rgb(255,0,255));
    Bob2.display(rgb(255,0,255));
    Bob3.display(rgb(255,0,255));
    Bob4.display(rgb(255,0,255));
	Bob5.display(rgb(255,0,255));
	
	
    


  
  drawSprites();
 
}

function keyPressed()
{
	if( keyCode=UP_ARROW )
	{
		Matter.Body.applyForce( Bob1.body , Bob1.body.position , { x:2 , y:0 } );
	}
}



