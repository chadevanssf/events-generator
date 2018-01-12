public class GenerateEventController {
    @AuraEnabled
    public static void publishEvent(SObject newEvent) {
        publishEvents(newEvent);
    }
    
    public static List<Database.SaveResult> publishEvents(SObject newEvent) {
        List<SObject> events = new List<SObject>();
        events.add(newEvent);
        
        List<Database.SaveResult> results = EventBus.publish(events);
        return results;
    }
    
    @AuraEnabled
    public static List<Events_Generator__mdt> listMetadata(String grouping) {
        List<Events_Generator__mdt> results = [SELECT Id, Label, DeveloperName, Event_Data__c
                                               FROM Events_Generator__mdt
                                               WHERE Group__c = :grouping
                                               ORDER BY Label];
        return results;
    }
    
    @AuraEnabled
    public static Events_Generator__mdt selectMetadata(String devName) {
        List<Events_Generator__mdt> results = [SELECT Id, Label, DeveloperName, Event_Data__c
                                               FROM Events_Generator__mdt
                                               WHERE DeveloperName = :devName];
        return results[0];
    }
}