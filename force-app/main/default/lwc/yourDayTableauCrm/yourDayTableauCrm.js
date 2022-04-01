import { LightningElement, api } from 'lwc';

export default class YourDayTableauCrm extends LightningElement {
    tableauImg1 = 'https://i.ibb.co/2ggDzty/image-1.png';
    tableauImg2 = this.tableauImg1;
    tableauImg3 = this.tableauImg1;
    tableauImg4 = this.tableauImg1;

    @api CardTitle = "CRM Analytics"
}