import { client } from "@/sanity/client";
import { allLabPanelsQuery } from "@/sanity/queries";
import LabTestingContent from "./LabTestingContent";

export default async function LabTestingPage() {
  const panels = await client.fetch(allLabPanelsQuery);
  return <LabTestingContent panels={panels} />;
}
