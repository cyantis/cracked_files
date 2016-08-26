//set up sounds to control
//__().noise().gain().dac(0.05);
//__().white().gain().dac(0.05);
//__().brown().gain().dac(0.05);
//__().pink().gain().dac(0.05);

//add a delay in parallel
__("noise").delay().connect("gain");
__("white").delay().connect("gain");
__("brown").delay().connect("gain");
__("pink").delay().connect("gain");

//example convenience methods to set a single parameter
//__("lowpass").frequency(6000);
__("gain").volume(.5);
__("delay").time(2);
__("delay").feedback(10);


__("*").play();