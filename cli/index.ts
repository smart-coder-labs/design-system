#!/usr/bin/env node
import { Command } from "commander";
import { init } from "./commands/init";
import { add } from "./commands/add";
import { update } from "./commands/update";

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

program.parse();
