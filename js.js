let loginForm = document.querySelector(".login-form-home");
let close = document.querySelector(".close");
let layer = document.querySelector(".layer");
let scrollElement = document.querySelector(".scrol-top");
document.addEventListener("DOMContentLoaded", function () {
    countDown();
    showForm();
    document.addEventListener("scroll" , function(){
        if(scrollY > 50){
            scrollElement.classList.add("animation-srooltop");
        }else{
            scrollElement.classList.remove("animation-srooltop");
        }
    })    
});
const countDown = () => {
    const targetDate = new Date('2024-05-15T00:00:00').getTime();
    const interval = setInterval(function () {
        const currentDate = new Date().getTime();
        const remainingTime = targetDate - currentDate;
        const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
        const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
        document.getElementById('days').innerText = days + ' ngày';
        document.getElementById('hours').innerText = hours;
        document.getElementById('minutes').innerText = minutes;
        document.getElementById('seconds').innerText = seconds;
        if (remainingTime < 0) {
            clearInterval(interval);
            document.getElementById('countdown').innerText = 'Đã hết thời gian!';
        }
    }, 1000);
}
const showForm = () => {
    loginForm.classList.add("animation-form");
    layer.classList.add("animation-form");
    close.addEventListener("click", function () {
        loginForm.classList.remove("animation-form");
        layer.classList.remove("animation-form");
    });
    layer.addEventListener("click", function () {
        loginForm.classList.remove("animation-form");
        layer.classList.remove("animation-form");
    });
}

function countdownRedirect() {
    var seconds = 10;
    var countdownElement = document.getElementById('countdown-timer');
    function updateCountdown() {
      seconds--;
      countdownElement.textContent = seconds;
      if (seconds <= 0) {
        clearInterval(timer);
        window.location.href = '/'; 
      }
    }
    var timer = setInterval(updateCountdown, 1000);
  }

  window.onload = function() {
    countdownRedirect();
};