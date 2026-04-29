/** @type {import('style-dictionary').Config} */
export default {
  source: ['src/**/*.json'],
  platforms: {
    css: {
      transformGroup: 'css',
      prefix: 'sg',
      buildPath: 'dist/',
      files: [
        {
          destination: 'tokens.css',
          format: 'css/variables',
          options: { selector: ':root' },
        },
      ],
    },
    js: {
      transformGroup: 'js',
      prefix: 'sg',
      buildPath: 'dist/',
      files: [
        {
          destination: 'tokens.js',
          format: 'javascript/es6',
        },
      ],
    },
  },
};
