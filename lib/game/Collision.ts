export function checkCollision(player: { x: number; y: number; size: number }, enemies: { x: number; y: number; size: number }[]): boolean {
    for (const enemy of enemies) {
        const dx = player.x - enemy.x;
        const dy = player.y - enemy.y;

        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < player.size / 2 + enemy.size / 2) {
            return true;
        }
    }
    return false;
}
