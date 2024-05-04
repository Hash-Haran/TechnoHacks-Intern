document.getElementById("convert").addEventListener("click", function() {
    const fromCurrency = document.getElementById("from").value;
    const toCurrency = document.getElementById("to").value;
    const amount = parseFloat(document.getElementById("amount").value);

    const exchangeRates = {
        usd: {
            inr: 73.5, eur: 0.85, gbp: 0.72, jpy: 109.5,
            aud: 1.32, cad: 1.25, chf: 0.91,
        },
        inr: {
            usd: 1/73.5, eur: 0.011, gbp: 0.0098, jpy: 1.49,
            aud: 0.018, cad: 0.017, chf: 0.012,
        },
        eur: {
            usd: 1.18, inr: 87.02, gbp: 0.85, jpy: 130.17,
            aud: 1.57, cad: 1.49, chf: 1.09,
        },
        gbp: {
            usd: 1.39, inr: 100.95, eur: 1.17, jpy: 151.14,
            aud: 1.82, cad: 1.73, chf: 1.27,
        },
        jpy: {
            usd: 0.0091, inr: 0.67, eur: 0.0077, gbp: 0.0066,
            aud: 0.012, cad: 0.011, chf: 0.008,
        },
        aud: {
            usd: 0.76, inr: 54.86, eur: 0.64, gbp: 0.55,
            jpy: 81.42, cad: 0.95, chf: 0.69,
        },
        cad: {
            usd: 0.80, inr: 57.9, eur: 0.67, gbp: 0.58,
            jpy: 85.47, aud: 1.05, chf: 0.73,
        },
    };

    const convertedAmount = amount * exchangeRates[fromCurrency][toCurrency];
    document.getElementById("result").textContent = `${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;
});
