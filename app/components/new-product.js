import Ember from 'ember';

export default Ember.Component.extend({
  addNewProduct: false,
  actions: {
    productFormShow(){
      this.set('addNewProduct', true);
    },
    saveA(){
      var params = {
        name: this.get('name'),
        description: this.get('description'),
        cost: parseInt(this.get('cost')),
        image: this.get('image'),
        // review: this.get('review') ? this.get('review') : ""
      };
      console.log(params)
      this.set('addNewProduct', false);
      this.sendAction('saveB', params);
    }
  }
});
