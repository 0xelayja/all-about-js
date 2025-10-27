function finishOfficeWork(callback) {
  setTimeout(() => {
    console.log("wrapped up office tasks. pretended to look busy for the last 30 minutes.");
    callback();
  }, 1200);
}

function fakeMeetings(callback) {
  setTimeout(() => {
    console.log("joined 3 meetings, spoke in none, nodded in all. that's leadership.");
    callback();
  }, 2000);
}

function checkMarket(callback) {
  setTimeout(() => {
    console.log("checked Bitcoin charts. it moved 0.5% and my heart moved 50%. ");
    callback();
  }, 1500);
}

function readFundamentals(callback) {
  setTimeout(() => {
    console.log("reading whitepapers like bedtime stories. fundamentals > FOMO.");
    callback();
  }, 1800);
}

function executeTrade(callback) {
  setTimeout(() => {
    console.log("placed a trade. it's either a genius move or an emotional support position.");
    callback();
  }, 1200);
}

function logOutAndReflect(callback) {
  setTimeout(() => {
    console.log("logged off the charts. realized i basically worked two full time jobs");
    callback();
  }, 800);
}

finishOfficeWork(() => {
  fakeMeetings(() => {
    checkMarket(() => {
      readFundamentals(() => {
        executeTrade(() => {
          logOutAndReflect(() => {
            console.log("another day done. office work at night pretending to be busy all the time. crypto warrior the entire life trying to catch up tech");
          });
        });
      });
    });
  });
});
