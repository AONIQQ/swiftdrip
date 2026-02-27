import { client } from "@/sanity/client";
import { ivDripServicesQuery } from "@/sanity/queries";
import IVDripsContent from "./IVDripsContent";

export default async function IVDripsPage() {
  const drips = await client.fetch(ivDripServicesQuery);
  return <IVDripsContent drips={drips} />;
}
