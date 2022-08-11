const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width= 1024;
canvas.height= 576;

c.fillRect(0, 0, canvas.width, canvas.height);
const gravity = 0.2;

class Sprite {
    constructor( {position, speed,  } ){
        this.position = position;
        this.speed = speed;
        this.height = 150
        this.width = 50
    }
        draw() {
            c.fillStyle= 'green'
            c.fillRect(this.position.x, this.position.y, this. width, this.height);

        }

        update(){

            this.draw()
            
            this.position.y += this.speed.y;

            if(this.position.y + this.height + this.speed.y >= canvas.height){
                this.speed.y = 0; 

            }else{
                
                this.speed.y += gravity;
            }
        }
}

const player = new Sprite({
    position:{
        x:0,
        y:0,
    },
    speed:{
        x:0,
        y:10,
    },

})

const enemy = new Sprite({
    position:{
        x:975,
        y:0,
    },
        speed:{
        x:0,
        y:10,
    },
})

function animation(){
    window.requestAnimationFrame(animation)
    c.fillStyle = 'black';
    c.fillRect(0 ,0 , canvas.width, canvas.height);

    window.addEventListener('keydown', (event) => {
        console.log(event);
    })

    player.update()
    enemy.update()
}

player.draw()

enemy.draw()

animation()