'use static';

const categories = [
    {
        name: 'Category 1',
        icon: 'language'
    },
    {
        name: 'Category 2',
        icon: 'account_balance'
    },
    {
        name: 'Category 3',
        icon: 'trending_up'
    },
    {
        name: 'Category 4',
        icon: 'unknown'
    }
];

module.exports = {
    load: (app) => {
        return app.orm.Category.count({})
        .then(count => {
            if (count > 0) {
                return [];
            }
            else {
                // Create categories.
                return Promise.all(
                    categories.map(category => {
                        return app.orm.Category.create(category);
                    })
                );
            }
        });
    }
};
