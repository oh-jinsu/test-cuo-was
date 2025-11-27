import { useRouteLoaderData } from "react-router";

export default function ClientEnv({ dataKey = "ENV" }: { dataKey?: string }) {
  const data = useRouteLoaderData("root");
  return (
    <>
      {data && (
        <script
          dangerouslySetInnerHTML={{
            __html: `window.process = ${JSON.stringify({ env: data?.[dataKey] })}`,
          }}
        />
      )}
    </>
  );
}
