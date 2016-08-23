//Back-end
function Chore(task, name, time) {
  this.taskName = task;
  this.personName = name;
  this.dateName = time;
}

//Front-end
$(document).ready(function() {
  $("form#inputTask").submit(function(){
    event.preventDefault();
    var nameTask = $("input#whatName").val();
    var personTask = $("input#whoTask").val();
    var timeTask = $("input#whenTask").val();

    var newTasks = new Chore(nameTask, personTask, timeTask);
    $("ul#taskListOutput").append("<li><span class='chore'>" + newTasks.taskName +"</span></li>");

    $("input#whatName").val("");
    $("input#whoTask").val("");
    $("input#whenTask").val("");

    $("#taskListOutput li").last().click(function(){
      $("#taskDisplay").show();
      $(".inputtedPerson").text(newTasks.personName);
      $(".inputtedTask").text(newTasks.taskName);
      $(".inputtedTime").text(newTasks.dateName);
    });
    $("#taskListOutput li").dblclick(function() {
      $(this).remove();
      $("#taskDisplay").hide();
    })

  });
});
