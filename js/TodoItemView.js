
var TodoItemView = Backbone.View.extend({
  initialize: function(options){
    if(!(options && options.model)){
      throw new Error("model is not specified!");
    }
  },

  render: function(){
    this.$el.html(this.model.get("description"));
    return this;
  }
});
