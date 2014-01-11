exports.action = function(data, callback, config, SARAH) {
  
  var exec = require('child_process').exec;

  var process = '';

  switch(data.prog)
	{
	case "facebook":
	  process = '%CD%/plugins/sudo/bin/facebook.bat';
	  break;
	case "process":
	  process = '%CD%/plugins/sudo/bin/process.bat';
	  break;
	case "home":
	  process = '%CD%/plugins/sudo/bin/home.bat';
	  break;
	case "lock":
	  process = '%CD%/plugins/sudo/bin/lock.bat';
	  break;  
	  case "communaute":
	  process = '%CD%/plugins/sudo/bin/communaute.bat';
	  break;
	  case "selectall":
	  process = '%CD%/plugins/sudo/bin/selectall.vbs';
	  break;
	  case "save":
	  process = '%CD%/plugins/sudo/bin/save.vbs';
	  break;
	  case "fav":
	  process = '%CD%/plugins/sudo/bin/fav.vbs';
	  break;
	  case "retablir":
	  process = '%CD%/plugins/sudo/bin/retablir.vbs';
	  break;
	  case "command":
	  process = '%CD%/plugins/sudo/bin/command.vbs';
	  break;
	  case "bfm":
	  process = '%CD%/plugins/sudo/bin/bfm.bat';
	  break;
	  case "find":
	  process = '%CD%/plugins/sudo/bin/find.vbs';
	  break;
	  case "cancel":
	  process = '%CD%/plugins/sudo/bin/cancel.vbs';
	  break;
	  case "cut":
	  process = '%CD%/plugins/sudo/bin/cut.vbs';
	  break;
	  case "next":
	  process = '%CD%/plugins/sudo/bin/next.vbs';
	  break;
	  case "precedent":
	  process = '%CD%/plugins/sudo/bin/precedent.vbs';
	  break;
	  case "paste":
	  process = '%CD%/plugins/sudo/bin/paste.vbs';
	  break;
	  case "konsole":
	  process = '%CD%/plugins/sudo/bin/konsole.bat';
	  break;
	  case "global":
	  process = '%CD%/plugins/sudo/bin/global.bat';
	  break;
	  case "copy":
	  process = '%CD%/plugins/sudo/bin/copy.vbs';
	  break;
	  case "restore":
	  process = '%CD%/plugins/sudo/bin/restore.vbs';
	  break;
	  case "minimize":
	  process = '%CD%/plugins/sudo/bin/minimize.vbs';
	  break;
	  case "close":
	  process = '%CD%/plugins/sudo/bin/close.vbs';
	  break;
	  case "shut":
	  process = '%CD%/plugins/sudo/bin/shut.vbs';
	  break;
	  case "restore":
	  process = '%CD%/plugins/sudo/bin/restore.vbs';
	  break;
	  case "chrome":
	  process = '%CD%/plugins/sudo/bin/chrome.bat';
	  break;
	  case "screenOff":
	  process = '%CD%/plugins/sudo/bin/screenoff.bat';
	  break;
	  case "screenOn":
	  process = '%CD%/plugins/sudo/bin/screenon.bat';
	  break;
	  case "info":
	  process = '%CD%/plugins/sudo/bin/info.bat';
	  break;
	 case "korben":
	  process = '%CD%/plugins/sudo/bin/korben.bat';
	  break;
	 case "iphone":
	  process = '%CD%/plugins/sudo/bin/iphone.bat';
	  break;
	 case "restart":
	  process = '%CD%/plugins/sudo/bin/restart.vbs';
	  break;
	case "twitter":
	  process = '%CD%/plugins/sudo/bin/twitter.bat';
	  break;
	case "controlpanel":
	  process = '%CD%/plugins/sudo/bin/controlpanel.bat';
	  break;
	  case "create":
	  process = '%CD%/plugins/sudo/bin/create.bat';
	  break;
	  case "dvdon":
	  process = '%CD%/plugins/sudo/bin/dvdon.bat';
	  break;
	  case "dvdoff":
	  process = '%CD%/plugins/sudo/bin/dvdoff.bat';
	  break;
	  case "trash":
	  process = '%CD%/plugins/sudo/bin/trash.bat';
	  break;
	  case "scrsaver":
	  process = '%CD%/plugins/sudo/bin/scrsaver.bat';
	  break;
	case "off":
	  process = '%CD%/plugins/sudo/bin/off.bat';
	  break;
	case "allo":
	  process = '%CD%/plugins/sudo/bin/allo.bat';
	  break;
	default:
	  process = '';
	  break;
	}

  console.log(process);
	if(process!=''){
	  var child = exec(process,
	  function (error, stdout, stderr) {
		if (error !== null) {
		  console.log('exec error: ' + error);
		}
	  }); 
	  
	  callback({});
  }else{
		callback({});
  }
}