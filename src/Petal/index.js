import { Color } from '../Color'

/** Class representing a Petal. */
export class Petal {
    /**
     * Create a Petal.
     * @param {string} color - Color in Hexadecimal format.
     * @param {float} [probability=1.0] - floating point percentage between 0. and 1.
     */
    constructor(color, probability=1.0) {
        this.color = new Color(color)
        this.probability = probability
    }

    /**
     * Update the probability for the petal
     * @param {float} probability 
     */
    updateProbability(probability) {
        this.probability = probability
    }
}