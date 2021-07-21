import Color from '../../src/Color'

describe('Color Class Test', () => {
    test('should have a hue', () => {
        const myColor = new Color('#000000')

        expect(myColor).toHaveProperty('h')
    })

    test('should have a saturation', () => {
        const myColor = new Color('#000000')

        expect(myColor).toHaveProperty('s')
    })

    test('should have a luminance', () => {
        const myColor = new Color('#000000')

        expect(myColor).toHaveProperty('l')
    })
})