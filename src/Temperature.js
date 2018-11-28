import { observable, computed } from 'mobx';

class Temperature {
    // Find the smallest amount of state you need, and derive all the other things
    @observable unit = "C";
    @observable temperatureCelsius = 25;

    // Should be pure functions in terms of other observables or other computed values
    @computed get temperatureKelvin() {
        return this.temperatureCelsius + 273.15;
    }

    @computed get temperatureFahrenheit() {
        return this.temperatureCelsius * (9/5) + 32;
    }

    @computed get temperature() {
        switch (this.unit) {
            case "K": return this.temperatureKelvin + "°K";
            case "F": return this.temperatureFahrenheit + "°F";
            case "C": return this.temperatureCelsius + "°C";
            default: return this.temperatureCelsius + "°C";
        }
    }
}

export default Temperature;
