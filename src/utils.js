/**
 * IrisException type definition
 * @param {string} message 
 */
export class IrisException extends Error{
    constructor(message) {
        super(message)
        this.name = 'IrisException'
    }
}

/**
 * Convert a Hexadecimal color string to HSL representation.
 * @param {string} hex - Color in Hexadecimal format.
 * @return {{h: number, s: numbner, l: number}} A color in HSL format.
 */
export const hexToHSL = (hex) => {
    const parsedHex = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
    if(parsedHex === null){
        throw new IrisException('Invalid Hexadecimal color')
    }
    let r = parseInt(parsedHex[1], 16)
    let g = parseInt(parsedHex[2], 16)
    let b = parseInt(parsedHex[3], 16)
    r /= 255, g /= 255, b /= 255
    const max = Math.max(r, g, b),
          min = Math.min(r, g, b)
    let h = (max + min) / 2
    let s = (max + min) / 2
    let l = (max + min) / 2
    if(max === min){
        h = s = 0
    }else{
        const d = max - min
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
        switch (max) {
            case r:
                h = (g - b) / d + (g < b ? 6 : 0)
                break
            case g:
                h = (b - r) / d + 2
                break
            case b:
                h = (r - g) / d + 4
                break
        }
        h /= 6
    }
    return {
        h: h * 360,
        s: s * 100,
        l: l * 100
    }
}