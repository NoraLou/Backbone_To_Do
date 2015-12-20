
var TodoItemView = Backbone.View.extend({

  tagName:"li",

  initialize: function(options){
    if(!(options && options.model)){
      throw new Error("model is not specified!");
    }

    this.model.on('change', this.render(), this);
  },

  events: {
    "click #toggle" : "toggleCheckbox",
    "click #delete" : "onDeleteClick"
  },

  onDeleteClick: function(){
    this.model.destroy();
  },

  toggleCheckbox: function(){
    this.model.toggle();
    console.log(this.model.toJSON());
  },

  render: function(){
    this.$el.attr("id", this.model.id);
    this.$el.toggleClass("completed", this.model.get("isCompleted"));

    var checked = this.model.get("isCompleted") ? "checked" : "";
    this.$el.html("<input type='checkbox' id='toggle'" + checked + "></input>" + this.model.escape("description")
      + "<button id = 'delete'>Delete</button>");
    return this;
  }
});
