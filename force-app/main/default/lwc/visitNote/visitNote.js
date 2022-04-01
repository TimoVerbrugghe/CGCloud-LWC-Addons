import { LightningElement, api, wire } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { getFieldValue, updateRecord, getRecord } from 'lightning/uiRecordApi';
import VISITNOTE_FIELD from '@salesforce/schema/Visit.Visit_Note__c';
import ID_FIELD from '@salesforce/schema/Visit.Id';

export default class RichTextFieldTest extends LightningElement {
    allowedFormats = [
        'size',
        'bold',
        'italic',
    ];
    
    // set a timeout for Typing in milliseconds, so doneTypingInteral is 0.3 seconds
    doneTypingInterval = 300;
    typingTimer;
  
    @api recordId;
    @wire(getRecord, {recordId : '$recordId', fields: [VISITNOTE_FIELD]})
    visit;

    newValue;
    oldValue;

    get noteValue() {
        // get first notevalue from the contact, reset new & old values
        this.oldValue = getFieldValue(this.visit.data, VISITNOTE_FIELD);
        this.newValue = getFieldValue(this.visit.data, VISITNOTE_FIELD);
        return getFieldValue(this.visit.data, VISITNOTE_FIELD);
    }

    handleChange(event) {
        // Store updated field data into a local variable, since onChange fires after every character is changed
        clearTimeout(this.typingTimer);
        this.typingTimer = setTimeout(() => {
            this.newValue = event.detail.value;
        }, this.doneTypingInterval);
    }
  
    handleBlur(event) {
        // If the value of the blur event is different from the original value TESTNOTE field, then update that field
        if (this.newValue != this.oldValue) {
              const recordInput = {
                    fields: {
                        [VISITNOTE_FIELD.fieldApiName] : this.newValue,
                        [ID_FIELD.fieldApiName] : this.recordId
                    }
                };

                console.log(recordInput);
                
                updateRecord(recordInput)
                    .then(() => {
                        this.dispatchEvent(
                            new ShowToastEvent({
                                title: "Visit note updated",
                                message: "Your changes have been saved",
                                variant: "success"
                        }));
                    })
    
                    .catch(error => {
                        console.log(error);
                        this.dispatchEvent(
                            new ShowToastEvent({
                                title: "Error has occurred",
                                message: error.body.message,
                                variant: "error"
                        }));
                    });
        } else {
            console.log("Nothing has changed in the value");
        }
    }
}