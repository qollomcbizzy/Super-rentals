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
    /*
    Create a new review with the information from our parameters, save it to the database, and call it "newReview".
Refer to the rental in those parameters as "rental".
Retrieve the list of reviews located in "rental", and add "newReview" to that list.
Save "newReview", so it remembers what rental it belongs in.
Wait until "newReview" has finished saving, then save "rental" too, so it remembers it contains "newReview".
Afterwards, take us to the page displaying details for "rental".
    */
     var newReview = this.store.createRecord('review', params);
     var rental = params.rental;
     rental.get('reviews').addObject(newReview);
     newReview.save().then(function() {
       /*
       By using .then(), we're forcing Ember to wait until newReview
       is successfully saved before saving rental.
       */
       return rental.save();
     });
     this.transitionTo('rental', rental);
   },
  destroyRental(rental){
    rental.destroyRecord();
    this.transitionTo('index');
  }
});
