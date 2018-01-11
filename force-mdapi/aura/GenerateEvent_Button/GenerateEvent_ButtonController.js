({
    doInit : function(component, event, helper) {
        var mdtName = component.get("v.mdtName");
        
        var action = component.get("c.selectMetadata");
        action.setParams({
            devName: mdtName
    	});
        
        action.setCallback(this, function(response) {
            var mdt = response.getReturnValue();
            
            component.set("v.eventBody", mdt.Event_Data__c);
            
            component.set("v.label", mdt.Label);
        });
        $A.enqueueAction(action);
    },
    
    handleClick : function(component, event, helper) {
        var btn = component.find("eventbutton");
        btn.set("v.iconName", "utility:spinner");
        
        var eventName = component.get("v.eventName");
        var eventBody = component.get("v.eventBody");
        var newEvent = JSON.parse(eventBody);
        newEvent["sobjectType"] = eventName;
        
        var action = component.get("c.publishEvent");
        action.setParams({
            newEvent: newEvent
    	});
        
        action.setCallback(this, function(response) {
            if (response.getState() === "SUCCESS") {
                var toastEvent = $A.get("e.force:showToast");
                toastEvent.setParams({
                    "type": "success",
                    "duration": "1000",
                    "title": "Success!",
                    "message": "The event has been POSTed successfully."
                });
                toastEvent.fire();
            } else {
                var msg = "The event has not been POSTed.";
                var msgs = response.getError();
                
                for (var i = 0; i < msgs.length; i++) {
                    msg += "<br>" + msgs[i].message;
                }
                
                var toastEvent = $A.get("e.force:showToast");
                toastEvent.setParams({
                    "type": "error",
                    "mode": "sticky",
                    "title": "Failure!",
                    "message": msg
                });
                toastEvent.fire();
            }
            
            var btn = component.find("eventbutton");
            var iconName = component.get("v.baseIconName");
            btn.set("v.iconName", iconName);
        });
        $A.enqueueAction(action);
    }
})