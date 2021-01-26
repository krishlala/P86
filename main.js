var canvas = new fabric.Canvas('myCanvas');
block_image_width = 30;
block_image_height = 30;
player_x = 10;
Player_y = 10;
var plyer_object = "";
function player_update()
{
  fabric.Image.fromURL("player.png", function(Img) {
    player_object = Img;

    player_object.scaleToWidth(150);
    plyer_object.scaleToHeight(450);
    player_object.set({
      top:player_y,
      left:player_x
    });
    canvas.add(plyer_object);
    
  })
}
var canvas = new fabric.Canvas('myCanvas');
block_image_width = 30;
block_image_height = 30;
player_x = 10;
Player_y = 10;
var plyer_object = "";
function player_update()
{
  fabric.Image.fromURL("player.png", function(Img) {
    player_object = Img;

    player_object.scaleToWidth(150);
    plyer_object.scaleToHeight(450);
    player_object.set({
      top:player_y,
      left:player_x
    });
    canvas.add(plyer_object);
    
  })
}
window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);
if(e.shiftKey == true && keyPressed == '80')
{
	console.log("p and shift pressed together");
	block_image_width = block_image_width + 10;
	block_image_height = block_image_height + 10;
	document.getElementById("current_width").innerHTML = block_image_width;
	document.getElementById("current_height").innerHTML = block_image_height;	
}
if(e.shiftKey && keyPressed == '77')
{
	console.log("m and shift pressed together");
	block_image_width = block_image_width - 10;
	block_image_height = block_image_height - 10;
	document.getElementById("current_width").innerHTML = block_image_width;
	document.getElementById("current_height").innerHTML = block_image_height;
}

	if(keyPressed == '38')
	{
		up();
		console.log("up");
	}
	if(keyPressed == '40')
	{
		down();
		console.log("down");
	}
	if(keyPressed == '37')
	{
		left();
		console.log("left");
	}
	if(keyPressed == '39')
	{
		right();
		console.log("right");
	}
	if(keyPressed == '87')
	{
		new_image('https://m.gjcdn.net/user-avatar/200/4724787-tcsegvfu-v4.jpg'); 
		console.log("w");
	}
	if(keyPressed == '71')
	{
		new_image('https://pbs.twimg.com/profile_images/766428010690015232/A4BSa1ty.jpg'); 
		console.log("g");
	}
	if(keyPressed == '76')
	{
		new_image('https://i1.sndcdn.com/artworks-000138118237-vtp2d7-t500x500.jpg'); 
		console.log("l");
	}
	if(keyPressed == '84')
	{
		new_image('https://media1.cgtrader.com/variants/bcwppqrakxCWqEXVBbc8Uknj/40073f86dea5cc27b3e46b911284f10ff35833da74046da55f55f229c8993de7/LogSide.png'); 
		console.log("t");
	}
	if(keyPressed == '82')
	{
		new_image('https://yt3.ggpht.com/a/AATXAJy0UYNsZMjOUHjTg7Vmz47X_DntaosRIWXijf431g=s900-c-k-c0x00ffffff-no-rj'); 
		console.log("r");
	}
	if(keyPressed == '89')
	{
		new_image('yellow_wall.png'); 
		console.log("y");
	}
	if(keyPressed == '68')
	{
		new_image('dark_green.png'); 
		console.log("d");
	}
	if(keyPressed == '85')
	{
		new_image('unique.png'); 
		console.log("u");
	}
	if(keyPressed == '67')
	{
		new_image('https://i.pinimg.com/originals/c6/a6/30/c6a6309c6f0adb62de4fdbd924b862e2.jpg'); 
		console.log("c");
	}
	
}
function up()
{
	if(player_y >=0)
	{
		player_y = player_y - block_image_height;
		console.log("block image height = " + block_image_height);
		console.log("When Up arrow key is pressed, X =  " + player_x + " , Y = "+player_y);
		canvas.remove(player_object);
		player_update();
	}
}

function down()
{
	if(player_y <=500)
	{
		player_y = player_y + block_image_height;
		console.log("block image height = " + block_image_height);
		console.log("When Down arrow key is pressed, X =  " + player_x + " , Y = "+player_y);
		canvas.remove(player_object);
		player_update();
	}
}

function left()
{
	if(player_x >0)
	{
		player_x = player_x - block_image_width;
		console.log("block image width = " + block_image_width);
		console.log("When Left arrow key is pressed, X =  " + player_x + " , Y = "+player_y);
		canvas.remove(player_object);
		player_update();
	}
}

function right()
{
	if(player_x <=850)
	{
		player_x = player_x + block_image_width;
		console.log("block image width = " + block_image_width);
		console.log("When Right arrow key is pressed, X =  " + player_x + " , Y = "+player_y);
		canvas.remove(player_object);
		player_update();
	}
}
