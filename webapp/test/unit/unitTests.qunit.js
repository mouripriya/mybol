/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"commouri_bol/mouri_bol/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
