import { IGradient } from '@/types';

export const makeGradient = (gradientData:object, defaultColor:string = '#FFFFFF', direction:string = 'to left bottom'):object => {
    const colors = [];

    for (var key in gradientData) { colors.push(gradientData[key]) };
    const style = {
        0: `#${defaultColor}`,
        1: `#${colors[0]}`,
        2: `linear-gradient(${direction}, #${colors[0]}, #${colors[1]})`,
        3: `linear-gradient(${direction}, #${colors[0]}, #${colors[1]}, #${colors[2]})`,
    }

    return { 'background': style[colors.length] };
}

export function choice(choices: []) {
    var index = Math.floor(Math.random() * choices.length);
    return choices[index];
}

