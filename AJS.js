function finishOfficeWork() {

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("wrapped up office tasks. pretended to look busy for the last 30 minutes.");
    }, 1200);

  });
}

function fakeMeetings() {

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("joined 3 meetings, spoke in none, nodded in all. that's leadership.");
    }, 2000);
  })
}

function checkMarket() {

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("checked Bitcoin charts. it moved 0.5% and my heart moved 50%. ");
    }, 1500);
  })
}

function readFundamentals() {

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("reading whitepapers like bedtime stories. fundamentals > FOMO.");
    }, 1800);
  })
}

function executeTrade() {

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("placed a trade. it's either a genius move or an emotional support position.");
    }, 1200);
  })
}

function logOutAndReflect() {

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("logged off the charts. realized i basically worked two full time jobs");
    }, 800);
  })
}

finishOfficeWork()
  .then(value => { console.log(value); return fakeMeetings(); })
  .then(value => { console.log(value); return checkMarket(); })
  .then(value => { console.log(value); return readFundamentals(); })
  .then(value => { console.log(value); return executeTrade(); })
  .then(value => { console.log(value); return logOutAndReflect(); })
  .then(value => { console.log(value); console.log("done with all this sht"); });