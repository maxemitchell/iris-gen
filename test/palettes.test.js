import { Palettes, randomPalette } from '../src/palettes'

describe('Default Palettes Test', () => {
    test.each(Palettes)('Palette has name and colors array', (palette) => {
        expect(palette).toHaveProperty('name')
        expect(palette).toHaveProperty('colors')
    })
})

describe('Random Palette Test', () => {
    test('should return a palette with name and colors', () => {
        const palette = randomPalette()
        expect(palette).toHaveProperty('name')
        expect(palette).toHaveProperty('colors')
    })
})