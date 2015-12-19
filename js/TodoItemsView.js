var TodoItemsView = Backbone.View.extend({

  tagName: "ul",

  id: "todoItems",

  initialize: function(options){
    if (!(options && options.collection))
      throw new Error("collection is not specified.");

    this.collection.on("add", this.onAddTodo, this)
  },

  onAddTodo: function(todoItem){
    var view = new TodoItemView({model: todoItem});
    this.$el.append(view.render().$el);
  },

  events:{
    "click #add" : "addTodo"
  },

  addTodo: function(){
    var $newTask = $("#newTodoItem");
    var todoItem = new TodoItem({description: $newTask.val()});
    this.collection.add(todoItem);
    $newTask.val('');
  },

  render: function(){
    this.$el.append("<input type='text' id='newTodoItem'></input>")

    this.$el.append("<button id='add'>ADD</button>");

    var self = this;
    this.collection.each(function(todoItem){
      var view = new TodoItemView({ model: todoItem });
      self.$el.append(view.render().$el);
    });

    return this;
  }
});

