const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width= 1024;
canvas.height= 576;

c.fillRect(0, 0, canvas.width, canvas.height);

class Sprite {
    constructor( {position, speed,  } ){
        this.position = position;
        this.speed = speed;
    }
        draw() {
            c.fillStyle= 'green'
            c.fillRect(this.position.x, this.position.y, 50, 150);

        }

        update(){

            this.draw()
            this.position.y += this.speed.y;
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
        y:0,
    },
})

function animation(){
    window.requestAnimationFrame(animation)
    c.fillStyle= "black"
    c.clearRect(0 ,0 , canvas.width, canvas.height)

    player.update()
    enemy.update()
}

player.draw()

enemy.draw()

animation()