import { Color } from '../Color'

/** Class representing a Petal. */
export class Petal {
    /**
     * Create a Petal.
     * @param {string} color - Color in Hexadecimal format.
     * @param {float} probability - floating point percentage between 0. and 1.
     */
    constructor(color, probability=1.0) {
        this.color = new Color(color)
        this.probability = probability
    }
}