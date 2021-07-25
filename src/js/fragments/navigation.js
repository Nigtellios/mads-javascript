/* Navbar will be rendered using vanilla JS! */

// Promise Error Solution - https://github.com/parcel-bundler/parcel/issues/871
import 'babel-polyfill';

module.exports = {
    render: function(element) {

        // Create Fragment with Navigation bar
        let navFragment = document.createRange().createContextualFragment(
            '<div class="navigation">' +
            '<div class="navigation__bar">' +
            '<h1 class="logotype">M.A.D.S</h1>' +
            '<button class="btn btn-outline-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop">Menu</button>' +
            '<div class="offcanvas offcanvas-top" tabindex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">'
        );

        // OffCanvas Header inside Offcanvas
        let offCanvasHeader = document.createRange().createContextualFragment(
            '<div class="offcanvas-header">' +
            '<h5 id="offcanvasTopLabel">Maths and Algorithms in JavaScript</h5>' +
            '<button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>'
        );

        // Offcanvas Body inside Offcanvas
        let offCanvasBody = document.createRange().createContextualFragment(
            '<div class="offcanvas-body">' +
            'Content goes here B)'
        );

        // Error
        let offCanvasError = document.createRange().createContextualFragment(
            '<h1 style="text-align:center;">There was an error. Please try again.</h1>'
        );

        function createHeader() {
            return element.appendChild(navFragment);
        }

        function rejectionError(el) {
            return el.appendChild(offCanvasError);
        }

        function createOffCanvasHeader(offcanvas) {
            return offcanvas.appendChild(offCanvasHeader);
        }

        function createOffCanvasBody(offcanvas) {
            return offcanvas.appendChild(offCanvasBody);
        }

        async function loadPromise() {
            try {
                createHeader();
            } catch (err) {
                console.log(err);
                throw err;
            }
        }

        loadPromise()
            .then( createHeader => {
                const offcanvas = document.getElementById('offcanvasTop');
                createOffCanvasHeader(offcanvas);
                console.log('Header created!');
            } )
            .then( createBody => {
                const offcanvas = document.getElementById('offcanvasTop');
                createOffCanvasBody(offcanvas);
                console.log('OffcanvasBody created!');
            } )
            .catch( err => {
                console.log('We got an error!', err);
            } );

    } //render
} // module.export