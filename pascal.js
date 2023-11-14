function myFunction() {
    document.getElementById("myDropdown") .classList.toggle("show");
}
window.onclick = function(event) {
    if
    ( !event.target.matches('.drobtn')
    ) {
        var dropdowns = 
        document.getElementsByClassName("dropdown-content");
        var i;
        for ( i = 0; i < dropdowns.length; i++ ) {
            var openDropdown = dropdowns[i];
            if
            (openDropdown.classList.contains('shows')) {
                openDropdown.classList.remove('shows')
            }
        }
    }
}