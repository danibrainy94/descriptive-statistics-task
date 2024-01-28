                    /* 1 */

// A class that has class/static properties and methods, and  how to use/access them.
class Car {
    // Class (static) property
    static totalCars = 0;

    // Instance properties
    constructor(make, model) {
        this.make = make;
        this.model = model;
        // Incrementing the totalCars count for each instance created
        Car.totalCars++;
    }

    // Instance method
    displayCarInfo() {
        return `${this.make} ${this.model}`
    }

    // Class (static) method
    static displayTotalCars() {
        return `Total Cars: ${Car.totalCars}`
    }
}

// Creating instances of the Car class
const car1 = new Car("Toyota", "Camry")
const car2 = new Car("Honda", "Accord")


// Accessing instance properties and method
console.log("Car 1:", car1.displayCarInfo())

// Accessing class (static) property and method
console.log(Car.displayTotalCars())

// Creating another instance of the Car class
let car3 = new Car("Ford", "Mustang")

// Accessing class (static) property and method after creating another instance
console.log(Car.displayTotalCars())





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




    getRange() {
        const sortedData = this.data.slice().sort((a, b) => a - b);
        let rangeValue = sortedData[sortedData.length - 1] - sortedData[0];
        return rangeValue
    }

    getInterquartileRange() {
        const sortedData = this.data.slice().sort((a, b) => a - b)
        const lowerQ = this.calculatePercentile(sortedData, 0.25)
        const upperQ = this.calculatePercentile(sortedData, 0.75)
        let InterquartileRangeValue = upperQ - lowerQ
        return InterquartileRangeValue
    }

    getMeanAbsoluteDeviation() {
        const mean = this.calculateMean();
        const absoluteDeviations = this.data.map(value => Math.abs(value - mean));
        let meanAbsoluteDeviationValue = absoluteDeviations.reduce((acc, value) => acc + value, 0) / this.data.length
        return meanAbsoluteDeviationValue
    }

    getVariance() {
        const mean = this.calculateMean();
        const squaredDifferences = this.data.map(value => Math.pow(value - mean, 2))
        let varianceValue = squaredDifferences.reduce((acc, value) => acc + value, 0) / this.data.length
        return varianceValue
    }

    getstandardDeviation() {
        let standardDeviationValue = Math.sqrt(this.calculateVariance())
        return standardDeviationValue
    }



}


let dataSet = [1, 2, 3, 4, 4, 5, 6, 6, 6]

// declaring a new object
const newData = new sampleData(dataSet)


// Calculating the measures of central  tendency in a given data set
console.log(newData.getMean())
console.log(newData.getMode())
console.log(newData.getMedian())


// Calculating the measures of central  tendency in a given data set
console.log(getRange())
console.log(getInterquartileRange)
console.log(getMeanAbsoluteDeviation())
console.log(getstandardDeviation())
console.log(getVariance())

                    /* 3 */

