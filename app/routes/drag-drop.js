import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return [{
        id: 1,
        firstName: 'Trek',
        lastName: 'Glowacki'
      }, {
        id: 2,
        firstName: 'Tom',
        lastName: 'Dale'
      }, {
        id: 3,
        firstName: 'Yehuda',
        lastName: 'Katz'
      }];
  }
});
