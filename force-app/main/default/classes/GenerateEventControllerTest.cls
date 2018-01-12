@isTest
private class GenerateEventControllerTest {
    @isTest static void testListMetadata() {
        Test.startTest();
        
        //be warned, MDT are always visible to testing
        List<Events_Generator__mdt> l = GenerateEventController.listMetadata('Stage');
        
        System.assert(l.size() > 0);
        
        Test.stopTest();
    }

    @isTest static void testSelectMetadata() {
        Test.startTest();
        
        Events_Generator__mdt i = GenerateEventController.selectMetadata('Stage_One');
        
        System.assert(i <> null);
        
        Test.stopTest();
    }

    @isTest static void testPublishEvent() {
        Log__e i = new Log__e(Message__c = 'Hello');

        Test.startTest();
        
        // add code coverage
		GenerateEventController.publishEvent(i);
        List<Database.SaveResult> srs = GenerateEventController.publishEvents(i);
        
        Test.stopTest();
        
        System.assert(i <> null);
        
        for (Database.SaveResult sr : srs) {
        	System.assertEquals(true, sr.isSuccess());
        }
    }
}