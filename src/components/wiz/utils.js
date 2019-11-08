import React from "react";
import WCardStep from "./steps/WCardStep";
import WInputStep from "./steps/WInputStep";
import WSliderStep from "./steps/WSliderStep";
import WMapLocatorStep from "./steps/WMapLocatorStep";
import WSendStep from "./steps/WSendStep";
import WConfirmationStep from "./steps/WConfirmationStep";

const getStepComponentByType = type => {
    switch (type) {
        case 'cards-step':
            return WCardStep; // done
        case 'slider-step':
            return WSliderStep; // done
        case 'send-step':
            return WSendStep;
        case 'confirmation-step':
            return WConfirmationStep;
        case 'input-step':
            return WInputStep; // done
        case 'map-locator-step':
            return WMapLocatorStep; // done
        default:
            throw Error("Invalid type of component requested!");
    }
};

export function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.substr(1)
}

export function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max)
}

const utils = {
    getStepComponentByType
};

export default utils;