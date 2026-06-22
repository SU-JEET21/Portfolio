const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

let particles = [];

function resize() {
    canvas.width = innerWidth;
    canvas.height = innerHeight;
}
resize();
window.addEventListener("resize", resize);

class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.6;
        this.vy = (Math.random() - 0.5) * 0.6;
        this.size = 2;
    }

    update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > canvas.width)
            this.vx *= -1;

        if (this.y < 0 || this.y > canvas.height)
            this.vy *= -1;
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = "#4ea8ff";
        ctx.fill();
    }
}

for (let i = 0; i < 100; i++) {
    particles.push(new Particle());
}

function animate() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p => {
        p.update();
        p.draw();
    });

    for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {

            let dx = particles[a].x - particles[b].x;
            let dy = particles[a].y - particles[b].y;
            let dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < 120) {

                ctx.beginPath();
                ctx.strokeStyle =
                    `rgba(78,168,255,${1 - dist / 120})`;

                ctx.lineWidth = 1;
                ctx.moveTo(
                    particles[a].x,
                    particles[a].y
                );

                ctx.lineTo(
                    particles[b].x,
                    particles[b].y
                );

                ctx.stroke();
            }
        }
    }

    requestAnimationFrame(animate);
}

animate();

const menuIcon = document.getElementById("menuIcon");
const closeIcon = document.getElementById("closeIcon");
const navLinks = document.querySelector(".nav-links");

menuIcon.addEventListener("click", () => {
    navLinks.classList.add("active");
});

closeIcon.addEventListener("click", () => {
    navLinks.classList.remove("active");
});
