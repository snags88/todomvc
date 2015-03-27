$(function(){
  checkboxListener();
  editListener();
  blurListener();
  submitListener();
});

function checkboxListener(){
  $("#todo-list").on("click", ".toggle", toggleCheckbox);
}

function toggleCheckbox(){
  $(this).parents("li").toggleClass("completed");
  $(this).parents("form").trigger("submit");
}

function editListener(){
  $("#todo-list").on("dblclick", "label", editHandler);
}

function editHandler(){
  $(this).parents("li").toggleClass("editing");
  $(this).parents("li").find(".edit").focus();
}

function blurListener(){
  $("#todo-list").on("blur", ".edit_description", blurHandler);
}

function blurHandler(){
  $(this).parents("li").toggleClass("editing");
}

function submitListener(){
  $("#todo-list").on("submit", ".edit_description", submitHandler);
}

function submitHandler(){
  $(this).find(".edit").blur();
  var text = $(this).find(".edit").val();
  $(this).parents("li").find("label").html(text);
}