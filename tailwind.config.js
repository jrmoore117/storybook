module.exports = {
  future: {},
  purge: [],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
    colors: {
      black: '#000',
      white: '#fff',
      red: {
        '0': '#ffecee',
        '100': '#ffc6cb',
        '200': '#ffa0a8',
        '300': '#ff7985',
        '400': '#ff5362',
        '500': '#ff4050',
        '600': '#e63a48',
        '700': '#b32d38',
        '800': '#802028',
        '900': '#4c1318',
        '1000': '#190608',
      },
      rose: {
        '0': '#ffeff0',
        '100': '#ffced1',
        '200': '#ffadb2',
        '300': '#ff8c93',
        '400': '#ff6b74',
        '500': '#ff5b64',
        '600': '#e6525a',
        '700': '#b34046',
        '800': '#802e32',
        '900': '#4c1b1e',
        '1000': '#19090a',
      },
      orange: {
        '0': '#fef6ee',
        '100': '#fce4cb',
        '200': '#fad2a9',
        '300': '#f8bf87',
        '400': '#f6ad64',
        '500': '#f5a453',
        '600': '#dd944b',
        '700': '#ac733a',
        '800': '#7b522a',
        '900': '#493119',
        '1000': '#181008',
      },
      yellow: {
        '0': '#fefdf0',
        '100': '#fcf9d1',
        '200': '#fbf6b2',
        '300': '#f9f293',
        '400': '#f7ee74',
        '500': '#f6ec65',
        '600': '#ddd45b',
        '700': '#aca547',
        '800': '#7b7633',
        '900': '#4a471e',
        '1000': '#19180a',
      },
      green: {
        '0': '#ebf9f3',
        '100': '#c2eddc',
        '200': '#99e1c4',
        '300': '#70d5ac',
        '400': '#47c995',
        '500': '#32c389',
        '600': '#2db07b',
        '700': '#238960',
        '800': '#196245',
        '900': '#0f3a29',
        '1000': '#05130e',
      },
      sky: {
        '0': '#f7fcff',
        '100': '#e8f7fe',
        '200': '#d8f2fe',
        '300': '#c8ecfd',
        '400': '#b9e7fc',
        '500': '#b1e4fc',
        '600': '#9fcde3',
        '700': '#7ca0b0',
        '800': '#59727e',
        '900': '#35444c',
        '1000': '#121719',
      },
      blue: {
        '0': '#ecf3fe',
        '100': '#c6dbfb',
        '200': '#a0c3f9',
        '300': '#79abf6',
        '400': '#5393f3',
        '500': '#4087f2',
        '600': '#3a7ada',
        '700': '#2d5fa9',
        '800': '#204479',
        '900': '#132849',
        '1000': '#060d18',
      },
      purple: {
        '0': '#f0f0fa',
        '100': '#d1d2f0',
        '200': '#b3b4e6',
        '300': '#9496db',
        '400': '#7578d1',
        '500': '#6669cc',
        '600': '#5c5fb8',
        '700': '#474a8f',
        '800': '#333566',
        '900': '#1f1f3d',
        '1000': '#0a0a14',
      },
      indigo: {
        '0': '#ebeef7',
        '100': '#c3cce6',
        '200': '#9baad5',
        '300': '#7288c4',
        '400': '#4a66b3',
        '500': '#3655ab',
        '600': '#314d9a',
        '700': '#263b78',
        '800': '#1b2b56',
        '900': '#101933',
        '1000': '#050811',
      },
      gray: {
        '0': '#f9fafb',
        '100': '#edeff2',
        '200': '#e2e5ea',
        '300': '#d6dae1',
        '400': '#cacfd8',
        '500': '#c4cad4',
        '600': '#b0b6bf',
        '700': '#898d94',
        '800': '#62656a',
        '900': '#3b3d40',
        '1000': '#141415',
      },
    },
    boxShadow: {
      // red 200
      red: '0 1px 2px 0 #ffa0a8',
      outlineRed: '0 0 0 3px #ffa0a8',
      // rose 200
      rose: '0 1px 2px 0 #ffadb2',
      outlineRose: '0 0 0 3px #ffadb2',
      // orange 200
      orange: '0 1px 2px 0 #fad7a9',
      outlineOrange: '0 0 0 3px #fad7a9',
      // yellow 200
      yellow: '0 1px 2px 0 #fbf6b2',
      outlineYellow: '0 0 0 3px #fbf6b2',
      // green 200
      green: '0 1px 2px 0 #99e1c4',
      outlineGreen: '0 0 0 3px #99e1c4',
      // sky 200
      sky: '0 1px 2px 0 #d8f2fe',
      outlineSky: '0 0 0 3px #d8f2fe',
      // blue 200
      blue: '0 1px 2px 0 #a0c3f9',
      outlineBlue: '0 0 0 3px #a0c3f9',
      // purple 200
      purple: '0 1px 2px 0 #b3b4e6',
      outlinePurple: '0 0 0 3px #b3b4e6',
      // indigo 200
      indigo: '0 1px 2px 0 #9baad5',
      outlineIndigo: '0 0 0 3px #9baad5',
    }
  },
  variants: {
    backgroundColor: ['active'],
    borderColor: ['responsive', 'hover', 'focus'],
    borderWidth: ['responsive', 'focus'],
  },
  plugins: [],
}
