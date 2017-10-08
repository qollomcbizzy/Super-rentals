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
  saveReview(params) {
     var newReview = this.store.createRecord('review', params);
     var rental = params.rental;
     rental.get('reviews').addObject(newReview);
     newReview.save().then(function() {
       return rental.save();
     });
     this.transitionTo('rental', rental);
   },
  destroyRental(rental){
    rental.destroyRecord();
    this.transitionTo('index');
  }
});
