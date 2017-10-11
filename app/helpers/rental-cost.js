import Ember from 'ember';

export function rentalCost(params/*, hash*/) {
  return params;
   var rentalPrice = params[0].get('cost');
   if(rentalPrice >= 100){
     return '$$$$';
   }
   else if(rentalPrice >= 100){
     return '$$$';
   }
   else if(rentalPrice >= 50){
     return '$$';
   }
   else if(rentalPrice <= 49){
     return '$';
   }
   else{
     alert ('enter an appropriate rental price');
   }
}

export default Ember.Helper.helper(rentalCost);
