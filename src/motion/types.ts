import type { BezierPoint } from "../tokens/types";

export type MotionDirection = 'in' | 'out';

export type MotionParams = {
    to: number;
    from?: number;
}

export interface MotionState {
    easing: BezierPoint;
    duration: number;
    opacity: { from?: number; to?: number };
    translateX: { from?: number; to?: number };
    translateY: { from?: number; to?: number };
}