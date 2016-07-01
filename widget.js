/**
 * Tooltip on error
 */
.likebtn-im {
    display: inline;
    position: relative;
    text-decoration: none !important;
}
.likebtn-im:hover:after {
    background: #333;
    background: rgba(0,0,0,.8);
    border-radius: 5px;
    bottom: 26px;
    color: #fff;
    content: attr(title);
    left: 0;
    padding: 5px 15px;
    position: absolute;
    z-index: 98;
    width: 220px;
    min-width: 40px;
    font-size: 12px;
}
.likebtn-im:hover:before {
    border: solid;
    border-color: #333 transparent;
    border-width: 6px 6px 0 6px;
    bottom: 20px;
    content: "";
    left: 16px;
    position: absolute;
    z-index: 99;
}

.likebtn-wrapper * {
    background-attachment: scroll;
    font-family: "Helvetica Neue",Arial,sans-serif;
    font-size: 12px;
    font-weight: 700;
    margin: 0;
    padding: 0;
    border-width: 0;
    text-decoration: none;
    text-transform: none;
    direction: rtl;
    text-indent: 0;
    text-shadow: none;
    -moz-box-sizing: content-box;
    box-sizing: content-box;
    /*line-height: 16px;*/
}
.likebtn-wrapper {
    cursor: default;
    line-height: 16px;
    display: inline-block;
    white-space: nowrap;
    direction: rlt;
    text-indent: 0;
    position: relative;
}
.likebtn-button {
    line-height: inherit;
}
/* AddThis */
/* To prevent scrolling in Chrome when LikeBtn is embedded */
#_atssh {
    display: none;
}
/* Reset styles */
.likebtn-wrapper .lb-tt-m a {
    border: 0 !important;
}
/* like */
.lb-like,
.lb-dislike {
    background-color: #787869;
    -webkit-border-radius: 2px;
    -moz-border-radius: 2px;
    border-radius:2px;
    color: #F2F2F2;
    display: inline-block;
    /*float: left;*/
    height: 19px;
    margin-right: 3px;
    overflow: visible;
    padding: 1px 0 1px 3px;
}
.lb-counter-clickable.lb-like,
.lb-counter-clickable.lb-dislike {
    cursor: pointer;
}
.lb-like .lb-a,
.lb-dislike .lb-a {
    display: inline-block;
    color: #787869;
    /*float: left;*/
    overflow: visible;
    position: relative;
    text-decoration: none;
    outline: none;
    /*vertical-align: middle;*/
    top: 1px;
}
.lb-like-label,
.lb-dislike-label {
    color: #DDDDDD;
    cursor: pointer;
    /*float: left;*/
    padding: 0 6px 0 1px;
    position: relative;
    /*top: 1px;*/
    vertical-align: middle;
}
/*.lb-like .lb-a:hover .lb-like-label,
.lb-dislike .lb-a:hover .lb-dislike-label {
    color: white;
}*/
.lb-like-icon,
.lb-dislike-icon {
    display: inline-block;
    cursor: pointer;
    height: 16px;
    margin-right: 2px;
    width: 16px;
    vertical-align: middle;
}
.lb-voted .lb-like-icon,
.lb-voted .lb-a:hover .lb-like-icon,
.lb-style-gray .lb-voted .lb-like-icon,
.lb-style-gray .lb-voted .lb-a:hover .lb-like-icon,
.lb-style-white .lb-voted .lb-like-icon,
.lb-style-white .lb-voted .lb-a:hover .lb-like-icon,
.lb-style-black .lb-voted .lb-like-icon,
.lb-style-black .lb-voted .lb-a:hover .lb-like-icon,
.lb-style-padded .lb-voted .lb-like-icon,
.lb-style-padded .lb-voted .lb-a:hover .lb-like-icon,
.lb-style-drop .lb-voted .lb-like-icon,
.lb-style-drop .lb-voted .lb-a:hover .lb-like-icon,
.lb-style-lightgray .lb-voted .lb-like-icon,
.lb-style-lightgray .lb-voted .lb-a:hover .lb-like-icon,
.lb-style-transparent .lb-voted .lb-like-icon,
.lb-style-transparent .lb-voted .lb-a:hover .lb-like-icon {
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAa9JREFUeNpi/P//PwMlgAVMHmHEq2jrKcE+d5OvhWuOCGRG2L2aARa0gVjMBCb/o+F/CHruLglrF/2PeQx//zMoiHwNg8tBAcQAkOBfKEbSPHWrtKCH/ttNzIzMzCgW/MVmALLtQLx0v1hMuOWLx+L8DEIwsYevONfCLUE2YNZOSZa5uyUsQZJTtkrzH7/GvSfM6v0iAW4mboZ/jGCDX739//73b6bXU7ZJ8yMbwAiKhZvzOO4oS/1XZmH8xfj5O/NPTg4mNrBrGBkhzkLy8/df/34dv8Wz1K30QxLcgN+b2P4zMjMygAz4w8D6H6IZ6iVYBCHHNlCMxesXIzwaGUEif5E04bAdZtjf33//sqAEIjCKwPgfUkyAxUBmMCLFEsSi60/ZL2PGAlwzI4IPYsMMBhsEYd94zjsTJSX++/P3PxMoEEBO/IfkZmakKGaEiH/9+e/np+/Mc1BccOoe545fP//+QdgMxb//I3mJAep8juNpVs//oBhgo/DVi4vlHyvIJhaG34zzjonq77rKM/HqE+ZLX7//+wFJYJAQvPWapw85JTJSmhuZGCgEAAEGALUy2V/YiVadAAAAAElFTkSuQmCC);
    background-position: center center;
    background-repeat: no-repeat;
}
.lb-voted .lb-dislike-icon,
.lb-voted .lb-a:hover .lb-dislike-icon,
.lb-style-gray .lb-voted .lb-dislike-icon,
.lb-style-gray .lb-voted .lb-a:hover .lb-dislike-icon,
.lb-style-white .lb-voted .lb-dislike-icon,
.lb-style-white .lb-voted .lb-a:hover .lb-dislike-icon,
.lb-style-black .lb-voted .lb-dislike-icon,
.lb-style-black .lb-voted .lb-a:hover .lb-dislike-icon,
.lb-style-padded .lb-voted .lb-dislike-icon,
.lb-style-padded .lb-voted .lb-a:hover .lb-dislike-icon,
.lb-style-drop .lb-voted .lb-dislike-icon,
.lb-style-drop .lb-voted .lb-a:hover .lb-dislike-icon,
.lb-style-lightgray .lb-voted .lb-dislike-icon,
.lb-style-lightgray .lb-voted .lb-a:hover .lb-dislike-icon,
.lb-style-transparent .lb-voted .lb-dislike-icon,
.lb-style-transparent .lb-voted .lb-a:hover .lb-dislike-icon {
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAbZJREFUeNpi/P//PwMlgAVMLmdkWHRG3DfK5N0mhn+MDAyM/xm+/vj348Fb1ltPP3Luf/KRc16a1bNLDEApBph9kRAGI9gFqxgZTtzj3m8i/8sBr21Mvxm//WL6fe4J526byi9eIDEmEDHrmCSLpvQPSwZmIIcZKgqiWRkhbCTMxs7MYqb03QPFC3ycf1O4uZjYIULI7oR7EiIOlWJiYGZEkdaQ/JwOcQtQHOQlkDQjlA0H/yGu+IclEDWlf+oyMDNDFP1H04BiKNRgdAOYOYG6kS1jRJgBihEIjRD7/xehGGzHvqtc87//+fcLHliMsICE+hvouO+/gPLQQL73hukuigFuhh+TFh6WEFtxXDD81af/78HuYgLqZP7P8B/ottN32fYuPCIhBtK88JCQ1cFbQhpwx4LTwT6I+1YeFckOtvw4BSb54cu/rzsvCGdE279agpEoHP8jRRLU2fJi34MhbmJgePme4d2GUxIq2V5P3yNHBEoYwQ1gZkAEFBD//ff3746LYn7Z3kDNjAyogYgGmOAmAlkP3nCvAgXcnov8k5LdXhxFCVBGNIwSBhQAJgYKAUCAAQC7oZf4VP0WbQAAAABJRU5ErkJggg==);
    background-position: center center;
    background-repeat: no-repeat;
}
.lb-count {
    border-left: 1px solid darkgray;
    display: inline-block;
    font-weight: normal;
    height: 16px;
    padding: 0 7px 0 6px;
    position: relative;
    top: 1px;
    vertical-align: middle;
}
.lb-counter-type-single-number .lb-count {
    left: 100%;
    position: absolute;
}
.lb-hidden {
    display: none;
}

/* Custom Style */
.lb-style-custom .lb-like,
.lb-style-custom .lb-dislike {
    background-color: #fafafa;
    border: 1px solid #C6C6C6;
    color: #555555;
    padding-top: 0;
    padding-bottom: 0;
    padding-left: 4px;
}
.lb-style-custom .lb-like-label,
.lb-style-custom .lb-dislike-label {
    color: #555555;
    /*vertical-align: baseline;*/
}
.lb-style-custom .lb-voted .lb-a:hover .lb-like-label,
.lb-style-custom .lb-voted .lb-a:hover .lb-dislike-label {
    font-family: Arial,sans-serif;
    font-weight: bold;
}
.lb-style-custom .lb-count {
    border-left: 0;
    color: black;
    height: auto;
    top: 0;
    font-family: Arial,sans-serif;
    /*vertical-align: baseline;*/
    padding-left: 2px;
    padding-right: 6px;
}
.lb-style-custom .lb-like-icon,
.lb-style-custom .lb-dislike-icon {
    height: auto;
    width: auto;
    vertical-align: middle;
    font-size: 14px;
    /*position: relative;
    top: 1px;*/
}
.lb-style-custom .lb-like-icon,
.lb-style-custom .lb-dislike-icon,
.lb-style-custom .lb-a:hover .lb-like-iconn,
.lb-style-custom .lb-a:hover .lb-dislike-icon {
    background-image: none;
}
.lb-style-custom .lb-voted .lb-a:hover .lb-like-icon,
.lb-style-custom .lb-voted .lb-a:hover .lb-dislike-icon {
    background-image: none;
}
.lb-style-custom .lb-like .lb-a,
.lb-style-custom .lb-dislike .lb-a {
    line-height: inherit;
    top: 0;
}
/*.lb-style-custom .lb-a:hover .lb-fi,
.lb-style-custom .lb-a:hover .likebtn-label,
.lb-style-custom .lb-voted .lb-a .lb-fi,
.lb-style-custom .lb-voted .likebtn-label {
    filter: brightness(0.7);
    -webkit-filter: brightness(70%);
}*/
.lb-style-custom .lb-a:hover .lb-fi,
.lb-style-custom .lb-voted .lb-a .lb-fi {
    color: #fbae05;
}
.lb-style-custom .lb-a:hover .likebtn-label,
.lb-style-custom .lb-voted .likebtn-label {
    color: #3b3b3b;
}

.lb-style-custom img.likebtn-icon {
    margin: 0 !important;
    display: inline-block !important;
}
.lb-style-custom img.lb-icon-v {
    display: none !important;
}
.lb-style-custom .lb-a:hover img.likebtn-icon,
.lb-style-custom .lb-voted img.likebtn-icon {
    display: none !important;
}
.lb-style-custom .likebtn-icon {
    line-height: inherit;
}
.lb-style-custom .lb-a:hover img.lb-icon-v,
.lb-style-custom .lb-voted img.lb-icon-v {
    display: inline-block !important;
}

/* styles */

/* gray */
.lb-style-gray .lb-like,
.lb-style-gray .lb-dislike {
    background-color: #787869;
    border: 1px solid darkgray;
    color: #F2F2F2;
}
.lb-style-gray .lb-like-label,
.lb-style-gray .lb-dislike-label {
    color: #DDDDDD;
}
.lb-style-gray .lb-voted .lb-a:hover .lb-like-label,
.lb-style-gray .lb-voted .lb-a:hover .lb-dislike-label {
    color: black;
}
.lb-style-gray .lb-count {
    border-left: 1px solid darkgray;
    color: #F2F2F2;
}
.lb-style-gray .lb-like-icon {
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAOdJREFUeNpi/P//PwMlgAVEvH79Gr8iFpYYILUYiB3+/PlzECQmKioKlmMiaAMLixKQmgrleqDLMxHQzAmklgExHy41THg0mwOpc0BsjiS8C6sBQMVMQKwIZXMAcSuQeQSINZDUngHiTyB5bC5YBcT3oOw7QFwFC2AkYAI15DbQkEyYICMoGt+/f/8HyGYGhjAjUJKoeBUUFGREdgEzidH/gahYwAPWUGrAEnQDfpCg+TEQH0Y3oAOI3xBpwDJgYP9DiQX0vACMCSkg5QxK+0DsCMSKSNJ6QAMuw/ICI6W5kYmBQgAQYADyITumZQLTlAAAAABJRU5ErkJggg==);
}
.lb-style-gray .lb-dislike-icon {
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAOxJREFUeNpi/P//PwMlgAVEvH79moGFhUUXyLyEJHcfiPcD8QEg3vvnz59nyBpFRUXBNBOSWDSa4YpAnATEi4D4KdACsFOB9GsgrocpYgR54f379yCDHgCxLD7nAl3BCDXoh6CgICeyC2wJaUYDHDAGzIAYcgMRZkAIpQYIkKjvL7oBWUD8hICmp0jsDSgGAEN3OpBSBWITID6DHvhA3AbEKlC+EhCHoSQkqCE/gFHEBzUEBm4AcQJQ7iSSuvsYKREJuCGxQZocgRq+ExOI6OATEEcR0ozNgB1QOhuo+R4x0cFIaW5kYqAQAAQYADELSkbXzafwAAAAAElFTkSuQmCC);
}
.lb-style-gray .lb-a:hover .lb-like-icon {
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAALVJREFUeNpi/P//PwMlgIlIdTFADLLJnhwDlIB4KpTtQaoBnEC8DIj5cKoAhQEObA7E1/+jAkd0dTAGExArQtkcQNwKxL/RNJ8GYmOoPIYBa6CKQOwn//GDx0CcCTOAERqNf4CYGYgZoaFNDGBEDkRmEqP/A6npAB2sodSAJXB/QMPgOxBzEBkGj4FYAYj/IbugA4jfEGn7MphmfAlJCohjgXguEN9Di0ZdZLWM9MqNOAFAgAEAOxbz5DBEQ6IAAAAASUVORK5CYII=);
}
.lb-style-gray .lb-a:hover .lb-dislike-icon {
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAMhJREFUeNpi/P//PwMlgAmJrQvE/5HwPSCeC8SxQCyF0wSQC6C44z9hAFL3GojrYfoYoV4AueQBEMsScDEj1HU/gJgT2Qu2RGhGBhzoYRBDbiDCvPAeiAWIUQ/1AowNN4DYuIQZ8BeIWZC9kAXETwhoforE3oAtGjmA2BiIT6NF3W8gboXKg9QpAjETTB+yASDsiKb5OhCbo6lBwSxoznRDYp8EYkcg/k5sUkYGn4A4ipBm9DAAYXuo02PwORsZM1IzN5IFAAIMAAK6+QzC4MBfAAAAAElFTkSuQmCC);
}
.lb-style-gray .lb-like .lb-a:hover .lb-like-label,
.lb-style-gray .lb-dislike .lb-a:hover .lb-dislike-label {
    color: white;
}
.lb-style-gray .lb-like.lb-voted .lb-a:hover .lb-like-label,
.lb-style-gray .lb-dislike.lb-voted .lb-a:hover .lb-dislike-label {
    color: #DDDDDD;
}

