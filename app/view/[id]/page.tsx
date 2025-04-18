import Body from "@/components/body";
import React from "react";

interface ViewCodePageProps {
  params: Promise<{ id: string }>;
}

export default async function ViewCodePage({ params }: ViewCodePageProps) {
  const { id } = await params;

  return (
    <div className="max-h-screen min-h-screen w-screen overflow-hidden">
      <Body view params={{ id }} />
    </div>
  );
}
