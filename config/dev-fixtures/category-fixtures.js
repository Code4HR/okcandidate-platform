'use static'

const categories = [
  {
    name: 'Category 1'
  },
  {
    name: 'Category 2'
  },
  {
    name: 'Category 3'
  }
]

module.exports = {
  load: (app) => {
    return app.orm.Category.count({})
    .then(count => {
      if (count > 0) {
        return []
      }
      else {
        // Create categories.
        return Promise.all(
          categories.map(category => {
            return app.orm.Category.create(category)
          })
        )
      }
    })
  }
}
