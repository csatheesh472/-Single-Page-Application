/* =====================================================
   STUDENTHUB SINGLE PAGE APPLICATION
===================================================== */


/* =====================================================
   DOM ELEMENTS
===================================================== */

const app = document.getElementById("app");

const navbar = document.getElementById("navbar");

const menuBtn = document.getElementById("menuBtn");

const themeBtn = document.getElementById("themeBtn");

const notificationBtn =
    document.getElementById("notificationBtn");

const notificationPanel =
    document.getElementById("notificationPanel");

const closeNotification =
    document.getElementById("closeNotification");

const notificationBadge =
    document.getElementById("notificationBadge");


/* =====================================================
   APPLICATION DATA
===================================================== */

const courses = [

    {
        id: 1,
        icon: "💻",
        title: "Web Development",
        description:
            "Learn HTML, CSS, JavaScript and responsive web development.",
        progress: 80
    },

    {
        id: 2,
        icon: "🐍",
        title: "Python Programming",
        description:
            "Learn Python programming, functions and data structures.",
        progress: 65
    },

    {
        id: 3,
        icon: "🤖",
        title: "Artificial Intelligence",
        description:
            "Explore machine learning and artificial intelligence concepts.",
        progress: 55
    },

    {
        id: 4,
        icon: "📊",
        title: "Data Science",
        description:
            "Learn data analysis, visualization and machine learning.",
        progress: 70
    },

    {
        id: 5,
        icon: "☁️",
        title: "Cloud Computing",
        description:
            "Understand cloud services, deployment and infrastructure.",
        progress: 40
    },

    {
        id: 6,
        icon: "🔐",
        title: "Cyber Security",
        description:
            "Learn the fundamentals of security and safe computing.",
        progress: 35
    }

];


const projects = [

    {
        icon: "🛒",
        title: "E-Commerce Website",
        description:
            "Responsive online shopping application."
    },

    {
        icon: "🌦️",
        title: "Weather Application",
        description:
            "Application for displaying weather information."
    },

    {
        icon: "📱",
        title: "Social Media App",
        description:
            "Interactive social media application interface."
    },

    {
        icon: "📊",
        title: "Analytics Dashboard",
        description:
            "Dashboard for displaying data and statistics."
    },

    {
        icon: "🎮",
        title: "Mini Games Hub",
        description:
            "Collection of browser-based interactive games."
    },

    {
        icon: "🧠",
        title: "AI Chatbot",
        description:
            "Conversational AI application interface."
    }

];


/* =====================================================
   PAGE TEMPLATES
===================================================== */

