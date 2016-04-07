import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),

  actions: {
    addToCart(item) {
      this.get('shoppingCart').add(item);
    },
      delete(product){
        if (confirm('do you really want to hurt jam? do you really want to make jam cry?')){
          this.sendAction('delete', product);
        }
      }
    }
});
