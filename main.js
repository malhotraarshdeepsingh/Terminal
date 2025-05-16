var before = document.getElementById("before");
var liner = document.getElementById("liner");
var command = document.getElementById("typer");
var textarea = document.getElementById("texter");
var terminal = document.getElementById("terminal");

var git = 0;
var pw = false;
let pwd = false;
var commands = [];

console.log("Try komnami code")

setTimeout(function () {
  loopLines(banner, "", 80);
  textarea.focus();
}, 100);

window.addEventListener("keyup", enterKey);

//init
textarea.value = "";
command.innerHTML = textarea.value;

function enterKey(e) {
  if (e.keyCode == 181) {
    document.location.reload(true);
  } else {
    if (e.keyCode == 13) {
      commands.push(command.innerHTML);
      git = commands.length;
      addLine(
        "user@terminal.arshcodes.me:~$ " + command.innerHTML,
        "no-animation",
        0
      );
      commander(command.innerHTML.toLowerCase());
      command.innerHTML = "";
      textarea.value = "";
    }
    if (e.keyCode == 38 && git != 0) {
      git -= 1;
      textarea.value = commands[git];
      command.innerHTML = textarea.value;
    }
    if (e.keyCode == 40 && git != commands.length) {
      git += 1;
      if (commands[git] === undefined) {
        textarea.value = "";
      } else {
        textarea.value = commands[git];
      }
      command.innerHTML = textarea.value;
    }
  }
}

function commander(cmd) {
  switch (cmd.toLowerCase()) {
    case "help":
      loopLines(help, "color2 margin", 80);
      break;
    case "about":
      loopLines(about, "color2 margin", 80);
      break;
    case "contact":
      loopLines(contact, "color2 margin", 80);
      break;
    case "skills":
      loopLines(skills, "color2 margin", 80);
      break;
    case "play":
      addLine("Opening mini game...", "color2", 0);
      setTimeout(function () {
        window.open("https://malhotraarshdeepsingh.github.io/MiniGame/");
      }, 1000);
      break;
    case "projects":
      loopLines(projects, "color2 margin", 80);
      break;
    case "history":
      addLine("<br>", "", 0);
      loopLines(commands, "color2", 80);
      addLine("<br>", "command", 80 * commands.length + 50);
      break;
    case "email":
      addLine(
        'Opening mailto:<a href="mailto:malhotraarshdeepsingh@gmail.com">malhotraarshdeepsingh@gmail.com</a>...',
        "color2",
        80
      );
      newTab(email);
      break;
    case "clear":
      setTimeout(function () {
        terminal.innerHTML = '<a id="before"></a>';
        before = document.getElementById("before");
      }, 1);
      break;
    case "banner":
      loopLines(banner, "", 80);
      break;
    case "linkedin":
      addLine("Opening LinkedIn...", "color2", 0);
      newTab(linkedin);
      break;
    case "github":
      addLine("Opening GitHub...", "color2", 0);
      newTab(github);
      break;
    case "exit":
      addLine("Exiting...", "color2", 0);
      setTimeout(function () {
        addLine("Goodbye!", "color2", 0);
        setTimeout(function () {
          window.open("https://github.com/malhotraarshdeepsingh");
          window.close();
        }, 1000);
      }, 1000);
      break;
    default:
      addLine(
        '<span class="inherit">Command not found. For a list of commands, type <span class="command">\'help\'</span>.</span>',
        "error",
        100
      );
      break;
  }
}

function newTab(link) {
  setTimeout(function () {
    window.open(link, "_blank");
  }, 500);
}

function addLine(text, style, time) {
  var t = "";
  for (let i = 0; i < text.length; i++) {
    if (text.charAt(i) == " " && text.charAt(i + 1) == " ") {
      t += "&nbsp;&nbsp;";
      i++;
    } else {
      t += text.charAt(i);
    }
  }
  setTimeout(function () {
    var next = document.createElement("p");
    next.innerHTML = t;
    next.className = style;

    before.parentNode.insertBefore(next, before);

    window.scrollTo(0, document.body.offsetHeight);
  }, time);
}

function loopLines(name, style, time) {
  name.forEach(function (item, index) {
    addLine(item, style, index * time);
  });
}

