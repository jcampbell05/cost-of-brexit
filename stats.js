// Shared Stats between pages and scriptsw
//
const updateInteval = 25;
const statShuffleInterval = 5000;

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

function setupFlip(tick) {

    Tick.helper.interval(function () {

        const totalCost = costOfBrexit();
        const formattedCost = currencyFormatter.format(totalCost)

        document.title = title();
        tick.value = formattedCost;

        tick.root.setAttribute('aria-label', tick.value);

    }, updateInteval);
}

function setupPerPerson(tick) {

    Tick.helper.interval(function () {

        const costPerPerson = Math.floor(costOfBrexit() / population);
        const formattedCost = currencyFormatter.format(costPerPerson)

        tick.value = formattedCost;

    }, updateInteval);
}

function setupPerBusiness(tick) {

    Tick.helper.interval(function () {

        const costPerPerson = Math.floor(costOfBrexit() / totalBusinesses);
        const formattedCost = currencyFormatter.format(costPerPerson)

        tick.value = formattedCost;

    }, updateInteval);
}

function createStatSlot(element) {

    var stat = stats.shift();

    function valueFromStat(stat) {
        return {
            'caption': stat.caption,
            'value': stat.value()
        }
    }

    function styleComma(root) {
        const flippers = root.querySelectorAll(".tick-flip");

        for (var flipper of flippers) {
            const text = flipper.querySelector(".tick-flip-panel-text-wrapper");

            if (text.textContent === ',') {
                flipper.style.minWidth = '0.4em';
            }
        }
    }

    const tick = Tick.DOM.create(element, {
        value: valueFromStat(stat),
        didInit: () => {
            styleComma(element);
        },
        view: {
            children: [
                {
                    root: 'div',
                    layout: 'vertical',
                    children: [
                        {
                            layout: 'horizontal',
                            repeat: true,
                            key: 'value',
                            children: [
                                {
                                    view: 'flip'
                                },
                            ]
                        },
                        {
                            view: 'flip',
                            key: 'caption'
                        }
                    ]
                }
            ]
        }
    });

    Tick.helper.interval(function () {
        tick.value = valueFromStat(stat);
        styleComma(element);
    }, updateInteval);

    return () => {
        stats.push(stat);
        stat = stats.shift();
        tick.value = valueFromStat(stat);
        styleComma(element);
    }
}

// Shuffle Stats
//
stats = stats.sort((a, b) => 0.5 - Math.random());

var statSlots = Array.from(document.querySelectorAll('.stat-slot'));
statSlots = statSlots.map(element => createStatSlot(element));
var nextStatsSlotIDToUpdate = 0;

setInterval(() => {

    var selectedSlot = statSlots[nextStatsSlotIDToUpdate % statSlots.length];
    selectedSlot();

    nextStatsSlotIDToUpdate ++;

}, statShuffleInterval);