const pages = {

    /* ================= HOME ================= */

    home: `

        <section class="page hero">

            <div class="hero-content">

                <h1>
                    Learn.
                    <span>Build.</span>
                    Grow.
                </h1>

                <p>
                    Welcome to StudentHub, a modern Single Page
                    Application designed to manage your learning,
                    courses and development projects.
                </p>

                <div class="hero-buttons">

                    <a
                        href="/dashboard"
                        data-route="dashboard"
                        class="btn">
                        View Dashboard
                    </a>

                    <a
                        href="/courses"
                        data-route="courses"
                        class="btn secondary">
                        Explore Courses
                    </a>

                </div>

            </div>


            <div class="hero-card">

                <div class="hero-icon">
                    🎓
                </div>

                <h2>
                    StudentHub
                </h2>

                <p>
                    Your learning journey starts here.
                </p>

            </div>

        </section>


        <section class="page">

            <div class="page-title">

                <h1>
                    Why StudentHub?
                </h1>

                <p>
                    Everything you need in one simple interface.
                </p>

            </div>


            <div class="card-container">

                <div class="card">

                    <div class="card-icon">
                        ⚡
                    </div>

                    <h3>
                        Fast Navigation
                    </h3>

                    <p>
                        Navigate between sections without
                        refreshing the entire webpage.
                    </p>

                </div>


                <div class="card">

                    <div class="card-icon">
                        📱
                    </div>

                    <h3>
                        Responsive
                    </h3>

                    <p>
                        Designed to work on desktop,
                        tablet and mobile devices.
                    </p>

                </div>


                <div class="card">

                    <div class="card-icon">
                        💾
                    </div>

                    <h3>
                        Local Storage
                    </h3>

                    <p>
                        User preferences such as theme settings
                        are saved in the browser.
                    </p>

                </div>

            </div>

        </section>

    `,


    /* ================= DASHBOARD ================= */

    dashboard: `

        <section class="page">

            <div class="page-title">

                <h1>
                    Student Dashboard
                </h1>

                <p>
                    Track your learning progress.
                </p>

            </div>


            <div class="stats">

                <div class="stat-card">

                    <div class="stat-icon">
                        📚
                    </div>

                    <div>

                        <h3>
                            6
                        </h3>

                        <p>
                            Courses
                        </p>

                    </div>

                </div>


                <div class="stat-card">

                    <div class="stat-icon">
                        💻
                    </div>

                    <div>

                        <h3>
                            6
                        </h3>

                        <p>
                            Projects
                        </p>

                    </div>

                </div>


                <div class="stat-card">

                    <div class="stat-icon">
                        🏆
                    </div>

                    <div>

                        <h3>
                            12
                        </h3>

                        <p>
                            Achievements
                        </p>

                    </div>

                </div>


                <div class="stat-card">

                    <div class="stat-icon">
                        ⏱️
                    </div>

                    <div>

                        <h3>
                            48h
                        </h3>

                        <p>
                            Learning Time
                        </p>

                    </div>

                </div>

            </div>


            <div class="page-title">

                <h1>
                    Learning Progress
                </h1>

            </div>


            <div class="card-container">

                ${courses.slice(0, 3).map(course => `

                    <div class="card">

                        <div class="card-icon">
                            ${course.icon}
                        </div>

                        <h3>
                            ${course.title}
                        </h3>

                        <p>
                            ${course.description}
                        </p>

                        <div class="progress-box">

                            <strong>
                                ${course.progress}% Complete
                            </strong>

                            <div class="progress-bar">

                                <div
                                    class="progress-fill"
                                    style="width:${course.progress}%">
                                </div>

                            </div>

                        </div>

                    </div>

                `).join("")}

            </div>

        </section>

    `,


    /* ================= COURSES ================= */

    courses: `

        <section class="page">

            <div class="page-title">

                <h1>
                    Courses
                </h1>

                <p>
                    Search and explore available courses.
                </p>

            </div>


            <div class="search-container">

                <input
                    type="text"
                    id="courseSearch"
                    class="search-box"
                    placeholder="🔍 Search courses...">

            </div>


            <div
                id="courseContainer"
                class="card-container">

                ${renderCourses(courses)}

            </div>

        </section>

    `,


    /* ================= PROJECTS ================= */

    projects: `

        <section class="page">

            <div class="page-title">

                <h1>
                    Projects
                </h1>

                <p>
                    Explore student development projects.
                </p>

            </div>


            <div class="search-container">

                <input
                    type="text"
                    id="projectSearch"
                    class="search-box"
                    placeholder="🔍 Search projects...">

            </div>


            <div
                id="projectContainer"
                class="card-container">

                ${renderProjects(projects)}

            </div>

        </section>

    `,


    /* ================= PROFILE ================= */

    profile: `

        <section class="page">

            <div class="page-title">

                <h1>
                    Student Profile
                </h1>

                <p>
                    Your personal learning information.
                </p>

            </div>


            <div class="profile">

                <div class="profile-header">

                    <div class="avatar">
                        👨‍💻
                    </div>

                    <div class="profile-info">

                        <h2>
                            Student Developer
                        </h2>

                        <p>
                            Full Stack Development Learner
                        </p>

                        <p>
                            📍 India
                        </p>

                    </div>

                </div>


                <div class="card-container">

                    <div class="card">

                        <div class="card-icon">
                            🎓
                        </div>

                        <h3>
                            Education
                        </h3>

                        <p>
                            Artificial Intelligence
                            and Data Science
                        </p>

                    </div>


                    <div class="card">

                        <div class="card-icon">
                            💼
                        </div>

                        <h3>
                            Experience
                        </h3>

                        <p>
                            Web Development Internship
                        </p>

                    </div>


                    <div class="card">

                        <div class="card-icon">
                            🚀
                        </div>

                        <h3>
                            Goal
                        </h3>

                        <p>
                            Become a skilled software developer.
                        </p>

                    </div>

                </div>

            </div>

        </section>

    `,


    /* ================= CONTACT ================= */

    contact: `

        <section class="page">

            <div class="page-title">

                <h1>
                    Contact Us
                </h1>

                <p>
                    Send us your message.
                </p>

            </div>


            <div class="form-container">

                <form id="contactForm">

                    <div class="form-group">

                        <label>
                            Name
                        </label>

                        <input
                            type="text"
                            id="name"
                            placeholder="Enter your name"
                            required>

                    </div>


                    <div class="form-group">

                        <label>
                            Email
                        </label>

                        <input
                            type="email"
                            id="email"
                            placeholder="Enter your email"
                            required>

                    </div>


                    <div class="form-group">

                        <label>
                            Message
                        </label>

                        <textarea
                            id="message"
                            placeholder="Enter your message"
                            required>
                        </textarea>

                    </div>


                    <button
                        type="submit"
                        class="btn">

                        Send Message

                    </button>

                </form>

            </div>

        </section>

    `,


    /* ================= ABOUT ================= */

    about: `

        <section class="page">

            <div class="page-title">

                <h1>
                    About This SPA
                </h1>

                <p>
                    Week 5 Single Page Application Project
                </p>

            </div>


            <div class="about-box">

                <p>
                    StudentHub is a Single Page Application
                    simulation created using HTML5, CSS3 and
                    vanilla JavaScript.
                </p>

                <p>
                    The application uses client-side routing,
                    DOM manipulation and the Browser History API
                    to provide navigation without full page reloads.
                </p>

                <p>
                    LocalStorage is used to save the user's
                    theme preference.
                </p>


                <div class="feature-list">

                    <div class="feature-item">
                        🧭 Client-side Routing
                    </div>

                    <div class="feature-item">
                        🔄 Browser History API
                    </div>

                    <div class="feature-item">
                        🔍 Search and Filtering
                    </div>

                    <div class="feature-item">
                        🌙 Dark Mode
                    </div>

                    <div class="feature-item">
                        📱 Responsive Design
                    </div>

                    <div class="feature-item">
                        🔔 Notification System
                    </div>

                    <div class="feature-item">
                        💾 LocalStorage
                    </div>

                    <div class="feature-item">
                        ❌ 404 Error Handling
                    </div>

                </div>

            </div>

        </section>

    `

};


