// Import all BS plugins
import * as bootstrap from 'bootstrap';

console.log("Main.JS has been loaded!");

window.onload = function() {
    document.querySelector("#bt").addEventListener('click', function(evt){
        console.log("Button Clicked!")
        import('/pages/maths').then(function(page){
            page.render(document.querySelector(".holder"))
        })
    })
}