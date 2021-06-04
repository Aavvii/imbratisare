var button = document.getElementById("clickme"),
  count = 0;
button.onclick = function() {
  count += 1;
  button.innerHTML = "imbratisari coamdante: " + count;
  
  const fs = require('fs')
  fs.writeFile('imbratisari.txt', count , function (err) {
	  if (err) throw err;
  })
};

