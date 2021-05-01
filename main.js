var canvas=new fabric.Canvas('mycanvas') ; 
block_image_width =30;
block_image_height =30;
player_x = 10 ;
player_y = 10 ;
 var player_object="";
 var block_object="";
function player_update(){
fabric.Image.fromURL("player.png",function(Img){
player_object =Img;
player_object.scaleToWidth(150);
player_object.scaleToHeight(140);
player_object.set({
    top:player_x,
    bottom:player_y,
});
canvas.add(player_object);
});
}
function new_image(get_image){
    fabric.Image.fromURL( get_image,function(Img){
        block_object =Img;
        console.log("new_image");
        console.log(block_object);
        block_object.scaleToWidth(150);
        block_object.scaleToHeight(140);
        block_object.set({
            top:player_x,
            bottom:player_y,
        });
        canvas.add(block_object);
        });
}
window.addEventListener("keydown",my_keydown);
   function my_keydown(e)
   {
   keyPressed=e.keyCode;
   console.log(keyPressed);
   if(e.shithKey == true && keyPressed=='77'){
    console.log("m and shift pressed together");
    block_image_width-=10;
    block_image_Height-=10;
document.getElementById("CurrentWidth").innerHTML=block_image_width ;
document.getElementById("CurrentHeight").innerHTML=block_image_Height;}

if(keyPressed=='38'){
    console.log("i am inside up function");
    up();
}

if(keyPressed=='40'){
    down();
}
if(keyPressed=='39'){
    right();
}
if(keyPressed=='37'){
    left();
}

if(keyPressed=='76'){
    new_image('hulk_face.png');
    new_image('hulk_legs.png');
    new_image('hulk_left_hand.png');
    new_image('hulk_right_hand(1).png');
    new_image('hulkd_body.png');
}
if(keyPressed=='82'){
    console.log("i am inside r") ;
    new_image('ironman_body.png');
    new_image('ironman_left_hand.png');
    new_image('ironman_right_hand.png');
    new_image('ironman_legs.png');
    new_image('ironman_face.png');
}
if(keyPressed=='76'){
    new_image('thor_left_hand.png');
    new_image('thor_face.png');
    new_image('thor_right_hand(1).png');
    


}
if(keyPressed=='66'){
    new_image('spiderman_body.png');
    new_image('spiderman_face.png');
    new_image('spiderman_legs.png');
    new_image('spiderman_left_hand.png');
    new_image('spiderman_right_hand.png');
}
if(e.shithKey == true && keyPressed=='80'){
    console.log("p and shift pressed together");
    block_image_width+=10;
    block_image_Height+=10;
document.getElementById("CurrentWidth").innerHTML=block_image_width ;
document.getElementById("CurrentHeight").innerHTML=block_image_height;


   }
   }

   

   function up(){
    if(player_y>=0){
        console.log(player_object);
        player_y= player_y-block_image_height;
        canvas.remove(player_object);
        player_update();
    
    }
    }

    function down(){
        if(player_y<=500){
            player_y= player_y+block_image_height;
            canvas.remove(player_object);
            player_update();
        
        }
        }
        function right(){
            if(player_x<=850){
                player_x= player_x+block_image_width;
                canvas.remove(player_object);
                player_update();
            
            }
            }
            function left(){
                if(player_x>=0){
                    player_x= player_x-block_image_width;
                    canvas.remove(player_object);
                    player_update();
                
                }
                }
