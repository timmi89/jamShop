import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('product', params.product_id);
  },
  actions: {
    save3(params) {
      var newReview = this.store.createRecord('review', params);
      var product = params.product;
      product.get('review').addObject(newReview);
      newReview.save().then(function() {
        return newReview.save();
      });
      this.transitionTo('index');
    },
    delete(product){
      product.destroyRecord();
      this.transitionTo('index');
    }
  }
});
