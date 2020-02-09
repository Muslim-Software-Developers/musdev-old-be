const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
   .sass('resources/js/assets/scss/_custom.scss', 'public/css')
   .sass('resources/js/assets/scss/_ie-fix.scss', 'public/css')
   .sass('resources/js/assets/scss/_variables.scss', 'public/css')
   .sass('resources/js/assets/scss/style.scss', 'public/css')
   .sass('resources/js/assets/scss/vendors/_variables.scss', 'public/css/vendors')
   .sass('resources/js/assets/scss/vendors/chart.js/chart.scss', 'public/css/vendors/chartjs');
