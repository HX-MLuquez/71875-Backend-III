const { Command, Option } = require("commander");
const program = new Command();

program.addOption(
  new Option("-m, --mode <MODE>", "Modo de ejecución del server")
    .choices(["prod", "dev"])
    .default("dev")
);

program.parse();

const { mode } = program.opts();

process.loadEnvFile(mode === "prod" ? "./.env.prod" : "./.env.dev");

const config = {
  PORT: process.env.PORT,
  SECRET: process.env.SECRET,
};

module.exports = { config };
