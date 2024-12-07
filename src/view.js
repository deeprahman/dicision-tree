/**
 * Use this file for JavaScript code that you want to run in the front-end
 * on posts/pages that contain this block.
 *
 * When this file is defined as the value of the `viewScript` property
 * in `block.json` it will be enqueued on the front end of the site.
 *
 * Example:
 *
 * ```js
 * {
 *   "viewScript": "file:./view.js"
 * }
 * ```
 *
 * If you're not making any changes to this file because your project doesn't need any
 * JavaScript running in the front-end, then you should delete this file and remove
 * the `viewScript` property from `block.json`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/#view-script
 */

/* eslint-disable no-console */
console.log( 'Hello World! (from create-block-todo-list block)' );

/* eslint-enable no-console */


 const sections = document.querySelectorAll(".question, .info, .result");
    const backButton = document.getElementById("back-button");
    const history = [];
console.log(sections);
    // Funktion zur Anzeige eines Abschnitts
    function showSection(targetId) {
        sections.forEach(section => section.classList.add("hidden"));
        document.getElementById(targetId).classList.remove("hidden");

        // Back-Button anzeigen, wenn es einen Verlauf gibt
        backButton.classList.toggle("hidden", history.length === 0);
    }

    // Event-Listener für Buttons
    document.querySelectorAll("button[data-target]").forEach(button => {
        button.addEventListener("click", () => {
            const currentId = Array.from(sections).find(section => !section.classList.contains("hidden")).id;
            history.push(currentId);

            const targetId = button.getAttribute("data-target");
            showSection(targetId);
        });
    });

    // Zurück-Button
    backButton.addEventListener("click", () => {
        const lastSectionId = history.pop();
        showSection(lastSectionId);
    });

    // Start mit dem ersten Abschnitt
    showSection("question-1");

