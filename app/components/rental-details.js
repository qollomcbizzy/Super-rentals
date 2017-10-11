import Ember from 'ember';

export default Ember.Component.extend({
  sortBy: ['rating:desc'],
  sortedReviews: Ember.computed.sort('rental.reviews', 'sortBy'),
//we use the computed propert to also sort 
  actions: {
   delete(rental) {
     if (confirm('Are you sure you want to delete this rental?')) {
       this.sendAction('destroyRental', rental);
     }
   },
   //we are passing the destroyReview action upwards
   destroyReview(review){
     this.sendAction('destroyReview',review);
   }
 }
});
