import Ember from 'ember';

export default Ember.Route.extend({
  model (){
    //return more models in one hook
    return Ember.RSVP.hash({
      /*
      Ember RSVP.hash is a method included in Ember,
      built with the RSVP.js Library. It allows us to load multiple JavaScript promises at once
      */
      rentals: this.store.findAll('rental'),
      reviews: this.store.findAll('review')
    });
  },
  actions: {
    //creates a new record in the firebase to store the data
    saveRental3(params) {
      var newRental = this.store.createRecord('rental', params);
      newRental.save();
      this.transitionTo('index');
    },
  /*  saveReview(params){
      var newReview = this.store.createRecord('review',params);
      newReview.save();
      this.transitionTo('index');
      */
      //changed it to the route handler for rental
    }
    /*update(rental,params){
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
      //the trennsitonTo calls the index page after the delete action has been done
    }
    */
  }
});
