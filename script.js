// Musik mulai di menit 1:00 (60 detik) dan berhenti di 1:30 (90 detik)
const audio = document.getElementById("lagu");

function playMusic() {
    const audio = document.getElementById("lagu");
    audio.currentTime = 34; // mulai di detik 60
    audio.play();

    audio.addEventListener("timeupdate", () => {
        if (audio.currentTime >= 50) { // stop di detik 90
            audio.pause();
        }
    });
}


// Efek confetti & buka hadiah
function bukaSurprise() {
    for (let i = 0; i < 50; i++) {
        let confetti = document.createElement("div");
        confetti.style.position = "fixed";
        confetti.style.width = "10px";
        confetti.style.height = "10px";
        confetti.style.backgroundColor = ["#ff4d88", "#ff80bf", "#ff99cc", "white"][Math.floor(Math.random() * 4)];
        confetti.style.top = Math.random() * window.innerHeight + "px";
        confetti.style.left = Math.random() * window.innerWidth + "px";
        confetti.style.opacity = 0.8;
        confetti.style.animation = "fall 3s linear";
        document.body.appendChild(confetti);
        setTimeout(() => confetti.remove(), 3000);
    }
    setTimeout(() => {
        window.location.href = "hadiah.html";
    }, 1500);
}

// Tombol "Tidak Buka" kabur
function kabur() {
    let btn = document.getElementById("noButton");
    btn.style.position = "absolute";
    btn.style.top = Math.random() * (window.innerHeight - 50) + "px";
    btn.style.left = Math.random() * (window.innerWidth - 100) + "px";
}
