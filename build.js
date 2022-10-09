import { build } from "esbuild";

build({
  entryPoints: ["./src/entry.js"],
  outfile: "./web/brower.js",
  minify: true,
  bundle: true,
});
