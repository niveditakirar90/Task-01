/* =====================================================
   SPACE PORTFOLIO JAVASCRIPT
   ===================================================== */


/* ================= WELCOME MESSAGE ================= */

function showWelcome() {

    alert(
        "🚀 Welcome to my digital universe!\n\n" +
        "Thanks for exploring my portfolio."
    );

}


/* ================= CONTACT FORM ================= */

function submitForm(event) {

    event.preventDefault();

    alert(
        "📡 Signal received!\n\n" +
        "Thank you for contacting me."
    );

    event.target.reset();

}


/* ================= BACK TO TOP ================= */

const topButton = document.querySelector(".top-btn");

if (topButton) {

    window.addEventListener("scroll", function () {

        if (window.scrollY > 500) {

            topButton.classList.add("show");

        } else {

            topButton.classList.remove("show");

        }

    });

}


function scrollToTop() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* ================= MOUSE SPACE EFFECT ================= */

document.addEventListener("mousemove", function (event) {

    const x =
        (event.clientX / window.innerWidth - 0.5) * 20;

    const y =
        (event.clientY / window.innerHeight - 0.5) * 20;

    const planet =
        document.querySelector(".planet");

    if (planet) {

        planet.style.transform =
            `translate(${x / 4}px, ${y / 4}px)`;

    }

});


/* ================= THEME EFFECT ================= */

let lightMode = false;


function toggleTheme() {

    lightMode = !lightMode;

    const button =
        document.querySelector(".theme-btn");

    if (lightMode) {

        document.body.style.setProperty(
            "--bg",
            "#101426"
        );

        document.body.style.setProperty(
            "--bg-two",
            "#171d3a"
        );

        if (button) {
            button.textContent = "☀";
        }

    } else {

        document.body.style.setProperty(
            "--bg",
            "#03040b"
        );

        document.body.style.setProperty(
            "--bg-two",
            "#080b1c"
        );

        if (button) {
            button.textContent = "☾";
        }

    }

}


/* =====================================================
   PROJECT UNIVERSE
   ===================================================== */


const projectData = {

    chess: {

        icon: "♟",

        title: "Chess Game",

        description:
            "An interactive web-based chess game with rule-based game logic, AI opponent, timers, move history, and a responsive UI.",

        technologies: [
            "HTML",
            "CSS",
            "JavaScript"
        ],

        animationTime: 3200

    },


    network: {

        icon: "🌐",

        title: "Network Topologies Visualizer",

        description:
            "An interactive visualizer that demonstrates Bus, Star, Ring, Mesh, Tree, and Hybrid network topologies with animated data flow.",

        technologies: [
            "HTML",
            "CSS",
            "JavaScript"
        ],

        animationTime: 3200

    },


    nirabot: {

        icon: "◇",

        title: "NiRaBot-X",

        description:
            "A humanoid AI robot combining Gemini AI, ESP32, IoT, surveillance, voice interaction, and expressive robotic movement.",

        technologies: [
            "ESP32",
            "Embedded C/C++",
            "Gemini API",
            "Blynk IoT",
            "ESP32-CAM"
        ],

        animationTime: 4000

    },


    calculator: {

        icon: "＋",

        title: "Calculator",

        description:
            "A simple and responsive calculator built with a clean interactive interface.",

        technologies: [
            "HTML",
            "CSS",
            "JavaScript"
        ],

        animationTime: 3000

    },


    portfolio: {

        icon: "⌘",

        title: "Personal Portfolio",

        description:
            "My personal portfolio website showcasing my projects, skills, education, and development journey.",

        technologies: [
            "HTML",
            "CSS",
            "JavaScript"
        ],

        animationTime: 3500

    }

};


/* =====================================================
   OPEN PROJECT
   ===================================================== */

let projectTimer = null;


