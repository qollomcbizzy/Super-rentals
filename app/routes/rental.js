import Ember from 'ember';

export default Ember.Route.extend({
  modal(params){
    return this.store.findRecord('rental', params.rental_id);
    //takes two arguemnts the rental and specific rental i to findRecord
  },
  update(rental,params){
    Object.keys(params).forEach(function(key){
      if(params[key]!==undefined){
        //updates the keys that are not undefined and the undefined they are not updated
        rental.set(key,params[key]);
      }
    });
    rental.save();
    this.transitionTo('index');
  },
  destroyRental(rental){
    rental.destroyRecord();
    this.transitionTo('index');
  }
});
