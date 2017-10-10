import Ember from 'ember';

export default Ember.Component.extend({
  addAdvertisment:false,
  actions:
  {
    reviewAdvert(){
      this.set('addAdvertisment',true);
    },
    saveadvertisment(){
      var params={
        name:this.get('name'),
        image:this.get('image'),
      };
      this.set('addAdvertisment',false);
      this.sendAction('advertisment',params);
    }
  }
});
