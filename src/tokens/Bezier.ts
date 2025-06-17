import type { TimeCurve } from './types';

export const Bezier: TimeCurve = {
    ease: [0.65, 0, 0.35, 1],
    out: [0.33, 1, 0.68, 1],
    expo: [0.16, 1, 0.3, 1],
    back: [0.34, 1.56, 0.64, 1],
} as const;