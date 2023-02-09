// Shared Stats between pages and scriptsw
//
const costPerYear = 100000000000;
const costPerSecond = costPerYear / 31536000;
const exitDate = new Date('2022-01-01');
const population = 59597542;
const totalBusinesses = 5508935;

const currencyFormatter = new Intl.NumberFormat('gb-UK', { style: 'currency', currency: 'GBP', minimumFractionDigits: 0 });
const numberFormatter = new Intl.NumberFormat('gb-UK', { minimumFractionDigits: 0 });

function costOfBrexit() {
    const secondsSinceBrexit = (Date.now() - exitDate.getTime()) / 1000;
    const value = Math.floor(secondsSinceBrexit * costPerSecond);
    return value
}

function title() {
    const formattedCost = currencyFormatter.format(costOfBrexit())
    return "Brexit has cost " + formattedCost + " in total since Janurary 2022";
}

function description() {
    const formattedCost = currencyFormatter.format(costOfBrexit())
    return "In total since January 2022 Brexit has cost us " + formattedCost + ", see what it could have been invested on.";
}

if (globalThis.module) {
    module.exports.title = title
    module.exports.description = description
}