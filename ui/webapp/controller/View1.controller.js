sap.ui.define([
	"sap/ui/core/mvc/Controller"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller) {
		"use strict";

		return Controller.extend("ui.controller.View1", {
			onInit: function () {

			},

            onPressLogout: function (){
                window.location.replace("logout");
            }
		});
	});
