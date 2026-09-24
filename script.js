let selectedDate = "";
let selectedTime = "";
let selectedFood = "";
let selectedEmail = "";


// ==============================
// FIRST SCREEN
// ==============================

function showQuestion() {

    document.querySelector(".container").innerHTML = `

        <div class="question-screen">

            <div class="heart">
                💗
            </div>

            <h1>
                Will you go on a date with me? 🥹
            </h1>

            <p>
                Please choose carefully...
            </p>

            <div class="button-area">

                <button onclick="yesClicked()">
                    YES ❤️
                </button>

                <button id="noButton">
                    NO 😭
                </button>

            </div>

            <p class="love-message">
                You can't escape love 😂❤️
            </p>

        </div>

    `;

    const noButton =
        document.getElementById("noButton");

    noButton.addEventListener(
        "mouseenter",
        moveNoButton
    );

    noButton.addEventListener(
        "touchstart",
        function(event) {

            event.preventDefault();

            moveNoButton();

        }
    );
}


// ==============================
// MOVE NO BUTTON
// ==============================

function moveNoButton() {

    const noButton =
        document.getElementById("noButton");

    if (!noButton) {
        return;
    }

    const buttonWidth =
        noButton.offsetWidth;

    const buttonHeight =
        noButton.offsetHeight;

    const maxX =
        window.innerWidth -
        buttonWidth -
        20;

    const maxY =
        window.innerHeight -
        buttonHeight -
        20;

    const x =
        Math.max(
            10,
            Math.random() * maxX
        );

    const y =
        Math.max(
            10,
            Math.random() * maxY
        );

    noButton.style.position =
        "fixed";

    noButton.style.left =
        x + "px";

    noButton.style.top =
        y + "px";

    noButton.style.zIndex =
        "9999";
}


// ==============================
// YES BUTTON
// ==============================

function yesClicked() {

    document.querySelector(".container").innerHTML = `

        <div class="success-screen">

            <div class="heart big-heart">
                🥹❤️
            </div>

            <h1>
                Yesssss! 🎉
            </h1>

            <p>
                I knew you would say yes 😂❤️
            </p>

            <p class="small-love">
                You just made me really happy. 🥰
            </p>

            <button onclick="nextPage()">
                Let's plan it 💌
            </button>

        </div>

    `;
}


// ==============================
// DATE & TIME PAGE
// ==============================

function nextPage() {

    document.querySelector(".container").innerHTML = `

        <div class="page-content">

            <div class="emoji">
                📅
            </div>

            <h1>
                When are you free? ❤️
            </h1>

            <p>
                Pick a date and time for our little adventure.
            </p>

            <div class="input-group">

                <label for="date">
                    Our date
                </label>

                <input
                    type="date"
                    id="date"
                >

            </div>

            <div class="input-group">

                <label for="time">
                    Our time
                </label>

                <input
                    type="time"
                    id="time"
                >

            </div>

            <button onclick="foodPage()">
                Next ❤️
            </button>

        </div>

    `;
}


// ==============================
// FOOD PAGE
// ==============================

function foodPage() {

    selectedDate =
        document.getElementById("date").value;

    selectedTime =
        document.getElementById("time").value;

    if (
        selectedDate === "" ||
        selectedTime === ""
    ) {

        alert(
            "Heyyy 😭 You need to choose a date AND time!"
        );

        return;
    }

    document.querySelector(".container").innerHTML = `

        <div class="page-content">

            <div class="emoji">
                🍔
            </div>

            <h1>
                Now the important question 😏
            </h1>

            <p>
                What should I order for you?
            </p>

            <select id="food">

                <option value="">
                    Choose your food
                </option>

                <option value="Pizza">
                    Pizza 🍕
                </option>

                <option value="Shawarma">
                    Shawarma 🌯
                </option>

                <option value="Chicken">
                    Chicken 🍗
                </option>

                <option value="Burger">
                    Burger 🍔
                </option>

                <option value="Fried Rice">
                    Fried Rice 🍚
                </option>

                <option value="Jollof Rice">
                    Jollof Rice 🍛
                </option>

                <option value="Anything you choose">
                    Anything you choose ❤️
                </option>

            </select>

            <br><br>

            <button onclick="finish()">
                Next ❤️
            </button>

        </div>

    `;
}


