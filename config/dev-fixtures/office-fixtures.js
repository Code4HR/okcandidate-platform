'use strict';

const offices = [
    {
        name: 'Mayor'
    }
];

module.exports = {
    load: (app) => {
        return app.orm.Office.count({})
    .then(count => {
        if (count > 0) {
            return [];
        }
        else {
        // Create offices.
            return Promise.all(
          offices.map(office => {
              return app.orm.Office.create(office);
          })
        )
        // Add offices to each survey.
        .then(offices => {
            return app.orm.Survey.findAll({where: {}})
          .then(surveys => {
              return Promise.all(
              surveys.map(survey => {
                  return Promise.all(
                  offices.map(office => {
                      return survey.addOffice(office);
                  })
                );
              })
            );
          });
        })
        .then(() => {
            return Promise.all([
                app.orm.Office.findAll({where: {}}),
                app.orm.Region.findAll({where: {}})
            ])
          .then(([offices, regions]) => {
              return Promise.all(
              offices.map(office => {
                  return Promise.all(
                  regions.map(region => {
                      return office.addRegion(region);
                  })
                );
              })
            );
          });
        })
        // Whew!
        .then(newOffices => {
            app.log.info('Offices created.');
            return newOffices;
        });
        }
    });
    }
};
