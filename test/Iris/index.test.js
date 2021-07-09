import { Iris } from '../../src/Iris'

describe('Iris Class Test', () => {
    test('should have a petals array', () => {
        const myIris = new Iris(['#000000', '#ffffff'])

        expect(myIris).toHaveProperty('petals')
    })
})