// ==============================
// FINAL PAGE
// ==============================

function finish() {

    selectedFood =
        document.getElementById("food").value;

    if (selectedFood === "") {

        alert(
            "You haven't chosen your food yet 😭❤️"
        );

        return;
    }

    document.querySelector(".container").innerHTML = `

        <div class="final-screen">

            <div class="heart">
                🥰
            </div>

            <h1>
                It's a date! ❤️
            </h1>

            <p>

                Date:
                <strong>
                    ${selectedDate}
                </strong>

                <br>

                Time:
                <strong>
                    ${selectedTime}
                </strong>

                <br>

                Food:
                <strong>
                    ${selectedFood}
                </strong>

                <br><br>

                I can't wait to see you! 😭❤️

            </p>


            <form
                action="https://formspree.io/f/xeaokyla"
                method="POST"
            >

                <label
                    for="email"
                    style="
                        display:block;
                        color:#ff4f70;
                        font-weight:bold;
                        margin-bottom:8px;
                    "
                >
                    Your email 💌
                </label>

                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    required
                >

                <br><br>

                <input
                    type="hidden"
                    name="answer"
                    value="YES ❤️"
                >

                <input
                    type="hidden"
                    name="date"
                    value="${selectedDate}"
                >

                <input
                    type="hidden"
                    name="time"
                    value="${selectedTime}"
                >

                <input
                    type="hidden"
                    name="food"
                    value="${selectedFood}"
                >

                <button type="submit">
                    Send 💌
                </button>

            </form>

        </div>

    `;
}


// ==============================
// FLOATING HEARTS
// ==============================

function createHeart() {

    const heart =
        document.createElement("div");

    heart.innerHTML = "❤️";

    heart.style.position =
        "fixed";

    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.bottom =
        "-30px";

    heart.style.fontSize =
        Math.random() * 20 + 15 + "px";

    heart.style.opacity =
        Math.random() * 0.6 + 0.4;

    heart.style.pointerEvents =
        "none";

    heart.style.zIndex =
        "1";

    document.body.appendChild(heart);

    const duration =
        Math.random() * 4000 + 4000;

    heart.animate(
        [
            {
                transform:
                    "translateY(0) rotate(0deg)",

                opacity: 0
            },

            {
                transform:
                    "translateY(-110vh) rotate(360deg)",

                opacity: 1
            }
        ],
        {
            duration: duration,
            easing: "linear"
        }
    );

    setTimeout(
        function() {

            heart.remove();

        },
        duration
    );
}


setInterval(
    createHeart,
    700
);


// ==============================
// ROMANTIC SPARKLES
// ==============================

function createSparkle() {

    const sparkle =
        document.createElement("div");

    sparkle.className =
        "sparkle";

    sparkle.style.left =
        Math.random() * 100 + "vw";

    sparkle.style.top =
        (Math.random() * 100 + 100) + "vh";

    const duration =
        Math.random() * 5000 + 5000;

    sparkle.style.animationDuration =
        duration + "ms";

    document.body.appendChild(sparkle);

    setTimeout(
        function() {

            sparkle.remove();

        },
        duration
    );
}


setInterval(
    createSparkle,
    500
);


// ==============================
// EXTRA FLOATING HEARTS
// ==============================

function createFloatingHeart() {

    const heart =
        document.createElement("div");

    heart.className =
        "floating-heart";

    heart.innerHTML =
        Math.random() > 0.5
            ? "❤️"
            : "💕";

    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.fontSize =
        Math.random() * 25 + 15 + "px";

    const duration =
        Math.random() * 5000 + 5000;

    heart.style.animationDuration =
        duration + "ms";

    document.body.appendChild(heart);

    setTimeout(
        function() {

            heart.remove();

        },
        duration
    );
}


setInterval(
    createFloatingHeart,
    1000
);