import Ember from 'ember';

export default Ember.Component.extend({
  IsImageShowing:false,
  actions :{
    imageShow : function(){
      this.set('IsImageShowing',true);
    },
    imageHide:function(){
      this.set('IsImageShowing',false);
    },
    update(rental,params){
      this.sendAction('update' ,rental,params);
    },
    delete(rental){
      if(confirm('Are you sure you want to delete this')){
        this.sendAction('destroyRental',rental)
      }
    }
  }
});
