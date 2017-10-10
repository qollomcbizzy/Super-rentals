import Ember from 'ember';

export function rentalPopularity(params/*, hash*/) {
  var rental = params[0];

 if(rental.get('reviews').get('length') >= 5) {
   return Ember.String.htmlSafe('<span class="glyphicon glyphicon-fire"></span>');
   //ember.string.htmlSafe it allows us to render the html line
}
}
export default Ember.Helper.helper(rentalPopularity);
