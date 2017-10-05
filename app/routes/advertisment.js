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
    saveadvertisment(){
      var parameters ={
        name:this.get('name'),
        image:this.get('image'),
      }
    this.set('addAdvertisment',false);
    this.sendAction('saveadvertisment',parameters);
    },
    delete(){
      this.destroyAdvertisment();
      this.transitionTo('advertisment');
    },
  }
});
