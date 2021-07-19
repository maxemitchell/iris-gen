import { Petal } from '../../src/Petal'

describe('Petal Class Test', () => {
    test('should have a color', () => {
        const myPetal = new Petal('#000000', 0.0)

        expect(myPetal).toHaveProperty('color')
    })

    test('should have a probability', () => {
        const myPetal = new Petal('#000000', 0.0)

        expect(myPetal).toHaveProperty('probability')
    })

    test('should properly update probability', () => {
        const myPetal = new Petal('#000000', 0.0)

        expect(myPetal).toHaveProperty('probability', 0.0)
        myPetal.updateProbability(1.0)
        expect(myPetal).toHaveProperty('probability', 1.0)
    })
})