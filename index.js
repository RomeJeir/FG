const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = 1024;
canvas.height = 576;

c.fillRect(0, 0, canvas.width, canvas.height);
const gravity = 0.2;

class Sprite {
    constructor({ position, speed, }) {
        this.position = position;
        this.speed = speed;
        this.height = 150
        this.width = 50
        this.topheight = -150
    }
    draw() {
        c.fillStyle = 'green'
        c.fillRect(this.position.x, this.position.y, this.width, this.height);

    }

    update() {

        this.draw()

        this.position.y += this.speed.y;
        this.position.x += this.speed.x;

        if (this.position.y + this.height + this.speed.y >= canvas.height) {
            this.speed.y = 0;

        } else {

            this.speed.y += gravity;
        }
    }
}

const player = new Sprite({
    position: {
        x: 0,
        y: 0,
    },
    speed: {
        x: 0,
        y: 10,
    },

})

const enemy = new Sprite({
    position: {
        x: 975,
        y: 0,
    },
    speed: {
        x: 0,
        y: 10,
    },
})

const keys = {
    a:{
        pressed: false
    },
    d:{
        pressed: false
    }

}

function animation() {
    window.requestAnimationFrame(animation)
    c.fillStyle = 'black';
    c.fillRect(0, 0, canvas.width, canvas.height);
    player.update()
    enemy.update()

    player.speed.x=0;
    
    if(keys.a.pressed){
        player.speed.x = -2.5;
    }else if(keys.d.pressed){
        player.speed.x = 2.5;
    }
}

window.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'd': keys.d.pressed = true;
            break
    }
    switch (event.key) {
        case 'w': player.speed.y = -10;
            break
    }
    switch (event.key) {
        case 'a': keys.a.pressed = true;
            break
    }
})

window.addEventListener('keyup', (event) => {
    switch (event.key) {
        case 'd': keys.d.pressed = false;
            break
    }
    switch (event.key) {
        case 'w': player.speed.y = 0;
            break
    }
    switch (event.key) {
        case 'a': keys.a.pressed = false;
            break
    }

})




player.draw()

enemy.draw()

animation()

