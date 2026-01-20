import type { Plugin } from "vite";
import pkg from "../package.json";

// banner信息
export const banner = `/*!
 * ${pkg.name} v${pkg.version}
 * Copyright 2021-${new Date().getFullYear()}, ${pkg.author}
 * Released under the ${pkg.license} License.
 */`;

