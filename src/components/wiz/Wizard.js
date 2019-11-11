import React, {useState} from 'react'
import PropTypes from 'prop-types'
import WHeader from './WHeader'
import WFooter from './WFooter'
import WSendStep from "./steps/WSendStep";
import utils from "./utils";

import './css/index.css';
import WConfirmationStep from "./steps/WConfirmationStep";

const Wizard = ({config: {backend: {api}, steps}}) => {
    console.log(steps);
    // state
    const [currentStep, setCurrentStep] = useState(steps[0]); // it hold current step
    const [data, setData] = useState([]); // input value, step with id
    const [stack, setStack] = useState([]); // stack contain path stack
    const [direction, setDirection] = useState(0); // 0 - NA, 1 - Back, 2 - Forward

    let directionTransformX = {};
    // directionTransformX.transition = "transform 0.4s";
    // if (direction === 1) {
    //     directionTransformX.tansform = "transform(0%)"
    // } else if (direction === 2) {
    //     directionTransformX.tansform = "transform(100%)";
    // }

    const Component = utils.getStepComponentByType(currentStep.type);

    const content = <Component {...currentStep} onNext={(d) => {
        const nextStep = steps.find(s => s.id === d.next);
        if (nextStep) {
            setCurrentStep(nextStep);
            setStack([...stack, {...currentStep}]);
            setData([...data, {...d}]);
        }
    }}/>;

    if (Component === WSendStep || Component === WConfirmationStep) {
        return content;
    }

    const calcPercentageProgress = () => {
        if (stack.length <= 0) {
            return 5;
        }

        const startStep = data[0].next;

        const choosenPath = steps[0].options.find(({stepRange: {from, to}}) => from <= startStep && to >= startStep);

        const totalStepsPath = steps.filter(({id, isSpecialSelection}) => id >= choosenPath.stepRange.from && id <= choosenPath.stepRange.to && !isSpecialSelection);

        const totalSharedSteps = steps.filter(({isSharedStep}) => isSharedStep);

        const stepsPassedWithoutSpecialSelection = stack.filter(({id}) => steps.find(({id: sid, isSpecialSelection}) => sid === id && !isSpecialSelection));

        const temp = totalSharedSteps.length + totalStepsPath.length;

        return ((stepsPassedWithoutSpecialSelection.length / temp) * 100);
    };

    // render
    return (
        <div className={'wui outer'}>
            <div className={'wui container'}>
                <WHeader backArrow={stack.length > 0} title={currentStep.title}
                         percentage={calcPercentageProgress()}
                         onBack={() => {
                             // go back by one step
                             if (stack.length > 0) {
                                 const lastIndex = stack.length - 1;
                                 setCurrentStep(stack[lastIndex]);
                                 setStack(stack.filter((_, i) => i !== lastIndex));
                                 setData(data.filter((_, i) => i !== lastIndex));
                                 setDirection(2);
                             }
                         }}/>
                <div className={"wui carousel"}>
                    <div className={"wui carousel-slide"} style={directionTransformX}>
                        <div className={"wui content"} style={directionTransformX}>
                            {content}
                        </div>
                    </div>
                </div>
                <WFooter/>
            </div>
        </div>
    )
};

Wizard.propTypes = {
    config: PropTypes.shape({
        steps: PropTypes.arrayOf(PropTypes.object).isRequired,
        backend: PropTypes.shape({
            api: PropTypes.string
        })
    }),
    onSubmit: PropTypes.func
};

export default Wizard
