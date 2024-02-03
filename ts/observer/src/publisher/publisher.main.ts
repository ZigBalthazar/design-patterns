import { IPublisher } from "../../interfaces/publisher.interface";
import { ISubscriber } from "../../interfaces/subscriber.interface";

export class Publisher implements IPublisher {
  private Subscribers: ISubscriber[] = [];
  private _state: number = 0

  subscribe(subscriber: ISubscriber): void {
    this.Subscribers.push(subscriber);
  }

  notify(): void {
    this.Subscribers.forEach((s) => {
      s.update();
    });
  }

  get state(): number {
    return this._state;
  }

  set state(data: number) {
    this._state = data;
    this.notify()
  }
}