function openProject(projectName) {

    const project =
        projectData[projectName];

    if (!project) return;


    const modal =
        document.getElementById("projectModal");

    const animation =
        document.getElementById("projectAnimation");

    const details =
        document.getElementById("projectDetails");


    const modalIcon =
        document.getElementById("modalIcon");

    const modalTitle =
        document.getElementById("modalTitle");

    const modalDescription =
        document.getElementById("modalDescription");

    const modalTech =
        document.getElementById("modalTech");

    const modalLinks =
        document.getElementById("modalLinks");


    /* Stop previous timer */

    if (projectTimer) {

        clearTimeout(projectTimer);

    }


    /* Fill project information */

    if (modalIcon) {

        modalIcon.textContent =
            project.icon;

    }


    if (modalTitle) {

        modalTitle.textContent =
            project.title;

    }


    if (modalDescription) {

        modalDescription.textContent =
            project.description;

    }


    if (modalTech) {

        modalTech.innerHTML =
            project.technologies
                .map(function (tech) {

                    return `<span>${tech}</span>`;

                })
                .join("");

    }


    if (modalLinks) {

        modalLinks.innerHTML = "";

    }


    /* Hide details initially */

    if (details) {

        details.classList.remove(
            "show-details"
        );

    }


    /* Create animation */

    createProjectAnimation(
        projectName
    );


    /* Open modal */

    if (modal) {

        modal.classList.add("active");

    }


    document.body.style.overflow =
        "hidden";


    /* Show details after animation */

    projectTimer = setTimeout(function () {

        if (details) {

            details.classList.add(
                "show-details"
            );

        }

    }, project.animationTime);

}


/* =====================================================
   CLOSE PROJECT
   ===================================================== */

function closeProject() {

    const modal =
        document.getElementById("projectModal");

    const animation =
        document.getElementById("projectAnimation");

    const details =
        document.getElementById("projectDetails");


    if (projectTimer) {

        clearTimeout(projectTimer);

        projectTimer = null;

    }


    if (modal) {

        modal.classList.remove(
            "active"
        );

    }


    if (animation) {

        animation.innerHTML = "";

    }


    if (details) {

        details.classList.remove(
            "show-details"
        );

    }


    document.body.style.overflow =
        "";

}


/* =====================================================
   PROJECT ANIMATIONS
   ===================================================== */

function createProjectAnimation(projectName) {

    const animation =
        document.getElementById(
            "projectAnimation"
        );


    if (!animation) return;


    animation.innerHTML = "";


    /* =================================================
       CHESS GAME
       ================================================= */

    if (projectName === "chess") {

        createChessAnimation(
            animation
        );

    }


    /* =================================================
       NETWORK TOPOLOGIES
       ================================================= */

    if (projectName === "network") {

        createNetworkAnimation(
            animation
        );

    }


    /* =================================================
       NIRABOT-X
       ================================================= */

    if (projectName === "nirabot") {

        createRobotAnimation(
            animation
        );

    }


    /* =================================================
       CALCULATOR
       ================================================= */

    if (projectName === "calculator") {

        createCalculatorAnimation(
            animation
        );

    }


    /* =================================================
       PERSONAL PORTFOLIO
       ================================================= */

    if (projectName === "portfolio") {

        createPortfolioAnimation(
            animation
        );

    }

}


/* =====================================================
   CHESS ANIMATION
   ===================================================== */

