// Make web component of this

/*<section>
<div class="da-box-wrapper">
  <div id="app"></div>
    <div class="da-box">
      <img style="border-radius: 50%;" class="img-full-width" src="images/player2-avatar.png">
      <div>Namn: Peter pan<br>Mark: 1000</div>
    </div>
</div>
<style>
  #app {
    position: absolute;
    background-color: transparent;
    z-index: 3;
  }
  .da-box-wrapper {
    position: relative;
    z-index: 1;
    box-sizing: border-box;
    width: 300px;
    background-color: var(--grey-400);
  }
  .da-box {
    z-index: 2;
  }

  .base-timer {
    position: relative;
    width: 300px;
    height: 300px;
    
    
  }

  .base-timer__svg {
    transform: scaleX(-1);
  }

  .base-timer__circle {
    fill: none;
    stroke: none;
  }

  .base-timer__path-elapsed {
    stroke-width: 7px;
    stroke: transparent;
  }

  .base-timer__path-remaining {
    stroke-width: 7px;
    stroke-linecap: square;
    transform: rotate(90deg);
    transform-origin: center;
    transition: 1s linear all;
    fill-rule: nonzero;
    stroke: currentColor;
  }

  .base-timer__path-remaining.green {
    color: hsla(101, 64%, 37%, 0.7);
  }

  .base-timer__path-remaining.orange {
    color: hsla(23, 64%, 37%, 0.7);
  }

  .base-timer__path-remaining.red {
    color: hsla(1, 64%, 37%, 0.7);
  }

 
</style>
<script>
   // Credit: Mateusz Rybczonec

  const FULL_DASH_ARRAY = 283;
  const WARNING_THRESHOLD = 10;
  const ALERT_THRESHOLD = 5;

  const COLOR_CODES = {
    info: {
      color: "green"
    },
    warning: {
      color: "orange",
      threshold: WARNING_THRESHOLD
    },
    alert: {
      color: "red",
      threshold: ALERT_THRESHOLD
    }
  };

  const TIME_LIMIT = 10;
  let timePassed = 0;
  let timeLeft = TIME_LIMIT;
  let timerInterval = null;
  let remainingPathColor = COLOR_CODES.info.color;

  document.getElementById("app").innerHTML = `
  <div class="base-timer">
    <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <g class="base-timer__circle">
        <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
        <path
          id="base-timer-path-remaining"
          stroke-dasharray="283"
          class="base-timer__path-remaining ${remainingPathColor}"
          d="
            M 50, 50
            m -45, 0
            a 45,45 0 1,0 90,0
            a 45,45 0 1,0 -90,0
          "
        ></path>
      </g>
    </svg>
 
  </div>
  `;

  startTimer();

  function onTimesUp() {
    clearInterval(timerInterval);
  }

  function startTimer() {
    timerInterval = setInterval(() => {
      timePassed = timePassed += 1;
      timeLeft = TIME_LIMIT - timePassed;
      setCircleDasharray();
      setRemainingPathColor(timeLeft);
      if (timeLeft === 0) {
        onTimesUp();
      }
    }, 1000);
  }

  

  function setRemainingPathColor(timeLeft) {
    const { alert, warning, info } = COLOR_CODES;
    if (timeLeft <= alert.threshold) {
      document
        .getElementById("base-timer-path-remaining")
        .classList.remove(warning.color);
      document
        .getElementById("base-timer-path-remaining")
        .classList.add(alert.color);
    } else if (timeLeft <= warning.threshold) {
      document
        .getElementById("base-timer-path-remaining")
        .classList.remove(info.color);
      document
        .getElementById("base-timer-path-remaining")
        .classList.add(warning.color);
    }
  }

  function calculateTimeFraction() {
    const rawTimeFraction = timeLeft / TIME_LIMIT;
    return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
  }

  function setCircleDasharray() {
    const circleDasharray = `${(
      calculateTimeFraction() * FULL_DASH_ARRAY
    ).toFixed(0)} 283`;
    document
      .getElementById("base-timer-path-remaining")
      .setAttribute("stroke-dasharray", circleDasharray);
  }
</script>
</section>*/