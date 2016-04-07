import Ember from 'ember';

export default Ember.Component.extend({
  addNewReview: false,
  actions: {
    reviewFormShow() {
      this.set('addNewReview', true);
    },
    save1(){
      var params = {
        user: this.get('user'),
        rating: this.get('rating'),
        content: this.get('content'),
        product: this.get('product')
      };
      this.set('addNewReview', false);
      this.sendAction('save2', params);
    }
  }
});
