import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),

  // totalCost: Ember.computed.sum('shoppingCart.items.@each.cost')

  totalCost: Ember.computed('shoppingCart.items.@each', function() {
    var items = this.get('shoppingCart.items');
    var total = 0;
    items.forEach(function(item) {
      total += item.get('cost');
    });
    // for (i = 0; i < items.length; i++) {
    //   total += items[i].get('cost');
    // }
    return total;
  })

// totalCost: Ember.computed(parseInt(this.get('item.cost'))).length
});
