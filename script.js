console.log("🔥 ARIANDA TEST SCRIPT LOADED");

const audio = document.getElementById("narration");
const beginButton = document.getElementById("beginButton");

const skyScene = document.getElementById("skyScene");
const angelScene = document.getElementById("angelScene");
const openingText = document.getElementById("openingText");
const angelContainer = document.getElementById("angelContainer");
const angelStoryText = document.getElementById("angelStoryText");


/* ==========================================
   CREATE STARS
========================================== */

const stars = document.getElementById("stars");

for (let i = 0; i < 150; i++) {

    const star = document.createElement("div");

    star.className = "star";

    star.style.left =
        Math.random() * 100 + "%";

    star.style.top =
        Math.random() * 75 + "%";

    star.style.setProperty(
        "--duration",
        (2 + Math.random() * 4) + "s"
    );

    star.style.animationDelay =
        Math.random() * 4 + "s";

    stars.appendChild(star);
}


/* ==========================================
   CHECK AUDIO
========================================== */

audio.addEventListener("loadedmetadata", () => {

    console.log(
        "🎵 AUDIO LENGTH:",
        audio.duration,
        "seconds"
    );

});


audio.addEventListener("play", () => {

    console.log("▶ AUDIO PLAYING");

});


audio.addEventListener("pause", () => {

    console.log(
        "⏸ AUDIO PAUSED AT:",
        audio.currentTime
    );

});


audio.addEventListener("ended", () => {

    console.log("🎬 AUDIO FINISHED");

});


/* ==========================================
   BEGIN
========================================== */

beginButton.addEventListener("click", async () => {

    console.log("🔥 BUTTON CLICKED");

    try {

        audio.currentTime = 0;

        await audio.play();

        console.log(
            "✅ PLAY COMMAND SUCCESSFUL"
        );

        beginButton.style.display = "none";

        openingText.classList.add("visible");

        startTimeline();

    } catch (error) {

        console.error(
            "❌ AUDIO FAILED:",
            error
        );

    }

});


/* ==========================================
   SIMPLE TIMELINE
========================================== */

let lastSecond = -1;

function startTimeline() {

    console.log("🎬 TIMELINE STARTED");

    const timer = setInterval(() => {

        if (audio.paused) {

            return;

        }

        const time =
            Math.floor(audio.currentTime);

        if (time === lastSecond) {

            return;

        }

        lastSecond = time;

        console.log(
            "⏱ CURRENT TIME:",
            time
        );


        /* ==============================
           5 SECONDS — CASTLE
        ============================== */

        if (time === 5) {

            console.log(
                "🏰 CASTLE APPEARING"
            );

            skyScene.classList.add(
                "castle-active"
            );

        }


        /* ==============================
           15 SECONDS — CAMERA
        ============================== */

        if (time === 15) {

            console.log(
                "🎥 CAMERA MOVING"
            );

            skyScene.classList.add(
                "camera-zoom"
            );

        }


        /* ==============================
           25 SECONDS — CLOUDS
        ============================== */

        if (time === 25) {

            console.log(
                "☁️ CLOUD TRANSITION"
            );

            skyScene.classList.add(
                "cloud-transition"
            );

        }


        /* ==============================
           35 SECONDS — FOREST
        ============================== */

        if (time === 35) {

            console.log(
                "🌲 FOREST APPEARING"
            );

            angelScene.classList.add(
                "forest-active"
            );

        }


        /* ==============================
           45 SECONDS — ARIANDA
        ============================== */

        if (time === 45) {

            console.log(
                "👼 ARIANDA APPEARING"
            );

            angelScene.classList.add(
                "angel-active"
            );

        }


        /* ==============================
           58 SECONDS — NAME
        ============================== */

        if (time === 58) {

            console.log(
                "✨ ARIANDA NAME"
            );

            angelStoryText.classList.add(
                "visible"
            );

        }


        /* ==============================
           END
        ============================== */

        if (time >= 79) {

            clearInterval(timer);

        }

    }, 100);

}