function createChessAnimation(container) {

    const arena =
        document.createElement("div");

    arena.className =
        "chess-arena";


    const board =
        document.createElement("div");

    board.className =
        "chess-board";


    const whitePieces = [
        "♜",
        "♞",
        "♝",
        "♛",
        "♚",
        "♝",
        "♞",
        "♜",
        "♟",
        "♟",
        "♟",
        "♟",
        "♟",
        "♟",
        "♟",
        "♟"
    ];


    const blackPieces = [
        "♙",
        "♙",
        "♙",
        "♙",
        "♙",
        "♙",
        "♙",
        "♙",
        "♖",
        "♘",
        "♗",
        "♕",
        "♔",
        "♗",
        "♘",
        "♖"
    ];


    for (let i = 0; i < 64; i++) {

        const cell =
            document.createElement("div");

        cell.className =
            "chess-cell";


        const row =
            Math.floor(i / 8);

        const col =
            i % 8;


        if ((row + col) % 2 === 0) {

            cell.classList.add(
                "light-cell"
            );

        } else {

            cell.classList.add(
                "dark-cell"
            );

        }


        /* Black pieces */

        if (i < 16) {

            const piece =
                document.createElement("span");

            piece.className =
                "chess-piece black-piece";

            piece.textContent =
                blackPieces[i];

            cell.appendChild(piece);

        }


        /* White pieces */

        if (i >= 48) {

            const piece =
                document.createElement("span");

            piece.className =
                "chess-piece white-piece";

            piece.textContent =
                whitePieces[i - 48];

            cell.appendChild(piece);

        }


        board.appendChild(cell);

    }


    arena.appendChild(board);


    /* Moving piece */

    const movingPiece =
        document.createElement("div");

    movingPiece.className =
        "chess-moving-piece";

    movingPiece.textContent =
        "♘";


    arena.appendChild(
        movingPiece
    );


    /* Scan line */

    const scan =
        document.createElement("div");

    scan.className =
        "chess-scan";

    arena.appendChild(scan);


    /* HUD */

    const hud =
        document.createElement("div");

    hud.className =
        "chess-hud";

    hud.innerHTML = `
        <span>CHESS SYSTEM</span>
        <span>ONLINE</span>
    `;

    arena.appendChild(hud);


    container.appendChild(
        arena
    );

}


/* =====================================================
   NETWORK ANIMATION
   ===================================================== */

function createNetworkAnimation(container) {

    const network =
        document.createElement("div");

    network.className =
        "network-system";


    const svg =
        document.createElementNS(
            "http://www.w3.org/2000/svg",
            "svg"
        );

    svg.classList.add(
        "network-lines"
    );


    svg.setAttribute(
        "viewBox",
        "0 0 1000 430"
    );


    const nodes = [

        [500, 90],

        [260, 170],

        [740, 170],

        [360, 320],

        [640, 320],

        [500, 215]

    ];


    const connections = [

        [0, 1],

        [0, 2],

        [1, 3],

        [1, 5],

        [2, 4],

        [2, 5],

        [3, 5],

        [4, 5]

    ];


    connections.forEach(
        function (connection) {

            const line =
                document.createElementNS(
                    "http://www.w3.org/2000/svg",
                    "line"
                );


            const first =
                nodes[connection[0]];

            const second =
                nodes[connection[1]];


            line.setAttribute(
                "x1",
                first[0]
            );

            line.setAttribute(
                "y1",
                first[1]
            );

            line.setAttribute(
                "x2",
                second[0]
            );

            line.setAttribute(
                "y2",
                second[1]
            );


            svg.appendChild(
                line
            );

        }
    );


    network.appendChild(
        svg
    );


    /* Nodes */

    nodes.forEach(
        function (position, index) {

            const node =
                document.createElement("div");

            node.className =
                "network-node";


            node.style.left =
                (position[0] / 10) + "%";


            node.style.top =
                (position[1] / 4.3) + "%";


            node.style.animationDelay =
                (index * 0.15) + "s";


            const core =
                document.createElement("span");

            core.className =
                "network-core";


            node.appendChild(
                core
            );


            network.appendChild(
                node
            );

        }
    );


    /* Data packets */

    for (let i = 0; i < 8; i++) {

        const packet =
            document.createElement("div");

        packet.className =
            "data-packet";


        packet.style.animationDelay =
            (i * 0.45) + "s";


        network.appendChild(
            packet
        );

    }


    /* System label */

    const label =
        document.createElement("div");

    label.className =
        "network-label";

    label.textContent =
        "NETWORK // DATA FLOW";

    network.appendChild(
        label
    );


    container.appendChild(
        network
    );

}


