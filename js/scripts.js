$(document).ready(function() {
  $("form#welcomeSelect").submit(function(event) {
    const userName = $("input#name").val();
    const op1 = parseInt($("input:radio[name=question1]:checked").val());
    const op2 = parseInt($("input:radio[name=question2]:checked").val());
    const op3 = parseInt($("input:radio[name=question3]:checked").val());
    const op4 = parseInt($("input:radio[name=question4]:checked").val());
    const op5 = parseInt($("input:radio[name=question5]:checked").val());
    const total = op1+op2+op3+op4+op5;
  });
});