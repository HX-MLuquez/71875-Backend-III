// console.log("00 process", process)
console.log("01 cwd", process.cwd());
// 01 cwd C:\Users\mauuu\OneDrive\Escritorio\CODERHOUSE\71875-Back-III-CLASE\CLASE-00\PROCESS
console.log("02 pid", process.pid);
// 02 pid 23720
console.log("03 pid", process.platform);
// 03 pid win32

// console.log("04 env", process.env)
// 04 env {....}

console.log("05 argv", process.argv);
/*
05 argv [
  'C:\\Users\\mauuu\\AppData\\Roaming\\nvm\\v20.17.0\\node.exe',
  'C:\\Users\\mauuu\\OneDrive\\Escritorio\\CODERHOUSE\\71875-Back-III-CLASE\\CLASE-00\\PROCESS\\process.js',
  'ahora',
  'van',
  'a',
  'ver',
  'lo',
  'que',
  'es',
  'esto'
]
*/

let [dirNode, pathScript, ...argumentos] = process.argv; // ... son aquí el operador
console.log("dirNode-->", dirNode);
console.log("pathScript-->", pathScript);
console.log(argumentos);

let mode = null;

argumentos.forEach((element, index) => {
  if (element === "--mode") {
    mode = argumentos[index + 1];
  }
});
console.log(mode);