/* =====================================================
   NIRABOT-X ROBOT ANIMATION
   ===================================================== */

function createRobotAnimation(container) {

    const scene =
        document.createElement("div");

    scene.className =
        "robot-scene";


    /* Floor */

    const floor =
        document.createElement("div");

    floor.className =
        "robot-floor";

    scene.appendChild(
        floor
    );


    /* Robot */

    const robot =
        document.createElement("div");

    robot.className =
        "robot-body";


    /* Head */

    const head =
        document.createElement("div");

    head.className =
        "robot-head";


    const eyeLeft =
        document.createElement("span");

    eyeLeft.className =
        "robot-eye eye-left";


    const eyeRight =
        document.createElement("span");

    eyeRight.className =
        "robot-eye eye-right";


    const faceLine =
        document.createElement("div");

    faceLine.className =
        "robot-face-line";


    head.appendChild(
        eyeLeft
    );

    head.appendChild(
        eyeRight
    );

    head.appendChild(
        faceLine
    );


    /* Neck */

    const neck =
        document.createElement("div");

    neck.className =
        "robot-neck";


    /* Torso */

    const torso =
        document.createElement("div");

    torso.className =
        "robot-torso";


    const core =
        document.createElement("div");

    core.className =
        "robot-core";


    torso.appendChild(
        core
    );


    /* Arms */

    const leftArm =
        document.createElement("div");

    leftArm.className =
        "robot-arm robot-left-arm";


    const rightArm =
        document.createElement("div");

    rightArm.className =
        "robot-arm robot-right-arm";


    /* Legs */

    const leftLeg =
        document.createElement("div");

    leftLeg.className =
        "robot-leg robot-left-leg";


    const rightLeg =
        document.createElement("div");

    rightLeg.className =
        "robot-leg robot-right-leg";


    robot.appendChild(
        head
    );

    robot.appendChild(
        neck
    );

    robot.appendChild(
        torso
    );

    robot.appendChild(
        leftArm
    );

    robot.appendChild(
        rightArm
    );

    robot.appendChild(
        leftLeg
    );

    robot.appendChild(
        rightLeg
    );


    scene.appendChild(
        robot
    );


    /* Scanning beam */

    const scan =
        document.createElement("div");

    scan.className =
        "robot-scan";


    scene.appendChild(
        scan
    );


    /* Digital circuits */

    for (let i = 0; i < 14; i++) {

        const circuit =
            document.createElement("div");

        circuit.className =
            "robot-circuit";


        circuit.style.left =
            Math.random() * 90 + "%";


        circuit.style.top =
            Math.random() * 80 + "%";


        circuit.style.animationDelay =
            Math.random() * 2 + "s";


        scene.appendChild(
            circuit
        );

    }


    /* System text */

    const systemText =
        document.createElement("div");

    systemText.className =
        "robot-system-text";


    systemText.innerHTML = `
        <span>NI</span>
        <span>RABOT-X</span>
        <small>AI CORE // INITIALIZING</small>
    `;


    scene.appendChild(
        systemText
    );


    container.appendChild(
        scene
    );

}


/* =====================================================
   CALCULATOR ANIMATION
   ===================================================== */

