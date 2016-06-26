var ui = require("sdk/ui");

var panel = require("sdk/panel").Panel({
  width: 180, 
  height: 180, 
//  contentURL: "html-file-that-takes-user-input", //TODO
//  contentScriptFile: "takes user input and puts it into a db" TODO
});

var action_button = ui.ActionButton({
  id: "block-sites-button", 
  label: "Block Sites",
  icon: "./icon-16.png", 
  onClick: function(){
    panel.show();
  }
});

