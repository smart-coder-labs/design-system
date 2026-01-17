#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const init_1 = require("./commands/init");
const add_1 = require("./commands/add");
const update_1 = require("./commands/update");
const program = new commander_1.Command();
program
    .name("apple-design-system")
    .description("CLI for adding components and initializing the design system")
    .version("1.0.0");
program
    .command("init")
    .description("Initialize the design system configuration")
    .action(init_1.init);
program
    .command("add")
    .description("Add a component to your project")
    .argument("[components...]", "The components to add")
    .action((components) => (0, add_1.add)(components));
program
    .command("update")
    .description("Update installed components to the latest version")
    .argument("[components...]", "The components to update")
    .action((components) => (0, update_1.update)(components));
program.parse();
//# sourceMappingURL=index.js.map