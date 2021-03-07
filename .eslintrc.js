[[/* global module */
module.exports = {
    'env': {
      'browser': true,
      'es2021': true
    },
    'settings': {
      'react': {
        'version': 'detect'
      }
    },
    'parser': 'babel-eslint',
    'parserOptions': {
      'ecmaVersion': 6,
      'sourceType': 'module',
      'ecmaFeatures': {
        'jsx': true,
        'modules': true,
        'experimentalObjectRestSpread': true
      }
    },
    'extends': [
      'eslint:recommended',
      'plugin:react/recommended',
    ],
    'plugins': [
      'react',
    ],
    'rules': {
      'indent': [
        'error',
        2
      ],
      'linebreak-style': [
        'error',
        'unix'
      ],
      'quotes': [
        'error',
        'single'
      ],
      'semi': [
        'error',
        'always'
      ]
    }
  }
]];