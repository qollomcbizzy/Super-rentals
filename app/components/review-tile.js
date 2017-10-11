import Ember from 'ember';

export default Ember.Component.extend({
  //we use this to call the review without relly updating usin gthe heading keyword
  heading: Ember.computed('review.author', 'review.rating', function() {
    return this.get('review.author') + ' - ' + this.get('review.rating');
    //we combine the review author and the review rating in to one 
  }),
  actions:
  {
    delete(review){
      if(confirm("Are you  sure you want to delete the review ?")){
        this.sendAction('destroyReview',review);
      }
    }
  }
});
