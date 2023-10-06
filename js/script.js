import { CountUp } from "./countUp.min.js";

const options = {
  duration: 6.7,
};

let statistics__instagram = new CountUp("statistics__instagram", 150, {
  duration: 10.0,
});
let statistics__telegram = new CountUp("statistics__telegram", 105, {});

let statistics__vk = new CountUp("statistics__vk", 12, {
  duration: 10.0,
});
let statistics__youtube = new CountUp("statistics__youtube", 5, {
  duration: 10.0,
});
let statistics__result = new CountUp("statistics__result", 280, {
  duration: 10.0,
});

if (!statistics__instagram.error) {
  statistics__instagram.start();
  statistics__telegram.start();
  statistics__vk.start();
  statistics__youtube.start();
  statistics__result.start();
} else {
  console.error(statistics__instagram.error);
}

// AOS.init();
