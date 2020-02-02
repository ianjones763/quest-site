/*
 * questAnimations.js
 *************************
 * Handles animations in quest.html
 * Animates the given divs when they are visible in the viewport.
 * 
 * Usage: 
 * Add div id to 'divsToReveal' array, make sure opacity starts at 0 in quest.css
 */


// Divs that will be revealed when scrolled to in viewport
const divsToReveal = [
    ".overview-bg", 
    "#screen-1", 
    "#screen-2", 
    "#screen-3", 
    "#screen-4", 
    "#screen-5", 
    "#screen-6", 
    "#screen-7", 
    "#screen-8", 
    "#screen-9", 
    "#screen-10", 
    "#screen-11",
    "#footer", 
]


/*
 * Animates divs appearing when they scroll into view
 */
function revealWhenReached(divsToReveal) {

    // Detects whether div is in viewport
    var isInViewport = function (elem) {
        var bounding = elem.getBoundingClientRect();
        return (
            (bounding.top < 600) ||     // div in viewport
            (window.innerHeight + window.scrollY + 30 >= document.body.offsetHeight)    // Hit bottom of page
        );
    };

    // Iterate through all divs that need animations and do those animations when in viewport
    $(window).scroll(function (event) {
        var top = $(this).scrollTop();

        divsToReveal.forEach(element => {
            if (isInViewport(document.querySelector(element))) {
                // animate footer logo
                if (element.trim().valueOf() === "#footer".trim().valueOf()) {
                    document.querySelector(element).style.animationName = "pulse";
               
                // animate screens appearing
                } else {
                    $(element).animate({
                        opacity:1
                    }, {duration: 1000});
                }
            } 
        });
    });
}

revealWhenReached(divsToReveal);