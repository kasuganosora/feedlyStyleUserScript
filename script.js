// ==UserScript==
// @name       Feedly style
// @namespace  http://blog.hcg.im/
// @version    0.1
// @description  enter something useful
// @match      *://cloud.feedly.com/*
// @copyright  2013+, ReitsukiSion
// ==/UserScript==

(function(){
  var headTags = document.getElementsByTagName("head");
    if(headTags.length == 0){
    	return;
    }
    
    var head = headTags[0];
    
    var styleARR = [];
    styleARR.push('#box{color:black;}');
    styleARR.push('#feedlyFrame{width:100%!important;}');
    styleARR.push('#box .u4EntryAnnotationHolder{float:right;margin-right: 0;margin-left: 20px;}');
    styleARR.push("#box .marginMaker{margin-left:0;}");
    styleARR.push("#feedlyPage{width:100%!important;}");
    styleARR.push("#box .u4Entry{max-width:806px;}");
    styleARR.push("#box .summary{font-size: 14px;line-height:18px; max-height: initial!important; color: black;}");
    styleARR.push("#box .u100Entry .entryBody{font-size: 14px;line-height:18px;color: black;}");
    styleARR.push("#box .u100Entry .entryHeader .title{color: black;}");
    var styleStr = styleARR.join('\n');
    var style = document.createElement("style");
    style.textContent = styleStr;
    head.appendChild(style);
})();
