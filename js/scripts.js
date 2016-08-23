//Back-end
var chores = [];

function Chore(task, name, time) {
  this.taskName = task;
  this.personName = name;
  this.dateName = time;
  this.done = false;
}

Chore.prototype.choreRemove = function() {
  if(this.done){
    chores.splice(chores.indexOf(this), 1);
  }
}

//Front-end
$(document).ready(function() {
  $("form#inputTask").submit(function(){
    event.preventDefault();
    var nameTask = $("input#whatName").val();
    var personTask = $("input#whoTask").val();
    var timeTask = $("input#whenTask").val();

    var newTasks = new Chore(nameTask, personTask, timeTask);

    chores.push(newTasks);

    $("ul#taskListOutput").append("<li><span class='chore'>" + newTasks.taskName + "</span>   <input type='checkbox' class='taskComplete'</li>");

    $("input#whatName").val("");
    $("input#whoTask").val("");
    $("input#whenTask").val("");

    $("#taskListOutput li").last().click(function(){
      $("#taskDisplay").show();
      $(".inputtedPerson").text(newTasks.personName);
      $(".inputtedTask").text(newTasks.taskName);
      $(".inputtedTime").text(newTasks.dateName);
    });
    $(".taskComplete").last().change(function(){
      newTasks.done = $(this).prop("checked");
    });

    $("button#delete").click(function() {
      chores.forEach(function(chore){
        chore.choreRemove();
      });

      $("#taskListOutput li").remove();
      chores.forEach(function(chore){
        $("ul#taskListOutput").append("<li><span class='chore'>" + chore.taskName + "</span>   <input type='checkbox' class='taskComplete'</li>");
        $("#taskDisplay").hide();


        $("#taskListOutput li").last().click(function(){
          $("#taskDisplay").show();
          $(".inputtedPerson").text(newTasks.personName);
          $(".inputtedTask").text(newTasks.taskName);
          $(".inputtedTime").text(newTasks.dateName);
        });
        $(".taskComplete").last().change(function(){
          newTasks.done = $(this).prop("checked");
        });
      });
    });

    $("#taskListOutput li").dblclick(function() {
      var bob = $(this);
      $(this).remove();
      $("#taskDisplay").hide();
    })

  });
});
