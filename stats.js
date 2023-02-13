// Shared Stats between pages and scriptsw
//
const updateInteval = 25;
const statShuffleInterval = 3000;

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
            const formattedNumber = numberFormatter.format(number);

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
            const formattedNumber = numberFormatter.format(number);

            return formattedNumber;
        }
    }, {
        caption: 'years of free meals for every school child',
        value: () => {

            const schoolkidsEachYear = 10000000
            const costPerSchoolKid = 457.90
            const costForAllKids = schoolkidsEachYear * costPerSchoolKid

            const number = Math.floor(costOfBrexit() / costForAllKids);
            const formattedNumber = numberFormatter.format(number);
            return formattedNumber;
        }
    },
    {
        caption: 'new F35-B fighter jets',
        value: () => {
            const cost = 88800000

            const number = Math.floor(costOfBrexit() / cost);
            const formattedNumber = numberFormatter.format(number)

            return formattedNumber;
        }
    },
    {
        caption: 'police officers',
        value: () => {
            const wage = 29100
            const number = Math.floor(costOfBrexit() / wage);
            const formattedNumber = numberFormatter.format(number)

            return formattedNumber;
        }
    },
    {
        caption: 'children over-two with one year of free part-time childcare',
        value: () => {
            const costPerYear = 6952
            const number = Math.floor(costOfBrexit() / costPerYear);
            const formattedNumber = numberFormatter.format(number);

            return formattedNumber;
        }
    },
    {
        caption: 'days of court time',
        value: () => {
            const costPerDay = 1692
            const number = Math.floor(costOfBrexit() / costPerDay);
            const formattedNumber = numberFormatter.format(number)
            return formattedNumber;
        }
    },
    {
        caption: 'government-backed start-up business loans',
        value: () => {
            const wage = 25000
            const number = Math.floor(costOfBrexit() / wage);
            const formattedNumber = numberFormatter.format(number)

            return formattedNumber;
        }
    },
    {
        caption: 'additional GP appointments',
        value: () => {
            const averageGPCost= 39.23
            const number = Math.floor(costOfBrexit() / averageGPCost);
            const formattedNumber = numberFormatter.format(number)

            return formattedNumber;
        }
    },
    {
        caption: 'artists supported',
        value: () => {
            const size = 37500
            const number = Math.floor(costOfBrexit() / size);
            const formattedNumber = numberFormatter.format(number)

            return formattedNumber;
        }
    },
    {
        caption: 'feature films',
        value: () => {
            const budget = 6200000

            const number = Math.floor(costOfBrexit() / budget);
            const formattedNumber = numberFormatter.format(number);

            return formattedNumber;
        }
    },
    {
        caption: 'music lessons for children',
        value: () => {
            const cost = 36
            const number = Math.floor(costOfBrexit() / cost);
            const formattedNumber = numberFormatter.format(number);

            return formattedNumber;
        }
    },
    {
        caption: 'times over, removing dangerous cladding from all homes',
        value: () => {
            const cost = 50000000000
            const number = Math.floor(costOfBrexit() / cost);
            const formattedNumber = numberFormatter.format(number);

            return formattedNumber;
        }
    },
    {
        caption: 'additional two-bedroom homes',
        value: () => {
            const cost = 281437
            const number = Math.floor(costOfBrexit() / cost);
             const formattedNumber = numberFormatter.format(number)

            return formattedNumber;
        }
    },
    {
        caption: 'times the budget of NASA towards our own space agency',
        value: () => {
            const budget = 25400000000
            const number = Math.floor(costOfBrexit() / budget);
            const formattedNumber = numberFormatter.format(number);

            return formattedNumber;
        }
    },
    {
        caption: 'imported barrels of oil',
        value: () => {
            const cost = 73
            const number = Math.floor(costOfBrexit() / cost);
            const formattedNumber = numberFormatter.format(number);

            return formattedNumber;
        }
    },
    {
        caption: 'years of state pension',
        value: () => {
            const statePensionPerWeek = 185.15
            const statePensionPerYear = statePensionPerWeek * 52
            const retiredPopulation = 11000000
            const pensionCostPerYear = retiredPopulation *statePensionPerYear

            const number = Math.floor(costOfBrexit() / pensionCostPerYear);
            const formattedNumber = numberFormatter.format(number)

            return formattedNumber;
        }
    },
    {
        caption: 'new wind turbines',
        value: () => {
            const cost = 7000
            const number = Math.floor(costOfBrexit() / cost);
            const formattedNumber = numberFormatter.format(number);

            return formattedNumber;
        }
    },
    {
        caption: 'new hospitals',
        value: () => {
            const averageHospitalCost = 178000000;
            const number = Math.floor(costOfBrexit() / averageHospitalCost);
            const formattedNumber = numberFormatter.format(number);

            return formattedNumber;
        }
    },
    {
        caption: 'newly planted tress',
        value: () => {
            const cost = 55;
            const number = Math.floor(costOfBrexit() / cost);
            const formattedNumber = numberFormatter.format(number);

            return formattedNumber;
        }
    },
    {
        caption: 'new desalination plants',
        value: () => {
            const cost = 250000000;
            const number = Math.floor(costOfBrexit() / cost);
            const formattedNumber = numberFormatter.format(number);

            return formattedNumber;
        }
    },
    {
        caption: 'new desalination plants',
        value: () => {
            const cost = 250000000;
            const number = Math.floor(costOfBrexit() / cost);
            const formattedNumber = numberFormatter.format(number);

            return formattedNumber;
        }
    },
    {
        caption: 'new desalination plants',
        value: () => {
            const cost = 250000000;
            const number = Math.floor(costOfBrexit() / cost);
            const formattedNumber = numberFormatter.format(number);

            return formattedNumber;
        }
    },
    {
        caption: 'new desalination plants',
        value: () => {
            const cost = 250000000;
            const number = Math.floor(costOfBrexit() / cost);
            const formattedNumber = numberFormatter.format(number);

            return formattedNumber;
        }
    },
    {
        caption: 'new desalination plants',
        value: () => {
            const cost = 250000000;
            const number = Math.floor(costOfBrexit() / cost);
            const formattedNumber = numberFormatter.format(number);

            return formattedNumber;
        }
    },
    {
        caption: 'new desalination plants',
        value: () => {
            const cost = 250000000;
            const number = Math.floor(costOfBrexit() / cost);
            const formattedNumber = numberFormatter.format(number);

            return formattedNumber;
        }
    },
    {
        caption: 'new desalination plants',
        value: () => {
            const cost = 250000000;
            const number = Math.floor(costOfBrexit() / cost);
            const formattedNumber = numberFormatter.format(number);

            return formattedNumber;
        }
    },
    {
        caption: 'additional vaccines invested',
        value: () => {
            const cost = 88000000;
            const number = Math.floor(costOfBrexit() / cost);
            const formattedNumber = numberFormatter.format(number);

            return formattedNumber;
        }
    },
    {
        caption: 'additional teachers',
        value: () => {
            const cost = 28000;
            const number = Math.floor(costOfBrexit() / cost);
            const formattedNumber = numberFormatter.format(number);

            return formattedNumber;
        }
    },
    {
        caption: 'times over the UK\'s fishing fleet.',
        value: () => {
            const cost = 626000000;
            const number = Math.floor(costOfBrexit() / cost);
            const formattedNumber = numberFormatter.format(number);

            return formattedNumber;
        }
    },
    {
        caption: 'additional signallers to maintain our railway\'s signals',
        value: () => {

            const wagesPerYear = 100000000 / 3000;
            const number = Math.floor(costOfBrexit() / wagesPerYear);
            const formattedNumber = numberFormatter.format(number);

            return formattedNumber;
        }
    },
    {
        caption: 'pounds of support to our farmers',
        value: () => {
            const farmers = 92100
            const number = Math.floor(costOfBrexit() / farmers);
            const formattedNumber = numberFormatter.format(number);

            return formattedNumber;
        }
    },
    {
        caption: 'new hybrid diesel-electric double-deck buses for our public transport',
        value: () => {

            const cost = 300000;
            const number = Math.floor(costOfBrexit() / cost);
            const formattedNumber = numberFormatter.format(number);

            return formattedNumber;
        }
    },
    {
        caption: 'additional Border Force officials',
        value: () => {

            const cost = 34163;
            const number = Math.floor(costOfBrexit() / cost);
            const formattedNumber = numberFormatter.format(number);

            return formattedNumber;
        }
    },
    {
        caption: 'additional apprentices',
        value: () => {

            const cost = 26990;
            const number = Math.floor(costOfBrexit() / cost);
            const formattedNumber = numberFormatter.format(number);

            return formattedNumber;
        }
    },
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

// TODO: 
// - Add border force stat
// - Figure out Aprneticeship wages