// تابع برای هدایت به صفحه نصب ویولنت مانکی
function goToVioletMonkey() {
    window.location.href = "https://violentmonkey.github.io/get-it/";
}

// تابع برای هدایت به صفحه اسکریپت
function goToScriptPage() {
    window.location.href = "https://github.com/Arash0217/Heh/raw/main/not-autoclicker.user.js";
}

// تابع برای هدایت به تلگرام
function goToTelegram() {
    window.location.href = "https://web.telegram.org/";
}

// شروع فرآیند
function startProcess() {
    const scriptInstalled = localStorage.getItem('scriptInstalled');
    if (!scriptInstalled) {
        goToVioletMonkey();
        setTimeout(goToScriptPage, 5000);
        setTimeout(() => {
            localStorage.setItem('scriptInstalled', 'true');
            goToTelegram();
        }, 10000);
    } else {
        goToTelegram();
    }
}

// نمایش overlay
function showOverlay() {
    document.getElementById('overlay').style.display = 'flex';
}

// پنهان کردن overlay و شروع فرآیند
function install() {
    document.getElementById('overlay').style.display = 'none';
    startProcess();
}

window.onload = showOverlay;
