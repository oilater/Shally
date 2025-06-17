import type { MotionDirection, MotionParams, MotionState } from "./types";
import { Bezier } from "../tokens/Bezier";

const DEFAULT_MOTION: Record<MotionDirection, MotionState> = {
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
  
/** 
 * 메서드 체이닝 방식을 지원해 편리하게 사용할 수 있는 모션 클래스 
 * @example
 * const slide = Slide('in').translateX({to: 30}).opacity({to: 1}).duration(1);
 */
export class Motion {
  /** 사용자가 설정한 모션 상태 */
  private state: MotionState;

  constructor(direction: MotionDirection) {
    const defaultMotion = DEFAULT_MOTION[direction];

    // 모션 기본값 설정
    this.state = {...defaultMotion};
  }

  /** 모션 지속 시간 */
  duration(time: number) {
    this.state.duration = time;
    return this;
  }

  opacity({to, from}: MotionParams) {
    this.state.opacity = { from, to };
    return this;
  }

  translateX({to, from}: MotionParams) {
    this.state.translateX = { from, to };
    return this;
  }

  translateY({to, from}: MotionParams) {
    this.state.translateY = { from, to };
    return this;
  }

  getMotionState() {
    return this.state;
  }
}