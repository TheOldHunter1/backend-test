const words = require('words-en').split('\n');

const text = "afoolishconsistencyisthehobgoblinoflittlemindsadoredbylittlestatesmenandphilosophersanddivineswithconsistencyagreatsoulhassimplynothingtodohemayaswellconcernhimselfwithhisshadowonthewallspeakwhatyouthinknowinhardwordsandtomorrowspeakwhattomorrowthinksinhardwordsagainthoughitcontradicteverythingyousaidtodayahsoyoushallbesuretobemisunderstoodisitsobadthentobemisunderstoodpythagoraswasmisunderstoodandsocratesandjesusandlutherandcopernicusandgalileoandnewtonandeverypureandwisespiritthatevertookfleshtobegreatistobemisunderstoodtattarrattat"

let palindromo = (word) => {
    let tmpArr = word.toLowerCase().replace(/ /g, '').split("");
    let tmpArrReverse = [];
    for (let index = tmpArr.length; index >= 0; index--) {
        tmpArrReverse.push(tmpArr[index]);
    }
    tmpArrReverse.shift();
    for (let index = 0; index < tmpArr.length; index++) {
        if (tmpArr[index] !== tmpArrReverse[index]) {
            return false;
        }
    }
    return true;
}

let arrayWords = [],
    result = [];

words.forEach((element) => {
    let found = text.search(element);
    if (found > 0) {
        arrayWords.push(element)
    }
});

for (const element of arrayWords) {
    let verify = palindromo(element);
    if (verify == true) {
        result.push(element);
    }
}

console.log(result);