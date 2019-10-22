import Typography from 'typography'

import 'normalize.css'

const typography = new Typography({
  googleFonts: [
    {
      name: 'Roboto',
      styles: ['400', '500', '700'],
    },
  ],
  headerFontFamily: ['Roboto', 'Helvetica', 'Arial', 'sans-serif'],
  bodyFontFamily: ['Roboto', 'Helvetica', 'Arial', 'sans-serif'],
})

export default typography
