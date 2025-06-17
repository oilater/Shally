import { Fragment, type ReactNode } from "react";
import type { Motion } from "../motion/Motion";

type ShallyProps = {
    children: ReactNode;
    startMotion?: Motion; // 시작 모션
    endMotion?: Motion; // 종료 모션
    staggerDelay?: number; // 스태거 딜레이
};

function Shally({children, startMotion, endMotion, staggerDelay}: ShallyProps) {

    console.log(startMotion?.getMotionState());
    
    return (
        <Fragment>
            {children}
        </Fragment>
    );
}

export default Shally;