/* 1 */

/* 2 */

//code that computes descriptive statistics.


class sampleData {

    constructor(data) {
        this.data = data
    }

    //method to calculate the mean of a given data set
    getMean() {
        let meanValue = this.data.reduce((acc, value) => acc + value, 0) / this.data.length
        return meanValue
    }

    // method to calculate the median of a given data set
    getMedian() {
        const realData = this.data.slice().sort((a, b) => a - b)
        const middleIndex = Math.floor(realData.length / 2)
        let medianValue = realData.length % 2 === 0 ? (realData[middleIndex - 1] + realData[middleIndex]) / 2
        : realData[middleIndex]
        return medianValue
    }

    //method to calculate the mode of a given data set
    getMode() {

        let numberMap = {}
        let maxOccurence = 0
        let modes = []

        for (let i = 0; i < this.data.length; i++) {
            const value = this.data[i]
            numberMap[value] = (numberMap[value] || 0) + 1;

            if (numberMap[value] > maxOccurence) {
                maxOccurence = numberMap[value]
            }
        }

        for (let key in maxOccurence) {
            if (numberMap[key] === maxOccurence) {
                modes.push(Number(key))
            }
        }

        let modeValue = modes.length === 1 ? modes[0] : modes
        return modeValue
    }




    calculateRange() {
        const sortedData = this.data.slice().sort((a, b) => a - b);
        return sortedData[sortedData.length - 1] - sortedData[0];
    }

    calculateInterquartileRange() {
        const sortedData = this.data.slice().sort((a, b) => a - b);
        const lowerQ = this.calculatePercentile(sortedData, 0.25);
        const upperQ = this.calculatePercentile(sortedData, 0.75);
        return upperQ - lowerQ;
    }

    calculateMeanAbsoluteDeviation() {
        const mean = this.calculateMean();
        const absoluteDeviations = this.data.map(value => Math.abs(value - mean));
        return absoluteDeviations.reduce((acc, value) => acc + value, 0) / this.data.length;
    }

    calculateVariance() {
        const mean = this.calculateMean();
        const squaredDifferences = this.data.map(value => Math.pow(value - mean, 2));
        return squaredDifferences.reduce((acc, value) => acc + value, 0) / this.data.length;
    }

    calculateStandardDeviation() {
        let standardDeviationValue = Math.sqrt(this.calculateVariance())
        return standardDeviationValue
    }



}


let dataSet = [1, 2, 3, 4, 4, 5, 6, 6, 6]

// declaring a new object
const newData = new sampleData(dataSet)


// Calculating the measures of central  tendency in a given data set
console.log(newData.getMean);
console.log(newData.getMode());
console.log(newData.getMedian());



