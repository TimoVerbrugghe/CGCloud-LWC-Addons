import { LightningElement, track } from 'lwc';

export default class AdvPromotionPlanning extends LightningElement {
    @track
    searchReps = [{'Id': 'YFDODIF12', 'Name': 'Chantelle', 'Total': 56, 'Store1VisitAmount': 5}, {'Id': 'YFDODIF13', 'Name': 'Jason', 'Total': 56, 'Store1VisitAmount': 6}, {'Id': 'YFDODIF13', 'Name': 'Jordan', 'Total': 56, 'Store1VisitAmount': 6}, {'Id': 'YFDODIF13', 'Name': 'Julien', 'Total': 32, 'Store1VisitAmount': 0}];

    connectedCallback() {

    }

    handleTestChange(event) {
        let idArray = event.target.id.split("-");
        let repObject = this.searchReps.find(x => x.Id === idArray[0]);
        console.log(repObject);
    }
}