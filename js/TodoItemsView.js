/** documentation */
var TodoItemsView = Backbone.View.extend({

  initialize: function(options){
    if (!(options && options.collection))
      throw new Error("collection is not specified.");

    this.collection.on("add", this.onAddTodo, this);
    this.collection.on("remove", this.onRemoveTodo, this);
  },

  onAddTodo: function(todoItem){
    var view = new TodoItemView({model: todoItem});
    this.$('#todoItems').append(view.render().$el);
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
      var todoItem = new TodoItem({title: $newTask.val()});
      this.collection.create(todoItem);
      $newTask.val('');
    }
  },

  render: function(){
    var template = $("#todoItemsTemplate").html();
    var html = Mustache.render(template);
    this.$el.html(html);
    return this;
  }
});

