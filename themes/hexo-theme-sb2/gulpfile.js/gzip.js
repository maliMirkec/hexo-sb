const { src, dest, watch } = require('gulp')
const gzip = require('gulp-gzip')

const { helpers } = require('./helpers')

const gzipConfig = require('./.gzip.json')

// Will gzip dist folder
function gzipStart () {
  return src([`${helpers.dist()}/**/*`, `!${helpers.dist()}/**/*.gz`])
    .pipe(gzip(gzipConfig))
    .pipe(dest(helpers.dist()))
}

// When dist folder is changed, it will gzip dist folder, too
function gzipListen () {
  return watch([`${helpers.dist()}/**/*`, `!${helpers.dist()}/**/*.gz`], global.config.watchConfig, gzipStart)
}

exports.gzip = {
  gzipStart,
  gzipListen
}
