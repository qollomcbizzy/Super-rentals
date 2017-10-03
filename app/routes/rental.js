import Ember from 'ember';

export default Ember.Route.extend({
  modal(params){
    return this.store.findRecord('rental', params.rental_id);
    //takes two arguemnts the rental and specific rental i to findRecord
  }
});
