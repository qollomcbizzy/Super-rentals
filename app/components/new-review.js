import Ember from 'ember';

export default Ember.Component.extend({
  addReview:false,
  actions:
  {
    reviewForm(){
      this.set('addReview',true);
    },
    saveReview(){
      var params={
        author:this.get('author'),
        rating:parseInt(this.get('rating')),
        content:this.get('content'),
        rental:this.get('rental')
      };
      this.set('addReview',false);
      this.sendAction('saveReview',params);
    }
  }
});
