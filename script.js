/* =====================================
   SCREEN NAVIGATION
===================================== */

function nextScreen(current, next) {

    const currentScreen =
        document.getElementById(current);

    const nextScreen =
        document.getElementById(next);

    if (!currentScreen || !nextScreen) return;

    currentScreen.classList.remove("active");

    nextScreen.classList.add("active");

}

/* =====================================
   SHOW ANSWER BOX
===================================== */

function showAnswer(id) {

    const answers =
        document.querySelectorAll(".answer-box");

    answers.forEach(box => {

        box.style.display = "none";

    });

    const selected =
        document.getElementById(id);

    if (selected) {

        selected.style.display = "block";

    }

}

/* =====================================
   DOM ELEMENTS
===================================== */

const moodSlider =
    document.getElementById("moodSlider");

const moodText =
    document.getElementById("moodText");

const moodBear =
    document.getElementById("moodBear");

const hugButton =
    document.getElementById("hugButton");

const hugBear =
    document.getElementById("hugBear");

const hugMessage =
    document.getElementById("hugMessage");

const forgiveButton =
    document.getElementById("forgiveButton");

const celebrationScreen =
    document.getElementById("celebrationSection");

const heartsContainer =
    document.querySelector(".hearts-container");

const snowContainer =
    document.querySelector(".snow-container");

/* =====================================
   MOOD METER
===================================== */

const moods = [

    {
        emoji:"🌋",
        text:"🔥 Volcano Mode"
    },

    {
        emoji:"😠",
        text:"😠 Angry Mode"
    },

    {
        emoji:"😒",
        text:"😒 Ignoring Mode"
    },

    {
        emoji:"🙂",
        text:"🙂 Thinking Mode"
    },

    {
        emoji:"😊",
        text:"😊 Softening Mode"
    },

    {
        emoji:"❤️",
        text:"❤️ Forgiven Mode"
    }

];

if (moodSlider) {

    moodSlider.addEventListener("input", () => {

        const value =
            Number(moodSlider.value);

        moodText.textContent =
            moods[value].text;

        moodBear.textContent =
            moods[value].emoji;

        moodBear.animate(
        [
            {
                transform:"scale(.8)"
            },
            {
                transform:"scale(1.2)"
            },
            {
                transform:"scale(1)"
            }
        ],
        {
            duration:400
        });

    });

}

/* =====================================
   SNOWFALL
===================================== */

function createSnowflake() {

    if (!snowContainer) return;

    const snow =
        document.createElement("div");

    snow.classList.add("snowflake");

    snow.innerHTML = "❄";

    snow.style.left =
        Math.random() * window.innerWidth + "px";

    snow.style.fontSize =
        Math.random() * 20 + 10 + "px";

    snow.style.opacity =
        Math.random();

    snow.style.animationDuration =
        Math.random() * 5 + 5 + "s";

    snowContainer.appendChild(snow);

    setTimeout(() => {

        snow.remove();

    }, 12000);

}

setInterval(createSnowflake, 180);

/* =====================================
   FLOATING HEARTS
===================================== */

function createHeart() {

    if (!heartsContainer) return;

    const heart =
        document.createElement("div");

    heart.classList.add("heart");

    const hearts = [
        "❤️",
        "💕",
        "💖",
        "💗",
        "💘"
    ];

    heart.innerHTML =
        hearts[
            Math.floor(
                Math.random() * hearts.length
            )
        ];

    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.bottom =
        "-50px";

    heart.style.fontSize =
        Math.random() * 20 + 20 + "px";

    heartsContainer.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 8000);

}

setInterval(createHeart, 1800);

/* =====================================
   HEART BURST
===================================== */

function heartBurst(x, y) {

    for (let i = 0; i < 15; i++) {

        const heart =
            document.createElement("div");

        heart.innerHTML = "❤️";

        heart.style.position = "fixed";

        heart.style.left = x + "px";

        heart.style.top = y + "px";

        heart.style.fontSize = "24px";

        heart.style.pointerEvents = "none";

        heart.style.zIndex = "99999";

        document.body.appendChild(heart);

        const angle =
            Math.random() * Math.PI * 2;

        const distance =
            Math.random() * 150 + 50;

        heart.animate(
        [
            {
                transform:"translate(0,0)",
                opacity:1
            },
            {
                transform:
                `translate(
                    ${Math.cos(angle)*distance}px,
                    ${Math.sin(angle)*distance}px
                )`,
                opacity:0
            }
        ],
        {
            duration:1200,
            easing:"ease-out"
        });

        setTimeout(() => {

            heart.remove();

        }, 1200);

    }

}

/* =====================================
   HUG BUTTON
===================================== */

if (hugButton && hugBear) {

    hugButton.addEventListener("click", () => {

        hugBear.animate(
        [
            {
                transform:"scale(1)"
            },
            {
                transform:"scale(1.3)"
            },
            {
                transform:"scale(1)"
            }
        ],
        {
            duration:800
        });

        if (hugMessage) {

            hugMessage.innerHTML =
                "Warmest hug successfully delivered ❤️";

        }

        heartBurst(
            window.innerWidth / 2,
            window.innerHeight / 2
        );

    });

}

/* =====================================
   CONFETTI
===================================== */

function launchConfetti() {

    const colors = [

        "#ff85b3",
        "#ffffff",
        "#9ed8ff",
        "#ffe066",
        "#b388ff"

    ];

    for (let i = 0; i < 180; i++) {

        const confetti =
            document.createElement("div");

        confetti.style.position =
            "fixed";

        confetti.style.width =
            "10px";

        confetti.style.height =
            "10px";

        confetti.style.left =
            Math.random() * 100 + "vw";

        confetti.style.top =
            "-20px";

        confetti.style.borderRadius =
            "50%";

        confetti.style.background =
            colors[
                Math.floor(
                    Math.random() * colors.length
                )
            ];

        confetti.style.zIndex =
            "999999";

        document.body.appendChild(confetti);

        confetti.animate(
        [
            {
                transform:
                "translateY(0px) rotate(0deg)"
            },

            {
                transform:
                `translateY(${window.innerHeight + 150}px)
                 rotate(720deg)`
            }
        ],
        {
            duration:
                Math.random() * 3000 + 2500
        });

        setTimeout(() => {

            confetti.remove();

        }, 6000);

    }

}

/* =====================================
   FINAL BUTTON
===================================== */

if (forgiveButton) {

    forgiveButton.addEventListener("click", () => {

        launchConfetti();

        heartBurst(
            window.innerWidth / 2,
            window.innerHeight / 2
        );

        if (celebrationScreen) {

            document
                .querySelectorAll(".screen")
                .forEach(screen => {

                    screen.classList.remove("active");

                });

            celebrationScreen
                .classList.add("active");

        }

    });

}

/* =====================================
   CLICK HEARTS
===================================== */

document.addEventListener("click", (e) => {

    heartBurst(
        e.clientX,
        e.clientY
    );

});

/* =====================================
   RANDOM POLAR BEAR MESSAGES
===================================== */

const bearMessages = [

    "🐻‍❄️ Modak Ji please smile.",
    "🐻‍❄️ Fish khatam ho gayi.",
    "🐻‍❄️ Someone misses you.",
    "🐻‍❄️ Official report: Modak Ji are special.",
    "🐻‍❄️ Website built with courage."
];

setInterval(() => {

    const randomMessage =

        bearMessages[
            Math.floor(
                Math.random() *
                bearMessages.length
            )
        ];

    console.log(randomMessage);

}, 10000);

/* =====================================
   PAGE LOADED
===================================== */

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});