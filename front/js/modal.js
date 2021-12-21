var modalVertCenter = function () {
    var wH = $(window).height();
    var mH = $("#popBox .modal-inner").height();
    var mW = $("#popBox .modal-inner").width();
    var modalHeight = mH / 2;
    var windowHeight = wH / 2;
    var vertCenter = windowHeight - modalHeight;
    var modalWidth = mW / 2;

    $("#popBox .modal-inner").css({
        "margin-top": vertCenter + "px",
        "margin-left": "-" + modalWidth + "px",
    });
};

$(document).ready(function () {
    (function (global) {
        "use strict";

        // Storage variable
        var modal = {};

        // Store for currently active element
        modal.lastActive = undefined;
        modal.activeElement = undefined;

        // Polyfill addEventListener for IE8 (only very basic)
        modal._addEventListener = function (element, event, callback) {
            if (element.addEventListener) {
                element.addEventListener(event, callback, false);
            } else {
                element.attachEvent("on" + event, callback);
            }
        };

        // Hide overlay when ESC is pressed
        modal._addEventListener(
            document,
            "keyup",
            function (event) {
                var hash = window.location.hash.replace("#", "");

                // If hash is not set
                if (hash === "" || hash === "!") {
                    return;
                }

                // If key ESC is pressed
                if (event.keyCode === 27) {
                    window.location.hash = "!";

                    if (modal.lastActive) {
                        return false;
                    }

                    // Unfocus
                    modal.removeFocus();
                }
            },
            false
        );

        // Convenience function to trigger event
        modal._dispatchEvent = function (event, modal) {
            var eventTigger;

            if (!document.createEvent) {
                return;
            }

            eventTigger = document.createEvent("Event");

            eventTigger.initEvent(event, true, true);
            eventTigger.customData = { modal: modal };

            document.dispatchEvent(eventTigger);
        };

        // When showing overlay, prevent background from scrolling
        modal.mainHandler = function () {
            var hash = window.location.hash.replace("#", "");
            var modalElement = document.getElementById(hash);
            var htmlClasses = document.documentElement.className;
            var modalChild;
            var oldModal;

            // If the hash element exists
            if (modalElement) {
                // Get first element in selected element
                modalChild = modalElement.children[0];

                // When we deal with a modal and body-class `has-overlay` is not set
                if (modalChild && modalChild.className.match(/modal-inner/)) {
                    if (!htmlClasses.match(/has-overlay/)) {
                        // Set an html class to prevent scrolling
                        document.documentElement.className += " has-overlay";
                    }

                    // Unmark previous active element
                    if (modal.activeElement) {
                        oldModal = modal.activeElement;
                        oldModal.className = oldModal.className.replace(" is-active", "");
                    }
                    // Mark modal as active
                    modalElement.className += " is-active";
                    modal.activeElement = modalElement;

                    // Set the focus to the modal
                    modal.setFocus(hash);

                    // Fire an event
                    modal._dispatchEvent("cssmodal:show", modal.activeElement);
                }
            } else {
                document.documentElement.className = htmlClasses.replace(" has-overlay", "");

                // If activeElement is already defined, delete it
                if (modal.activeElement) {
                    modal.activeElement.className = modal.activeElement.className.replace(" is-active", "");

                    // Fire an event
                    modal._dispatchEvent("cssmodal:hide", modal.activeElement);

                    // Reset active element
                    modal.activeElement = null;

                    // Unfocus
                    modal.removeFocus();
                }
            }
            modalVertCenter();
        };

        modal._addEventListener(window, "hashchange", modal.mainHandler);
        modal._addEventListener(window, "load", modal.mainHandler);

        /*
         * Accessibility
         */

        // Focus modal
        modal.setFocus = function () {
            if (modal.activeElement) {
                // Set element with last focus
                modal.lastActive = document.activeElement;

                // New focussing
                modal.activeElement.focus();
            }
        };

        // Unfocus
        modal.removeFocus = function () {
            if (modal.lastActive) {
                modal.lastActive.focus();
            }
        };

        // Export CSSModal into global space
        global.CSSModal = modal;
    })(window);
});

$(window).load(function () {
    $("#popBox .imageTypeFontAwesome").append('<i class="fa fa-times" />');
});

$(window).resize(function () {
    modalVertCenter();
});
