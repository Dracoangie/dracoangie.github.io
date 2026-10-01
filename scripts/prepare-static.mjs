import { cp, mkdir, rm } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = fileURLToPath(new URL("../", import.meta.url));
const publicDir = path.join(root, "public");
await mkdir(publicDir, { recursive: true });

// These are generated copies. The editable originals stay in the repository root.
for (const name of ["pixel", "deprecated"]) {
  const destination = path.resolve(publicDir, name);
  if (path.dirname(destination) !== publicDir) throw new Error("Invalid copy destination");
  await rm(destination, { recursive: true, force: true });
  await cp(path.join(root, name), destination, { recursive: true });
}
await cp(path.join(root, "Pixel.html"), path.join(publicDir, "Pixel.html"));
