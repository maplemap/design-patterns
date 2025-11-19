import {Payment} from '../types'

export class LiqpayPayment implements Payment {
    async pay(amount: number) {
        console.log(`🇺🇦 LiqPay: charging $${amount}...`);
        // await liqpay.api("request", {...});
    }
}
