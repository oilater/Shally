type Easing = 'ease' | 'out' |'expo' | 'back';

export type BezierPoint = [number, number, number, number];


export type TimeCurve = {
    [K in Easing]: BezierPoint;
}