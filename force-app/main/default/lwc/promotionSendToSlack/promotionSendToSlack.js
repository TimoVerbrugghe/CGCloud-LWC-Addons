import { LightningElement, api } from "lwc";
import { ShowToastEvent } from 'lightning/platformShowToastEvent'

export default class DispatchEventAction extends LightningElement {
    @api async invoke() {
        let event = new ShowToastEvent({
            title: 'Promotions sent to Slack',
            message: 'The promotions you selected have been sent to the store managers on Slack.',
        });
        this.dispatchEvent(event);
    }

    sleep(ms) {
        // eslint-disable-next-line @lwc/lwc/no-async-operation
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}