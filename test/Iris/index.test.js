import { Iris } from '../../src/Iris'

describe('Iris Constructor Test', () => {
    const myIris = new Iris(['#000000', '#ffffff'])

    test('should have a petals array', () => {
        expect(myIris).toHaveProperty('petals')
    })
    test('should have a numPetals of the correct length', () => {
        expect(myIris).toHaveProperty('numPetals', 2)
    })
    test('should have a current petal', () => {
        expect(myIris).toHaveProperty('currentPetal')
    })

    const myRandomIris = new Iris()

    test('should have a petals array', () => {
        expect(myIris).toHaveProperty('petals')
    })
    test('should have a numPetals', () => {
        expect(myIris).toHaveProperty('numPetals')
    })
    test('should have a current petal', () => {
        expect(myIris).toHaveProperty('currentPetal')
    })
})

describe('Iris randomColor Test', () => {
    const myIris = new Iris(['#000000', '#ffffff'])

    test('should return an hsl color object', () => {
        expect(myIris.randomColor()).toHaveProperty('h')
        expect(myIris.randomColor()).toHaveProperty('s')
        expect(myIris.randomColor()).toHaveProperty('l')
    })

    test('should properly interpolate', () => {
        expect(myIris.randomColor(false, 0.0)).toHaveProperty('l', 0)
        expect(myIris.randomColor(false, 0.3)).toHaveProperty('l', 0)
        expect(myIris.randomColor(false, 0.45)).toHaveProperty('l', 0)
        expect(myIris.randomColor(false, 0.5)).toHaveProperty('l', 100)
        expect(myIris.randomColor(false, 0.51)).toHaveProperty('l', 100)
        expect(myIris.randomColor(false, 0.99)).toHaveProperty('l', 100)
        expect(() => {
            myIris.randomColor(false, 1.0)
        }).toThrowError('Interpolation value not within [1,0)')
    })
})

describe('Iris setPetalProbabilities Test', () => {
    const myIris = new Iris(['#000000', '#ffffff'])

    test('should properly update probabilities', () => {
        expect(myIris.currentPetal).toHaveProperty('probability', 1.0)
        myIris.setPetalProbabilities([1.0, 0.0])
        expect(myIris.currentPetal).toHaveProperty('probability', 1.0)
        myIris.setPetalProbabilities([0.0, 1.0])
        expect(myIris.currentPetal).toHaveProperty('probability', 0.0)
        myIris.setPetalProbabilities([0.5, 0.5])
        expect(myIris.currentPetal).toHaveProperty('probability', 0.5)
        expect(() => {
            myIris.setPetalProbabilities([1.0, 1.0])
        }).toThrowError('Probabilities do not add up to 1.0')
        expect(() => {
            myIris.setPetalProbabilities([0.3, 0.3])
        }).toThrowError('Probabilities do not add up to 1.0')
        expect(() => {
            myIris.setPetalProbabilities([1.0])
        }).toThrowError('Size of probabilities array does not match number of petals')
        expect(() => {
            myIris.setPetalProbabilities([1.0, 0.0, 0.0])
        }).toThrowError('Size of probabilities array does not match number of petals')
    })
})

describe('Iris currentPetalColor Test', () => {
    const myIris = new Iris(['#000000', '#ffffff'])

    test('should have correct current petal color', () => {
        expect(myIris.currentPetalColor()).toHaveProperty('h', 0)
        expect(myIris.currentPetalColor()).toHaveProperty('s', 0)
        expect(myIris.currentPetalColor()).toHaveProperty('l', 0)
    })
})

describe('Iris updatePetal Test', () => {
    const myIris = new Iris(['#000000', '#ffffff'])

    test('should update current petal', () => {
        expect(myIris.currentPetal.color).toHaveProperty('h', 0)
        expect(myIris.currentPetal.color).toHaveProperty('s', 0)
        expect(myIris.currentPetal.color).toHaveProperty('l', 0)
        myIris.setPetalProbabilities([0.3, 0.7])
        myIris.updatePetal(0.8)
        expect(myIris.currentPetal.color).toHaveProperty('h', 0)
        expect(myIris.currentPetal.color).toHaveProperty('s', 0)
        expect(myIris.currentPetal.color).toHaveProperty('l', 100)
        myIris.updatePetal(0.3)
        expect(myIris.currentPetal.color).toHaveProperty('h', 0)
        expect(myIris.currentPetal.color).toHaveProperty('s', 0)
        expect(myIris.currentPetal.color).toHaveProperty('l', 100)
        myIris.updatePetal(0.29)
        expect(myIris.currentPetal.color).toHaveProperty('h', 0)
        expect(myIris.currentPetal.color).toHaveProperty('s', 0)
        expect(myIris.currentPetal.color).toHaveProperty('l', 0)
    })
})