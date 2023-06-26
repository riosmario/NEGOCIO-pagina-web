const app = document.getElementById('typewriter');

const typewriter = new Typewriter(app, {
    loop: true,
    delay:75
})

typewriter
    .TypeString('Donde estamos')
    .pausefo(200)
    .start();
