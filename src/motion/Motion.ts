import type { MotionDirection, MotionParams, MotionState } from "./types";
import { DEFAULT_MOTION } from "./constants";
import type { BezierPoint } from "../tokens/types";
  
/** 
 * 메서드 체이닝 방식을 지원해 편리하게 사용할 수 있는 모션 클래스 
 * @example
 * const slide = Slide('in').translateX({to: 30}).opacity({to: 1}).duration(1);
 */
export class Motion {
  /** 사용자가 설정한 모션 상태 */
  private state: MotionState;

  constructor(direction: MotionDirection) {
    // 모션 기본값 설정
    this.state = {...DEFAULT_MOTION[direction]};
  }

  easing(easing: BezierPoint) {
    this.state.easing = easing;
    return this;
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