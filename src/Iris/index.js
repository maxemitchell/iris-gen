import { Color } from '../Color'
import {Petal} from '../Petal'

/** Class representing an Iris Color Palette. */
export class Iris {
    /**
     * Create an Iris Color Palette.
     * @param {string[]} colors - Array of colors in Hexadecimal format.
     */
    constructor(colors) {
        this.petals = []
        for(const color of colors){
            this.petals.push(new Petal(color, 0.0))
        }
    }
}