/**
 * PostCSS configuration file
 * @file   postcss.config.js
 * @module tailwindcss  
 * @module autoprefixer
 * @module cssnano
 */

import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';

export default {
  plugins: [
    tailwindcss,
    autoprefixer,
    cssnano({ preset: 'default' }),
  ],
}