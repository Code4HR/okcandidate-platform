const sass = require('node-sass')

module.exports = (data, file) => {

  return sass.renderSync({
    data,
    file
  })
  .css
  .toString('utf8')

}
