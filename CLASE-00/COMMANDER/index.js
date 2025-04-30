// npm i commander
const { Command, Option } = require('commander');
const program = new Command();

//*      
program.option("-p, --port <PORT>", "Puerto donde escuchará el server", 3000)
program.option("-d, --debug", "Activa mode debug")
program.addOption(new Option("-m, --mode <MODE>", "Modo de ejecución del script").choices(["prod", "dev", "test"]).default("prod"))

program.allowUnknownOption()
program.allowExcessArguments()
program.parse()
const opts = program.opts()
// console.log("-args->", program.args);
console.log("-opts->", opts);
