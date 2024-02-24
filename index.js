window.onload = function() {
    const formData = document.getElementById('contact-form');
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        
        // generate a five digit number for the contact_number variable
        contact_number = Math.random() * 100000 | 0;
        // these IDs from the previous steps
        emailjs.sendForm('service_s749p2l', 'template_y14s00w',this)
            .then(function() {
                alert("Your Message Sent Successfully")
                formData.reset();
                
            }, function(error) {
                alert("Message Not Send");;
            });
            

    });
}

// // console.log(window.getComputedStyle('.mobile-navigation'));
// console.log(document.getElementsByClassName(".mobile-navigation").style.display);
// const mobileNavigation = document.getElementsByClassName('mobile-navigation');

window.addEventListener('resize', () => {

    // console.log(typeof screen.width);

    if(screen.width >= 960){

        let mobileNavigation = document.getElementById('close');
        mobileNavigation.style.display = 'none';

    }

}
    
);

function toogleMenu(id){
    // let cancelIcon = document.getElementsByClassName(.)
    let mobileNavigation = document.getElementById(id);
    if(mobileNavigation.style.display == 'none'){
        mobileNavigation.style.display = 'block';
        mobileNavigation.addEventListener('click',()=>{
            mobileNavigation.style.display = 'none';
        });
    }
    else{
        mobileNavigation.style.display = 'none'
    }
}





