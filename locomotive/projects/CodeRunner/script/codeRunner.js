var windowHeight = $(window).height();
var menuBarHeight = $("#menuBar").height();
var tabsHeight = $("#tabs").height();
var codeContainerHeight = windowHeight - menuBarHeight - tabsHeight - 1;
    	
$(".codeContainer").height(codeContainerHeight+ "px");

$("#HTMLclick").click(function() {
  $("#HTMLContainer").css("display", "block");
  $("#CSSContainer").css("display", "none");
  $(this).css("backgroundColor", "white");
  $("#CSSclick").css("backgroundColor", "gray");
});

$("#CSSclick").click(function() {
  $("#HTMLContainer").css("display", "none");
  $("#CSSContainer").css("display", "block");
  $(this).css("backgroundColor", "white");
  $("#HTMLclick").css("backgroundColor", "gray");
});

$("#runButton").click(function() {
  $("iframe").contents().find("html").html("<style>"+$("#cssCode").val()+"</style>" + $("#htmlCode").val());
});