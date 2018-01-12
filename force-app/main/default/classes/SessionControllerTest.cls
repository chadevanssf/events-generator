@isTest
private class SessionControllerTest {
    @isTest static void testUserSessionId() {
        String sId = SessionController.getSessionId();
        
        System.assert(sId <> null);
    }
}