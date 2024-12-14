import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "rcuk3k01",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});
