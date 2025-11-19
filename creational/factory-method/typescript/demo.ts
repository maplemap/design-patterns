import {Payment} from "./types";
import {StripePayment} from "./providers/stripe-payment";
import {PaypalPayment} from "./providers/paypal-payment";
import {LiqpayPayment} from "./providers/liqpay-payment";

export type Provider = 'stripe' | 'paypal' | 'ligpay'

// Factory Method announcement
class PaymentFactory {
    static create(provider: Provider): Payment {
        switch (provider) {
            case "stripe":
                return new StripePayment()
            case "paypal":
                return new PaypalPayment()
            case "ligpay":
                return new LiqpayPayment()
        }
    }
}

async function processOrder(amount: number, provider: Provider) {
    const payment = PaymentFactory.create(provider)
    await payment.pay(amount)
}

async function main() {
    await processOrder(100, 'stripe')
    await processOrder(50, 'paypal')
    await processOrder(75, 'ligpay')
}


void main()
