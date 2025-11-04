#!/usr/bin/env node
import { run } from "./index";
function parseArgs() {
  const args = process.argv.slice(2);
  return { args };
}

const opts = parseArgs();
run(opts).catch(err => {
  console.error("Error:", err?.message ?? err);
  process.exit(1);
});
