import { Activity } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";

export interface StatsCardProps {
  title: string;
  stat: string;
  subline: string;
}

function StatsCard({ title, stat, subline }: StatsCardProps) {
  return (
    <Card className="bg-slate-900 text-slate-100">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <Activity className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent className="">
        <div className="text-2xl font-bold">{stat}</div>
        <p className="text-xs text-slate-400">{subline}</p>
      </CardContent>
    </Card>
  );
}

export default StatsCard;
