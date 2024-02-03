import { ISubscriber } from "./subscriber.interface";

export interface IPublisher{
    subscribe(subscriber:ISubscriber):void
    notify():void
    set state(data:number)
    get state():number
}