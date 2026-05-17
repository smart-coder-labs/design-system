#!/usr/bin/env node
import { Command } from "commander";
import { init } from "./commands/init";
import { add } from "./commands/add";
import { update } from "./commands/update";
import { updateComponents } from "./commands/update-components";
import { rollback } from "./commands/rollback";
import { status } from "./commands/status";

const program = new Command();

program
  .name("apple-design-system")
  .description("CLI for adding components and initializing the design system")
  .version("1.0.0");

program
  .command("init")
  .description("Initialize the design system configuration")
  .action(init);

program
  .command("add")
  .description("Add a component to your project")
  .argument("[components...]", "The components to add")
  .action((components) => add(components));

program
  .command("update")
  .description("Update installed components to the latest version")
  .argument("[components...]", "The components to update")
  .action((components) => update(components));

program
  .command("update-components")
  .description("Interactively update components from the design system (with UI selection)")
  .action(() => updateComponents());

program
  .command("rollback")
  .description("Roll back a component to a previous version")
  .argument("<component>", "Component name")
  .argument("<version>", "Target version (must exist as git tag v{version})")
  .action((component, version) => rollback(component, version));

program
  .command("status")
  .description("Show installed component versions and their status")
  .argument("[component]", "Component name (optional)")
  .action((component) => status(component));

program.parse();
