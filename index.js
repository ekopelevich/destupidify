module.exports = {
  destupidifyAffirmativeVal: function(input) {
    lc = input.toLowerCase();
    var pos = ['true', 'yes', 'yup', 'yep', 'yeah', 'sure', 'i guess', 'i am not opposed to that'];
    for (var i = 0; i < pos.length; i++) {
      if(lc === pos[i]) {
        return true;
      }
    }
  },
  destupidifyNegativeVal: function(input) {
    var neg = ['false', 'no', 'nope', 'nuh-uh', 'nay', 'nah', 'not really', 'no fucking way dude'];
    lc = input.toLowerCase();
    for (var i = 0; i < neg.length; i++) {
      if(lc === neg[i]) {
        return false;
      }
    }
  },
  isThisShitStupid: function(input) {
    var string = String(input);
    return this.destupidifyAffirmativeVal(string) !== undefined
    || this.destupidifyNegativeVal(string) !== undefined;
  }
};
