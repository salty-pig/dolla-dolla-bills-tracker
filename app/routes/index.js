import Ember from 'ember';

const fakeData = [
  {
    id:1,
    name: 'Luke',
    place: {
      lat: 42.6292455,
      lng: -73.86456850000002
    }
  },
  {
    id: 2,
    name: 'Grace',
    place: {
      lat: 42.6292455,
      lng: -3.86456850000002
    }
  }
];

export default Ember.Route.extend({
  model () {
    return fakeData;
  },
  setupController (controller, model) {
    controller.set('model', model);
    controller.setProperties({
      lat: 32.75494243654723,
      lng: -86.8359375,
      zoom: 4
    });
  }
});
