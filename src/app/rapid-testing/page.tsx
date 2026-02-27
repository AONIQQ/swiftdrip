import { client } from "@/sanity/client";
import { rapidTestServicesQuery } from "@/sanity/queries";
import RapidTestingContent from "./RapidTestingContent";

export default async function RapidTestingPage() {
  const tests = await client.fetch(rapidTestServicesQuery);
  return <RapidTestingContent tests={tests} />;
}
