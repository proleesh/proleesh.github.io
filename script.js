const getYear = new Date().getFullYear();
// Automatically update copyright year
const year = document.getElementById("year").textContent = getYear

showContact = () => {
    alert("🧑🏻‍💻CONTACT:\n📲Tel:+82 10-9482-6726\n📧Email 1:merci726@yahoo.com\n📧Email 2:sunghyuklee@proton.me");
}

// 이미지처리 실패인 경우 API적용
document.querySelector(".profile-photo").onerror = function () {
    this.src = "https://placehold.co/300x400";
};

// Year calculation
const current = year - 2019;
document.getElementById('current').textContent = current;

document.addEventListener('keydown', (e) => {
    // for Windows -> ctrlKey, for macOS -> metaKey
    if ((e.ctrlKey || e.metaKey) && e.key === 's') {
        e.preventDefault();
    }
    if (e.key === 'F12') {
        e.preventDefault();
    }
})
document.addEventListener('copy', e => e.preventDefault())
document.addEventListener('cut', e => e.preventDefault())

document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
})

document.addEventListener('DOMContentLoaded', () => {
    document.body.addEventListener('touchstart', (e) => {
        if (e.touches.length > 1) {
            e.preventDefault();
        }
    }, { passive: false });
    document.body.addEventListener("contextmenu", (e) => {
        e.preventDefault()
    });
    document.body.addEventListener("selectstart", (e) => {
        e.preventDefault()
    })
})
document.addEventListener("selectionchange", () => {
    window.getSelection().removeAllRanges();
})