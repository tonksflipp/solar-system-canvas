const canvas = document.getElementById("universe");
const ctx = canvas.getContext("2d");

const centerX = canvas.width / 2;
const centerY = canvas.height / 2;

// Planets
const planets = [
  { distance: 60, radius: 5, color: "brown", angle: 0, speed: 0.047 },
  { distance: 100, radius: 8, color: "orange", angle: Math.PI / 4, speed: 0.035 },
  { distance: 150, radius: 9, color: "blue", angle: Math.PI / 2, speed: 0.0029 },
  { distance: 200, radius: 5, color: "red", angle: Math.PI * 0.75, speed: 0.0024 },
  { distance: 250, radius: 14, color: "chocolate", angle: Math.PI, speed: 0.0013 },
  { distance: 300, radius: 12, color: "burlywood", angle: Math.PI, speed: 0.0009 },
  { distance: 350, radius: 10, color: "aqua", angle: Math.PI, speed: 0.00068 },
  { distance: 400, radius: 9, color: "darkblue", angle: Math.PI, speed: 0.000543 },
];

// Animation
function animate() {
  // 1. Clean canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // 2. Draw sun
  ctx.beginPath();
  ctx.arc(centerX, centerY, 30, 0, Math.PI * 2);
  ctx.fillStyle = "yellow";
  ctx.fill();

     // Draw orbits
  for (const planet of planets) {
    ctx.beginPath();
    ctx.setLineDash([4, 4]); 
    ctx.arc(centerX, centerY, planet.distance, 0, Math.PI * 2);
    ctx.strokeStyle = "rgba(255, 255, 255, 0.2)";
    ctx.lineWidth = 1;
    ctx.stroke();
    ctx.setLineDash([]); 
  }

  // 3. Draw planets
  for (const planet of planets) {
    
    planet.angle += planet.speed;

    
    const x = centerX + planet.distance * Math.cos(planet.angle);
    const y = centerY + planet.distance * Math.sin(planet.angle);

   
    ctx.beginPath();
    ctx.arc(x, y, planet.radius, 0, Math.PI * 2);
    ctx.fillStyle = planet.color;
    ctx.fill();
  }

  // 4. Repeat animation
  requestAnimationFrame(animate);
}

// Initiate animation
animate();