/* lightgray */
.lb-style-lightgray .lb-like,
.lb-style-lightgray .lb-dislike {
    background-color: #DDDDDD;
    border: 1px solid darkgray;
    color: #F2F2F2;
}
.lb-style-lightgray .lb-like-label,
.lb-style-lightgray .lb-dislike-label {
    color: black;
}
.lb-style-lightgray .lb-voted .lb-a:hover .lb-like-label,
.lb-style-lightgray .lb-voted .lb-a:hover .lb-dislike-label {
    color: black;
}
.lb-style-lightgray .lb-count {
    border-left: 1px solid darkgray;
    color: black;
}
.lb-style-lightgray .lb-like-icon {
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAANJJREFUeNpi/P//PwNFgBgDjI2NY4D4PxDbI+sDYSYiNCsBqalQrge6PBMBzZxAahkQ8+FSw4RHszmQOgfE5kjCu7AaAFTMBMSKUDYHELcCmUeAWANJ7Rkg/gSSx+aCVUB8D8q+A8RVQMyCZpkJ1JDbQEMy0Q0IQFIoTSBcZYB4GroBzCTG/geiYgEPWEOpAUvQDfhBgubHQHwY3YAOIH5DpAHLzp49+w/GYQSlZ0ZGRvREJAWknIHYAYgdgVgRSVoPaMBlWB5ipDQ3MjFQCAACDABT2TqHSqUZngAAAABJRU5ErkJggg==);
}
.lb-style-lightgray .lb-dislike-icon {
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAOFJREFUeNpi/P//PwMlgAVEMDIyMhgbG+sCmZeQ5O4D8X4gPgDEe8+ePfsMWSPMYiYksWg0wxWBOAmIFwHxU6AFYB1A+jUQ18MUMUEFQXQUka4WAeIKFAOAwBaIZUnwOge6ATHkBiLMgBBKDRAgUd9fdAOygPgJAU1PkdgbUAwAxvF0IKUKxCZAfAZN4x8gbgNiFShfCYjDYJKMoAQBSkjQ6HQEUvuQNN8A4gSgBSfRnQNLSCxo4m5IbJAmR6Dm78QEIjr4BEpYhDRjM2AHlM4Gar5HTHQwUpobmRgoBAABBgDY5D42oSSyzgAAAABJRU5ErkJggg==);
}
.lb-style-lightgray .lb-a:hover .lb-like-icon {
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAANhJREFUeNpi/P//PwMlgBFkQHCgB15F6uqKMUBqMRA73Lx5/yBIbO36HWA5JkI2ADUrAampUC6GTUwENHMCqWVAzIdLDRMezeZA6hwQmyMJ78JqAFAxExArQtkcQNwKZB4BYg0ktWeA+BNIHpsLVgHxPSj7DhBXATELmmUmUENuAw3JRDcgAEmhNIFwlQHiaegGMJMY/R+IigU8YA2lBixBN+AHCZofA/FhdAM6gPgNkQYsAybnfygGAAUagVgUymaExkQcEM8D4vtoBizFyEwU50ZKAECAAQAmQzq+KkovGQAAAABJRU5ErkJggg==);
}
.lb-style-lightgray .lb-a:hover .lb-dislike-icon {
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAOBJREFUeNpi/P//PwMlgAVEBAd6MKirK+oCmZeQ5O4D8X4gPgDEe2/evP8MWePa9TvANBOSWDSa4YpAnATEi4D4KdACsFOB9GsgrocpYoIKgugoIl0tAsQVKAYAgS0Qy5LgdQ50A2LIDUSYASGUGiBAor6/6AZkAfETApqeIrE3oBgAjOPpQEoViE2A+Ayaxj9A3AbEKlC+EhCHoSQkqCE/gNHJBzUEBm4AcQJQ7iSSuvsYKREJuCGxQZocgRq+ExOI6OATKGER0ozNgB1QOhuo+R4x0cFIaW5kYqAQAAQYANsvPnjUzDQHAAAAAElFTkSuQmCC);
}
.lb-style-lightgray .lb-a:hover .lb-like-label,
.lb-style-lightgray .lb-a:hover .lb-dislike-label {
    color: #787869;
}
/* white */
.lb-style-white .lb-like,
.lb-style-white .lb-dislike,
.lb-style-padded .lb-like,
.lb-style-padded .lb-dislike,
.lb-style-drop .lb-like,
.lb-style-drop .lb-dislike {
    background-color: #fafafa;
    border: 1px solid #C6C6C6;
    color: #555555;
}
.lb-style-white .lb-like-label,
.lb-style-white .lb-dislike-label,
.lb-style-padded .lb-like-label,
.lb-style-padded .lb-dislike-label,
.lb-style-drop .lb-like-label,
.lb-style-drop .lb-dislike-label {
    color: #555555;
}
.lb-style-white .lb-voted .lb-a:hover .lb-like-label,
.lb-style-white .lb-voted .lb-a:hover .lb-dislike-label,
.lb-style-padded .lb-voted .lb-a:hover .lb-like-label,
.lb-style-padded .lb-voted .lb-a:hover .lb-dislike-label,
.lb-style-drop .lb-voted .lb-a:hover .lb-like-label,
.lb-style-drop .lb-voted .lb-a:hover .lb-dislike-label {
    color: black;
}
.lb-style-white .lb-count,
.lb-style-padded .lb-count,
.lb-style-drop .lb-count {
    border-left: 1px solid #C6C6C6;
    color: black;
}
.lb-style-white .lb-like-icon,
.lb-style-padded .lb-like-icon,
.lb-style-drop .lb-like-icon {
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAANhJREFUeNpi/P//PwMlgBFkQHCgB15F6uqKMUBqMRA73Lx5/yBIbO36HWA5JkI2ADUrAampUC6GTUwENHMCqWVAzIdLDRMezeZA6hwQmyMJ78JqAFAxExArQtkcQNwKZB4BYg0ktWeA+BNIHpsLVgHxPSj7DhBXATELmmUmUENuAw3JRDcgAEmhNIFwlQHiaegGMJMY/R+IigU8YA2lBixBN+AHCZofA/FhdAM6gPgNkQYsAybnfygGAAUagVgUymaExkQcEM8D4vtoBizFyEwU50ZKAECAAQAmQzq+KkovGQAAAABJRU5ErkJggg==);
    background-position: center center;
    background-repeat: no-repeat;
}
.lb-style-white .lb-dislike-icon,
.lb-style-padded .lb-dislike-icon,
.lb-style-drop .lb-dislike-icon {
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAOBJREFUeNpi/P//PwMlgAVEBAd6MKirK+oCmZeQ5O4D8X4gPgDEe2/evP8MWePa9TvANBOSWDSa4YpAnATEi4D4KdACsFOB9GsgrocpYoIKgugoIl0tAsQVKAYAgS0Qy5LgdQ50A2LIDUSYASGUGiBAor6/6AZkAfETApqeIrE3oBgAjOPpQEoViE2A+Ayaxj9A3AbEKlC+EhCHoSQkqCE/gNHJBzUEBm4AcQJQ7iSSuvsYKREJuCGxQZocgRq+ExOI6OATKGER0ozNgB1QOhuo+R4x0cFIaW5kYqAQAAQYANsvPnjUzDQHAAAAAElFTkSuQmCC);
    background-position: center center;
    background-repeat: no-repeat;
}
.lb-style-white .lb-a:hover .lb-like-icon,
.lb-style-padded .lb-a:hover .lb-like-icon,
.lb-style-drop .lb-a:hover .lb-like-icon {
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAANJJREFUeNpi/P//PwNFgBgDjI2NY4D4PxDbI+sDYSYiNCsBqalQrge6PBMBzZxAahkQ8+FSw4RHszmQOgfE5kjCu7AaAFTMBMSKUDYHELcCmUeAWANJ7Rkg/gSSx+aCVUB8D8q+A8RVQMyCZpkJ1JDbQEMy0Q0IQFIoTSBcZYB4GroBzCTG/geiYgEPWEOpAUvQDfhBgubHQHwY3YAOIH5DpAHLzp49+w/GYQSlZ0ZGRvREJAWknIHYAYgdgVgRSVoPaMBlWB5ipDQ3MjFQCAACDABT2TqHSqUZngAAAABJRU5ErkJggg==);
}
.lb-style-white .lb-a:hover .lb-dislike-icon,
.lb-style-padded .lb-a:hover .lb-dislike-icon,
.lb-style-drop .lb-a:hover .lb-dislike-icon {
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAOFJREFUeNpi/P//PwMlgAVEMDIyMhgbG+sCmZeQ5O4D8X4gPgDEe8+ePfsMWSPMYiYksWg0wxWBOAmIFwHxU6AFYB1A+jUQ18MUMUEFQXQUka4WAeIKFAOAwBaIZUnwOge6ATHkBiLMgBBKDRAgUd9fdAOygPgJAU1PkdgbUAwAxvF0IKUKxCZAfAZN4x8gbgNiFShfCYjDYJKMoAQBSkjQ6HQEUvuQNN8A4gSgBSfRnQNLSCxo4m5IbJAmR6Dm78QEIjr4BEpYhDRjM2AHlM4Gar5HTHQwUpobmRgoBAABBgDY5D42oSSyzgAAAABJRU5ErkJggg==);
}
.lb-style-white .lb-a:hover .lb-like-label,
.lb-style-white .lb-a:hover .lb-dislike-label,
.lb-style-padded .lb-a:hover .lb-like-label,
.lb-style-padded .lb-a:hover .lb-dislike-label,
.lb-style-drop .lb-a:hover .lb-like-label,
.lb-style-drop .lb-a:hover .lb-dislike-label {
    color: black;
}
.lb-style-white.lb-counter-type-single-number .lb-count,
.lb-style-lightgray.lb-counter-type-single-number .lb-count,
.lb-style-gray.lb-counter-type-single-number .lb-count,
.lb-style-black.lb-counter-type-single-number .lb-count {
    line-height: 21px;
    border-left: none;
}

/* black */
.lb-style-black .lb-like,
.lb-style-black .lb-dislike {
    background-color: black;
    color: #F2F2F2;
}
.lb-style-black .lb-voted .lb-a:hover .lb-like-label,
.lb-style-black .lb-voted .lb-a:hover .lb-dislike-label {
    color: #DDDDDD;
}
.lb-style-black .lb-like-icon {
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAN1JREFUeNpiYKAiCAsLe/funbW1NVGqFRQUHj58CNRQV1eHLM6EVTUHB8fs2bN5eXmJMtvY2PjkyZPvYMDW1hbdBiYmJnl5eSCDnZ29pqZm+/btqqqqEOnz589//vwZKI5i5MKFC4EmARlXr159hw1cuXIlKSkJopgRiF+/fs3MzCwkJATRhgsAFUCdBFRN0GMfP37EF0qYYNOmTaRpWLVqFULDz58/8at++vTp8ePHERomTJjw9u1bPBrWrFnz798/RCghAwkJCXt7exswgEQOEADZ165dY6ATAAgwAI8mZnF/t8IDAAAAAElFTkSuQmCC);
}
.lb-style-black .lb-dislike-icon {
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAANxJREFUeNpiYCARMEIoLS2tI0eOQNgPHz48AgYHDx588eIFdn319fXvcACg7O3bt8vLyxE2MDExXbx4UVpaGqtZQkJCQG0/f/6UlJQEKQZiS0tLXKrhgJ2dHcIAaQgLCyPe0yANfn5+pGng5+cnqO7v378IDSUlJc+ePcOq7vnz5xDGtm3b0P1kYGCwd+9eeGi+evWqpqYG4ld5eXlgSKIbZmtrC1d98uRJY2NjrHaywFmOjo4QxtmzZ319fX/8+IHT08jg8+fPqampuFSjAGtra6BjSIoT2gCAAAMAOHNxL8REw8cAAAAASUVORK5CYII=);
}
.lb-style-black .lb-a:hover .lb-like-icon,
.lb-style-github .lb-like-icon,
.lb-style-github .lb-voted .lb-like-icon,
.lb-style-github .lb-like .lb-a:hover .lb-like-icon {
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAALVJREFUeNpi/P//PwMlgIlIdTFADLLJnhwDlIB4KpTtQaoBnEC8DIj5cKoAhQEObA7E1/+jAkd0dTAGExArQtkcQNwKxL/RNJ8GYmOoPIYBa6CKQOwn//GDx0CcCTOAERqNf4CYGYgZoaFNDGBEDkRmEqP/A6npAB2sodSAJXB/QMPgOxBzEBkGj4FYAYj/IbugA4jfEGn7MphmfAlJCohjgXguEN9Di0ZdZLWM9MqNOAFAgAEAOxbz5DBEQ6IAAAAASUVORK5CYII=);
}
.lb-style-black .lb-a:hover .lb-dislike-icon,
.lb-style-github .lb-dislike-icon,
.lb-style-github .lb-voted .lb-dislike-icon,
.lb-style-github .lb-dislike .lb-a:hover .lb-dislike-icon {
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAMhJREFUeNpi/P//PwMlgAmJrQvE/5HwPSCeC8SxQCyF0wSQC6C44z9hAFL3GojrYfoYoV4AueQBEMsScDEj1HU/gJgT2Qu2RGhGBhzoYRBDbiDCvPAeiAWIUQ/1AowNN4DYuIQZ8BeIWZC9kAXETwhoforE3oAtGjmA2BiIT6NF3W8gboXKg9QpAjETTB+yASDsiKb5OhCbo6lBwSxoznRDYp8EYkcg/k5sUkYGn4A4ipBm9DAAYXuo02PwORsZM1IzN5IFAAIMAAK6+QzC4MBfAAAAAElFTkSuQmCC);
}
.lb-style-black .lb-like .lb-a:hover .lb-like-label,
.lb-style-black .lb-dislike .lb-a:hover .lb-dislike-label {
    color: white;
}

/* padded */
.lb-style-padded .lb-like,
.lb-style-padded .lb-dislike,
.lb-style-drop .lb-like,
.lb-style-drop .lb-dislike {
    height: 34px;
    padding-right: 7px;
}
.lb-style-padded .lb-like-icon,
.lb-style-padded .lb-like-label,
.lb-style-padded .lb-dislike-icon,
.lb-style-padded .lb-dislike-label,
.lb-style-drop .lb-like-icon,
.lb-style-drop .lb-like-label,
.lb-style-drop .lb-dislike-icon,
.lb-style-drop .lb-dislike-label {
    padding-top: 9px;
    padding-bottom: 9px;
}
.lb-style-padded .lb-like-icon,
.lb-style-padded .lb-dislike-icon,
.lb-style-drop .lb-like-icon,
.lb-style-drop .lb-dislike-icon {
    padding-left: 8px;
    background-position: right center;
}
.lb-style-padded .lb-voted .lb-like-icon,
.lb-style-padded .lb-voted .lb-a:hover .lb-like-icon,
.lb-style-padded .lb-voted .lb-dislike-icon,
.lb-style-padded .lb-voted .lb-a:hover .lb-dislike-icon,
.lb-style-drop .lb-voted .lb-like-icon,
.lb-style-drop .lb-voted .lb-a:hover .lb-like-icon,
.lb-style-drop .lb-voted .lb-dislike-icon,
.lb-style-drop .lb-voted .lb-a:hover .lb-dislike-icon {
    background-position: right center;
}
.lb-style-padded.lb-counter-type-single-number .lb-count {
    line-height: 36px;
    border-left: none;
}

