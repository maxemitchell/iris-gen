/**
 * Iris' own color palettes
 */
export const Palettes = [
    {'name': 'blue-pastel', 'colors': ['B8C5F8', 'A0BBD9', 'BDE2F0', 'A0D9D9', 'B8F8E6']},
    {'name': 'mixed-pastel', 'colors': ['A3CBD9', 'D9ADB9', '98D9C6', 'D9AE82', '8DD997']},
    {'name': 'br-compound', 'colors': ['2875A8', '576975', '4ADBC7', 'E09284', 'A82A28']},
    {'name': 'cotton-candy', 'colors': ["1b065e","ff47da","ff87ab","fcc8c2","f5eccd","06bcc1","c5d8d1","f4d1ae"]},
    {'name': 'nightrider', 'colors': ["93827f","f3f9d2","bdc4a7","2f2f2f","92b4a7","542344","28112b","39375b"]},
    {'name': 'blue-tangerine', 'colors': ["ff6b35","f7c59f","efefd0","004e89","1a659e","7f7caf","28587b","537d8d"]},
    {'name': 'sunset', 'colors': ["cc5803","e2711d","ff9505","ffb627","ffc971","f7fff7","343434","2f3061"]},
    {'name': 'dreamed-pastel', 'colors': ["d9f4c7","f8fa90","f4ef88","ac9969","9dcdc0","586994","7d869c","05a8aa","dc602e","bc412b"]},
    {'name': 'unkown-pastel', 'colors': ["ffcab1","ecdcb0","c1d7ae","8cc084","968e85","0e7c7b","d62246","4b1d3f","254441","802392"]}
]

/**
 * Get a random color palette
 * @returns {{name: string, colors: string[]}} palette - A Random Color Palette with name and color array
 */
export const randomPalette = () => {
    return Palettes[Palettes.length * Math.random() << 0];
}