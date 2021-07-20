import {Petal} from '../Petal'
import { randomPalette } from '../palettes'
import { IrisException } from '../utils'

/** Class representing an Iris Color Palette. */
export class Iris {
    /**
     * Create an Iris Color Palette.
     * @param {string[]} [colors=null] - Array of colors in Hexadecimal format, if not used .
     */
    constructor(colors=null) {
        if(!colors){
            colors = randomPalette().colors
        }
        this.petals = []
        this.numPetals = colors.length
        const evenProbability = 1.0 / this.numPetals
        for(const color of colors){
            this.petals.push(new Petal(color, evenProbability))
        }
        this.currentPetal = this.petals[0]
    }

    /**
     * Retrieves a fully random color, color with custom probabilities, or an interoplated color.
     * @param {boolean} [useProbabilities=false] - if true, use custom probabilities
     * @param {float} [interpolationValue=null] - a value in range [0,1) used to interpolate instead of using a random float
     * @returns {{h: float, s: float, l: float}} A color in HSL format.
     */
    randomColor(useProbabilities = false, interpolationValue=null) {
        if(interpolationValue >= 1.0 || interpolationValue < 0.){
            throw IrisException('Interpolation value not within [1,0)')
        }
        if(interpolationValue === null){
            interpolationValue = Math.random()
        }
        if(useProbabilities){
            for (const petal of this.petals) {
                if (interpolationValue < petal.probability) {
                    return petal.color
                }else{
                    interpolationValue -= petal.probability
                }
            }
        }else{
            return this.petals[this.numPetals * interpolationValue << 0].color;
        }
    }

    /**
     * Sets custom probabilities for each petal.
     * @param {float[]} probabilities - Custom probabilities array that must add up to 1.0
     */
    setPetalProbabilities(probabilities) {
        if(probabilities.length != this.numPetals){
            throw IrisException('Size of probabilities array does not match number of petals')
        }
        let sum = 0
        for(const probability of probabilities){
            sum = sum + probability
        }
        if(sum != 1.0){
            throw IrisException('Probabilities do not add up to 1.0')
        }
        for(let i = 0; i < probabilities.length; i++){
            this.petals[i].updateProbability(probabilities[i])
        }
    }

    /**
     * Retrieves the current petal's color
     * @returns {{h: float, s: float, l: float}} A color in HSL format.
     */
    currentPetalColor() {
        return this.currentPetal.color
    }

    /**
     * Updates the current petal using custom probabilities.
     * @param {float} [interpolationValue=null] - Value used to interpolate instead of a random number.
     */
    updatePetal(interpolationValue = null) {
        if (interpolationValue === null) {
            interpolationValue = Math.random()
        }
        for (const petal of this.petals) {
            if (interpolationValue < petal.probability) {
                this.currentPetal = petal
                return
            } else {
                interpolationValue = interpolationValue - petal.probability
            }
        }
    }


}