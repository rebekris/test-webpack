// webpack.config.js
var Encore = require('@symfony/webpack-encore');

Encore
    // the project directory where all compiled assets will be stored
    .setOutputPath('dist')

    // the public path used by the web server to access the previous directory
    .setPublicPath('/dist')

    // will create web/build/app.js and web/build/app.css
    .addEntry('bundle', './js/action.js')

    // allow sass/scss files to be processed
    .enableSassLoader()

    .configureBabel(function(babelConfig) {
        // add additional presets
        babelConfig.presets.push('es2017');

        // no plugins are added by default, but you can add some
        // babelConfig.plugins.push('styled-jsx/babel');
    })

    // allow legacy applications to use $/jQuery as a global variable
    .autoProvidejQuery()

    .enableSourceMaps(!Encore.isProduction())

    // empty the outputPath dir before each build
    .cleanupOutputBeforeBuild()

    // show OS notifications when builds finish/fail
    .enableBuildNotifications()

    // create hashed filenames (e.g. app.abc123.css)
    // .enableVersioning()
;

// export the final configuration
module.exports = Encore.getWebpackConfig();
