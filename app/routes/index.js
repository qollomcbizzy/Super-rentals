import Ember from 'ember';

export default Ember.Route.extend({
  model (){
    return this.store.findAll('rental');
  },
  actions: {
    //creates a new record in the firebase to store the data 
    saveRental3(params) {
      var newRental = this.store.createRecord('rental', params);
      newRental.save();
      this.transitionTo('index');
    },
    destroyRental(rental){
      rental.destroyRecord();
      this.transitionTo('index')
      //the trennsitonTo calls the index page after the delete action has been done
    }
  }
});
