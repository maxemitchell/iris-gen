import { hexToHSL } from '../utils'

/** Class representing a Color. */
export default class Color {
    /**
     * Create a Color.
     * @param {string} hex - String in hex representation
     */
    constructor(hex) {
        const hsl = hexToHSL(hex)
        this.h = hsl.h
        this.s = hsl.s
        this.l = hsl.l
    }
}