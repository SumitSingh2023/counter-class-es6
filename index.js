let count = 0;
    let automaticCounter;

    function incrementCounter() {
      count++;
      document.getElementById('counter').innerText = count;
    }

    function decrementCounter() {
      count--;
      document.getElementById('counter').innerText = count;
    }

    function startStopAutomaticCounter() {
      const startStopBtn = document.getElementById('startStop');
      if (startStopBtn.innerText === 'Start') {
        automaticCounter = setInterval(incrementCounter, 1000);
        startStopBtn.innerText = 'Stop';
      } else {
        clearInterval(automaticCounter);
        startStopBtn.innerText = 'Start';
      }
    }

    function resetCounter() {
      clearInterval(automaticCounter);
      count = 0;
      document.getElementById('counter').innerText = count;
      document.getElementById('startStop').innerText = 'Start';
    }

    document.getElementById('startStop').addEventListener('click', startStopAutomaticCounter);
    document.getElementById('reset').addEventListener('click', resetCounter);
    document.getElementById('increment').addEventListener('click', () => {
      clearInterval(automaticCounter);
      incrementCounter();
    });
    document.getElementById('decrement').addEventListener('click', () => {
      clearInterval(automaticCounter);
      decrementCounter();
    });