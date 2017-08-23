'use static';

const categories = [
    {
        id: 1,
        name: 'Category 1',
        icon: 'language'
    },
    {
        id: 2,
        name: 'Category 2',
        icon: 'account_balance'
    },
    {
        id: 3,
        name: 'Category 3',
        icon: 'trending_up'
    },
    {
        id: 4,
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

            const maxId = Math.max.apply(Math,categories.map(o => o.id));
            app.orm.Survey.sequelize.query(`select setval('category_id_seq', ${maxId})`);

            // Create categories.
            return Promise.all(
                categories.map(category => {
                    return app.orm.Category.create(category);
                })
            )
            .then(newCategories => {
                app.log.info('Categories created.');
                return newCategories;
            });
        });
    }
};
