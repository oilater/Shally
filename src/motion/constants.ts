import type { MotionDirection, MotionState } from "./types";
import { Bezier } from "../tokens/Bezier";

export const DEFAULT_MOTION: Record<MotionDirection, MotionState> = {
    in: {
        easing: Bezier.ease,
        duration: 1,
        opacity: { from: 0, to: 1 },
        translateX: { from: 0, to: 30 },
        translateY: { from: 0, to: 30 },
    },
    out: {
        easing: Bezier.ease,
        duration: 1,
        opacity: { from: 1, to: 0 },
        translateX: { from: 30, to: 0 },
        translateY: { from: 30, to: 0 },
    }
};