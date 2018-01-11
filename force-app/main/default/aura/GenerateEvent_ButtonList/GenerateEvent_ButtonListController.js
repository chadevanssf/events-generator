({
	doInit : function(component, event, helper) {
        var mdtGroupName = component.get("v.mdtGroupName");

        var action = component.get("c.listMetadata");
        action.setParams({
            grouping: mdtGroupName
    	});
        
        action.setCallback(this, function(response) {
            var mdts = response.getReturnValue();
            
            component.set("v.mdtEntries", mdts);
        });
        $A.enqueueAction(action);
	}
})