/* =====================================================
   COURSE CARD GENERATOR
===================================================== */

function renderCourses(data) {

    if (data.length === 0) {

        return `

            <div class="error-page">

                <h2>
                    No courses found
                </h2>

                <p>
                    Try another search term.
                </p>

            </div>

        `;

    }


    return data.map(course => `

        <div class="card">

            <div class="card-icon">
                ${course.icon}
            </div>

            <h3>
                ${course.title}
            </h3>

            <p>
                ${course.description}
            </p>


            <div class="progress-box">

                <strong>
                    Progress: ${course.progress}%
                </strong>

                <div class="progress-bar">

                    <div
                        class="progress-fill"
                        style="width:${course.progress}%">
                    </div>

                </div>

            </div>


            <div class="card-actions">

                <button
                    class="btn"
                    onclick="courseMessage('${course.title}')">

                    Continue

                </button>

            </div>

        </div>

    `).join("");

}


/* =====================================================
   PROJECT CARD GENERATOR
===================================================== */

function renderProjects(data) {

    if (data.length === 0) {

        return `

            <div class="error-page">

                <h2>
                    No projects found
                </h2>

                <p>
                    Try another search term.
                </p>

            </div>

        `;

    }


    return data.map(project => `

        <div class="card">

            <div class="card-icon">
                ${project.icon}
            </div>

            <h3>
                ${project.title}
            </h3>

            <p>
                ${project.description}
            </p>


            <div class="card-actions">

                <button
                    class="btn"
                    onclick="projectMessage('${project.title}')">

                    View Project

                </button>

            </div>

        </div>

    `).join("");

}


