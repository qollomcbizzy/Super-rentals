import Ember from 'ember';

export default Ember.Component.extend({
  addNewRental:false;
  actions:{
    rentalShowForm(){
      this.set('addNewRental',true)
    }
  }
});
