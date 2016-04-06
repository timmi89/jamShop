import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.storefindRecord('product', params.product_id);
  },
});
