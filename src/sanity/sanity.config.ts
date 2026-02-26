"use client";

import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { projectId, dataset, apiVersion } from "./config";
import { schema } from "./schema";

export default defineConfig({
  name: "swiftdrip",
  title: "SwiftDrip Wellness",
  projectId,
  dataset,
  apiVersion,
  plugins: [structureTool(), visionTool()],
  schema,
  basePath: "/studio",
});
