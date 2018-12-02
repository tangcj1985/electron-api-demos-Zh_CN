var ffi = require("ffi")

var iopath = __dirname + '\\dllDemo.dll';
var DLL = ffi.Library(iopath , {
    'Sum' : ['int', ['int', 'int']]
});

const dllButton = document.getElementById('dllButton')
dllButton.addEventListener('click', () => {
  var result = DLL.Sum(1, 2);
  document.getElementById('dllResp').innerHTML = result;
})



