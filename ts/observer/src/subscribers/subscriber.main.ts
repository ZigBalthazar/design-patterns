import { IPublisher } from "../../interfaces/publisher.interface";
import { ISubscriber } from "../../interfaces/subscriber.interface";

export class Subscriber implements ISubscriber {
  constructor(private readonly id:number,private pub: IPublisher) {}

  getUpdatedState(): void {
    const newTemp = this.pub.state
    console.log(`subscriber ID : ${this.id}\nnew temperature received:${newTemp}C`);
  }

  update(): void {
    this.getUpdatedState();
  }
}
