//create the synth
__().brown().comb().dac(0.5).play();

//initialize midi
__.midi_init(function(){

  __.midi_noteon(function(data){
    __("brown").brown("noteOn",{channels:data[1],length:data[2]});
  });

  __.midi_noteoff(function(data){
    __("brown").brown("noteOff",{channels:data[1],envelope:1});
  });

  __.midi_control(function(data){
    switch(data[1]) {
    }
  });

});