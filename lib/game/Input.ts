// Currently only handle hold interactions
// Implement next : Press, Toggle, Release, Charge, Double Tap


export function setupKeyboardInput(keys: Record<string, boolean>, keysPressed: Record<string, boolean>) {
  const handleKeyDown = (e: KeyboardEvent) => {
    if (!keys[e.key]) {
      keysPressed[e.key] = true; // Mark as newly pressed
      }
    keys[e.key] = true;
  };

  const handleKeyUp = (e: KeyboardEvent) => {
    keys[e.key] = false;
  };

  window.addEventListener("keydown", handleKeyDown);
  window.addEventListener("keyup", handleKeyUp);

  // return cleanup function
  return () => {
    window.removeEventListener("keydown", handleKeyDown);
    window.removeEventListener("keyup", handleKeyUp);
  };
}

export function createInputState() {
  const keys: Record<string, boolean> = {};
  const keysPressed: Record<string, boolean> = {};

  function resetKeysPressed() {
    for (const k in keysPressed) keysPressed[k] = false;
  }

  return { keys, keysPressed, resetKeysPressed };
}