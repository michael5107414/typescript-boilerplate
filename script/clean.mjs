#!/usr/bin/env node

import { Command } from 'commander';
import fs from 'fs';
import path from 'path';

function parseArgs() {
  const program = new Command();
  program.requiredOption('--path-list <pathList...>', 'List of paths to clean').parse();
  return program.opts();
}

async function main() {
  const args = parseArgs();
  await Promise.all(
    args.pathList.map(async (p) => fs.promises.rm(path.join(process.cwd(), p), { recursive: true, force: true })),
  );
}

main();
