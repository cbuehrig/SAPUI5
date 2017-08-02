sap.ui.jsview("ui.main", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf ui5.main
	*/ 
	getControllerName : function() {
		return "ui.main";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf ui5.main
	*/ 
	createContent : function(oController) {
	//create the first page
		var mainPage = new sap.m.Page({
			title : "B1 App SAP UI5",
			showNavButton : false,
			content : [
				new sap.m.Button({
				text : "ODATA",
				width: "150px",
				press : function () {
					// navigate to odata page
					app.to("odataPage");
				}
    			}),
    			new sap.m.ToolbarSpacer(),
    				new sap.m.Button({
    					text : "XSJS",
    					width: "150px",
    					press : function () {
    						// navigate to xsjs page
    						app.to("xsjsPage");
    					}
    				}),
    			new sap.m.ToolbarSpacer(),
    				new sap.m.Button({
    					text : "Service Layer",
    					width: "150px",
    					press : function () {
    						// navigate to page3
    						app.to("serviceLayerPage");
    					}
    				})
			]
		});	
		
        var oBar = new sap.m.Bar({
            contentLeft : [ new sap.m.Image({
               // src : "../img/sap-logo.png",
                src : "https://www.sap.com/global/ui/images/global/sap-logo.gif",
                height : "30px"
            }) ],
            contentMiddle : [ new sap.m.Label({
                text : "B1 App Demo based on SAP UI5",
                //textAlign : "Left",
                design : "Bold"
            }) ]
           // contentRight : []
        });
		
		mainPage.setCustomHeader(oBar);
		return mainPage;
	}

});