/* drop */
.lb-style-drop .lb-like {
    border: 0px solid;
    border-radius: 20px 20px 0 20px;
    margin-right: 24px;
}
.lb-style-drop .lb-dislike {
    border: 0px solid;
	border-radius: 20px 20px 20px 0;
}
.lb-style-drop .lb-like,
.lb-style-drop .lb-dislike {
    cursor: pointer;
    box-shadow: 0 4px 9px #999999;
    background-color:#f5f5f5;
    background-image:-moz-linear-gradient(top, #ffffff, #e6e6e6);
    background-image:-webkit-gradient(linear, 0 0, 0 100%, from(#ffffff), to(#e6e6e6));
    background-image:-webkit-linear-gradient(top, #ffffff, #e6e6e6);
    background-image:-o-linear-gradient(top, #ffffff, #e6e6e6);
    background-image:linear-gradient(bottom, #ffffff, #e6e6e6);
    background-repeat:repeat-x;
    filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffffffff', endColorstr='#ffe6e6e6', GradientType=0);
}
.lb-style-drop .lb-like:hover,
.lb-style-drop .lb-dislike:hover {
    box-shadow: 0 3px 6px #cccccc;
}
.likebtn-wrapper.lb-style-drop {
    margin: 12px;
}
.likebtn-wrapper.lb-style-drop * {
    color: #666666;
    font-family: Candara, Tahoma, Arial, sans-serif;
    font-size: 12px;
    letter-spacing: 0.5px;
    text-shadow: 0 1px 1px #eeeeee;
}
.lb-style-drop.lb-counter-type-single-number .lb-count {
    line-height: 31px;
    border-left: none;
}

/* line */
.lb-style-line .lb-like,
.lb-style-line .lb-dislike {
    /*background-image: linear-gradient(to bottom, #FAFAFA 0px, #DCDCDC 100%);*/
    background-color: #E0E0E0;
    background-image:-webkit-gradient(linear,0 0,0 100%,from(#FAFAFA),to(#DCDCDC));
    background-image: -moz-linear-gradient(center top , #FAFAFA, #DCDCDC);
    background-image:-o-linear-gradient(top,#FAFAFA,#DCDCDC);
    background-image:-ms-linear-gradient(top,#FAFAFA,#DCDCDC);
    background-image:linear-gradient(top,#FAFAFA,#DCDCDC);
    filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#FFFAFAFA', endColorstr='#FFDCDCDC', GradientType=0);
    color: #333333;
    text-shadow: 0 1px 0 #FFFFFF;
    font-family: 'Helvetica Neue',Arial,'Liberation Sans',FreeSans,sans-serif;
    border-color: #CCCCCC #CCCCCC #AAAAAA;
    border-radius: 2px 2px 2px 2px;
    border-style: solid;
    border-width: 1px;
    box-shadow: 0 0 1px #FFFFFF inset;
}
.lb-style-line .lb-like-label,
.lb-style-line .lb-dislike-label {
    color: #333333;
    text-shadow: 0 1px 0 #FFFFFF;
    font-family: 'Helvetica Neue',Arial,'Liberation Sans',FreeSans,sans-serif;
}
.lb-style-line .lb-a:hover .lb-like-label,
.lb-style-line .lb-voted .lb-like-label,
.lb-style-line .lb-voted .lb-a:hover .lb-like-label {
    color: #87A253;
}
.lb-style-line .lb-a:hover .lb-dislike-label,
.lb-style-line .lb-voted .lb-dislike-label,
.lb-style-line .lb-voted .lb-a:hover .lb-dislike-label {
    color: #C94143;
}
.lb-style-line .lb-like-icon,
.lb-style-line .lb-dislike-icon {
    margin-right: 3px;
}
.lb-style-line .lb-like-icon {
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAN9JREFUeNpi/P//PwNFAGQAEYbYAvEVIM5A18tEpD2RQMwDxLroEsQYwAfEZkC8H4gZyTFgFRBvhKr9SGoYLAbi1VDNl4BYFV0vCx6bo4BYE4hNgNgdKvaaGBdwAXEaNNQdoGJKQHwciI8B8RkgngHE0mB9SAb4AvFBID4KxCeA2BmLqwSg4ltAatANANlsCsSSRATsChBGD4NvQHyayHTBCsTPSUmJyIAdiO8BsQspKRE9kEGu/QvisBChgRmI5aFp4R80StmgKZMoA0CKq4BYG2oAMzRxgQEjpdkZIMAABl1ayykueNgAAAAASUVORK5CYII=);
}
.lb-style-line .lb-dislike-icon {
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAPpJREFUeNqk08+qQVEUx3EbKX+6pcwYSGYmJka6FAN1u3gD5Qk8CCNjhkZmngFdpUhMvYKBurrJPb5L++jQOTlY9fEnrd/e1t5HGYbheaf85gellJe3NvI4Qb4v0MLRrvmyuLzoXfiwRQMppJHUQR43Ad9YIeJ2+9Lnvfs7Ifw+MwNrQBUz/L8aEMOfi544cgjeByQQRQEfNo1f+MEQHXxeB6GHKBPvY44pJno1qQrWaJor252CtWQnG30npJaoPzpGa2V1k9QIPadjVGYzN9H6WxcB7JBBzSnA7zDpsGSijKLbY7wJRwljHF4JkAHuMXh0KdS7j/NZgAEAHgNbaV9w8mAAAAAASUVORK5CYII=);
}
.lb-style-line .lb-a:hover .lb-like-icon,
.lb-style-line .lb-voted .lb-like-icon,
.lb-style-line .lb-voted .lb-a:hover .lb-like-icon {
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAYBJREFUeNqkk79LQlEUx7/X98MfaUolQUutEQ0SRAWCEZFL1FJUSFARNZQQNESO0dDYPxD9mmzJJVoksKGhxrbGCqWwlOcTU997nUck9RJ85r3DhXPu+Zxz7vlepmkaGlo6oBbEPw//ZAT3w0tYNcZazCSxuzDLC3AKVvQafTUBQzNoJkC/lMYVGO16AZ4ORHNviFGkRVWQrQsQXMcJBUmZJHZtzfAVcjgwDQgsYs7ahO7LfUw5WzCq25QiXo33+D8vHoKDtyHkbkc4/Yg13VYu40EtQfZ24WJiC2JBwp2cwQ65ntn3CAMLbNzlxSZj4KlfLpNCJHGM+E/44DQ8gg19zlZs0FTaYnvaQKUCtYx4NoUUNDxdnyJZra2bKDJ0xINhLBcV5H61QEF5Om7N6IKqFJTSVxJLvcolXVgdHvg+ZJz/C8A4OKjdPL2cUnUKxjWyAo7m3wld9gyqaMcYQcTEESnz0ARAfofo9mKbNNFDWVVmASe94KxSUaPf+VOAAQAgYHmdUmgTYwAAAABJRU5ErkJggg==);
}
.lb-style-line .lb-a:hover .lb-dislike-icon,
.lb-style-line .lb-voted .lb-dislike-icon,
.lb-style-line .lb-voted .lb-a:hover .lb-dislike-icon {
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAXNJREFUeNqkk80rRFEYh58z55qFj4VpFhoSWQgL9lMUC1HIhj/DaqLkY6N8zAhrpZRiY2Gj2M7GQmZhSllYSQ2aMsNouHO8V83NaJgZTt3bed/b7+n9+F1ljOE/R+UBIWV5OmHNjwpKxlbgSWIuEjAVwn4rJna0Vj5oF1grajyOWUxDVFIegbzfC+y3ClzAMwxlIS3iwxnsdLkteNxeBFYF1Q/wUskMXIAPNXIHZ2HsXCUAtwUv+KWFx1KCFXSjhoC0fClhxgXUQlMKcuvo3gzEZrGfvgo30cNtqHkpLyfP2w1mSdIn7hpXldUSQM35oFvGnpWsucJMTGPfbqAHO1CRa0xEStxfwM7k1/j5+m6mZXT9KVZcqgk68TFWTCBjxXxQFBBG9zgi536AdbSL3v7JSG4LSin3ww56SwbllaEm61Bdk7yPlnRi4WpUjcNsgIFzTF9ZPiggC7sZ+hOYaH5gFQHEivFXSCVhr+y/8a/nQ4ABADCXkBRKF2mbAAAAAElFTkSuQmCC);
}
.lb-style-line.lb-counter-type-single-number .lb-count {
    line-height: 21px;
    border-left: none;
}

/* transparent */
.lb-style-transparent .lb-like,
.lb-style-transparent .lb-dislike {
    background-color: transparent;
    color: #555555;
}
.lb-style-transparent .lb-like-label,
.lb-style-transparent .lb-dislike-label {
    color: #555555;
}
.lb-style-transparent .lb-a:hover .lb-like-label,
.lb-style-transparent .lb-a:hover .lb-dislike-label,
.lb-style-transparent .lb-voted .lb-like-label,
.lb-style-transparent .lb-voted .lb-dislike-label,
.lb-style-transparent .lb-voted .lb-a:hover .lb-like-label,
.lb-style-transparent .lb-voted .lb-a:hover .lb-dislike-label {
    color: black;
}
.lb-style-transparent .lb-like-icon {
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAANlJREFUeNpi/P//PwMlgAVEBAd64FWkrq4YA6QWA7HDzZv3D4LE1q7fAZZjImQDULMSkJoK5WLYxERAMyeQWgbEfLjUMOHRbA6kzgGxOZLwLqwGABUzAbEilM0BxK1A5hEg1kBSewaIP4HksblgFRDfg7LvAHEVLICRgAnUkNtAQzLRDQhAUihNIFxlgHgaugHMJEb/B6JiAQ9YQ6kBS9AN+EGC5sdAfBjdgA4gfkOkAcuAyfkfigFAgUYgFoWyGaExEQfE84D4PpoBS5E5jJTmRiYGCgFAgAEAGWE0yLgP968AAAAASUVORK5CYII=);
}
.lb-style-transparent .lb-dislike-icon {
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAOBJREFUeNpi/P//PwMlgAVEBAd6MKirK+oCmZeQ5O4D8X4gPgDEe2/evP8MWePa9TvANBOSWDSa4YpAnATEi4D4KdACsFOB9GsgrocpYoIKgugoIl0tAsQVKAYAgS0Qy5LgdQ50A2LIDUSYASGUGiBAor6/6AZkAfETApqeIrE3oBgAjOPpQEoViE2A+Ayaxj9A3AbEKlC+EhCHoSQkqCE/gNHJBzUEBm4AcQJQ7iSSuvsYKREJuCGxQZocgRq+ExOI6OATKGER0ozNgB1QOhuo+R4x0cFIaW5kYqAQAAQYANsvPnjUzDQHAAAAAElFTkSuQmCC);
}
.lb-style-transparent .lb-a:hover .lb-like-icon {
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAANJJREFUeNpi/P//PwNFgBgDjI2NY4D4PxDbI+sDYSYiNCsBqalQrge6PBMBzZxAahkQ8+FSw4RHszmQOgfE5kjCu7AaAFTMBMSKUDYHELcCmUeAWANJ7Rkg/gSSx+aCVUB8D8q+A8RVQMyCZpkJ1JDbQEMy0Q0IQFIoTSBcZYB4GroBzCTG/geiYgEPWEOpAUvQDfhBgubHQHwY3YAOIH5DpAHLzp49+w/GYQSlZ0ZGRvREJAWknIHYAYgdgVgRSVoPaMBlWB5ipDQ3MjFQCAACDABT2TqHSqUZngAAAABJRU5ErkJggg==);
}
.lb-style-transparent .lb-a:hover .lb-dislike-icon {
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAOFJREFUeNpi/P//PwMlgAVEMDIyMhgbG+sCmZeQ5O4D8X4gPgDEe8+ePfsMWSPMYiYksWg0wxWBOAmIFwHxU6AFYB1A+jUQ18MUMUEFQXQUka4WAeIKFAOAwBaIZUnwOge6ATHkBiLMgBBKDRAgUd9fdAOygPgJAU1PkdgbUAwAxvF0IKUKxCZAfAZN4x8gbgNiFShfCYjDYJKMoAQBSkjQ6HQEUvuQNN8A4gSgBSfRnQNLSCxo4m5IbJAmR6Dm78QEIjr4BEpYhDRjM2AHlM4Gar5HTHQwUpobmRgoBAABBgDY5D42oSSyzgAAAABJRU5ErkJggg==);
}
.lb-style-transparent .lb-count {
    border-left: 0;
    padding: 0;
}
.lb-style-transparent.lb-counter-type-single-number .lb-count {
    line-height: 19px;
}

/* youtube */
.lb-style-youtube .lb-count {
    line-height: 16px;
}
.likebtn-wrapper.lb-style-youtube {
    line-height: 19px;
}
.lb-style-youtube .lb-like-icon,
.lb-style-youtube .lb-dislike-icon {
    height: 19px;
    width: 19px;
}
.lb-style-youtube .lb-like,
.lb-style-youtube .lb-dislike {
    background-color: transparent;
    color: #555555;
    height: 23px;
}
.lb-style-youtube .lb-like-label,
.lb-style-youtube .lb-dislike-label {
    color: #555555;
}
.lb-style-youtube .lb-a:hover .lb-like-label,
.lb-style-youtube .lb-a:hover .lb-dislike-label,
.lb-style-youtube .lb-voted .lb-like-label,
.lb-style-youtube .lb-voted .lb-dislike-label,
.lb-style-youtube .lb-voted .lb-a:hover .lb-like-label,
.lb-style-youtube .lb-voted .lb-a:hover .lb-dislike-label {
    color: black;
}
.lb-style-youtube .lb-like-icon {
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAYBJREFUeNpi/P//PwO1AAuMwcjISJSGtLQ0ByC1HogTZ82atQEkBnMQEyk2Aw1SYGJi2gxkCggJCZWhyzORYhALC8uWf//+8YD4HBwcimQZBvIaMBgu/vnzRxsmJi0t/QVnmOEwRABI9QNxAnJEAV31z8nJaRu6ekaYIuQIgBpSABQrAMrzo2uSlJT8ycbGlvPw4cM9wEh4ADcDxkhPTwe5oACIFwAD2RgYNrpEBueBmTNnOqKHGcgghpCQEGESDAIBB5wR8OnTpyOkJBcpKanfOA37/v37V1IMExUVfU1yOsMFgEnkCtUMMzMzW0kVw3R0dH4Ak8kanIa9fftWkljDFBUVzwDT4icMw1JTU98rKyv/+vbtm6Gnp+cX5FjCBkC5wNjYeD7WHAAEHkCcAsRXQSkExP/69avu9evX2Z48ecJ669YttqdPn7L8+PED7IDIyMgXDg4O6iCXYeQAbOUZUI4PSFkBMSiDW4KCCYj5oNKFQD0rkcszRmqWtAABBgAn/pBDiMkW/AAAAABJRU5ErkJggg==);
}
.lb-style-youtube .lb-dislike-icon {
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAeBJREFUeNqslL1LAmEcx3307nw/dRGpaLm1BodGSXohEhwiXAIHixNqMsS1qX+gltJoioamxhrioLUhGkJwKEQElQyKUDz17vqedHKpxUU+8OW5+93vPs/z/F4eoiiKaVyDaDBCSG9OJpM7mPYhCWpDr9AddA3d5nK5l0FIn6GHAWSlabre6XRcQ6sSooIb8G9gPoceoXnoKJvN3qs+Zv0PVqt1A86OUUeAnYF8eJyiKGo3EolwWGDTYrFcaT7fYPiw1+12zQbCQ9dqNRGLmyRJ8g/BcERWluVJo8EGyD5o68NYll3Hrqj/ZLMPQ+B5wMhYYK1Wa/a/dWbWZctm9CdkU/H5fO8oIYITKUMwv9/fdjgcMjL6a0uo3z0eTyefz094vV4pFovVhzoA4xLpnikWi15BENhyuUzrY6gWtd1ul0Oh0Ec0Gn3Ajs5g3oIOoIvejnXOawBPV6vVpUqlcqwH2Ww2heM4MZFIlNxu9wlMh18dcapvJ2qgZUqpVGpBFEVaszmdTjkej1eCweANXlPwefsxloMGhmGWm82mVntSJpN5Qjy3AREMZ1MbLpeL0XaUTqcLAC0aAY2EhcPhgppunueLgUBgFaCy4UJTg6e/IPG8Aj1Dc39lkHHetJ8CDACgscYb7duTRgAAAABJRU5ErkJggg==);
}
.lb-style-youtube .lb-a:hover .lb-like-icon {
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAXxJREFUeNpi/P//PwPVAMgwUgw0NjZ2AOL3QByAbgYTKRYDDVBgZmbeDGQKSEhIlKHLM5FiECsr65a/f//ygPjc3NyKZBkG8hoTE9PF379/a8PElJWVv5BkGNAQASCeD2Tu//fvHx9MHOiqf5GRkdvQ1TPCAp+RkRHFECBVABQrAMrzo2tSUlL6yc7OnnP9+vU9Z8+efQA3A8YwMTHpBxkAxAuAgWwMDBtdIoPzwJkzZxzRvVkAJgoKhEkwCAQccIbZu3fvjpCSXIAR8RunYV++fPlKimHS0tKvSU5nuICKisoVqhnm4eGxkiqGWVtb/wAmkzU4DXv27JkksYbp6OicAabFTxiGtbe3v9fX1//1+fNnw8TExC/IsYQNgHKBs7PzfKw5AOR9IE4B4qtADLLN49OnT7onT55ku3XrFuu5c+fY7ty5w/L161ewA8rLy1+Ehoaqg1yGkQOQsxNSOQXKj1ZADMrgliCfATEsjxYC9ayElWfoLqMYAAQYAMsCmNkh9w1OAAAAAElFTkSuQmCC);
}
.lb-style-youtube .lb-a:hover .lb-dislike-icon {
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAelJREFUeNqslL1LAmEcx30O73zL892hsqW1QJAGp9CKZmlrTEJqyl0CoX+glsJwisAWG2uIoE1Do8ElxNBbGjIoQ8HTu+t7wh2XVlzoA1+e5577PZ/neX4vD5EkyTCpRhQYIWTQh0KhXXQHkADx0Bt0D11Dd+Vy+XUYojK0MIBMDMM0eZ6fGl5AURQP27YsfJ5DFWgZOi6VSg8DG+0Ci8Wyic760xVEUWQAcmE4S9N0Mh6Pz2ODLaPReKVuqF0Ao32citLhHrrRaHTNZrOh3+/7R2C4IisIwoxeZ1utVsuIK5SBx+PZwKmM40RThZlMpu1er0cmAmu324vj5hmliZZZ7yIESvL7/R9wC8GNpBFYIBDg7Xa7iFD/WRLyf6/X2ysUCtM+n09IJpPNkQpAu+Q4bqFSqThzuRxbrVZprQ+RUwabzSbGYrHPRCLxiBOdYToOHUIXg41UKiExgOfq9foqdKIFIQ2kYDDYTafTnMvlOsXUEezlUstqy+lbKsCAi0Qi0U6nQytzLMuKqVTqJRqN3uBzDzbvv7pgeAJZvdZqtQZjt9stZLPZGvy5A8it7mgqzel0MnLvcDjETCbzBNCKHpD6fGjftHw+XwiHw2KxWKzJPvwXYxiG8Tr0DC3pzTuFQSb50n4JMAAH6dh+ov21xQAAAABJRU5ErkJggg==);
}
.lb-style-youtube .lb-voted .lb-like-icon,
.lb-style-youtube .lb-voted .lb-a:hover .lb-like-icon {
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAXBJREFUeNpi/P//PwO1AAuMsbeZkSgNDjoMDkBqPRAnHrjCsAEk5lwLcRATKTYDDVJgZmLYDGQKMHNJl6HLM5FkEDPzlr//GHjAAqx8imQZBvIa0EUX//79qw0X5NX5QpJhQEMEgHg+kLkf6CI+mDgzK/c/BpWibUQZBjWkAeiaB0BuAoYCLrnfDBezLoO8jizMCEsaf9cz9gOpAiBeADTEGOgSXSKD8wBz4H9HdJcVgL2g2y1MgkFgj+D25s9XR0hJLsz8mr9xG/b7w1eSkj2X0muS0xlOwKd3hXqGycaspIphzBLuPxh4tdbgNuzbA0miTRO0OAMsID5hGMZstvw9s4jlL4bf7wyZ1cu/IMcSVleBcoF02HysiRYIPIA4BYivAvEnMP/XO12G17vYGD5eYGV4ewhIX2L5+/sr2AHMBpNfMCjmqINcBiuC4IZhK8+AikD50QqIQRncEoh1QPEHlS4E6lmJXJ4xUrOkBQgwACehcrGNmJ+DAAAAAElFTkSuQmCC);
}
.lb-style-youtube .lb-voted .lb-dislike-icon,
.lb-style-youtube .lb-voted .lb-a:hover .lb-dislike-icon {
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAeBJREFUeNpi/P//PwO1ACPMsL3NjGDaQYchC0i1APFfIP4FxG+B+BQQ7wDigweuMLxGN8S59j+mYUCD2JlZWN/8/fObB10DMxPY4K9//zF8BdJLgfgKENsD8XTmwP/nQGqYUDSwckYBKS5sXgAawgbEgkCmDDMzcyGzRrUy0IIkIHs7TA2KYQxMbHVAVzERETysDF9u/GRg5mb4+/evGIZhQC/yMfz7I010aDPzcKILwQ1j5hQNZvj3g4WS2ER4iZkrFehkRuoY9vuTLqXpDGHY/z8cxOvi+M/AKfMRGCyMzCzs/zEN41H7xczG+w8Y1XizBFieQ+I3w6tdUgwcUn8ZdPrewOQQAW5/ZhfDl1s6DO9PCDDfm8TH8PECK3IYMoOsZeH9x6CQ8ZlBs+kC0HXXgSKngXgi1uwEzBZyDC82uTCciZrx9/dXVkRi5v7PIGzzk8Fo0SMGdrHZQKFJQPW/0LMTSlIAKnjkbMzvhGIQO/8/BoM5zxmkQvYAuQVANR9wBQFmumLmcmVg+AhLe38ZbI/dZeBWyQQaso/42IQBNhE2iIsE/zHYHLoJNMiZGIOwG6aYcxNYcvxnMF31gIFHwxNo0BPS0xkMKKTVM/j+esAg6hIBCkOyCkdqAIAAAwBBEKDX6TZlcgAAAABJRU5ErkJggg==);
}
.lb-style-youtube .lb-count {
    border-left: 0;
    padding: 0;
}
.lb-style-youtube.lb-counter-type-single-number .lb-count {
    line-height: 23px;
}

/* habr */
.lb-style-habr .lb-like,
.lb-style-habr .lb-dislike {
    background-color: transparent;
    color: #555555;
}
.lb-style-habr .lb-count {
    border-left: 0;
    font-weight: bold;
    padding: 0 3px 0 3px;
}
.lb-style-habr .lb-like .lb-count {
    color: green;
}
.lb-style-habr .lb-dislike .lb-count {
    color: red;
}
.lb-style-habr .lb-like-icon,
.lb-style-habr .lb-dislike-icon {
    height: 15px;
    width: 11px;
}
.lb-style-habr .lb-like-label,
.lb-style-habr .lb-dislike-label {
    color: #555555;
    padding: 0;
}
.lb-style-habr .lb-a:hover .lb-like-label,
.lb-style-habr .lb-a:hover .lb-dislike-label,
.lb-style-habr .lb-voted .lb-like-label,
.lb-style-habr .lb-voted .lb-dislike-label,
.lb-style-habr .lb-voted .lb-a:hover .lb-like-label,
.lb-style-habr .lb-voted .lb-a:hover .lb-dislike-label {
    color: black;
}
.lb-style-habr .lb-like-icon {
    background-image: url(data:image/gif;base64,R0lGODlhCwAPAMQfAMTq8uv2+rvl8nSkue38/fz//4ayxvP+/+Hu9OX6+5O6zpm+0WqetKPH2OLy+Nzw/OH3+rbU49jq8rPe8tn296vM3c3w84+4y57C1ISuwcDb6cjg7H6twdfx9oy1yP///yH5BAEAAB8ALAAAAAALAA8AAAVb4Cd+yIaMKKIV2plGR1FE7hdEwaETlWRXjoRQ2GlIGg7dgUKBEByYxmLRIFgsiuxihEkALBeUaBEAAAzijwJiRosvEIGAk/Y45IO04TGZ5MUZD4IMaQMMh38fIQA7);
}
.lb-style-habr .lb-a:hover .lb-like-icon,
.lb-style-habr .lb-voted .lb-like-icon,
.lb-style-habr .lb-voted .lb-a:hover .lb-like-icon {
    background-image: url(data:image/gif;base64,R0lGODlhCwAPAMQcAM/yxVzLSb3+dK75YSOvJwClFmzTVjm6MlLTAGzeAKP1VHbWYa/4bn/lAHTfAIrqIJrxPEvCP3/dZrT8Z+f34sn/jo7nbMb/hJXvJ4PkZKv2UKLojf///wAAAAAAAAAAACH5BAEAABwALAAAAAALAA8AAAVWICdywAaMKGBV1plK1XVlLkdJQi4wy3kzk8lgqDAAFgydYik0LAIBwwACgUZHAc3jEUCJApBGI+LlRDCJxKF8Tq+9hwcCQSgfGvO6l+DoF8oEBYJ6HCEAOw==);
}
.lb-style-habr .lb-dislike-icon {
    background-image: url(data:image/gif;base64,R0lGODlhCwAPAMQfAMLp8sjs8oy1yLTT4tfv+c7d5oWxxcna4////9fx9oezx+X6+6PH2Pr//6vM3Z7C1M3w873n8n6twdjq8tn29/P+/5O6zrnX5bnj8uz7/OH3+u/+/5m+0YSuwdDh6P///yH5BAEAAB8ALAAAAAALAA8AAAVd4CdeQzmI6HchrJOKA9I07js01ca8n1MtiwePkaFQOMMFBGLhPTSBgAD1ECgEkKjCYLAYJgmAWBxICDyGcmQNMBc+BcmEgAEQFG9RQUHoG/IoBx0BEgc8HwcChighADs=);
}
.lb-style-habr .lb-a:hover .lb-dislike-icon,
.lb-style-habr .lb-voted .lb-dislike-icon,
.lb-style-habr .lb-voted .lb-a:hover .lb-dislike-icon {
    background-image: url(data:image/gif;base64,R0lGODlhCwAPAMQeAP+KVP+FZ/+6tP9lTP9iKf+ee/+zff98V/9aQv9+P/9uUv+XYP+lgv+yrf+lbv+/j/+Ucv/Lnv9HL/9SIP/Zrv83I/9tN/9UOv9iM/9CIP+wqv9fLP9yM/9cVP///wAAACH5BAEAAB4ALAAAAAALAA8AAAVdoCcyRcmIqMdQUQSlYkE9zwsXkWEEsAc9DgcPFjAsFodeEQBQ9A6ORGKACgyuCQ4HwVUMFgmCWGwBIAQXgGXC3gAuAo9AAsBk3JK4aH7AHDINMA0VChWBPRodGikhADs=);
}
.lb-style-habr.lb-counter-type-single-number .lb-count {
    line-height: 19px;
}

/* heartcross */
.lb-style-heartcross .lb-count {
    height: 24px;
}
.likebtn-wrapper.lb-style-heartcross {
    line-height: 24px;
}
.lb-style-heartcross .lb-like-icon,
.lb-style-heartcross .lb-dislike-icon {
    height: 24px;
    width: 24px;
}
.lb-style-heartcross .lb-like,
.lb-style-heartcross .lb-dislike {
    background-color: transparent;
    color: #555555;
    height: 26px;
}
.lb-style-heartcross .lb-like-label,
.lb-style-heartcross .lb-dislike-label {
    color: #555555;
}
.lb-style-heartcross .lb-a:hover .lb-like-label,
.lb-style-heartcross .lb-a:hover .lb-dislike-label,
.lb-style-heartcross .lb-voted .lb-like-label,
.lb-style-heartcross .lb-voted .lb-dislike-label,
.lb-style-heartcross .lb-voted .lb-a:hover .lb-like-label,
.lb-style-heartcross .lb-voted .lb-a:hover .lb-dislike-label {
    color: black;
}
.lb-style-heartcross .lb-like-icon {
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAAN1wAADdcBQiibeAAAAAd0SU1FB9wBDA4YIRpyRfEAAAPeSURBVEjH3ZZbS2NXFMfX2vtcnHjixCak3ojUS2IyyUt9KLG2Ex8KfakWR2HAL+MnaT+AqGVAGEGqIkIvCrVEcwRHkzYSPDHRJsd4crIvfTGtYzK28zoLNmz2/rN+Z+219toH4IO1hYUFZXFxER/TLC4u4n9pWjZnZ2c/pZQ+B4AuIQQhhFxzzl+vrKxkmpoXL17ECCFfc86fAgBQSq+EED8uLy///ihgfn7+W6/X+2xyclILBAKAiFAsFmFnZ8e1bfv10tLS/tzc3GeGYXw1NTWl+v1+YIzB5eUl7O7uurZtHy4tLf1w3ye99+Vxn8/3xfT0tOb1eoEQAogInZ2dMDQ0RI+Pjz+JRCJFXde/mZmZUbu6ugARgVIKhmFAOBymZ2dn/uHh4XImkyk2/ZLmRFGU58lkUlMUBRD/DQwRQdd1mJiYUKWULycmJhRd11s0iqJAMpnUKKVf3o9AaU445/5AIACO44CU8u1zRITBwUFMJBIyFAphvV5v0RBCIBgMghAi0BbQdOQ4DgghWqrBdV2Ix+No2zYwxlr2CSFgGEZLXpV7gmqlUvFxzqFer793Weu6DpVKBQghf7UFSCl/Ozk5+TwajapXV1fvDeju7oZ0Ot0QQrxVquReDn7JZDJAKQVd14Fz/r+HrutACAHTNIFz/nPbMjVNsxGLxbBcLvcnEglq23bbXDw0VVVhYGAAtre365VKZWtlZeW0LQAAIBgM/iGEiEgpPeFwmFSr1UchlFIIhUKQTqfZ6enpRbFYfJXNZuGdgGw2C+Fw+KhUKj0jhOijo6OkVqsB57zFuaZpEAqFwDRNfnBwcOW67vfr6+st5UUfLpimyaLRaNqyrLDjOHosFqP1eh0ajcY/Go/HA/39/bC3t9c4PDy8EkJ8t7q66rSNst2ix+OB29vbI8dxgpZlPY3H45QQAre3t9Dd3Q1+vx82NjZYLpfLFQqFVxcXF3JgYID29fVBoVAQ7wSkUini8/l0AHjCGNMrlUpeSvnk/Pz8o0gkQpsNcG1tjVuW9Safz/9613EVKSWVUpKenh4cGxsT2WxWtgB6e3sVAFDvhiaEUG3bLnHO3Vwu97Gmabi5uSksyzqyLOtNsx8JISQiSkQUlFIhpZT5fF60AEZGRqBWqxEAIIiIhBBERLi5ublmjJXK5XKwVCr9dH19/SciulJKlxDSQEQGAA0pJRNCNAzDYM0I2r5G4+PjKgCojDFVURTl7sYTKSVFRJBSSkQUACAAgDHGmKIoDQBo7O/vNx590R5aKpUi1WqVdnR0ENd1ieu6qGma1DRNOI4jvF4v39raEh/uz8PfhG711BbFofwAAAAASUVORK5CYII=);
}
.lb-style-heartcross .lb-a:hover .lb-like-icon {
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA+5JREFUeNrUVltoHFUYPufM7MzsJLvdJZY00kICKXW6G4SNQYgQtgg11BdBqlCfLL4WikhfGvPgpeZJwQdRUdGHRUpLfahofUg2USFGmovsLrO9mC7UhGRpl212Zmfncs7xn61bkuwkpA998GeH3Zn5/+/772cx5xw9SSHoSYsfQVAUEwMDcjadxrvZ+u930mnh4hY4xg/1zmvaaYGQcY7xQcaYIGBcooy9/aGu/9AyHtO0Vwkhn8DzQ800ELIMuuOgk9lM0MTdTDCeSHzTGY2+9vyxYx3x7u7ms8r6OpqdnDRNwzj7fj7/1buJxBk1Epl44fhxNb5/P2KuiyrlMvpzZsYwNzYuvVconA4kGDt69PV98fjXL5082SGIos/YcgU1Gg30YyZjurb9hqQo37986lRYUZQtOtTz0M8XL5q1Bw/ehEgutXAfFVkUhLHnRka2gj8MDcmyjIbS6TDcXYFv2b/fruPbDYE94JzfXAux9QPyeaQL0uKaZtOjLQIAh/r6yJFUih/s7cVevd6mgwlBXQcO+DjPBBK0gFzDQIixtq6gloUGkknsVCrNvLc3PEFyV1cTJZCAYLxiVKu9Ihg3o3hMCXV0oFq1iqAD7wYSgM/f3blx45ymaeH62tpjE6g9PehmLmcxzjOBk0wp/exmPo84FFAIh5tp2Ovl6/NQCN0qFJBL6aeBBB8Vi2XO2IU/pqbMfYcPI8HvlD2Irxft7/dnpeYP20SxeH/HXXTXNC+UV1byhYUFO55IIEGSdl9k4HVM05C+tGSDXe4f0/x412X3banEbM8bLS4tlYq5nBtPJpGoqsGew6D5TtzSdVdfXFy2XHfUt9+u17aL/ts1T8F+mezTtP7U8LBau30b2dAhjzomGkV+GhdmZ61lXS9Bakc+0PV725fdjgSDg4NqnLHYkON83t3T8+LI6KhqQ2fVV1dRGIZJguvXa9ca6+XyzJyivHOf0g2JEJg+VJ+fn6/vSJBOp8VqtdrJCInA8HeGCI8MNxpnn45GX0mfOBFWIOeW46Cpq1edtbr1y++S/AVMsMk5NRknBmwkgzBWi8ViRjab9dom2bbtEMayhDiTMaaKy7Hym6RknjWMSuPy5beSqZT01/Xr3t+cXynIchZijvhTz7D/oR7ngotxyPZxAK6dAJaYa1lVB8be5kgIEcRE8JAsitJPNc9dtefmzhRF8cs7IakI4A4Eb8HrOuHUYkhoIExtzlxHlmPurkX2a+APp8OYCttR4ZzIkFQgpBIAgQGFS/DACDyGxqO0sacaBIlfl1qtBseAItQpFR3HIZIkMVUQPDgnaCQScaanp72gI3MLwf/2X8W/AgwAZ88mEZJAUtgAAAAASUVORK5CYII=);
}
.lb-style-heartcross .lb-voted .lb-like-icon,
.lb-style-heartcross .lb-voted .lb-a:hover .lb-like-icon {
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAAN1wAADdcBQiibeAAAAAd0SU1FB9wBDAsULiCz1YcAAAPySURBVEjH3VZfTFtVHP7On3t7e/uHgg7SCzi21VjGsEQI2xOQkL7hk8aZQTSS6JuJ2YMvGh6Nb0Yf9qKSuOA0m2KyRNcsEplhURJLYGQTiCwFkW4GR2lpe9vec44Prgi0wnzdL7nJOff33d93fuf77skBHtv4DnApgByEUQA5DFORHAOGOaUjkpAmKSXjhCQcKc8PAd+UMZeAFyilHzhSNgMAo/SulHJkEPj8QIIvKR311NS89Fw06vFbFgilSK2vIx6LZbOZzFvnhPjkEqVvuv3+97sHBsyahgaoYhGpZBIzExPb+a2tKy9LOVyVYAw4W1NX92nv0JCHaRpAHqaUgp3P4/vR0axj24Oa2/1F//Cw2zCMPRhRKuGHixez26nUa4PAlXJdWh5olL4b6e/fWxwACIHLMBCJRt0KGI9Eoy6Xy1WBYZqGjv5+D6f0nd0d8PLAUeqZQDAImU4DUu7bSILGEyfogzNnlHX8OFHpNJRSeyGUotayIJQKVyUoF1KpFCBEpRuyWbS3tRHcvw9VKFQ6ijEgGKzQdYeAEfJHbnOzxSwUoNLpapY8MIjfj+zmJhghv2NXdzsEAvhs9c6dt1tbW91iZeV//ze8pQWr8/N5sc+qOyILKS8sz82h5PGAeL1AsfjID/F64bjduDs3h5KUH1UleAX4E0K8F4/FsqyjA8QwHmnlxDDAIhH8EotlpJQjrwJ/7c6z3ZN2pabMTOZ5JeWR+u5urpLJqoLvhK5DO30aSzMzhbWFhdklKd+Y3CfXHoJJQA0o9VXm3r0XoWk1R7q6mNrY+Gcr9q/cNKF1d+O327dLS9PTy1kp+84DhUPPoodnzZOU0onmU6dCz/b2mnJ2FnJj49+P6urAOjpwa2oqvzo/n1BS9pwDNqrVYtVeJjo7seLzfd2wtNT2YH29ubGnR6MAVCoFevQoZDiMm1ev2omVlR/HTp58/dumJvmUZWmWZSGZTJb+k6Cvr48HAgF/ifPAJjf9M8H66cbV1dqthYVQY1eX5jp2DLZp4sbly8XlnH3947b2C1mua4xCL0muCQZu1dfTcDjsJBIJWUEQDAZdxaJuSkI9nDoehxDPrSfqF93pre1cPB7hus5+unbN+dnnGx8PPX0dICBKKUEgGZFSSk0QoTuUOs7a2ppTQRAKhVAoZJjihCnJKaeKAgyLgdqEI+QiX/i17UYw+OGU1XSTgGwrIEsJzVGickLyHGEiz1Qh7/V67XIHVUXu7Ow0AZg2YHLGDCmYi0BpXBV1h+iKEEcpxR0FUqJMFBwhbAPIAcjF4/HcoS7ar0smk9ENw2BpQnipWKSarku/Uo5t28Ln8xUnJyedx/fy8DfO/MYcPQ/C4wAAAABJRU5ErkJggg==);
}
.lb-style-heartcross .lb-dislike-icon {
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4JJREFUeNrsVUtLG2EUnUyimYkaX4mYxKggFHXpQsRHqNDSVUEo0kUXgnRTSqiboKU+oVhEKBbd9Ad0UalQWigUuiiVdpFlkOAbiU+MRo2a96PnDEmo4tSVi0I/+JjJfPfec+65937RpNNp4SaXKNzw+vcBdH/+mJiYEDQajRCJRAyVlZWTdru9a319/d3h4eFzURSTWTvWLZVKaSsqKl41NDQ8WllZ+bi1teUyGAwhng0MDKhnEI/H5dLS0iE49mJbm5qanEajcSiZTOZs+U6bjo4OZ2trq7W9vb3XZDINgZh8uWkuAOh0ujY4jtXX1/cVFhZKp6engtVqlVpaWvqLi4uHM8wF2Aw7HI7+mpoa6fz8XKiqqpI6Ozv7kPVYXl5em6pEWq32Lph0FxUVSaFQSIAxvwk2m00CU9f8/HyaEoK5q7q6Wjo7OxMSiYSg1+sFyCkBqBtyhRDq55UAsVhsdnd3N1JQUDBSXl4ukW00GhWgPzMxQIr+DKBMAgzOM9p5vd7I2traW9h/Us0Ahl6kvLG8vJyG/iPIRoberIsQDocFi8UiMwO+8zsDQ1ZhdXU17Ha7x+A7DQIhVQClKKIIcqGpxcVFLUAGzWazTAAGZkAuMke2SjcdHByEFxYWXkKuKQSP0u6vABmQKNhMwjHc2Ng4CrmMWbkYlID8HQgEgsh2FN0zg+Dxa+eAejLljK4JBNpENjF0lBKQ+mc7KVOzGLLZlGU5QR/Kxn3tJCOIiCBdtbW1rzEDJhaUkoCp8uRmHdBtJtrQVi2W7orgWuh4HwWdliTJFgwGFebcZJkZtNxGi9ppu7+/D9f0Zx6rAiCwGQ8HNH+DgLbj42NFMu78/HyCpDJFFlmPLAjObPCZ8fv9JPcDJv4rJcJg9WBKx8HEhgLmZGHXMDnMyBw33/mNZwTCXcW62MrKysYB1qOaAQL7UFgPWNxiIXkNYOiUScW18QFnj2nHCcbF1s06sD7ZYaMvnj5VABjMQhY30tWguA/IEE+243sM01OwDdIOgE/q6upSJSUlD9lV6CJmOwdfF8htqAKgqKzDBlJ+hiB6AN3e2dn5iil1YvACNMmYBnw+n7O5uVmHQbwH++8Af4asti/fphcAPB6Pku7Jyck2JHkBhnf29va+HB0dhXFsYR9k1VxaWgqicwZxg/4C829o2W3cuLkZyTXO/z/969ZvAQYA79sfdqTw3V4AAAAASUVORK5CYII=);
}
.lb-style-heartcross .lb-a:hover .lb-dislike-icon {
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABDpJREFUeNrsVd1LW3cY/p0Pk3NizjmxM54kR8WYMsGIN86pHUgpG6ODUWFaab0YLbsZQ+qNyGC2FcZ2USgt9mZ/wC4sFVYHg8Gg7ahgRXIhq0xXajTRJZovj8n5/tj7C2WTYepVLwb7QXJOOO/7Pu/7vM+TQ7iui97kIdEbPv99AProj7vnzlWvuqr6mtrbb0mdnUPJROL74s7OlyRB2ARJIrwz13GQY9tUYzT6bWxwcCy5tPRDZm1tkhUEBW904tGjGhNAsmUYrBAOT3ecOXO1o78/0n3+/DgXDE7blvV3LL4PRCLTvWNj4z2jo5F3Ll262tDaOq2VyywC8JoUUXV17wmh0ExHb++EwHGMureHItEo0zM0NMU1NV2HrnHnKBAOX393bGyqpauL0fN5FOnsZAauXJkIxmIzuEZNiiiP54O3JGmkQRAYo1BAlM+HKJpGradPM+Tw8OTS3JyLaeq7fHmyBYqquRyeGHk4DknxOLMTj49sLS8rUGrxWABDVe9nNzc1judviKLIEJaFrEoFqQAmtbf7+i9enCIoCkmxGGsUi8g0zWoDLoD88eSJtr2y8h3QtFBzAsdx1srFYnIjkXDJvr4boVCIxcmWoiATOpfa2lgMYMoysgDcwXzX1aHU8+dqYmFhRikWZ2mPR6kJUF0KRSnKwcGd3589o8iBga8wiKNpyMIKAv4RQVRpMQEUqymTzaprT59+XSkW79A0rb9WpkdAdEWWb/22uKg6/f03xWCQd4AO3D0GsXW9uuxMLievr6zcNBTlHlBlnugDErqEERFepOO6lqlpqYosGwYsm4CCBOYb04J9AJLWdd2wbTvl5XmLghyQL7JN8+QJwCwk8Hsh2tV1O8hxjToslASuMTABFDmvpmj0+xvtePz29saGDUZ8CA+dEykCp1Jw+ViKRmcDNC1VMhlEeb0I+K1SVBUDVhd06gAwz7Itkba22b10GlLdH7EPawJAd0H4GgyK4t1605TKuHOgjIZiLsMgm+Mc7HZS00jgHdl4Eojx+f1Soyje29vdpaDGr1Bq/1gne1j20wZR/IbVNOlwexv7AunlclU1hsfjpjY351PJ5LwO95hv4/AQmRBzuLWFvIoi4Vxc43U+2DY0bRU0/7YNizRLJcQIAqLgU87nH9AHB58REKfCNPWCMKLBcw08QQJ9JkyGc3GNmgDQzX0IWqbDYQL+kz5xwMG+pia0m8vNrb548UXFMGQcV5/Lfd4dizmRUGiUBJroU6dQCaH5g0xmknDdZE0AP/ANa0zmd3evFXje2xwOn13b3//5YSIx/jidLkAI8yq0cDaTGb/Q00O3RCIfvsznH7uyfC3g8ezY/xINcfSdPNzRgWiQ4p8wdlbXu8VA4P2X2exP6XI5DY95HP+PkpHc7Pc3t4viR9lS6RfR610N8zyygNoH6+vHA/z/Tj7u/CXAADK0HRgojLBXAAAAAElFTkSuQmCC);
}
.lb-style-heartcross .lb-voted .lb-dislike-icon,
.lb-style-heartcross .lb-voted .lb-a:hover .lb-dislike-icon {
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABF5JREFUeNrsVU1oG0cUntld2au1tMiyZEtaR7IdyTY5lET1oVBSO+DS0lBaCE4PpQmYBmoch1yEKdRJDCU9BEKKU9rm2vTQUEN/oBDihMYhwQScgw+uE/wjyz+y7LXWWkmrn/2ZvlFDU4qUnHIodGA1u5r33ve+972ZwYQQ9DIHg17y+O8DcP/8uBkIVOaypgmu7u5LTdHo+6n797/Px+OfMhibiIF8QDNiWYgYBuvs7v6i+ejRD+WpqZ/2Zmdj9W63ZoH/28lkdQYYnM1y2S4Eg2P7+vsHQ0eOBNqPHx+x+/1jlq7/bUvfhVBorGNkZKRtaCjQfvr0YEMkMlZWVTu2rNolwnV1rwutreNthw+fbXQ4eHNtDbVEInz4xIlRXpLOEdNEFjwNweC58Jkzo96eHp5Atu5olI/EYmfFAwfGGYhRs0QMz7/pCoUG3KLIk60tRJxOZNlsSOrq4pnBwdgf164RDGXqHB6OeQ8e5I3NTcoYMS4XgnLySk/PgHznjgah7lcF0PP5G7tPnhQdoni+paWFR+BMMhlkcBzydXYK+NSpUQTvzV1ddiuVQpZhIBa+caGAtu7dK8p3735bzmZ/qckAxJsv7O7G4zMzBPf2nvf5fHZcLCKSzSIqsK+jw04BrHS6EhxDuVB9PUo9elRYun59vCzLE2xdnVYToFImltVKinJlZXqaxX19n/kpSD6PCMYIQVAEs1kq/QUKgiZTqcLKrVufl2T5CrAp0fXnAlTEZtlSUVEuLd6+XSC9vRd8Ho9IICiCclEQQlnBnEyn1ZUHDy4Y2exVhuP0F+4DBsrAAGUAQCaBEJq2pmUyZRP+Izr4g+A0a0S7CexLpVLZNIw1zu02WMoMQC3Q7YUM4PhjQI/3pGj0st9u95jb28iiwHSjQSDylEWLIHjMQ4cuJ+fnTSjtz7BmPZdBJTghLNT7XV84PNFsWZKRSCDTDtpCQATMKjYAQNuT7Owgr9O5z9q/f0JeXQVX8issmzUBMMZe+HnD4/N96c5mJX1vD2GeRyzUHwsCynu9Fj0qBFVljFwOKmUiIsvI7XJJxOe7Kq+vs+A/DaF2qu5kThBOioHAxUZFkYzHj5EB3aODsDTbrMNB1peWJjeWlydVp5OYoIkJCVAbY2EBudJpSZSki7aGhpM1GViWldALhbkSy3ay9CKC7LimJmR6PKi4vf2jmEx+TJtQh71g83oHaPaGoiAM4hugja5pc3CUJGoCmJp2I1coPORaW3FzKHSsDo4CRpJQXFF+mF1dHVYNQ6V24vLy0KvBoNUWDH7AUSZ+P0rz/GRuYyPGEBL/1wH67MqcCQaRDdpwmxBJ93q/aRfFvuVM5uZ3i4tDk5omg0n9U9PSMeiuj8LhrztcrrdWVPV3287OJ80Yb+jQaa8lEtUBhuHQsgHVBHTMKsavBByO/gVF+W3RMNZp4tT+WScjNcJxrV2Nje9s5nJTIULmgtAQOsT7CrSpCvD/nVxt/CnAAGuCHq7szIaAAAAAAElFTkSuQmCC);
}
.lb-style-heartcross .lb-count {
    border-left: 0;
    padding: 0;
}
.lb-style-heartcross.lb-counter-type-single-number .lb-count {
    line-height: 29px;
}

/* plusminus */
.lb-style-plusminus .lb-like,
.lb-style-plusminus .lb-dislike {
    background-color: transparent;
    color: #555555;
}
.lb-style-plusminus .lb-like-label,
.lb-style-plusminus .lb-dislike-label {
    color: #555555;
}
.lb-style-plusminus .lb-a:hover .lb-like-label,
.lb-style-plusminus .lb-a:hover .lb-dislike-label,
.lb-style-plusminus .lb-voted .lb-like-label,
.lb-style-plusminus .lb-voted .lb-dislike-label,
.lb-style-plusminus .lb-voted .lb-a:hover .lb-like-label,
.lb-style-plusminus .lb-voted .lb-a:hover .lb-dislike-label {
    color: black;
}
.lb-style-plusminus .lb-like-icon {
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAkRJREFUeNqkU8tu00AUvRM7TmzyUNyAUCGtUFMFC7HoBqqUVEiIJSzCmp/IF/QLsuIP2AekbiqBUAQCIdTCBhQVeUGDmjSyGwLx2+MZZhyCU3XZkY517/ic43vHdxClFC6yRP5Az8sAAmLgCVoGBE0W1RlW/vH6DB+AQgcoHUDEsogCfWrODBbWo6wotWrXatXVckXNZXJZXp/tWRs/zH7jcPD9iR/6bba1e6aCubiQye/cv7WtiSDKOMBwbBzHL4rForKm3lAq6vWlt9/e7UxdC+YmqZhBYTmTklqNm1uab/uyZVlgGAZ0N1/E4LFt24CdUN6s3tUklG5xTWIQ0eb61bWqZ3my4zjgui4EQfC/NB7zPf4Ou6G8ulSpck3SAqZb5VxZnU6nMZEv3/fBNM04P+ofASFk1rMoQr6UV7mGpc/mBpUUpLK8zIOHr2E0GgFvgxuk02nYf/AqFnJoe3XwAi/LNYsVQBRF4GIXdF0HPhuczMVz4RwgMbqIY01iENKfpm1sTNITpfH18axxxvly700sut3dTv5XgZ1J6Htckxwipu9PjOFYyLFJugIzlCD5agmSfQXA++OMuWbRoDPpn+opQC5SUEyCzIJBZibkICRy/RNH55rEgNBBZOP26cdhj2LiIpmZXAbQPtdh/dOdOAaZ0QLsWvvjHnFIm2vOTiKhu3jow++Xw5akXapKNUUVVsRsPCYT7AWHzjjo2ToJaRsKAptCdG6UYxNi4gOv+6vJcP4yCagDeWGwKEEXvc5/BRgAfe4kuMtUzxwAAAAASUVORK5CYII=);
}
.lb-style-plusminus .lb-a:hover .lb-like-icon {
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAy9JREFUeNpkU0tvG1UU/u6987YdO47HcULiKhUqiyKieEM2FeKxpFKzQmLNCqm7Inb8CRY8NogF3VUqSjeVUCqBCK8qIghYABWJ0yT4NRknY8/jzszljAMSEnd05s7Vme87j3s+hk8XAM4ADbQXb7YOhpt0eoFsEZerR/YTFLYBtY8cKT1Armawy6WUjix7WTOsWyuNlc5Cqd42dbNauGIZj0eBt/x0dNxMk/A+IB5RIFn4/iFQFoFfr9fc288tX9tsVBq6rVtsMBlSUGCluuwszbVai3Puxm8nv18/Gw/niOQBuSKBLUdDnr40X3PfWV99/sZK7RlNxglLgxSv2TdwTazhyfkBBVSsWXGFpVvt8zBoRWFwCMa7GoVYN3Vr61n36mbdrrPBaIhpMkUTDdzZeHuW39fffI9+7CGJEzTsBbbmrm3+ElxsJVnmacjUzVZjqVPSHL03HCAkcJQnsLmJPMuR5zm8wENf9jEWJqg0aJzp86V6p3fW72tI1XrJKF2hhrI8TFFHDVMZoswd+CMfcRyD+9TwiYTiAifyGKxE18ZwpcAWGTSpvGov6OPNxhbeu34HR0ddhFGE3qgHwzDw2YsfQtd1uGUXtx+/iw+6n6AqKtUCW2QAlSnkIsPAG8A/HBXXBl3TwAWHoF0rTNCFCRoVjSPTFWEzFNiCoD+NgjG1177nb2Pnx6+oBzFWjWXc7Xw0A7/x+C08TU5hCwtnwsd8dQ6JF48LbEGw74/PluxyeTGsRmwcHyGhJnLGKQudCASOxSn+NLsw6awbOlgMJcP4sMAWBNvnPb/JanzDWrUNJhlUouCkFlzHnY2a7dgwuA7TNMGorLg7ldKL92h6twVeMQYqzqJ8ml7lZd4WiwbjJkPGcxwMu3g43MGeuY+skoPbAslpqKI/gt18kn0Mwb4VeNXIaZhOMi/xUy9p0fcStziPq5J9KXfxHfsBrMKBC6Xkk6mMfr7YzTz5Pkz+BdWZXGqBswiMfZ4ehOeT4+iW1rY6WstoOyVtJqZkcjFO/0q6aTfaU1LdR11/RJj/imkmZUkp7aggG8lfJ32y/8sZJGdH7NO/6b+wvwUYACTMfa29DGvyAAAAAElFTkSuQmCC);
}
.lb-style-plusminus .lb-voted .lb-like-icon,
.lb-style-plusminus .lb-voted .lb-a:hover .lb-like-icon {
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAjpJREFUeNqkk01oE0EUx/+7jXF3bYvs2goBgx8LsljE2lubHiwUTzkYT+LBu+AlB889e8hFj1IQPMfDgh+FQlHioejBKFQhleJH1JhEzabZ7Sbd9b3ZJN2itw7M7syb+b35vzdvpDAMcZCW4M+D2xJkmSYjwpaSJeToP0s93d/3ifrLIESR/tXeLhAEwI07YeQg1rKjKvILF2AeMSwdh3RFWP36tFP/ML9WxtW2iwJZ7H0KBvCxcSwtzp+1ICVUBB7wZz1aUdLa2ISlZS/5xrMXm0u138IqnMj8IWkp7TDyi5lTFnpNFf537LQ2gYWO6GLs14Ddlnp5dsJSksgzs+cgQC4zBZOkEvwT6DZAUodNjMkm1npt9aIJk5lhCJSUueOGqjuOg6YTQS063Nh+T2ATz9+KPVE0SRfpSejM0PRe5CDACUiywrGduUYntcvgMNAhB7KGK7dWgRHKp6zgUWEGrW0ogokpoDh8cSoaT4Ew6AOagAYw92Q/7QNFYup38flbozvd2YH2ZPk6+qqQvRmdbN+dQ0KOgHFNwB4zcQWl8kdkUgY0yrBono/hyfoYx76X1MpXNJkZ3gJNiuSgQhXojhJDVxpJjclmG3fa6279QIWZeB1UucIer2PD78HljZNHgdLyDEr3z4kx20iVu/YGGx0PBWb2VSIZ7C914OEq8lMnYZ4/DZ2uS5QyXa1HCpvvtlAhJwXKgy3/p5S5oOzaL7xeqSO38urfx0SPrUhvpRpnpIM+578CDAA90fGqk/ZF2gAAAABJRU5ErkJggg==);
}
.lb-style-plusminus .lb-dislike-icon {
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAhFJREFUeNqkU01PE0EYfvej6862NKVaNU3k0JaYciDhRALhwJnIoR6N/gh+Ab+gJ3+Bxmtj0gMcvRRjxBMJLQHiB8naNEtdWNrZnf3yfdfSFBE8MMmzMzvzPs/7NSPFcQx3GSp93koSKDgTJIAioobLJcTMyO4HYgddNRBmiD+El+hc/UvwWYqxjdL8fKU4O5tn2axOEfLz8wXz8HDl697ec8F5He2aVyK4JLNcbnNxba0aqyrzggC8s7PLM+NxtWoUSqX7u1tbm4M/+4mIRB7eSFLxnq6/W1pfX+S+z6Io+me+EqaqxjH/vL39SXjei1dxbCYRYD61mbm5yi/HYZ7n3Vq0VCrFHpbLle/7+1Sn14lAALA8VSjkrX5/bOj7PgwHgwRCCAgwpSRnVYUH09N54kwKPIlkWSejlVYLTNME27ZBURRIp9OQyWRA07REoFkugzsc6sQZF5G0A/QoHAc6nU7iDUO9RqbBqN1oG0x2wQc4cXq9hdiyjM7q6q01yJC9EC5xJiNo9brd5Ueqahio/r9xwnmfOLSWRwKNb6enxyDL3MBWGdT4G4At5l3POyLOWAC7bg7CsP7Rstp4wBmKsFG+kxBI3r24aA+jqE6cKzcRN5o/sXjvbXujqmmVp5qWzymKTmd2GLoHQvTbQhz5SM7ecJUTESuKvnxw3Rri2mPCx9aYGnke3867PuffAgwAiOL20JQdea4AAAAASUVORK5CYII=);
}
.lb-style-plusminus .lb-a:hover .lb-dislike-icon {
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAsJJREFUeNpkU0tLG1EUPvNOxsRE8lZqsLWCUGwJLlzURdtdaUHxd9j+AP9FV9Jdf4AgVboTu6lQEG1BumoloRpj1EmmmnEed+b2u2NSxB74OHfuPd93HveO9IGIZEC98cI9loheCQ+U6MZOge+caFP4iIgxLKI+LzYcqth8ZmjaQnliopYtFKqqYWSwT8zzbLvdrrTq9aIXBOtIsC226ZZAIiR6mcvn307MzMwNl0q6mcmQqmlCmELfN0dsuzIyNlarHxw8ss7P09j+BLhCQGR+ms/l3jyYnZ3PjY9LzvU1dSwrJktCXpJI03UqTE7qpGnzbHeXW53OH7T8WUXQjJ5ILI5OT88l83np+OgoJklSTP3nqdeLBdOFglSempq73N9fZL5vqSj9dWV0tKaaptE8PiaG7DGJcwqjiKI+OL45fMc0SVYUI5XL1S5OTtqi/Cd6Ol1lYUgOZmsUixT4PvmeR9cQw9CIASHOOYT9ep3SiiJurCq4ooIikHXRc2FpiR6urFD98JAcxyFNVckcGqIUYBhGvN5ZXqbG6iopmUxWcEUFxESJyH7eapHcbpMHso6hmSh3CCSxFoMUM8CKDMQzxLP+DbTdXs9Oqmqys7ZGZ1tbeCFRPAcZkGSZpMFjwVpGpWlc8UUQdAVXCHzrdrullGmWM+jZt+04220TAxyYjrfh4dwJgobgCoGNlm0XspJUu5dMGp4g3BEYmNhVcdbwPK/j+3uQ3VCeE515nLtOGN43Zbla1jRJR0al/0y1ft8miAmg6fv8p+t+caLoPWK+Ki/QMZSaVhhaF4xVkL1iECnDCE6h56SYAwS7uMZfQeAfuO5OJwzfIWYLV+nH/wIWLsr72GDssnl1tTCuqrWiqlZBzojza87tU8YavxnbY5yvj+Bnku/8TEKEoaTtK86tH0HQBv77nYFNE35AFvZXgAEAGFpJba3hhvoAAAAASUVORK5CYII=);
}
.lb-style-plusminus .lb-voted .lb-dislike-icon,
.lb-style-plusminus .lb-voted .lb-a:hover .lb-dislike-icon {
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAhpJREFUeNqkU0FrE0EU/mZ3TXY2DdbY2hLUggQhkktABFtiFal48RJvnvXqIb+g4D0H8Vav3iSXKog5qAS9xfbQ0ksrRMtqjUlqarKbZGfGmU2yJLTaQwfezPLmfd/73ts3RAiBkyxDbSuPKTRCYOi+L65pyMpzXtrFQdxXaZ84R0GetscALhM/eur0CUbWvShF7s7VSEKfzsRIeMqEDBSdappVS5m3Zef+gYO8jFsdUzAEz0yS5cVbt5MgBgVzIdq7wztLP7do3V1qn33/obT8ve6X7ZNoapPS4hETuRuZ60nh7lHeqoC7e+MmfaJbozfnU0kaRk5hAgVcILuUNhIyIxW95jFds+i1y3qiuOapPj3zCWRTFsxoPNZu2kFc2xWoNgVq0lry2+31/eapfVya1WIKExAwjgvqzu0KnH9gg++vYVJKjmshaOFpEHNGZo74BC+fXEHjjzAHGAwVQLC2n23WfiVr6gA6PQT2FYSIKtnHBARdT3xrNBrp2oGwXj9/+N8WRMJAz4OrMKMKPm5W+MLUaWKZoeOn78sPXleY4DfKegqfd9iORuCoDDT0b/OYcCo/+TbrT+VgDgRsNWFvyt6Wx+FYYYKjrNODU9pkWy0XeYUZm0TpWN39JfDiXS+XmtMTqTktdmaCmOpOdt3dqPD6RoVtS5J81CJHjrJPUv0tysV1L1tcP/yYDA2FCUrsUQw56XP+K8AAlzgEveTe65UAAAAASUVORK5CYII=);
}
.lb-style-plusminus .lb-count {
    border-left: 0;
    padding: 0;
}
.lb-style-plusminus.lb-counter-type-single-number .lb-count {
    line-height: 24px;
}

/* google */
.lb-style-google .lb-count {
    height: 27px;
    border-left: 0;
    padding: 0 2px 0 4px;
    font-size: 13px;
    top: 0;
}
.likebtn-wrapper.lb-style-google {
    line-height: 27px;
}
.lb-style-google .lb-like,
.lb-style-google .lb-dislike{
    background-color: transparent;
    border: 1px solid transparent;
    border-radius: 2px 2px 2px 2px;
    color: #666666;
    height: 27px;
    padding: 0 7px 0 8px;
}
.lb-style-google .lb-like:hover,
.lb-style-google .lb-dislike:hover {
    background-color: #F8F8F8;
    border: 1px solid #C6C6C6;
    color: #333333;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1) inset;
    -webkit-border-radius: 2px;
    -moz-border-radius: 2px;
    border-radius:2px;
    height: 27px;
}
.lb-style-google .lb-voted.lb-like,
.lb-style-google .lb-voted.lb-dislike {
    background-color: #EEEEEE;
    border: 1px solid #CCCCCC;
    color: #333333;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1) inset;
    -webkit-border-radius: 2px;
    -moz-border-radius: 2px;
    border-radius:2px;
    height: 27px;
}
.lb-style-google .lb-a {
    line-height: 27px;
    top: 0;
}
.lb-style-google .lb-a span {
    vertical-align: middle;
}
.lb-style-google .lb-like-label,
.lb-style-google .lb-dislike-label {
    color: #555555;
}
.lb-style-google .lb-a:hover .lb-like-label,
.lb-style-google .lb-a:hover .lb-dislike-label,
.lb-style-google .lb-voted .lb-like-label,
.lb-style-google .lb-voted .lb-dislike-label,
.lb-style-google .lb-voted .lb-a:hover .lb-like-label,
.lb-style-google .lb-voted .lb-a:hover .lb-dislike-label {
    color: black;
}
.lb-style-google .lb-like-icon,
.lb-style-google .lb-a:hover .lb-like-icon,
.lb-style-google .lb-voted .lb-like-icon,
.lb-style-google .lb-voted .lb-a:hover .lb-like-icon {
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAANJJREFUeNpi/P//PwMlgImBQjDwBjDikhBYnyDw79f//WBb2BgdPwQu+EC0ATDNwOA1gCq6gMsQDAO4VyUYMP0H2yyAJvXhHyOj49ewBRdwGoCuGWQziIa5BJsh8EDkXZWQgK4Z5GwQhhkEkgOpAalFcQFY4P//+UiCKH5GDxOIIsbEz2ELFjDyrUxo+M/wvx6XZlwBC1HL2Aj0wn9/uKr/DAs+hS80xBbaIDGQwSA1CNH//oxwk/8zXPgcsTCRmMTDuyJ+PiMjgwE4fIZ+ZgIIMAAdanB7JaZrtQAAAABJRU5ErkJggg==);
    opacity: 0.66;
    filter: alpha(opacity=66);
    -ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=66)";
}
.lb-style-google .lb-a:hover .lb-like-icon,
.lb-style-google .lb-voted .lb-like-icon,
.lb-style-google .lb-voted .lb-a:hover .lb-like-icon {
    opacity: 1;
    filter: alpha(opacity=100);
    -ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
}
.lb-style-google .lb-dislike-icon,
.lb-style-google .lb-a:hover .lb-dislike-icon,
.lb-style-google .lb-voted .lb-dislike-icon,
.lb-style-google .lb-voted .lb-a:hover .lb-dislike-icon {
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAANtJREFUeNpi/P//PwMlgImBQjDwBrA8CHQUYPj5bz8DI+MFxW0HE4nRdN/Lfj7D//8GDOxMjkxgzQwMBkCBBLAEcZoTwHqAelkYGBk2MvwHckAAZIinHdhkxQ0HPqBoDHCAuBRkMwwA9TKCJT1sE4BeQLb9ArIhcM0MDAjN//8nKu44vIARbgPEkH4gUwDZEDALVfMHoOZCkGaII1D85wAMC7BihCEQgNDMCHTZtgMXEL7ACCQMQxhwacaaDsAK2JkUkWyHeUcRXTNWF2CEOghgiRW4AUM/MwEEGACmcWmntsrKVgAAAABJRU5ErkJggg==);
   opacity: 0.66;
    filter: alpha(opacity=66);
    -ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=66)";
}
.lb-style-google .lb-a:hover .lb-dislike-icon,
.lb-style-google .lb-voted .lb-dislike-icon,
.lb-style-google .lb-voted .lb-a:hover .lb-dislike-icon {
    opacity: 1;
    filter: alpha(opacity=100);
    -ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
}
.lb-style-google.lb-counter-type-single-number .lb-count {
    line-height: 30px;
    padding-left: 0;
}

/* greenred */
.lb-style-greenred .lb-count {
    height: 24px;
}
.likebtn-wrapper.lb-style-greenred {
    line-height: 24px;
}
.lb-style-greenred .lb-like-icon,
.lb-style-greenred .lb-dislike-icon {
    height: 24px;
    width: 24px;
}
.lb-style-greenred .lb-like,
.lb-style-greenred .lb-dislike {
    background-color: transparent;
    color: #555555;
    height: 26px;
}
.lb-style-greenred .lb-like-label,
.lb-style-greenred .lb-dislike-label {
    color: #555555;
}
.lb-style-greenred .lb-a:hover .lb-like-label,
.lb-style-greenred .lb-a:hover .lb-dislike-label,
.lb-style-greenred .lb-voted .lb-like-label,
.lb-style-greenred .lb-voted .lb-dislike-label,
.lb-style-greenred .lb-voted .lb-a:hover .lb-like-label,
.lb-style-greenred .lb-voted .lb-a:hover .lb-dislike-label {
    color: black;
}
.lb-style-greenred .lb-like-icon {
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA0xJREFUeNq0VU1oE0EU/mY2SZs0trUYxeol1FMNtaAoUqQetHgoeBH0ohf/wIu99ea9B6EKXjwIRREFvfUgqGApKkIFkXpQ1Hiw1ioWKcmmuzs/vtndbhOyaZqDL7xM8ubN98178+YN01qDMQYj5z/yFOO4BIZT9PcwNFJoJsFSl3xfkz5SArfv9CvXGH3sNYJz83wXDdNkH8ykO9DenqG1rDk+uWj6VFZt2HaZQPFOK4zeHVALEcHZD4mU9PCW/AvbenIgh0A1NkVg9sE5DRbD7z+/AIV5nsT+ewXhcuNUKeOy56LQ3ZWD61C8jobnagiPxlAv7ZjCrb5FjHSORTZ/3g3UCdd1d+ZoDoVVwjTYPoFTwtlUMuODC6EhJY0qUBnqvuyIv+OTufHIFvmQvxSGFEQGGCyDafwT5ksxDCaSaQipg7Q0SY2QDQ5baT9lBktxezAi8BSSHrFEZxpDYMsVZKxO/7cXtwEdkvgbZHAJs4qAUaisSTWuz98f+Fk3/3BxAo+XJquiDPx5GEFTTVtbNtzA6Z10NlRFxteVwZrqFEUGI9f2TOFgd3Coo3M7MX1gsQ7Q2Oui5OvlXUtA4XhyPQVr4GtzcRJHemKuF1qGBOG62AhqKgabF8EZlKdjIjB5U4htDG4D4iMve+vKdIMUBYY4gkaRzQ79qLMdftXbgEAzv1TjCATjm0+RxSHNJVEBZkQgCMMTQZhWppZGdcQf8sDMLh/Iz45lCj7wUzK4bIJXRSBTTHhSJ5hxaueYsZ9hOHMsWNBlxRK8H16os/XP7varSCkFmWSV6KJRw/pUpk5nbp/nMlz5dgGFr3ns/ZynBsZQKOYx4zzfMD03l65DUYpMR7Cp41HvK0YROAv6idhj9ydZBmKZtrBc81ohkbNw0bkA3saCFdVZow6qqV2rsvLTo+k2r3Ab8rN+4kOYB8fK8762G21PkUE+l6YHZ5Vq2dFoRViKiiRND07lN3VGFJ2rznFZVF/WnkzOj1qjibHkpCHpyGaRzXa0RFAqlVEulXxwMemNqRdymrAVq3r029DDDrHx5BmWZ0PoYgMtMazoef1Vz+oJ7wGW9RuT+ZpHPxRz6LtJt5NuRWvyl3SJ9DvCAo4I/qf8E2AAXQzSKWO1TFoAAAAASUVORK5CYII=);
}
.lb-style-greenred .lb-a:hover .lb-like-icon,
.lb-style-greenred .lb-voted .lb-like-icon,
.lb-style-greenred .lb-voted .lb-a:hover .lb-like-icon {
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyxJREFUeNq0Vc1LVFEUP+e+N19i0pCZjLWooU2IGC6koqUrBTcVEkgRVNAiWrToj2jhuqICIcIiwqyEFi0kooXUwlURLkroS0cDnTfz3r2nc+5785xpxmZm0YHjG8+99/c7X/dcJCJARBAZf6KS/PMSIZzif48hQRKaCIVHy7z3LRA8NhpuzZ42Zbsm2BWC0RnVx7Y51sF0Og2pZBoQsBk+iG+GkUslDzzPE9MHMjD2YsKsxASjj5ykDmCRF/t3d2XBGD5I4gG0RCBRyFc5CIX1NTbAErow9PKMLivZ5BXhcuBD/67OLPgcnPYJAlYd8DfSc8MFmBlftd+Kza7LPrsf+CyBYAQB9JcZU7Atgb8Fkwk3HYJrPqABAhOqjnS011iP5VuxxXt4f+gMWCKLxZiy35U/BmHQYaM2FKalSWq0aZQrWSCbKsEyyhuMCdiLhHgS17QJQdBonaLzkYM+Y24TcJW0VKqFoorMT6zV2Z5/UzD1OlsVZeitiiJoqs1EamMU2r2+3j7jVkKuBrkxUoiLenJ6DyxMrtYBir2uDIpraMJEVNIYEmhhxhpv4nybxpetEenx6e6QgELMHSOo6RhoXTSnyDBYfQSSN4KGg8Hfgfjo3e66NkUM25zo7xpEhcRWW5Ll/YVfdbaBe1UpqomAW1S0EYFG1UaKlL3RYELMmEDqIddcGJx0LY1JNwY7fHuvBQq7Rxo+PGd0eNGiGkejIoFBYMhF2ZRCe2kqnUSdTkOCTxd/1tkO3emxKTI8jo2Lxe2LRvCxyJNOS7v6CFcX9kF+Ngf5pzmODCH/LGdJ/yWybnhcyw32eOJxQpbjCPwfNK8PeEdc5IG3YcDfqBpgLE5WwZU3vYDyvjlQ2w2MRDxBqche87AjXt9UHpgvNG8h5MFx+lQ+cT3xCtJwMJvKApXIHmpHkEcbcnoLpQI/MLDs3/RH9Ir5XHkylRpSY85Zd0pIMpkOyHRk2iIobhWhWNyy4PpBcM0smjnGNlj16KegC4fxvDuBOTwBnTDQFsMmLNEKLdD94CH8pndsKdU8+pFIJfez9rBm20sSrLN+Z/0KUQPHBP9T/ggwAHvQz167qU6DAAAAAElFTkSuQmCC);
}
.lb-style-greenred .lb-dislike-icon {
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3NJREFUeNq0VjloVFEUPe/Pny0mY9xxaURtJErUwiWKIFi4gmKRQhELjZWxUEsLLUUIWEVEBC1SqI1BBcFGxAU0ioIgShoXNKjjZJL589/mvf/NlnyXSeGFO593//3n3O29N8JaCyEEbP9RQKoUEt4RAPtI15Om0JyEpI9g7HUofVH0XuY1IuwawfmDC+GJQbJ2omUakMmQi/g3tGAfCwQBMD7GqC+gzE5x6urHGgEuHErZYvkZ0XRg1mxAG1A07kPUH3Hwyg+T+B4oe2BkBNbY12Jaeg16r4Q+u5hvhR561YHZc4BS2RFYi6aFCTzhCNqmQ4x87TBByJgXIoLyWHAgO72N0gwd8LpdwKa9fwZ89wK42Re3M4lHsH4S5XzhQJYIPLante6ER1xSOv0bOMvSTuDUFUAp92Tdc4yHhKKlIAkrbUwnu0YZqFAmU+xclTPdcdDTA3Fb4zfLVrvg3PhAEma6SqAVscqwPjVnbzRX+0aC6ppLTKojvCoBpxY5VyaiWZlMoJWbPiaovHNTpCg1JeuOJ7fFwc7d+Q1BGF9HBBXMGgFnIBui6bvXXAZax9fKOALZkIFuzMCbQomSk9ZW1/qgJ2Yg6xPA0tMVB+t/GLclGjbjm8euB4xDBEbKP/SAE7j09N/R9250x8OJzZX6U2lCl4FhggpetNEsGXWoYLlubBm8+HfwEh1qowHsSBH266jT72OwxQAmdFgJ5foTHXbl7QsscjORoBH1s5RUkliSiXo/OLqAyC8PufV4ETi8AXrSecVLQx3mQRKF70jf/iSiEiVTVpWk9A0RGMrmd1sh2dj8ltao3sZMJGBCNhljkE3ZUq0H+Yx5myuOLw/8NEWAKJMYSdKLTYzhzCZFzpJRZfxsNcMzqz14lw/u+i1jaPUMjbJCSA0q0xSEpFI5pUYB1ysn6PP7PBmRPfKjp+Lm0reMwViMWevBivbEkodbWu7lEmIxsvOAokQ+mLiJ2lOemxoOSbu+5KWpv09Tz9poY5S+oKDtcNf98a2v8vp99cr0uhd5O/tX+X05H4vRPoO+aMeUJJ8n/YGCwnDPkDo+8MEMErZxV+ZuH+KWTs/PYO21VV73ipzompPCyqngfwvx+mXBPtg/ZAY+B3jC91j9Tt7hOipuRwVYRDqXdAammAPpF9IPvHcn/Kv4n/JLgAEArmvwL16iMFEAAAAASUVORK5CYII=);
}
.lb-style-greenred .lb-a:hover .lb-dislike-icon,
.lb-style-greenred .lb-voted .lb-dislike-icon,
.lb-style-greenred .lb-voted .lb-a:hover .lb-dislike-icon {
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA09JREFUeNq0VjtoFGEQnt29vUvuspigpNFGDCFIiME7ER9gZarDJhZaxMLCmE4bC8VK7FL4KBQRCwuxUFATRCJYKCo+DkSChENJoRaKkoR77u7/cObfu33cnt6l8Ich/z//3vfNfDM7G01KCZqmwfuzkwCMJ8HQTwDAYbQ9aEnobjlor0HIe8D5jdzsIzqDwvYJTuc342Ye3ePQ04vQhK11htboGQlgI2a9RvsPwEQ+d+Xxd5+gcOZQUladggZyFDb0A0biGf2wM4NHYpDpACsrIIVc1HqT2ezsnJOgR8RaZRqvRqEfwW0XHYLyg66X1iRBlHQfaKsro2KNTePNVUXg1uypVF8GwZkCHp6ZA2vk73ilJYDitXz8giOJTkQJcKvlKSLQyW9yMQ6agUVmyv4FTovus5fnqSnUX7LhGe8MDmIglimwlrhUBpwxU+fcByicnIiBZq8vtImYR0hVgF774JaZPoFgqDtZo2uyN591pz1n8bP0CBRmkAEPotG07osbykAtwb3uoyZkPCCQxByKpnBsb1yi26/aELjRM0Xd6G7RwGtIxAP9COzO2y4zEC0ZCM/XmoEIZ7AeiRItZyn8OrRkwCIZFCbH4hLd/xgnMGTk3UAgD0c2MCM1aBJgAtkHnzoGXzi6AwkcKEztDORyPRzRxAwTkGYkjpYyVDSdXjaoOiCZiLkpJ4Ft2nyvFIGFnAw7wEAKIyGheA7RE3pQDy7VG5p9WAwNaFeN4wg4SYMU5M1AiCBhSmYzhtAaiApvW+eErsV6XogoAUXuDWIJPaas+QTllCxmqvXttpFU+hlqOrab++FwkYBLXxeKvMmX4g6U03KZ9mrYfS3ZT4xUHdK6wKg4uFgTF4vFyLhnBKg6xe8Yrvz0HD3PUXOJPsIgLMJUcZGOQ5ax7daunqcZHbZCaiNAjUHJjo4By9S9eU8hUZpY4FKoyFYSp3EaBbF/Q0XA8vF39YOfS/xL85OpTwzq+XMjxqWMgSSWBdBnwbpWuYSplQBLuHxxiZ9a+CnmEVt4n8wDBuSei9SmJOy+MKIfGcrAvgETxtaDv+bCYrECL84vibu/HHiDLjv4Ju/3Cph7qQTYgjaINrC+FGAV7Qfat4aIwX8V/3P9EWAAbq/cqE/xB9UAAAAASUVORK5CYII=);
}
.lb-style-greenred .lb-count {
    border-left: 0;
    padding: 0;
}
.lb-style-greenred.lb-counter-type-single-number .lb-count {
    line-height: 26px;
}

