public class promotionsSlackController {

    public List<String> promotionIdsSet 			  { get; set; }
    public List<Promotion> selectedPromotionRecords     { get; set; }

    public promotionsSlackController(ApexPages.StandardSetController setController) {
        selectedPromotionRecords = (Promotion[])setController.getSelected();
        promotionIdsSet 			= new List<String>();
        for(sObject sobj : setController.getSelected()){
            promotionIdsSet.add( (String)sObj.get('Id') );
        }
        // SOQL on Lead Object if you need more Fields
        selectedPromotionRecords = [SELECT Id, Name, StartDate, EndDate, Category FROM Promotion WHERE Id IN: promotionIdsSet];
    }
}

