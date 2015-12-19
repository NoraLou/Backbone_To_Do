



$(document).ready(function(){
  var todoItem = new TodoItem({description:"Make it happen"});

  var todoItemView = new TodoItemView({model: todoItem});
  $("body").append(todoItemView.render().$el);
});
