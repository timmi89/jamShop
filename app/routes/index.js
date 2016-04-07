import Ember from 'ember';


export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      products: this.store.findAll('product'),
      reviews: this.store.findAll('review')
    });
  },
    actions: {
      saveC(params){
        var newProduct = this.store.createRecord('product', params);
        newProduct.save();
        this.transitionTo('index');
      },
      destroyProduct(product){
        product.destroyRecord();
        this.transitionTo('index');
      }
    }
  });
//maybe uncomment out reviews above
