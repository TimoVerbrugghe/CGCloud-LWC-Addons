import { LightningElement, api } from 'lwc';

export default class YourDayTableauCrm extends LightningElement {
    tableauImg1 = 'https://i.ibb.co/Np7mNm0/Screenshot-2022-03-31-at-03-21-35.png';
    tableauImg2 = 'https://i.ibb.co/44V37Y3/Screenshot-2022-03-31-at-03-23-33.png';
    tableauImg3 = 'https://i.ibb.co/2ggDzty/image-1.png';

    myKeyAccounts = 'sfanalytics://dashboard/0FK7Q0000003ldPWAQ/?orgId=00D7Q000004uI89&loginHost=login.salesforce.com';

    @api CardTitle = "CRM Analytics"
}