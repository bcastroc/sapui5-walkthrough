sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/m/MessageToast",
  "sap/ui/model/json/JSONModel"

], function (Controller, MessageToast, JSONModel) {

  "use strict";
  return Controller.extend("sap.ui.demo.walkthrough.controller.App",{
    onInit : function () {
      //set data model on view
      var oData = {
        recipient : {
          name : "JSONModel World"
        }
      };
      var oModel = new JSONModel(oData);
      this.getView().setModel(oModel);
    },    
    onShowHello : function () {
      //show native JS alert
      //alert("Hello World from a Controller");
      MessageToast.show("Hello World from MessageToast");
    }
  });
});