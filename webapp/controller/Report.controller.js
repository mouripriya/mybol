sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("com.mouribol.mouribol.controller.Report", {
            onInit: function () {
                var that = this;     
            
                var oRouter = sap.ui.core.UIComponent.getRouterFor(that);
                oRouter.getRoute("Report").attachPatternMatched(that._onObjectMatched, that);
            },
            _onObjectMatched:function(){
                alert("Welcome");
            }
        });
    });