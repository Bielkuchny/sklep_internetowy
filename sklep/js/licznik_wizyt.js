function updateVisitCount() {

    let visitCount = localStorage.getItem('visitCount');
    if (visitCount) {
      visitCount = parseInt(visitCount, 10);
    } else {
      visitCount = 0;
    }
  
  
    if (!sessionStorage.getItem('session')) {
      visitCount++;
      sessionStorage.setItem('session', 'initiated');
    }
  
  
    localStorage.setItem('visitCount', visitCount);
    document.getElementById('l_wizyty').textContent = `Liczba odwiedzin: ${visitCount}`;
  }
  
  updateVisitCount();
  
  function updateTimeSpentOnPage() {
    let sessionStartTime = sessionStorage.getItem('sessionStartTime');
    if (!sessionStartTime) {
      sessionStartTime = new Date().getTime();
      sessionStorage.setItem('sessionStartTime', sessionStartTime);
    } else {
      sessionStartTime = parseInt(sessionStartTime, 10);
    }
  
    setInterval(() => {
  
      const currentTime = new Date().getTime();
  
      const timeSpent = Math.floor((currentTime - sessionStartTime) / 1000);
  
      sessionStorage.setItem('timeSpentOnPage', timeSpent);
  
      document.getElementById('czas_ktory_uplynal').textContent = `${timeSpent} sekund`;
    }, 1000);
  }
  
  updateTimeSpentOnPage();