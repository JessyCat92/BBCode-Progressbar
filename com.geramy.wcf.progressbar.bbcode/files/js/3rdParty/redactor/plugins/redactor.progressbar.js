/**
 * Progessbar Plugin for Redactor
 *
 * @author	Colin Weber
 */

if (!RedactorPlugins) var RedactorPlugins = {};

RedactorPlugins.progressbar = function() {
	"use strict";
	
	return {
		init: function() {
			var button = this.button.add('progressbarModal', WCF.Language.get('wcf.bbcode.editorProgressbarTitle'));
			this.button.addCallback(button, this.progressbar.show);            
			this.button.setAwesome('progressbarModal', 'fa-battery-half');
		},
		
		show: function() {	
			this.modal.addTemplate('progressbarModal', this.progressbar.getTemplate());
			this.modal.load('progressbarModal', WCF.Language.get('wcf.bbcode.editorProgressbarTitle'), 800);
			this.modal.createCancelButton();
							
			var insertButton = this.modal.createActionButton(this.lang.get('insert'));
			insertButton.on('click', this.progressbar.insert);
			
			this.modal.show();
		},
		
		insert: function() {
			
			var percentage = $("#progress-percentage").val();
			var text = $("#progress-text").val();
			var fillcolor = $("#progress-fillcolor").val();
			var textcolor = $("#progress-textcolor").val();
			var width = $("#progress-width").val();
			var hidePercentage = $("#progress-hidepercentage").val();
			
			if ($("#progress-fillcolor-default").is(":checked")) {
				fillcolor = -1;
			}
			
			if ($("#progress-textcolor-default").is(":checked")) {
				textcolor = -1;
			}
			
			var str = "[progressbar=" + percentage + "," + fillcolor + "," + textcolor + "," + width + "," + hidePercentage + "]" + text + "[/progressbar]";
			
			this.modal.close();
			
			this.wutil.insertDynamic('&nbsp;' + str + '&nbsp;');
		},
		
		getTemplate: function() {
			var template = "<table>";
			template += "<tr><td>" + WCF.Language.get('wcf.bbcode.editorProgressbarPercent') + "</td><td><input type='number' id='progress-percentage' value='0'/></td></tr>";
			template += "<tr><td>" + WCF.Language.get('wcf.bbcode.editorProgressbarText') + "</td><td><input type='text' id='progress-text' value=''/></td></tr>";
			template += "<tr><td>" + WCF.Language.get('wcf.bbcode.editorProgressbarFillColor') + "</td><td><input type='color' id='progress-fillcolor' onchange=\"$(\'#progress-fillcolor-default\').attr(\'checked\', false);\" value='#D8E7F5'/>";
			template += "<input type='checkbox' id='progress-fillcolor-default' checked/><label for='#progress-fillcolor-default'>" + WCF.Language.get('wcf.bbcode.editorProgressbarUseDefault') + "</label></td></tr>";
			template += "<tr><td>" + WCF.Language.get('wcf.bbcode.editorProgressbarTextColor') + "</td><td><input type='color' id='progress-textcolor' onchange=\"$(\'#progress-textcolor-default\').attr(\'checked\', false);\" value='#254C73'/>";
			template += "<input type='checkbox' id='progress-textcolor-default' checked/><label for='#progress-textcolor-default'>" + WCF.Language.get('wcf.bbcode.editorProgressbarUseDefault') + "</label></td></tr>";
			template += "<tr><td>" + WCF.Language.get('wcf.bbcode.editorProgressbarWidth') + "</td><td><input type='number' min='0' max='100' id='progress-width' value='100'/></td></tr>";
			template += "<tr><td>" + WCF.Language.get('wcf.bbcode.editorProgressbarHidePercentage') + "</td><td><select id='progress-hidepercentage'>"; 
			template += "<option value='0' selected>" + WCF.Language.get('wcf.bbcode.editorProgressbarHidePercentageYes') + "</option>";
			template += "<option value='1'>" + WCF.Language.get('wcf.bbcode.editorProgressbarHidePercentageNo') + "</option>";
			template += "</select></td></tr>";
			template += "</table>";
			
			return template;
		}
	};
};