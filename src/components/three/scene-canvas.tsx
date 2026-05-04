"use client";

import { lazy, Suspense, useSyncExternalStore } from "react";

const ParticleField = lazy(() => import("./particle-field"));

type SceneState = "checking" | "fallback" | "ready";

const FALLBACK_GRADIENT =
  "radial-gradient(ellipse at 50% 50%, rgba(52, 211, 153, 0.08) 0%, transparent 70%), #09090b";

function getSceneState(): SceneState {
  if (typeof window === "undefined") return "checking";

  const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;
  if (reducedMotion) return "fallback";

  try {
    const canvas = document.createElement("canvas");
    const gl = canvas.getContext("webgl2") || canvas.getContext("webgl");
    return gl ? "ready" : "fallback";
  } catch {
    return "fallback";
  }
}

let cachedState: SceneState | null = null;

function subscribe() {
  return () => {};
}

function getSnapshot(): SceneState {
  if (cachedState === null) {
    cachedState = getSceneState();
  }
  return cachedState;
}

function getServerSnapshot(): SceneState {
  return "checking";
}

export function SceneCanvas() {
  const state = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  return (
    <div className="absolute inset-0 z-0">
      {state === "checking" && (
        <div
          className="h-full w-full"
          style={{ background: FALLBACK_GRADIENT }}
        />
      )}
      {state === "fallback" && (
        <div
          className="h-full w-full"
          style={{ background: FALLBACK_GRADIENT }}
        />
      )}
      {state === "ready" && (
        <Suspense
          fallback={
            <div
              className="h-full w-full"
              style={{ background: FALLBACK_GRADIENT }}
            />
          }
        >
          <ParticleField />
        </Suspense>
      )}
    </div>
  );
}
