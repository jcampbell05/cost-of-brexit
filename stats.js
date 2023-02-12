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
    return formattedCost + " is the total cost of Brexitsince Janurary 2022";
}

var stats = [
    {
        caption: 'fixed potholes on the road',
        value: () => {
            const costToFixPothole = 63
            const number = Math.floor(costOfBrexit() / costToFixPothole);
            const formattedNumber = numberFormatter.format(number)

            return formattedNumber;
        }
    },
    {
        caption: 'London Olympic Games',
        value: () => {
            const costOfOlympicGames = 8770000000
            const number = Math.floor(costOfBrexit() / costOfOlympicGames);
            const formattedNumber = numberFormatter.format(number);

            return formattedNumber;
        }
    },
    {
        caption: 'nurses for the NHS',
        value: () => {
            const averageNurseWage = 33384;
            const number = Math.floor(costOfBrexit() / averageNurseWage);
            const formattedNumber = numberFormatter.format(number)

            return formattedNumber;
        }
    }, {
        caption: 'years of free meals for every school child',
        value: () => {

            const schoolkidsEachYear = 10000000
            const costPerSchoolKid = 457.90
            const costForAllKids = schoolkidsEachYear * costPerSchoolKid

            const number = Math.floor(costOfBrexit() / costForAllKids);
            const formattedNumber = numberFormatter.format(number)
            return formattedNumber;
        }
    },
    {
        caption: 'stat 6',
        value: () => {
            return 9;
        }
    },
    {
        caption: 'stat 7',
        value: () => {
            return 94;
        }
    },
    {
        caption: 'stat 8',
        value: () => {
            return 00;
        }
    },
    {
        caption: 'stat 9',
        value: () => {
            return 23;
        }
    }
]

// Shuffle Stats
//
stats = stats.sort((a, b) => 0.5 - Math.random());