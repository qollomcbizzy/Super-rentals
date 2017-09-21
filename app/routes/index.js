import Ember from 'ember';

export default Ember.Route.extend({
  model (){
    return this.store.findAll('rental');
  },
  actions: {
    destroyRental(rental){
      rental.destroyRecord();
      this.transitionTo('index')
      //the trennsitonTo calls the index page after the delete action has been done
    }
  }
});
