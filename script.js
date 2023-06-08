const formatDate = (date) => {
    const year = String(date.getFullYear());
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    const milliseconds = String(date.getMilliseconds()).padStart(3, "0");
  
    return `${year}:${month}:${day} ${hours}:${minutes}:${seconds}:${milliseconds}`;
  };
  
  const showCurrentTime = () => {
    const currentDate = new Date();
    const formattedTime = formatDate(currentDate);
  
    document.getElementById("currentTime").innerHTML = formattedTime;
  };
  
  const showClickTime = () => {
    const currentDate = new Date();
    const formattedTime = formatDate(currentDate);
  
    const resultElement = document.getElementById("result");
    if (resultElement) {
      const timeEntry = document.createElement("div");
      timeEntry.innerHTML = `클릭!: ${formattedTime}`;
      resultElement.insertBefore(timeEntry, resultElement.firstChild);
  
      // 최대 20개의 요소만 유지하도록 제한
      if (resultElement.childElementCount > 20) {
        resultElement.removeChild(resultElement.lastChild);
      }
  
      // 마지막으로 추가된 요소를 빨간색으로 표시
      const latestEntry = resultElement.getElementsByClassName("latest-entry");
      if (latestEntry.length > 0) {
        latestEntry[0].classList.remove("latest-entry");
      }
      timeEntry.classList.add("latest-entry");
  
      // 스크롤 없이 모든 요소가 보이도록 스타일 수정
      resultElement.style.overflow = "hidden";
      resultElement.style.height = "100vh";
    }
  };
  
  // 0.001초마다 현재 시간 업데이트
  setInterval(showCurrentTime, 1);
  