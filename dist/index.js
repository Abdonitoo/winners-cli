export async function run({ args }) {
    if (args.length === 0) {
        console.log("winners-cli - usage:\n  winners-cli <input> [--mode fast|safe]");
        return;
    }
    const [input, ...rest] = args;
    const mode = rest.includes("--mode") ? rest[rest.indexOf("--mode") + 1] : "fast";
    console.log(`Processing "${input}" with mode "${mode}"...`);
    console.log("Done.");
}
