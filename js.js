let loginForm = document.querySelector(".login-form-home");
let close = document.querySelector(".close");
let layer = document.querySelector(".layer");
document.addEventListener("DOMContentLoaded" , function(){
    countDown();
    // showForm();
});
const countDown = () =>{
    const targetDate = new Date('2024-05-15T00:00:00').getTime();

    // Update the countdown every second
    const interval = setInterval(function () {
        // Get the current date and time
        const currentDate = new Date().getTime();
    
        // Calculate the remaining time in milliseconds
        const remainingTime = targetDate - currentDate;
    
        // Calculate days, hours, minutes, and seconds
        const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
        const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
    
        // Display the countdown
        document.getElementById('days').innerText = days + ' ngày';
        document.getElementById('hours').innerText = hours;
        document.getElementById('minutes').innerText = minutes;
        document.getElementById('seconds').innerText = seconds;
    
        // Check if the countdown has reached zero
        if (remainingTime < 0) {
            clearInterval(interval);
            document.getElementById('countdown').innerText = 'Đã hết thời gian!';
        }
    }, 1000);
}
const showForm = () => {
    loginForm.classList.add("animation-form");
    layer.classList.add("animation-form");
    document.body.classList.add("no-scroll");
    close.addEventListener("click", function () {
        loginForm.classList.remove("animation-form");
        layer.classList.remove("animation-form");
        document.body.classList.remove("no-scroll");
    });
    layer.addEventListener("click", function () {
        loginForm.classList.remove("animation-form");
        layer.classList.remove("animation-form");
        document.body.classList.remove("no-scroll");
    });
}
