import { Publisher } from "./src/publisher/publisher.main";
import { Subscriber } from "./src/subscribers/subscriber.main";
import { Weather } from "./src/weather/weather.main";

function main() {
  const publisher = new Publisher();
  const weather = new Weather(publisher);

  const subscriber_1 = new Subscriber(1, publisher);
  const subscriber_2 = new Subscriber(2, publisher);
  const subscriber_3 = new Subscriber(3, publisher);

  //subscribe
  publisher.subscribe(subscriber_1);
  publisher.subscribe(subscriber_2);
  publisher.subscribe(subscriber_3);

  setInterval(() => {
    const newTemp = getRandomInt();
    weather.newTemperature(newTemp);
    console.log(`\n`);
  }, 3000);
}

try {
  main();
} catch (error) {
  console.log(error);
}

export function getRandomInt(min: number = 0, max: number = 50): number {
  return Math.floor(Math.random() * (max - min) + min);
}
