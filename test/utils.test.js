import { IrisException, hexToHSL } from '../src/utils'

describe('IrisException Test', () => {
    test('should have a name with value IrisException', () => {
        const irisException = new IrisException()

        expect(irisException).toHaveProperty('name', 'IrisException')
    })

    test('should have a message with value testMessage', () => {
        const irisException = new IrisException('testMessage')

        expect(irisException).toHaveProperty('message', 'testMessage')
    })
})

describe('hexToHSL Test', () => {
    test('should return an IrisException on number input', () => {
        expect( () => {
            hexToHSL(123)
        }).toThrowError('Invalid Hexadecimal color')
    })

    test('should return an IrisException on bad string', () => {
        expect( () => {
            hexToHSL('hello')
        }).toThrowError('Invalid Hexadecimal color')
    })

    test('should return an IrisException on null input', () => {
        expect( () => {
            hexToHSL()
        }).toThrowError('Invalid Hexadecimal color')
    })

    test('should return proper HSL on black', () => {
        expect(hexToHSL('#000000')).toEqual({h: 0, s: 0, l: 0})
    })

    test('should return proper HSL on white', () => {
        expect(hexToHSL('#FFFFFF')).toEqual({h: 0, s: 0, l: 100})
    })

    test('should return proper HSL on red', () => {
        expect(hexToHSL('#FF0000')).toEqual({h: 0, s: 100, l: 50})
    })

    test('should return proper HSL on blue', () => {
        expect(hexToHSL('#0000FF')).toEqual({h: 240, s: 100, l: 50})
    })

    test('should return proper HSL on green', () => {
        expect(hexToHSL('#00FF00')).toEqual({h: 120, s: 100, l: 50})
    })
})