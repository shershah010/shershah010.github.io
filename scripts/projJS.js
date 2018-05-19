function add_project(title, para, img, id){
  var css = "background-image: url('../"+img+"'); \n background-repeat: no-repeat; \n background-position: center, center; \n background-size: contain;";
  var startTags = " } </style><div class='cont'><div class='left'><div class='wrapper'><h3> ";
  var midTags = " </h3><p> ";
  var endTags  = " </p></div></div><div class='right' id='" + id + "'></div></div><img src='../"+img+"'><hr>";
  return "<style> #" +id + " { "+ css + startTags + title + midTags + para + endTags;
}
$(document).ready(function(){
  var items = [add_project("Scheme Text Editor", "This is an easy to use, text editor for the programing language, Scheme, which is a dialect of LISP. This was built using JavaFX, the RichTextFX API, and e(fx)clipse tooling and runtime. The program has the capability to open, save, and edit multiple Scheme files simultaneously. It is also provides color coding to make programming easier.", "img/editor.gif", 'a'),
              add_project("Interviews with Veterns", "A highschool project were I took interviews with veterns from World War Two, The Korean War, and the Vietnam War. I compiled the interviews into an interactive experiance were users can assume the role of the interviewer. Some features include a save state and multiple dialog options allowing for multiple playthrough. The tools I used were JavaFX and CSS.", "img/english.gif", 'b'),
              add_project("Text Based Adventure", "A silly, yet dark, text based adventure game. Similar to DUNNET on EMACS. I used C++ and Microsoft Visual Studios to create this project.", "img/text1.gif", 'c')];
  for (var i = 0; i < items.length; i++){
    $(".content").append(items[i]);
  }
});
