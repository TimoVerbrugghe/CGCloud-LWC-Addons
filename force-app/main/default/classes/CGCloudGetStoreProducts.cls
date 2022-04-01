public with sharing class CGCloudGetStoreProducts {
    @AuraEnabled(cacheable=true)
    public static List<Product2> getStoreProducts(Id visitId){
        try {
            return [SELECT Name, DisplayUrl FROM Product2 WHERE CG_Cloud_Product__c = true AND Name LIKE '%Red Bull%'];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }

}
