
function string (str) {
    return str.split(' ').map(function(amazing) {
      return amazing.split('').reverse().join('');
    }).join(' ')
  }