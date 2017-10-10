import Ember from 'ember';

export default Ember.Route.extend({
  addAdvertisment:false,
  actions:
  {
    add(){
      this.set('addAdvertisment',true);
    },
    view:function(){
      this.set()
    },
    delete(advertisment){
      this.destroyAdvertisment();
      this.transitionTo('advertisment');
    },
    back(){
    this.transitionTo('advertisment');
    }
  }
});
