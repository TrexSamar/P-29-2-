var stand;
var block1, block2, block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15,block16


function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    stand = new Ground(600, 200, 20, 100);

    //level1
    block1 = new Block(300, 275, 30, 40);
    block2 = new Block(330, 275, 30, 40);
    block3 = new Block(360, 275, 30, 40);
    block4 = new Block(390, 275, 30, 40);
    block5 = new Block(420, 275, 30, 40);
    block6 = new Block(450, 275, 30, 40);
    block7 = new Block(470, 275, 30, 40);

    //level2
    block8 = new Block(330, 235, 30, 40);
    block9 = new Block(360, 235, 30, 40);
    block10 = new Block(390, 235, 30, 40);
    block11 = new Block(420, 235, 30, 40);
    block12 = new Block(450, 253, 30, 40);
    
    //level3
    block13 = new Block(360, 195, 30, 40);
    block14 = new Block(390, 195, 30, 40);
    block13 = new Block(420, 195, 30, 40);

    //top
    block16 = new Block(390, 155, 30, 40);








}

function draw(){


}