var linkedin = "https://www.linkedin.com/in/arshdeep-singh-malhotra-421ba327b/";
var github = "https://github.com/malhotraarshdeepsingh/";
var email = "mailto:malhotraarshdeepsingh@gmail.com";

projects = [
  "<br>",
  "Still curating... most projects are offline, on GitHub, or confidential.",
  "Check out my <a href='" + github + "'>GitHub</a> for some of my work.",
  "The main website is under construction and will be live soon.",
  "<br>",
];

help = [
  "<br>",
  '<span class="command">about</span>          A little about me, if you care.',
  '<span class="command">banner</span>         ASCII flex. Coz why not?',
  '<span class="command">skills</span>         My superpowers and how I got them.',
  '<span class="command">contact</span>        Ways to bother me — use at your own risk.',
  '<span class="command">projects</span>       Side quests I took way too seriously.',
  '<span class="command">play</span>           Take a break and waste time.',
  '<span class="command">history</span>        Your poor life choices... I mean, past commands.',
  '<span class="command">clear</span>          Poof! Like your problems... gone, but not really.',
  '<span class="command">github</span>         Where my messy, half-documented code lives.',
  '<span class="command">linkedin</span>       A glorified digital brag sheet.',
  '<span class="command">email</span>          Send me mail I\'ll probably never reply to.',
  '<span class="command">exit</span>           Self-destruct in 3...2...jk come back 🥺',
  "<br>",
];

about = [
  "<br>",
  "I'm a web developer with a passion for coding and problem-solving.",
  "I love creating innovative solutions and exploring new technologies.",
  "When I'm not coding, you can find me playing chess.",
  "I believe in continuous learning and always strive to improve my skills.",
  "I enjoy collaborating with others and sharing knowledge.",
  "I'm currently looking for new opportunities to grow and make an impact.",
  "Feel free to connect with me on LinkedIn or GitHub.",
  "<br>",
];

contact = [
  "<br>",
  "Feel free to reach out to me through any of the following channels:",
  '<span class="command">email</span>          <a href="mailto:malhotraarshdeepsingh@gmail.com">malhotraarshdeepsingh@gmail.com</a>',
  '<span class="command">linkedin</span>       <a href="https://www.linkedin.com/in/arshdeep-singh-malhotra-421ba327b/">LinkedIn</a>',
  '<span class="command">github</span>         <a href="https://github.com/malhotraarshdeepsingh/">GitHub</a>',
  "I look forward to hearing from you!",
  "<br>",
];

const skills = [
  "<br>",
  "Here's a comprehensive overview of my technical skill set:",
  "Proficient in HTML5, CSS3, JavaScript (ES6+), TypeScript, and libraries like React.js, Next.js, Three.js, Framer Motion, p5.js, and GSAP for interactive UIs.",
  "Experienced in backend development using Node.js, Express.js, Django, Flask, Resend, Razorpay, and Arjlet with JWT authentication and RESTful APIs.",
  "Familiar with mobile and desktop development using React Native and Tauri.",
  "Strong database experience with MongoDB, Firebase, Supabase, PostgreSQL, NeonDB and integration of Prisma ORM and Redis.",
  "Skilled in C, C++, Python, and Rust - used across various scripting, systems, and AI/ML tasks.",
  "Exploring the world of DevOps and tools like Docker, AWS, Netlify, Vercel, NGINX, Babel, and Postman for full-stack CI/CD and testing.",
  "Applied AI/ML with TensorFlow and Python for small-scale model training and inference.",
  "UI/UX styling expertise using Tailwind CSS, Bootstrap, ShadCN, Material UI, DaisyUI, Chakra UI, and SCSS.",
  "Experienced with version control (Git), GitHub workflow (PRs, forking).",
  "Developed multiple mini games using vanilla JS, p5.js, and React—including chess-based logic games, puzzles, and canvas-based arcade games for fun and learning.",
];

