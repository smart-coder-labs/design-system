#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const init_1 = require("./commands/init");
const add_1 = require("./commands/add");
const update_1 = require("./commands/update");
const update_components_1 = require("./commands/update-components");
const rollback_1 = require("./commands/rollback");
const status_1 = require("./commands/status");
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
program
    .command("update-components")
    .description("Interactively update components from the design system (with UI selection)")
    .action(() => (0, update_components_1.updateComponents)());
program
    .command("rollback")
    .description("Roll back a component to a previous version")
    .argument("<component>", "Component name")
    .argument("<version>", "Target version (must exist as git tag v{version})")
    .action((component, version) => (0, rollback_1.rollback)(component, version));
program
    .command("status")
    .description("Show installed component versions and their status")
    .argument("[component]", "Component name (optional)")
    .action((component) => (0, status_1.status)(component));
program.parse();
//# sourceMappingURL=index.js.map