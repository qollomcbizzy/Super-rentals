import Ember from 'ember';

export default Ember.Component.extend({
  addNewRental:true,
  actions:
    {
    rentalShowForm(){
      this.set('addNewRental',true);
    },
    saveRental1() {
      var params = {
        //sets the input fields recieved from the user in json format so as to be saved in the firebase
        owner: this.get('owner'),
        city: this.get('city'),
        type: this.get('type'),
        image: this.get('image'),
        bedrooms: this.get('bedrooms'),
      };
      this.set('addNewRental', false);
      this.sendAction('saveRental2', params);
    }
  }
});
