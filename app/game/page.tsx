"use client";

import GameCanvas from "@/components/GameCanvas";

export default function GamePage() {
  return (
    <div style={{position: "fixed", width: "100vw", height: "100vh", overflow: "hidden", backgroundColor: "#fff" }}>
      <GameCanvas />
    </div>
  );
}