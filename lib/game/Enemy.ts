export function spawnEnemy(canvas: HTMLCanvasElement, enemies: { x: number; y: number; size: number; speed: number }[]) {
    const size = 25;
    const speed = 1.5;

    // spawn from random edge
    const edge = Math.floor(Math.random() * 4);

    let x = 0;
    let y = 0;

    if (edge === 0) {
        x = 0;
        y = Math.random() * canvas.height;
    } else if (edge === 1) {
        x = canvas.width;
        y = Math.random() * canvas.height;
    } else if (edge === 2) {
        x = Math.random() * canvas.width;
        y = 0;
    } else {
        x = Math.random() * canvas.width;
        y = canvas.height;
    }

    enemies.push({ x, y, size, speed });
}

export function enemyMovement(player: { x: number; y: number }, enemy: { x: number; y: number; speed: number }) {
    const dx = player.x - enemy.x;
    const dy = player.y - enemy.y;

    const dist = Math.sqrt(dx * dx + dy * dy);

    enemy.x += (dx / dist) * enemy.speed;
    enemy.y += (dy / dist) * enemy.speed;
}
