import VanillaTilt from "vanilla-tilt";

/**
 * Svelte action for 3D tilt effect on cards.
 * Usage: <div use:tilt> or <div use:tilt={{ max: 10 }}>
 */
export function tilt(node, options = {}) {
  // Skip on touch-only devices
  if (!window.matchMedia("(hover: hover)").matches) {
    return { destroy() {} };
  }

  VanillaTilt.init(node, {
    max: 6,
    speed: 400,
    glare: true,
    "max-glare": 0.08,
    perspective: 1200,
    scale: 1.02,
    ...options,
  });

  return {
    destroy() {
      if (node.vanillaTilt) {
        node.vanillaTilt.destroy();
      }
    },
  };
}
