import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  description: DS.attr(),
  cost: DS.attr(),
  image: DS.attr(),
  review: DS.hasMany('review', {async: true})
});
