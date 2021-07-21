# iris-gen

## A JavaScript Color Palette Library
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/c5f3e38b2fab4afe8901ecb8e5eda4a1)](https://app.codacy.com/gh/maxemitchell/iris-gen?utm_source=github.com&utm_medium=referral&utm_content=maxemitchell/iris-gen&utm_campaign=Badge_Grade_Settings)

Designed for use in generative code art projects, this package provides an easy way to utilize custom color palettes in a wide variety of ways. 

## An Iris Explained
An Iris is a color palette class with some extra functionality. It is composed of Petals, each with an HSL color and a probability. The Iris has a currentPetal that keeps track of the state, allowing the user to choose when to update to the next color. You can also use the randomColor() function to randomly retrieve a color from the palette.

I know, this seems like a lot of bloat for a color palette, but this allows me to both easily retreive a random color, interpolate colors within a gradient, and keep the state to use one color many times before picking another random one.

## Usage

```javascript
import Iris from 'iris-gen'

const init = () => {
    // const myIris = Iris() // Uses a default random color palette from Iris
    const color1 = '#000001'
    const color2 = '#000002'
    const color3 = '#000003'
    const myIris = Iris([color1, color2, color3]) // Uses a custom color palette
    myIris.setPetalProbabilities([0.2, 0.2, 0.6]) // Set custom probabilities if you want to use them later on
}

const tick = () => {
    const myColor = myIris.randomColor()  // Gives a random HSL color with even probabilities
    const myColor = myIris.randomColor(true)  // Gives a random color using custom probabilities
    const myColor = myIris.randomColor(false, 0.3)  // Gives a color using the interpolation value and even distribution (<0.33 is color1, 0.33-0.66 is color2, >= 0.66 is color3)
    const myColor = myIris.randomColor(true, 0.3)  // Gives a color using the interpolation value and custom probabilities (in this example, color2)
    const myColor = myIris.randomColor(true, 0.5)  // Gives a color using the interpolation value and custom probabilities (in this example, color3)

    // "stateful" color manegement
    const currentColor = myIris.currentPetalColor() // Returns the HSL color of the current petal (starts off as color1)
    myIris.updatePetal() // Randomly picks the next petal using random number and custom probabilities
    myIris.updatePetal(0.5) // Randomly picks the next petal using interpolation value and custom probabilities (setting it to color3 in this example)

    // Using the colors:
    // myColor will be an object with hue, saturation, and luminance {h, s, l}
    // hue is 0-360, saturation and luminance are 0-100
}
```
