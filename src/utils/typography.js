import Typography from 'typography'

import 'normalize.css'

const typography = new Typography({
  googleFonts: [
    {
      name: 'Libre Baskerville',
      styles: ['400'],
    },
  ],
  headerFontFamily: ['Avenir', 'Helvetica', 'Arial', 'sans-serif'],
  bodyFontFamily: ['Libre Baskerville', 'serif'],
})

export default typography
