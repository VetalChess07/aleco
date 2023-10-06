import { CountUp } from "./countUp.min.js";
console.log(CountUp);

const options = {
  duration: 6.7,
};

let statistics__instagram = new CountUp("statistics__instagram", 150, {
  enableScrollSpy: true,
});
let statistics__telegram = new CountUp("statistics__telegram", 105, {
  enableScrollSpy: true,
});

let statistics__vk = new CountUp("statistics__vk", 12, {
  enableScrollSpy: true,
});
let statistics__youtube = new CountUp("statistics__youtube", 5, {
  enableScrollSpy: true,
});
let statistics__result = new CountUp("statistics__result", 280, {
  enableScrollSpy: true,
});

statistics__instagram.handleScroll();
statistics__vk.handleScroll();
statistics__youtube.handleScroll();
statistics__telegram.handleScroll();
statistics__result.handleScroll();

if (!statistics__instagram.error) {
  statistics__instagram.start();
  statistics__telegram.start();
  statistics__vk.start();
  statistics__youtube.start();
  statistics__result.start();
} else {
  console.error(statistics__instagram.error);
}

AOS.init();
