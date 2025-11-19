import {Payment} from '../types'

export class StripePayment implements Payment {
    async pay(amount: number) {
        console.log(`💳 Stripe: charging $${amount}...`);
        // await stripe.charges.create({ amount, currency: "USD" });
    }
}
