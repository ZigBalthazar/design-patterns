import { IPublisher } from "../../interfaces/publisher.interface";
import { IWeather } from "../../interfaces/weather.interface";

export class Weather implements IWeather {
  constructor(private pub: IPublisher) {}
  newTemperature(t: number): void {
    this.pub.state = t
  }
}
