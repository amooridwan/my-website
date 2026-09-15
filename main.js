"use strict";


"use strict";


/* =========================================================
   MOBILE MENU
========================================================= */

const menuBtn =
    document.querySelector("#menu-btn");


const mobileNav =
    document.querySelector("#mobile-nav");


if (menuBtn && mobileNav) {

    menuBtn.addEventListener(
        "click",
        () => {

            mobileNav.classList.toggle("show");

            menuBtn.classList.toggle("active");

        }
    );

}


/* =========================================================
   CLOSE MOBILE MENU AFTER CLICKING A LINK
========================================================= */

const mobileLinks =
    document.querySelectorAll(
        "#mobile-nav a"
    );


mobileLinks.forEach((link) => {

    link.addEventListener(
        "click",
        () => {

            if (mobileNav) {

                mobileNav.classList.remove(
                    "show"
                );

            }


            if (menuBtn) {

                menuBtn.classList.remove(
                    "active"
                );

            }

        }
    );

});


/* =========================================================
   CURRENT YEAR
========================================================= */

const year =
    document.querySelector("#year");


if (year) {

    year.textContent =
        new Date().getFullYear();

}

/* =========================================================
   ACTIVE NAVIGATION ON SCROLL
========================================================= */


const sections =
    document.querySelectorAll(
        "section[id]"
    );


const navLinks =
    document.querySelectorAll(
        ".desktop-nav a"
    );


if (sections.length && navLinks.length) {


    const sectionObserver =
        new IntersectionObserver(
            (entries) => {


                entries.forEach(
                    (entry) => {


                        if (entry.isIntersecting) {


                            const currentSection =
                                entry.target.getAttribute(
                                    "id"
                                );


                            navLinks.forEach(
                                (link) => {


                                    link.classList.remove(
                                        "active"
                                    );


                                    if (
                                        link.getAttribute("href") ===
                                        "#" + currentSection
                                    ) {

                                        link.classList.add(
                                            "active"
                                        );

                                    }


                                }
                            );


                        }


                    }
                );


            },
            {
                threshold: 0.5
            }
        );


    sections.forEach(
        (section) => {

            sectionObserver.observe(
                section
            );

        }
    );

}

/* =========================================================
   SCROLL REVEAL ANIMATION
========================================================= */

/*
    All elements that should animate
    when they enter the screen.
*/

const revealElements =
    document.querySelectorAll(
        ".about-card, " +
        ".skill-card, " +
        ".project-card, " +
        ".service-item"
    );


/*
    Only create the observer if the
    browser supports IntersectionObserver.
*/

if (
    "IntersectionObserver" in window
) {

    const revealObserver =
        new IntersectionObserver(
            (entries, observer) => {

                entries.forEach(
                    (entry) => {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.classList.add(
                                "reveal"
                            );


                            /*
                                Stop observing the element
                                after its animation runs.
                            */

                            observer.unobserve(
                                entry.target
                            );

                        }

                    }
                );

            },
            {
                threshold: 0.15
            }
        );


    revealElements.forEach(
        (element) => {

            revealObserver.observe(
                element
            );

        }
    );

} else {

    /*
        Fallback for older browsers.
        Show all elements normally.
    */

    revealElements.forEach(
        (element) => {

            element.classList.add(
                "reveal"
            );

        }
    );

}

/* =========================================================
   HERO TYPING ANIMATION
========================================================= */


const typingText =
    document.querySelector("#typing-text");


if (typingText) {

    const words = [
        "WEB DEVELOPER",
        "FRONTEND DEVELOPER",
        "JAVASCRIPT DEVELOPER",
        "UI CREATOR"
    ];


    let wordIndex = 0;
    let charIndex = 0;
    let deleting = false;


    function typeEffect() {


        const currentWord =
            words[wordIndex];


        if (!deleting) {

            typingText.textContent =
                currentWord.substring(
                    0,
                    charIndex++
                );


            if (charIndex > currentWord.length) {

                deleting = true;

                setTimeout(
                    typeEffect,
                    1500
                );

                return;

            }


        } else {


            typingText.textContent =
                currentWord.substring(
                    0,
                    charIndex--
                );


            if (charIndex < 0) {

                deleting = false;

                wordIndex =
                    (wordIndex + 1) % words.length;

            }

        }


        setTimeout(
            typeEffect,
            deleting ? 50 : 100
        );

    }


    typeEffect();

}