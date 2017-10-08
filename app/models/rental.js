import DS from 'ember-data';

export default DS.Model.extend({
  owner:DS.attr(),
  city:DS.attr(),
  type:DS.attr(),
  bedrooms:DS.attr(),
  image:DS.attr(),
  //DS stands for the data store while "attr()" stands for attribute
  //gets data from the firebase
  reviews:DS.hasMany('review',{ async :true})
  //hasMany is used to show it has many reviews
});
