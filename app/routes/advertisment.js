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
    saveadvertisment(advertisment){
      var parameters ={
        name:this.get('name'),
        image:this.get('image'),
      }
    this.set('addAdvertisment',false);
    this.sendAction('saveadvertisment',advertisment,parameters);
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
