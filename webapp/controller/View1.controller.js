sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("com.mouribol.mouribol.controller.View1", {
            onInit: function () {

            },
            onsubmit:function(){
                var that = this;
            // sap.ui.core.BusyIndicator.show(0);
            var oRouter = sap.ui.core.UIComponent.getRouterFor(that);
            oRouter.navTo("Report");
            }
        });
    });
