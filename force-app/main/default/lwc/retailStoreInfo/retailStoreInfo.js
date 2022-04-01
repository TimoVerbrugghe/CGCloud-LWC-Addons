import { LightningElement, api, wire } from 'lwc';
import { NavigationMixin } from "lightning/navigation";
import { getFieldValue, updateRecord, getRecord } from 'lightning/uiRecordApi';
import RETAILSTORE from '@salesforce/schema/Visit.PlaceId';


export default class RetailStoreInfo extends NavigationMixin(LightningElement) {
    storeManagerImg = "https://tverbruggh-220309-608-demo--c.documentforce.com/sfc/dist/version/renditionDownload?rendition=ORIGINAL_Jpg&versionId=0687Q000001cdQa&operationContext=DELIVERY&contentId=05T7Q0000066Kdy&page=0&d=/a/7Q000000Gnvm/W9bd0LILSXGk8Wub5D4UMwdAXAW6dfwDVQFHm5UN.D8&oid=00D7Q000004uI89&dpt=null&viewId=";
    storeImg = "https://tverbruggh-220309-608-demo--c.documentforce.com/sfc/dist/version/renditionDownload?rendition=ORIGINAL_Jpg&versionId=0687Q000001cdQb&operationContext=DELIVERY&contentId=05T7Q0000066Kdz&page=0&d=/a/7Q000000Gnvr/jfbRH7FiGMERA6QZOsOM8OwIP70cINJmr74LdZjrx_0&oid=00D7Q000004uI89&dpt=null&viewId=";

    @api recordId;
    @wire(getRecord, {recordId : '$recordId', fields: [RETAILSTORE]})
    visit;

    handleStoreNavigate() {
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: this.visit.data.fields.PlaceId.value,
                actionName: 'view'
            }
        });
    }
    

}