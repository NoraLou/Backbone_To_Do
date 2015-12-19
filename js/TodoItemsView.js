var TodoItemsView = Backbone.View.extend({

  initialize: function(options){
    if (!(options && options.collection))
      throw new Error("collection is not specified.");
  },

  render: function(){
    var self = this;
    console.log("this.model :", this.model)
    console.log("this.collection :", this.collection)
    this.collection.each(function(todoItem){
      var view = new TodoItemView({ model: todoItem });
      self.$el.append(view.render().$el);
    });

    return this;
  }
});