const banner = [
  '<span class="index">ArshCodes Terminal. All moves reserved.</span>',
  "                _    _    _    _   _    _    _    _  ",
  "             / ♜ / ♞ / ♝ / ♛ / ♚ / ♝ / ♞ / ♜ /",
  "            /___ /___ /___ /___ /___ /___ /___ /___/ ",
  "           / ♟ / ♟ / ♟ / ♟ / ♟ / ♟ / ♟ / ♟ / ",
  "          /___ /___ /___ /___ /___ /___ /___ /___/  ",
  "         /    /    /    /    /    /    /    /   /   ",
  "        /___ /___ /___ /___ /___ /___ /___ /___/   ",
  "       /    /    /    /    /    /    /    /   /    ",
  "      /___ /___ /___ /___ /___ /___ /___ /___/    ",
  "     / ♙ / ♙ / ♙ / ♙ / ♙ / ♙ / ♙ / ♙ / ",
  "    /___ /___ /___ /___ /___ /___ /___ /___/     ",
  "   / ♖ / ♘ / ♗ / ♕ / ♔ / ♗ / ♘ / ♖ /  ",
  "  /___ /___ /___ /___ /___ /___ /___ /___/     ",
  "  ",
  "  ░█████╗░██████╗░░██████╗██╗░░██╗░█████╗░░█████╗░██████╗░███████╗░██████╗",
  "  ██╔══██╗██╔══██╗██╔════╝██║░░██║██╔══██╗██╔══██╗██╔══██╗██╔════╝██╔════╝",
  "  ███████║██████╔╝╚█████╗░███████║██║░░╚═╝██║░░██║██║░░██║█████╗░░╚█████╗░",
  "  ██╔══██║██╔══██╗░╚═══██╗██╔══██║██║░░██╗██║░░██║██║░░██║██╔══╝░░░╚═══██╗",
  "  ██║░░██║██║░░██║██████╔╝██║░░██║╚█████╔╝╚█████╔╝██║░░██║███████╗██████╔╝",
  "  ╚═╝░░╚═╝╚═╝░░╚═╝╚═════╝░╚═╝░░╚═╝░╚════╝░░╚════╝░╚═════╝░╚══════╝╚═════╝░",
  '<span class="color2">Welcome to the ArshCodes interactive terminal.</span>',
  '<span class="color2">Type</span> <span class="command">"help"</span> <span class="color2"><span class="color2"> for available commands.</span>',
];

const konamiCode = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
];

let konamiIndex = 0;

window.addEventListener("keydown", function (e) {
  if (e.key === konamiCode[konamiIndex]) {
    konamiIndex++;
    if (konamiIndex === konamiCode.length) {
      activateKonamiEasterEgg();
      konamiIndex = 0;
    }
  } else {
    konamiIndex = 0;
  }
});

function activateKonamiEasterEgg() {
  const audio = new Audio(
    "https://www.myinstants.com/media/sounds/mlg-airhorn.mp3"
  );
  audio.play();

  // Tal vs. Sviridov, Riga 1969 - Critical Position (FEN: 2r1k2r/1p1bppb1/p2p1npp/q3n3/3NP1PP/2N1BP2/PPPQB3/1K1R3R w Kk -)
  addLine("        · · ♜ · ♚ · · ♜", "color1", 700); // 8th rank
  addLine("        · ♟ · ♝ ♟ ♟ ♝ ·", "color1", 800); // 7th rank
  addLine("        ♟ · · ♟ · ♞ ♟ ♟", "color1", 900); // 6th rank
  addLine("        ♛ · · · ♞ · · ·", "color1", 1000); // 5th rank
  addLine("        · · · ♘ ♙ · ♙ ♙", "color1", 1100); // 4th rank (Tal's knight on e4!)
  addLine("        · · ♘ · ♗ ♙ · ·", "color1", 1200); // 3rd rank
  addLine("        ♙ ♙ ♙ ♕ ♗ · · ·", "color1", 1300); // 2nd rank
  addLine("        · ♔ · ♖ · · · ♖", "color1", 1400); // 1st rank

  // Tal's Thunderbolt
  addLine("", "color2", 1500);
  addLine("TAL'S LIGHTNING STRIKE", "color3", 1600);
  addLine("", "color2", 1800);
  addLine(
    "\"When I sacrifice a piece, I'm not counting material -",
    "color4",
    1900
  );
  addLine(
    "I'm counting the squares to the enemy king\"",
    "color4",
    2000
  );
  addLine("- Mikhail Tal", "color4", 2100);
  addLine("", "color2", 2200);
}
