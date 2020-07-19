class Car{
    constructor(x,y) {
      stroke("red");
       this.sprite = createSprite(x,y,10,10);
       this.sprite.addImage(carImg);
       

        }
        control(){
          if(keyIsDown(UP_ARROW)){
       
            this.sprite.y = this.sprite.y-6;
        }
        
        }
        autoControl(){
          this.sprite.y = this.sprite.y-5;
        }
        cameraPosition(){




          
        }
        
        
        
       
}

     
