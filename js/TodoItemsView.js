var TodoItemsView = Backbone.View.extend({

  tagName: "ul",

  id: "todoItems",

  initialize: function(options){
    if (!(options && options.collection))
      throw new Error("collection is not specified.");

    this.collection.on("add", this.onAddTodo, this);
    this.collection.on("remove", this.onRemoveTodo, this);
  },

  onAddTodo: function(todoItem){
    var view = new TodoItemView({model: todoItem});
    this.$el.append(view.render().$el);
  },

  onRemoveTodo: function(todoItem){
    console.log("Removed", todoItem);
    this.$("li#" + todoItem.id).remove();
  },

  events:{
    "click #add" : "addTodo",
    "keypress #newTodoItem" : "onKeyPress"
  },

  onKeyPress: function(e){
    if(e.keyCode == 13){
      this.addTodo();
    }
  },

  addTodo: function(){
    var $newTask = $("#newTodoItem");
    if($newTask.val()){
      var todoItem = new TodoItem({description: $newTask.val()});
      this.collection.add(todoItem);
      $newTask.val('');
    }
  },

  render: function(){
    this.$el.append("<input type='text' autofocus id='newTodoItem'></input>")

    this.$el.append("<button id='add'>ADD</button>");

    var self = this;
    this.collection.each(function(todoItem){
      var view = new TodoItemView({ model: todoItem });
      self.$el.append(view.render().$el);
    });

    return this;
  }
});

