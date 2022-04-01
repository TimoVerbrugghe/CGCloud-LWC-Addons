import { LightningElement, wire } from 'lwc';
import getStoreProducts from '@salesforce/apex/CGCloudGetStoreProducts.getStoreProducts';
const DELAY = 100;

export default class InventoryCheckProductList extends LightningElement {
    storeProducts;
    searchProducts;
    error;
    
    @wire(getStoreProducts)
    wiredStoreProducts({ error, data }) {
        if (data) {
            this.searchProducts = data;
            this.storeProducts = data;
            this.error = undefined;
        } else if (error) {
            this.error = error;
            this.searchProducts = undefined;
            this.storeProducts = undefined;
        }
    }
    
    searchString;

    connectedCallback() {
    }

    get options() {
        return [
            { label: 'Available', value: 'available' },
            { label: 'Out of Stock', value: 'outofstock' },
            { label: 'Not Listed', value: 'notlisted' }
        ];
    }


    handleSearch(event) { 
        this.searchString = event.target.value;

        /*
        window.clearTimeout(this.delayTimeout);
        this.delayTimeout = setTimeout(() => {
            this.searchString = event.target.value;
        }, DELAY);
        */

        // If searchProduct has value
            if (this.searchString) {
                const regex = new RegExp(`^${this.searchString}`, 'i'); 
                this.searchProducts = this.storeProducts.filter(({Name}) => 
                    Name.match(regex)
                );
            } else {
                this.searchProducts = this.storeProducts;
            }

        
    }

}