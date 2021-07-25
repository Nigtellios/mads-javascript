// Import all BS plugins
import * as bootstrap from 'bootstrap';

// Load Navigation
window.addEventListener('DOMContentLoaded', (event) => {
    import('./fragments/navigation').then(function(page){
        page.render(document.querySelector(".main__header"));
    });
});

window.addEventListener('DOMContentLoaded', (event) => {
    document.querySelector("#bt").addEventListener('click', function(evt){
        console.log("Button Clicked!")
        import('./fragments/maths').then(function(page){
            page.render(document.querySelector(".holder"))
        });
    });
})