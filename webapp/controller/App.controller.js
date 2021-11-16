sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/m/MessageToast",
  "sap/ui/model/json/JSONModel",
  "sap/ui/model/resource/ResourceModel"

], function (Controller, MessageToast, JSONModel, ResourceModel) {

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

      //set i18n model on view
      var i18nModel = new ResourceModel({
        bundleName: "sap.ui.demo.walkthrough.i18n/i18n_en"
      });
      this.getView().setModel(i18nModel, "i18n_en");
    },    
    onShowHello : function () {
      //show native JS alert
      //alert("Hello World from a Controller");
      //MessageToast.show("Hello World from MessageToast");

      //read msg from i18n model
      var oBundle = this.getView().getModel("i18n_en").getResourceBundle();
      var sRecipient = this.getView().getModel().getProperty("/recipient/name");
      var sMsg = oBundle.getText("helloMsg", [sRecipient]);
      // show message
      MessageToast.show(sMsg);
    }
  });
});