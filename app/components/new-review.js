import Ember from 'ember';

export default Ember.Component.extend({
  addReview:false;
  actions:
  {
    reviewForm(){
      this.set('addReview',true);
    },
    saveReview(){
      var params:{
        author:this.get('author'),
        rating:this.get('rating'),
        content:this.get('content')
      };
      this.set('addReview',false);
      this.sendAction('saveReview',params);
    }
  }
});
