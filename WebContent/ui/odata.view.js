sap.ui.jsview("ui.odata", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf ui.page2
	*/ 
	getControllerName : function() {
		return "ui.odata";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf ui.page2
	*/ 
	createContent : function(oController) {

		//Create table and its columns
		var oTable = new sap.m.Table("idPrdList", {   
				      inset : true, 
				      headerText : "List of Products",
				      headerDesign : sap.m.ListHeaderDesign.Standard, 
				      mode : sap.m.ListMode.None,   
				      includeItemInSelection : false,   
				      growing : true,
				      growingThreshold :5
				    });
				    
	    var col1 = new sap.m.Column("col1",{header: new sap.m.Label({text:"Code"})});
	    oTable.addColumn(col1); 
	    
	    var col2 = new sap.m.Column("col2",{header: new sap.m.Label({text:"Name"})});
	    oTable.addColumn(col2); 
	    
	    var col3 = new sap.m.Column("col3",{header: new sap.m.Label({text:"Total on Hand"})});
	    oTable.addColumn(col3);    
	    
	    var col4 = new sap.m.Column("col4",{header: new sap.m.Label({text:"Total on Order"})});
	    oTable.addColumn(col4);    

	    var colItems = new sap.m.ColumnListItem("colItems",{type:"Active"});
	    
	    var txtNAME = new sap.m.Text("txtNAME",{text:"{ItemCode}"});
	    colItems.addCell(txtNAME); 
	        
	    var txtNAME2 = new sap.m.Text("txtNAME2",{text:"{ItemName}"});
	    colItems.addCell(txtNAME2); 
	       
	    var txtNAME3 = new sap.m.Text("txtNAME3",{text:"{OnHand}"});
	    colItems.addCell(txtNAME3);
	    
	    var txtNAME4 = new sap.m.Text("txtNAME4",{text:"{OnOrder}"});
	    colItems.addCell(txtNAME4);
	   
	    //Create button to load the data into the table
	    var buttonLoad = new sap.m.Button({
					text : "LOAD",
					width: "150px",
	    			press: [oController.onPressLoadOdata, oController]
				});
	    
		// create the second page with a back button
		var odataPage = new sap.m.Page({
			title : "Get list of Items using XSODATA",
			showNavButton : true,
			navButtonPress : function () {
				// go back to the previous page
				app.back();
			},
			content: [
				buttonLoad,
				oTable
			]
		});
		
	    return odataPage;
	}

});