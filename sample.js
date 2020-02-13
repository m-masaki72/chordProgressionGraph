function play(label) {
  var synth = new Tone.Synth().toMaster();
  if (label === "") label = "C"
  let onkai = label + "4";
  synth.triggerAttackRelease(onkai, '2n');

  // var polySynth = new Tone.PolySynth(1, Tone.Synth).toMaster();
  // polySynth.triggerAttackRelease(['B#4'], '2n')
}

function playSeventh() {
  //creates 4 instances of the Tone.Synth
  var polySynth = new Tone.PolySynth(4, Tone.Synth).toMaster();
  polySynth.triggerAttackRelease(['C4', 'E4', 'G4', 'B4'], '2n')
}

function playMajorSeventh() {
  //creates 4 instances of the Tone.Synth
  var polySynth = new Tone.PolySynth(4, Tone.Synth).toMaster();
  polySynth.triggerAttackRelease(['C4', 'E4', 'G4', 'B#4'], '2n')
}