/* =====================================================
   ROUTING
===================================================== */

function getRoute() {

    let path = window.location.pathname;

    path = path.replace(/\/+$/, "");

    if (path === "") {

        return "home";

    }

    const route =
        path.substring(1);

    return pages[route]
        ? route
        : "404";

}


/* =====================================================
   LOAD PAGE
===================================================== */

function loadPage(route, addHistory = false) {

    /* =========================
       404 PAGE
    ========================= */

    if (!pages[route]) {

        app.innerHTML = `

            <section class="page error-page">

                <h1>
                    404
                </h1>

                <h2>
                    Page Not Found
                </h2>

                <p>
                    The requested page does not exist.
                </p>

                <a
                    href="/"
                    data-route="home"
                    class="btn">

                    Return Home

                </a>

            </section>

        `;

    }

    else {

        app.innerHTML =
            pages[route];

    }


    /* =========================
       UPDATE ACTIVE NAV
    ========================= */

    document
        .querySelectorAll("nav a")
        .forEach(link => {

            link.classList.remove("active");

            if (
                link.dataset.route === route
            ) {

                link.classList.add("active");

            }

        });


    /* =========================
       UPDATE URL
    ========================= */

    if (addHistory) {

        const newPath =
            route === "home"
                ? "/"
                : "/" + route;

        history.pushState(
            {
                route: route
            },
            "",
            newPath
        );

    }


    /* =========================
       PAGE TITLE
    ========================= */

    const title =
        route.charAt(0).toUpperCase() +
        route.slice(1);

    document.title =
        route === "home"
            ? "StudentHub | SPA"
            : `${title} | StudentHub`;


    /* =========================
       SCROLL
    ========================= */

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });


    /* =========================
       CLOSE MOBILE MENU
    ========================= */

    navbar.classList.remove("show");


    /* =========================
       ACTIVATE PAGE FEATURES
    ========================= */

    initializePageFeatures();

}


/* =====================================================
   NAVIGATION CLICK
===================================================== */

document.addEventListener(
    "click",
    function(event) {

        const link =
            event.target.closest(
                "a[data-route]"
            );

        if (!link) {

            return;

        }


        event.preventDefault();


        const route =
            link.dataset.route;


        loadPage(
            route,
            true
        );

    }
);


/* =====================================================
   BROWSER BACK / FORWARD
===================================================== */

window.addEventListener(
    "popstate",
    function() {

        const route =
            getRoute();

        loadPage(
            route,
            false
        );

    }
);


/* =====================================================
   MOBILE MENU
===================================================== */

menuBtn.addEventListener(
    "click",
    function() {

        navbar.classList.toggle(
            "show"
        );

    }
);


/* =====================================================
   DARK MODE
===================================================== */

function applyTheme() {

    const savedTheme =
        localStorage.getItem(
            "studenthub-theme"
        );


    if (savedTheme === "dark") {

        document.body.classList.add(
            "dark"
        );

        themeBtn.textContent =
            "☀️";

    }

    else {

        document.body.classList.remove(
            "dark"
        );

        themeBtn.textContent =
            "🌙";

    }

}


