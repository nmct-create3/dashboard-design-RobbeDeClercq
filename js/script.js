const enableMenuToggle = function(){
    const toggleButton = document.querySelector('.js-menu-toggle'),
        sidebar = document.querySelector('.js-sidebar-menu');

    toggleButton.addEventListener('click', function(e){
        e.preventDefault();

        if(sidebar.style.display == 'block'){
            sidebar.style.display = 'none';
        } else{
            sidebar.style.display = 'block';
        }
    });
}

document.addEventListener('DOMContentLoaded', function() {
    console.log('script Loaded!');
    enableMenuToggle();
});