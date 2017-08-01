import Ember from 'ember';

export default Ember.Controller.extend({
  markers: [],
  init () {
    const marker = {
      id: 'unique-marker-id',  // Recommended
      lat: 33.516674497188255, // Required
      lng: -86.80091857910156 // Required
    }

    this.get('markers').addObject(marker);
  },
  actions: {
    addUser () {
      const newUser = {
        name: this.name
      };

      this.get('model').addObject(newUser);
    },
    didUpdatePlace (place) {
      const newUser = {
        name: this.name || 'Anon',
        place: place
      }
      this.get('model').addObject(newUser);
      this.get('markers').addObject({
        id: 'id',
        lat: place.lat,
        lng: place.lng
      });

      console.log(place);
    },
    invalidUserSelection (error) {
      console.log('in invalid selection', error);
    }
  }
});
