"use client";

import { useEffect, useRef } from "react";

import { setupKeyboardInput, createInputState } from "@/lib/game/Input";
import { spawnEnemy, enemyMovement } from "@/lib/game/Enemy";
import { checkCollision } from "@/lib/game/Collision";
import { initializeGameState } from "@/lib/game/GameState";

export default function GameCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;

    // make canvas full screen
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // -------------------------
    // GAME STATE
    // -------------------------
    const state = initializeGameState(canvas.width, canvas.height);
    const player = state.player;
    const enemies = state.enemies;
    let gameOver = state.gameOver;

    // -------------------------
    // INPUT
    // -------------------------
    const { keys, keysPressed, resetKeysPressed } = createInputState();
    const cleanupInput = setupKeyboardInput(keys, keysPressed);

    // spawn enemies every second
    setInterval(() => {
      if (!gameOver) {
        spawnEnemy(canvas, enemies);
      }
    }, 1000);


    // -------------------------
    // UPDATE LOGIC
    // -------------------------
    function update() {
      if (gameOver) return;

      player.vx = 0;
      player.vy = 0;

      if (keys["ArrowUp"]) player.vy = -player.speed;
      if (keys["ArrowDown"]) player.vy = player.speed;
      if (keys["ArrowLeft"]) player.vx = -player.speed;
      if (keys["ArrowRight"]) player.vx = player.speed;

      if (keysPressed[" "]) {
        player.vx= player.vx * 60;
        player.vy= player.vy * 60;
        console.log("dash");
      }

      player.x += player.vx;
      player.y += player.vy;


      // enemy movement (toward player)
      enemies.forEach((enemy) => {
        enemyMovement(player, enemy);
      });

      resetKeysPressed();
      if (checkCollision(player, enemies)) {
        gameOver = true;
      }
    }

    // -------------------------
    // RENDER
    // -------------------------
    function render() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Player
      ctx.fillStyle = "white";
      ctx.fillRect(
        player.x - player.size / 2,
        player.y - player.size / 2,
        player.size,
        player.size
      );

      // Enemies
      ctx.fillStyle = "red";
      enemies.forEach((enemy) => {
        ctx.fillRect(
          enemy.x - enemy.size / 2,
          enemy.y - enemy.size / 2,
          enemy.size,
          enemy.size
        );
      });

      // Game Over
      if (gameOver) {
        ctx.fillStyle = "white";
        ctx.font = "48px sans-serif";
        ctx.textAlign = "center";
        ctx.fillText("Game Over", canvas.width / 2, canvas.height / 2);
      }
    }

    // -------------------------
    // GAME LOOP
    // -------------------------
    function loop() {
      update();
      render();
      requestAnimationFrame(loop);
    }

    loop();

    // cleanup
    return () => {
      cleanupInput();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        display: "block",
        background: "black",
      }}
    />
  );
}