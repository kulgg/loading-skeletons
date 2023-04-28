import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

function Loading() {
  return (
    <div className="grid grid-cols-2 gap-6">
      <Skeleton className="w-full h-32" />
      <Skeleton className="w-full h-32" />
      <Skeleton className="w-full h-32" />
      <Skeleton className="w-full h-32" />
    </div>
  );
}

export default Loading;