themeBtn.addEventListener(
    "click",
    function() {

        document.body.classList.toggle(
            "dark"
        );


        const isDark =
            document.body.classList.contains(
                "dark"
            );


        localStorage.setItem(
            "studenthub-theme",
            isDark
                ? "dark"
                : "light"
        );


        themeBtn.textContent =
            isDark
                ? "☀️"
                : "🌙";


        showToast(
            isDark
                ? "Dark mode enabled"
                : "Light mode enabled"
        );

    }
);


/* =====================================================
   NOTIFICATIONS
===================================================== */

notificationBtn.addEventListener(
    "click",
    function() {

        notificationPanel.classList.toggle(
            "show"
        );

    }
);


closeNotification.addEventListener(
    "click",
    function() {

        notificationPanel.classList.remove(
            "show"
        );

    }
);


/* =====================================================
   COURSE SEARCH
===================================================== */

function initializePageFeatures() {

    const courseSearch =
        document.getElementById(
            "courseSearch"
        );


    if (courseSearch) {

        courseSearch.addEventListener(
            "input",
            function() {

                const keyword =
                    this.value
                        .toLowerCase()
                        .trim();


                const filtered =
                    courses.filter(course =>
                        course.title
                            .toLowerCase()
                            .includes(keyword)
                    );


                document.getElementById(
                    "courseContainer"
                ).innerHTML =
                    renderCourses(filtered);

            }
        );

    }


    /* =========================
       PROJECT SEARCH
    ========================= */

    const projectSearch =
        document.getElementById(
            "projectSearch"
        );


    if (projectSearch) {

        projectSearch.addEventListener(
            "input",
            function() {

                const keyword =
                    this.value
                        .toLowerCase()
                        .trim();


                const filtered =
                    projects.filter(project =>
                        project.title
                            .toLowerCase()
                            .includes(keyword)
                    );


                document.getElementById(
                    "projectContainer"
                ).innerHTML =
                    renderProjects(filtered);

            }
        );

    }


    /* =========================
       CONTACT FORM
    ========================= */

    const contactForm =
        document.getElementById(
            "contactForm"
        );


    if (contactForm) {

        contactForm.addEventListener(
            "submit",
            function(event) {

                event.preventDefault();


                const name =
                    document.getElementById(
                        "name"
                    ).value.trim();


                const email =
                    document.getElementById(
                        "email"
                    ).value.trim();


                const message =
                    document.getElementById(
                        "message"
                    ).value.trim();


                if (
                    name === "" ||
                    email === "" ||
                    message === ""
                ) {

                    showToast(
                        "Please fill all fields."
                    );

                    return;

                }


                showToast(
                    `Thank you, ${name}! Message sent successfully.`
                );


                contactForm.reset();

            }
        );

    }

}


/* =====================================================
   COURSE BUTTON
===================================================== */

function courseMessage(courseName) {

    showToast(
        `Opening ${courseName}...`
    );

}


/* =====================================================
   PROJECT BUTTON
===================================================== */

function projectMessage(projectName) {

    showToast(
        `Viewing ${projectName}...`
    );

}


/* =====================================================
   TOAST MESSAGE
===================================================== */

function showToast(message) {

    const oldToast =
        document.querySelector(
            ".toast"
        );


    if (oldToast) {

        oldToast.remove();

    }


    const toast =
        document.createElement(
            "div"
        );


    toast.className =
        "toast";


    toast.textContent =
        message;


    document.body.appendChild(
        toast
    );


    setTimeout(
        function() {

            toast.remove();

        },
        3000
    );

}


/* =====================================================
   INITIAL APPLICATION LOAD
===================================================== */

applyTheme();


document.addEventListener(
    "DOMContentLoaded",
    function() {

        const route =
            getRoute();

        loadPage(
            route,
            false
        );

    }
);