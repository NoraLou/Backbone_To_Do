$(document).ready(function(){
  var todoItems = new TodoItems([
    new TodoItem({ id:1, description: "TodoItem 1" }),
    new TodoItem({ id:2,description: "TodoItem 2" })
    ]);

  var todoItemsView = new TodoItemsView({
    collection: todoItems
  });
  $("body").append(todoItemsView.render().$el);
});
