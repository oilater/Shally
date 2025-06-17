import { Motion } from "./Motion";
import type { MotionDirection } from "./types";

class SlideMotion extends Motion {
    constructor(direction: MotionDirection) {
        super(direction);
    }
}

/** 
 * 팩토리 패턴을 사용해 모션 클래스를 생성하는 함수 
 * Slide('in') 호출 시 SlideMotion 클래스를 생성하고 반환
*/
export function Slide(direction: MotionDirection) {
    return new SlideMotion(direction);
}