/* large */
.likebtn-wrapper.lb-style-large {
    line-height: 64px;
}
.lb-style-large .lb-a,
.lb-style-large .lb-count {
    height: 64px;
}
.lb-style-large .lb-count {
    vertical-align: middle;
    font-size: 32px;
    line-height: 67px;
    border-left: 0;
}
.lb-style-large .lb-like-icon,
.lb-style-large .lb-dislike-icon {
    height: 64px;
    width: 64px;
}
.lb-style-large .lb-like,
.lb-style-large .lb-dislike {
    background-color: transparent;
    color: #555555;
    height: 66px;
}
.lb-style-large .lb-like-label,
.lb-style-large .lb-dislike-label {
    color: #555555;
    font-size: 32px;
    vertical-align: middle;
    padding: 0 6px 0 2px;
}
.lb-style-large .lb-a:hover .lb-like-label,
.lb-style-large .lb-a:hover .lb-dislike-label,
.lb-style-large .lb-voted .lb-like-label,
.lb-style-large .lb-voted .lb-dislike-label,
.lb-style-large .lb-voted .lb-a:hover .lb-like-label,
.lb-style-large .lb-voted .lb-a:hover .lb-dislike-label {
    color: black;
}
.lb-style-large .lb-tt {
    line-height: 16px;
}
.lb-style-large .lb-like-icon,
.lb-style-large .lb-a:hover .lb-like-icon,
.lb-style-large .lb-voted .lb-like-icon,
.lb-style-large .lb-voted .lb-a:hover .lb-like-icon {
    background-image: url(data:image/png;base64,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);
    opacity: 0.66;
    filter: alpha(opacity=66);
    -ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=66)";
}
.lb-style-large .lb-a:hover .lb-like-icon,
.lb-style-large .lb-voted .lb-like-icon,
.lb-style-large .lb-voted .lb-a:hover .lb-like-icon {
    opacity: 1;
    filter: alpha(opacity=100);
    -ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
}
.lb-style-large .lb-dislike-icon,
.lb-style-large .lb-a:hover .lb-dislike-icon,
.lb-style-large .lb-voted .lb-dislike-icon,
.lb-style-large .lb-voted .lb-a:hover .lb-dislike-icon {
    background-image: url(data:image/png;base64,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);
    opacity: 0.66;
    filter: alpha(opacity=66);
    -ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=66)";
}
.lb-style-large .lb-a:hover .lb-dislike-icon,
.lb-style-large .lb-voted .lb-dislike-icon,
.lb-style-large .lb-voted .lb-a:hover .lb-dislike-icon {
    opacity: 1;
    filter: alpha(opacity=100);
    -ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
}

