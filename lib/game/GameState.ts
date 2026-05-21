export function initializeGameState(Width: number, Height: number) {
    return {
        player: {
            x: Width / 2,
            y: Height / 2,
            size: 25,
            speed: 2,
            vx: 0,
            vy: 0,
        },
        enemies: [] as { x: number; y: number; size: number; speed: number }[],
        gameOver: false,
        // Input state
    };
}