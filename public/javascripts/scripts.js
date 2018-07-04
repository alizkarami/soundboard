// play audio array
var play_array  = [];



// click handler
document.addEventListener('click', function(e) {
    e = e || window.event;
    //target that has been clicked
    const target = e.target || e.srcElement;

    //get class name
    let this_class = target.className;


    // toggle show and hide each section
    if (this_class === 'inst-nav') {

        // pause all sound when menu changes
        resetActive('play-sound');
        play_array.map(function (el) {
            pauseSound(el);
        });
        toggleShowByClass('inst-sec', 'none');
        let this_id = target.id;
        const sec_id = this_id.replace('-sec', '');
        displaySection(sec_id);
        resetActive(this_class);
        target.className = this_class + ' active';
    }


    // if class name is play-sound then start mapping playing music here
    if (this_class === 'play-sound') {
        resetActive(this_class);
        target.className = this_class + ' active';
        // get name of sound is going to be played
        const sound_data = target.getAttribute('data-sound');
        // pushed in a array
        play_array.push(sound_data);

        play_array.map(function (el) {
            // checks if this sound is in array to paused and plays the current one that has been clicked
            if (el === sound_data) {
                playSound(el);
            } else {
                pauseSound(el);
            }
        });
    }
    
}, false);

// reset active
function resetActive(className) {
    const elements = document.getElementsByClassName(className);

    for (var i = 0; i < elements.length; i++){
        elements[i].className = className;
    }
}

// show function
function toggleShowByClass(className, displayState){
    const elements = document.getElementsByClassName(className);

    for (var i = 0; i < elements.length; i++){
        elements[i].style.display = displayState;
    }
}

// hide function
function displaySection(id){
    const element = document.getElementById(id);
    element.style.display = 'block';
}

//play sound by data-sound property value
function playSound(e) {
    const sound_tag =  document.querySelectorAll('audio[data-sound="'+e+'"]');
    let sound = sound_tag[0];
    sound.play();
}

//pause sound by data-sound property value
function pauseSound(e) {
    const sound_tag =  document.querySelectorAll('audio[data-sound="'+e+'"]');
    let sound = sound_tag[0];
    sound.pause();
}