/* github */
.lb-style-github * {
    font: bold 11px/14px "Helvetica Neue",Helvetica,Arial,sans-serif;
    text-rendering: optimizelegibility;
}
.lb-style-github .lb-like,
.lb-style-github .lb-dislike {
    background: none;
    border: 0;
    padding: 0;
    margin-right: 5px;
}
.lb-style-github .lb-a  {
    border-radius: 3px 3px 3px 3px;
    border-color: #518CC6 #518CC6 #2A65A0;
    background-color: #518CC6;
    background-image: linear-gradient(#599BDC, #3072B3);
    background-image:-webkit-gradient(linear,0 0,0 100%,from(#599BDC),to(#3072B3));
    background-image: -moz-linear-gradient(center top , #599BDC, #3072B3);
    background-image:-o-linear-gradient(top,#599BDC,#3072B3);
    background-image:-ms-linear-gradient(top,#599BDC,#3072B3);
    background-image:linear-gradient(top,#599BDC,#3072B3);
    border-image: none;
    border-style: solid;
    border-width: 1px;
    padding: 1px 0 1px 3px;
}

.lb-style-github .lb-like-label,
.lb-style-github .lb-dislike-label,
.lb-style-github .lb-a:hover .lb-like-label,
.lb-style-github .lb-voted .lb-like-label,
.lb-style-github .lb-voted .lb-a:hover .lb-like-label,
.lb-style-github .lb-a:hover .lb-dislike-label,
.lb-style-github .lb-voted .lb-dislike-label,
.lb-style-github .lb-voted .lb-a:hover .lb-dislike-label {
    color: #FFFFFF;
    text-shadow: 0 1px 0 #000000;
}
.lb-style-github .lb-a:hover,
.lb-style-github .lb-voted .lb-a {
    cursor: pointer;
    background-color: #7cb8f2;
    background-image: linear-gradient(#8bc2f7, #599BDC);
    background-image:-webkit-gradient(linear,0 0,0 100%,from(#8bc2f7),to(#599BDC));
    background-image: -moz-linear-gradient(center top , #8bc2f7, #599BDC);
    background-image:-o-linear-gradient(top,#8bc2f7,#599BDC);
    background-image:-ms-linear-gradient(top,#8bc2f7,#599BDC);
    background-image:linear-gradient(top,#7cb8f2,#599BDC);
    background-repeat: no-repeat;
    /*border-color: #D4D4D4 #D4D4D4 #BCBCBC;*/
    border-color: #518CC6 #518CC6 #2A65A0;
    background-repeat: no-repeat;
}
.lb-style-github .lb-count {
    /*top: 0;*/
    *top: -2px; /* IE7 and below */
    padding: 2px 5px 1px 6px;
    cursor: pointer;
    background-color: #FAFAFA;
    border: 1px solid #D4D4D4;
    margin-left: 4px;
    height: 15px;
    /*position: relative;*/
    border-radius: 3px 3px 3px 3px;
    color: #4183C4;
    text-decoration: none;
    text-shadow: 0 1px 0 #FFFFFF;
    white-space: nowrap;
    overflow: visible;
}
.lb-style-github .lb-count:before,
.lb-style-github .lb-count:after {
    content:' ';
    position:absolute;
    display:inline-block;
    width:0;
    height:0;
    border-color:transparent;
    border-style:solid;
    z-index:1;
}
.lb-style-github .lb-count:before {
    top:50%;
    left:-3px;
    margin-top:-4px;
    border-width:4px 4px 4px 0;
    border-right-color:#fafafa;
}
.lb-style-github .lb-count:after {
    top:50%;
    left:-4px;
    margin-top:-5px;
    border-width:5px 5px 5px 0;
    border-right-color:#d4d4d4;
    z-index:0;
}
.lb-style-github .lb-count:hover {
    color: #555555;
}
.lb-style-github .lb-like .lb-a,
.lb-style-github .lb-dislike .lb-a,
.lb-style-github .lb-count {
    top: 0;
}

/* tooltip */
.likebtn-wrapper .lb-a .lb-tt i {
    color: black;
}
.likebtn-wrapper .lb-a .lb-tt {
    line-height: 16px;
    display: none;
}
.likebtn-wrapper .lb-a i {
    font-style: normal;
    display: block;
}
/*background:; ie hack, something must be changed in a for ie to execute it*/
.likebtn-wrapper .lb-a:hover,
.likebtn-wrapper .lb-share-active .lb-a {
    z-index:25;
    background:;
}
.likebtn-wrapper .lb-share-active .lb-a:hover .lb-tooltip-tt {
    display: none;
}
.likebtn-wrapper.lb-tooltip-like-show-always .lb-like .lb-tt,
.likebtn-wrapper.lb-tooltip-dislike-show-always .lb-dislike .lb-tt,
.likebtn-wrapper .lb-a:hover .lb-tt,
.likebtn-wrapper .lb-share-active .lb-a .lb-tt.lb-share-tt {
    /*background-color: white;
    background-image:-webkit-gradient(linear,0 0,0 100%,from(#F2F2F2),to(#FFFFFF));
    background-image: -moz-linear-gradient(center top , #F2F2F2, #FFFFFF);
    background-image:-o-linear-gradient(top,#F2F2F2,#FFFFFF);
    background-image:-ms-linear-gradient(top,#F2F2F2,#FFFFFF);
    background-image:linear-gradient(top,#F2F2F2,#FFFFFF);*/
    color: black;
    cursor: default;
    display: block;
    position: absolute;
    /*bottom: 25px; */
    bottom: 100%;
    margin: 0 0 8px;
    left: -2px;
    text-align: center;
    overflow: visible;
    z-index:1000000;
    white-space: nowrap;
}
/* do not show Unlike if voted and unlike is not allowed */
/*.likebtn-wrapper.lb-unlike-not-allowed .lb-voted .lb-a:hover .lb-tt {
    display: none;
}
.likebtn-wrapper.lb-unlike-not-allowed .lb-share-active .lb-a .lb-tt.lb-share-tt {
    display: block;
}*/
/* do not show tooltip in display only mode or if tooltip is disabled */
/* or if canceling vote not allowed and client already voted */
.likebtn-wrapper .lb-share-active .lb-a .lb-tooltip-tt,
.likebtn-wrapper.lb-display-only .lb-a .lb-tooltip-tt,
.likebtn-wrapper.lb-display-only .lb-a:hover .lb-tooltip-tt,
.likebtn-wrapper.lb-unlike-not-allowed .lb-voted .lb-a:hover .lb-tooltip-tt,
.likebtn-wrapper.lb-tooltip-disabled .lb-a .lb-tooltip-tt,
.likebtn-wrapper.lb-tooltip-disabled .lb-a:hover .lb-tooltip-tt {
    display: none;
}
/*.likebtn-wrapper.lb-tooltip-like-show-always .lb-like .lb-tt,
.likebtn-wrapper.lb-tooltip-dislike-show-always .lb-dislike .lb-tt {
    display: block;
}*/
.likebtn-wrapper.lb-unlike-not-allowed.lb-display-only .lb-share-active .lb-a .lb-tt.lb-share-tt {
    display: block;
}
.likebtn-wrapper .lb-share-active .lb-a .lb-tt.lb-share-tt {
    text-align: left;
}
.lb-tt-lt,
.lb-tt-rt,
.lb-tt-lb,
.lb-tt-rb {
    height: 3px;
    width: 3px;
    position: absolute;
}
.lb-tt-lt {
    background-image: url(data:image/gif;base64,R0lGODlhAwADAKIEAMLCwvb29tDQ0LCwsP///wAAAAAAAAAAACH5BAEAAAQALAAAAAADAAMAAAMGSDICMSEkADs=);
    left: 0;
    top: 0;
}
.lb-tt-rt {
    background-image: url(data:image/gif;base64,R0lGODlhAwADAKIEAMLCwvb29tDQ0LCwsP///wAAAAAAAAAAACH5BAEAAAQALAAAAAADAAMAAAMGOEIBEmEkADs=);
    right: 0;
    top: 0;
}
.lb-tt-lb {
    background-image: url(data:image/gif;base64,R0lGODlhAwADAKIEAPb29v///9DQ0LCwsP///wAAAAAAAAAAACH5BAEAAAQALAAAAAADAAMAAAMGOBAiQGIkADs=);
    left: 0;
    bottom: 0;
}
.lb-tt-rb {
    background-image: url(data:image/gif;base64,R0lGODlhAwADAKIEAPb29v///9DQ0LCwsP///wAAAAAAAAAAACH5BAEAAAQALAAAAAADAAMAAAMGGDAgMoIkADs=);
    right: 0;
    bottom: 0;
}
.lb-tt-m,
.lb-tt-mu {
    border-top: 1px solid #a9a9a9;
    border-bottom: 1px solid #a9a9a9;
    padding: 4px;
    margin: 0 3px;
}
.lb-tt-m,
.lb-tt-mu,
.lb-tt-m2 {
    background-color: white;
    background-image:-webkit-gradient(linear,0 0,0 100%,from(#F2F2F2),to(#FFFFFF));
    background-image: -moz-linear-gradient(center top , #F2F2F2, #FFFFFF);
    background-image:-o-linear-gradient(top,#F2F2F2,#FFFFFF);
    background-image:-ms-linear-gradient(top,#F2F2F2,#FFFFFF);
    background-image:linear-gradient(top,#F2F2F2,#FFFFFF);
}
.likebtn-wrapper .lb-a .lb-tt-mu {
    display: none;
}
.likebtn-wrapper .lb-voted .lb-a .lb-tt-mu {
    display: block;
}
.likebtn-wrapper .lb-voted .lb-a .lb-tt-m {
    display: none;
}
.likebtn-wrapper .lb-share-active.lb-voted .lb-tt-m {
    display: block;
}
.lb-tt-m2 {
    border-left: 1px solid #a9a9a9;
    border-right: 1px solid #a9a9a9;
    position: absolute;
    left: 0;
    top: 3px;
    bottom: 3px;
    right: 0;
    z-index: -1;
}
.lb-tt-a {
    background-image: url("data:image/gif;base64,R0lGODlhCwAGAJECAKmpqf///////wAAACH5BAEAAAIALAAAAAALAAYAAAIQRI4IYnkrmINRvooNxXGLAgA7");
    bottom: -5px;
    height: 6px;
    left: 8px;
    position: absolute;
    width: 11px;
}
.lb-share-tt .addthis_toolbox {
    display: block;
    float: none;
    margin: 0;
    overflow: visible;
    padding: 7px 0;
    position: static;
    width: 168px;
}
.lb-share-tt-popup_text {
    padding: 2px 0 7px;
    display: block;
}
.lb-share-tt .at_a11y {
    height: 1px !important;
    left: -10000px !important;
    overflow: hidden !important;
    position: absolute !important;
    top: auto !important;
    width: 1px !important;
}
.lb-share-tt .addthis_default_style .at300b,
.lb-share-tt .addthis_default_style .at300bo,
.lb-share-tt .addthis_default_style .at300m {
    padding: 0 2px 3px 2px;
}
.lb-share-tt .addthis_20x20_style .at300b,
.lb-share-tt .addthis_20x20_style .at300bo,
.lb-share-tt .addthis_20x20_style .at300m {
    padding: 0 1px 3px 0;
}
.lb-share-tt .addthis_20x20_style .at-icon-wrapper,
.lb-share-tt .addthis_20x20_style .at-icon {
    height: 20px !important;
    width: 20px !important;
}
.lb-share-tt-ft {
    clear: left;
    display: block;
    overflow: hidden;
    line-height: 15px;
    width: 100%;
    min-width: 168px;
}

.likebtn-wrapper .lb-share-tt-ft a.lb-share-tt-tm {
    color: #787869;
    cursor: pointer;
    display: inline;
    float: left;
    font-size: 9px;
    position: relative;
    text-decoration: none;
    top: 1px;
}
.likebtn-wrapper .lb-share-tt-ft .lb-share-tt-cl {
    color: #787869;
    float: right;
    font-weight: normal;
    display: inline;
    cursor: pointer;
    text-decoration: underline;
}

/* popup positions */

/* bottom */
.likebtn-wrapper.lb-popup-position-bottom .lb-a .lb-tt,
.likebtn-wrapper.lb-popup-position-bottom .lb-share-active .lb-a .lb-tt.lb-share-tt {
    bottom: auto;
    margin: 8px 0 0;
    top: 100%;
}
.lb-popup-position-bottom .lb-tt-m,
.lb-popup-position-bottom .lb-tt-mu,
.lb-popup-position-bottom .lb-tt-m2 {
    background-image:-webkit-gradient(linear,0 0,0 100%,from(#FFFFFF),to(#F2F2F2));
    background-image: -moz-linear-gradient(center top , #FFFFFF, #F2F2F2);
    background-image:-o-linear-gradient(top,#FFFFFF,#F2F2F2);
    background-image:-ms-linear-gradient(top,#FFFFFF,#F2F2F2);
    background-image:linear-gradient(top,#FFFFFF,#F2F2F2);
}
.lb-popup-position-bottom .lb-tt-a {
    background-image: url("data:image/gif;base64,R0lGODlhCwAGAJECAKmpqf///////wAAACH5BAEAAAIALAAAAAALAAYAAAIRlA2nGLkCgnQnylmvTlZfUAAAOw==");
    top: -5px;
    bottom: auto;
}

/* left */
.likebtn-wrapper.lb-popup-position-left .lb-a .lb-tt,
.likebtn-wrapper.lb-popup-position-left .lb-share-active .lb-a .lb-tt.lb-share-tt {
    bottom: auto;
    left: auto;
    margin: -3px 10px 0 0;
    right: 100%;
    top: auto;
}
.lb-popup-position-left .lb-tt-a {
    background-image: url("data:image/gif;base64,R0lGODlhBgALAJECAKmpqfLy8v///wAAACH5BAEAAAIALAAAAAAGAAsAAAIRhH5hGMq9GhQSViOjS+v0UwAAOw==");
    bottom: auto;
    left: auto;
    right: -5px;
    top: 5px;
    height: 11px;
    width: 6px;
}

/* right */
.likebtn-wrapper.lb-popup-position-right .lb-a .lb-tt,
.likebtn-wrapper.lb-popup-position-right .lb-share-active .lb-a .lb-tt.lb-share-tt {
    bottom: auto;
    left: 100%;
    margin: -3px 10px 0 0;
    top: auto;
}
.lb-popup-position-right .lb-tt-a {
    background-image: url("data:image/gif;base64,R0lGODlhBgALAJECAKmpqfLy8v///wAAACH5BAEAAAIALAAAAAAGAAsAAAIRlA0nEMe9gowyvEpndhpBVwAAOw==");
    bottom: auto;
    left: -5px;
    right: -5px;
    top: 5px;
    height: 11px;
    width: 6px;
}

/* popup style */
.likebtn-wrapper.lb-popup-style-dark .lb-a .lb-tt * {
    color: #f9f6f6;
}

.likebtn-wrapper.lb-popup-style-dark .lb-a:hover .lb-tt,
.likebtn-wrapper.lb-popup-style-dark .lb-share-active .lb-a .lb-tt.lb-share-tt {
    color: #f9f6f6;
}
.lb-popup-style-dark .lb-tt-m,
.lb-popup-style-dark .lb-tt-mu {
    border-top: 1px solid black;
    border-bottom: 1px solid black;
}
.lb-popup-style-dark .lb-tt-m2 {
    border-left: 1px solid black;
    border-right: 1px solid black;
}
.lb-popup-style-dark .lb-tt-m,
.lb-popup-style-dark .lb-tt-mu,
.lb-popup-style-dark .lb-tt-m2 {
    background-color: #3d3a3a;
    background-image:-webkit-gradient(linear,0 0,0 100%,from(#595959),to(#2b2b2b));
    background-image: -moz-linear-gradient(center top , #595959, #2b2b2b);
    background-image:-o-linear-gradient(top,#595959,#2b2b2b);
    background-image:-ms-linear-gradient(top,#595959,#2b2b2b);
    background-image:linear-gradient(top,#595959,#2b2b2b);
}
.lb-popup-style-dark .lb-tt-lt {
    background-image: url(data:image/gif;base64,R0lGODlhAwADAJEDADMzMwAAAFlZWf///yH5BAEAAAMALAAAAAADAAMAAAIFHHISIgUAOw==);
}
.lb-popup-style-dark .lb-tt-rt {
    background-image: url(data:image/gif;base64,R0lGODlhAwADAJEDADMzMwAAAFlZWf///yH5BAEAAAMALAAAAAADAAMAAAIEDCYmWQA7);
}
.lb-popup-style-dark .lb-tt-lb {
    background-image: url(data:image/gif;base64,R0lGODlhAwADAJEDADMzMwAAACsrK////yH5BAEAAAMALAAAAAADAAMAAAIEjAQ2WQA7);
}
.lb-popup-style-dark .lb-tt-rb {
    background-image: url(data:image/gif;base64,R0lGODlhAwADAJEDADMzMwAAACsrK////yH5BAEAAAMALAAAAAADAAMAAAIFlHIQMAUAOw==);
}
.lb-popup-style-dark .lb-tt-a {
    background-image: url("data:image/gif;base64,R0lGODlhCwAGAJECAKmpqf///wAAAAAAACH5BAEAAAIALAAAAAALAAYAAAINnI8jieKs3GtSnoqjLAA7");
}
.lb-popup-position-bottom.lb-popup-style-dark .lb-tt-a {
    background-image: url("data:image/gif;base64,R0lGODlhCwAGAJECAKmpqf///wAAAAAAACH5BAEAAAIALAAAAAALAAYAAAINlD2nOLnS4or00AvvLQA7");
}
.lb-popup-position-right.lb-popup-style-dark .lb-tt-a {
    background-image: url("data:image/gif;base64,R0lGODlhBgALAIABAAAAAP///yH5BAEAAAEALAAAAAAGAAsAAAIPjA0XkMj+mJxxwrbe0bsAADs=");
}
.lb-popup-position-left.lb-popup-style-dark .lb-tt-a {
    background-image: url("data:image/gif;base64,R0lGODlhBgALAKICAKmpqf///wAAAAAAAAAAAAAAAAAAAAAAACH5BAEAAAIALAAAAAAGAAsAAAMRSLJLyu6J+KiyeMbmoJzMkgAAOw==");
}
