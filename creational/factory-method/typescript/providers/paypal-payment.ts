import {Payment} from '../types'

export class PaypalPayment implements Payment {
    async pay(amount: number) {
        console.log(`🅿️ PayPal: charging $${amount}...`);
        // await paypal.payments.create({ value: amount, currency: "USD" });
    }
}