function createCalculatorAnimation(
    container
) {

    const scene =
        document.createElement("div");

    scene.className =
        "calculator-scene";


    /* Floating math symbols */

    const symbols = [
        "+",
        "−",
        "×",
        "÷",
        "=",
        "π",
        "%",
        "√"
    ];


    symbols.forEach(
        function (symbol, index) {

            const element =
                document.createElement("div");

            element.className =
                "math-symbol";


            element.textContent =
                symbol;


            element.style.left =
                (8 + index * 12) + "%";


            element.style.top =
                (18 + (index % 4) * 17) + "%";


            element.style.animationDelay =
                (index * 0.2) + "s";


            scene.appendChild(
                element
            );

        }
    );


    /* Calculator */

    const calculator =
        document.createElement("div");

    calculator.className =
        "calculator-interface";


    calculator.innerHTML = `

        <div class="calculator-screen">
            <span class="calc-expression"></span>
            <strong class="calc-result">0</strong>
        </div>

        <div class="calculator-buttons">

            <span>AC</span>
            <span>±</span>
            <span>%</span>
            <span>÷</span>

            <span>7</span>
            <span>8</span>
            <span>9</span>
            <span>×</span>

            <span>4</span>
            <span>5</span>
            <span>6</span>
            <span>−</span>

            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>+</span>

            <span>0</span>
            <span>.</span>
            <span>=</span>

        </div>

    `;


    scene.appendChild(
        calculator
    );


    container.appendChild(
        scene
    );


    /* Typing calculation */

    const expression =
        calculator.querySelector(
            ".calc-expression"
        );


    const result =
        calculator.querySelector(
            ".calc-result"
        );


    const text =
        "25 × 4";


    let index = 0;


    const typing =
        setInterval(
            function () {

                if (index < text.length) {

                    expression.textContent +=
                        text[index];

                    index++;

                } else {

                    clearInterval(
                        typing
                    );


                    setTimeout(
                        function () {

                            result.textContent =
                                "100";

                        },
                        500
                    );

                }

            },
            180
        );

}


/* =====================================================
   PORTFOLIO ANIMATION
   ===================================================== */

function createPortfolioAnimation(
    container
) {

    const scene =
        document.createElement("div");

    scene.className =
        "portfolio-scene";


    /* Stars */

    for (let i = 0; i < 35; i++) {

        const star =
            document.createElement("div");

        star.className =
            "cosmic-star";


        star.style.left =
            Math.random() * 100 + "%";


        star.style.top =
            Math.random() * 100 + "%";


        star.style.animationDelay =
            Math.random() * 2 + "s";


        scene.appendChild(
            star
        );

    }


    /* Central workspace */

    const workspace =
        document.createElement("div");

    workspace.className =
        "portfolio-workspace";


    /* Main screen */

    const screen =
        document.createElement("div");

    screen.className =
        "portfolio-main-screen";


    screen.innerHTML = `
        <div class="portfolio-screen-top">
            <span>PORTFOLIO.OS</span>
            <span>ONLINE</span>
        </div>

        <div class="portfolio-screen-content">
            <strong>CREATIVE</strong>
            <strong>DEVELOPER</strong>
            <small>BUILDING DIGITAL EXPERIENCES</small>
        </div>
    `;


    workspace.appendChild(
        screen
    );


    /* Side panels */

    const panelNames = [
        "ABOUT",
        "SKILLS",
        "PROJECTS",
        "CONTACT"
    ];


    panelNames.forEach(
        function (name, index) {

            const panel =
                document.createElement("div");

            panel.className =
                "portfolio-panel";


            panel.textContent =
                name;


            panel.style.animationDelay =
                (0.5 + index * 0.25) + "s";


            workspace.appendChild(
                panel
            );

        }
    );


    scene.appendChild(
        workspace
    );


    /* Cursor */

    const cursor =
        document.createElement("div");

    cursor.className =
        "portfolio-cursor";


    scene.appendChild(
        cursor
    );


    /* Status */

    const status =
        document.createElement("div");

    status.className =
        "portfolio-status";

    status.textContent =
        "DIGITAL WORKSPACE // LOADING";

    scene.appendChild(
        status
    );


    container.appendChild(
        scene
    );

}


/* =====================================================
   MODAL OUTSIDE CLICK
   ===================================================== */

const projectModal =
    document.getElementById(
        "projectModal"
    );


if (projectModal) {

    projectModal.addEventListener(
        "click",
        function (event) {

            if (
                event.target ===
                projectModal
            ) {

                closeProject();

            }

        }
    );

}


/* =====================================================
   ESC KEY
   ===================================================== */

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key === "Escape"
        ) {

            closeProject();

        }

    }
);
