import {
  Wifi,
  Clock,
  Utensils,
  BellRing,
  Presentation,
  ParkingCircle,
  Snowflake,
  BedDouble,
  Sparkles,
  Shield,
  Users,
  Leaf,
} from "lucide-react";

const MAP = {
  wifi: Wifi,
  clock: Clock,
  utensils: Utensils,
  bell: BellRing,
  presentation: Presentation,
  parking: ParkingCircle,
  snowflake: Snowflake,
  bed: BedDouble,
  sparkles: Sparkles,
  shield: Shield,
  users: Users,
  leaf: Leaf,
} as const;

export function AmenityIcon({ name, className }: { name: keyof typeof MAP; className?: string }) {
  const Icon = MAP[name] ?? Sparkles;
  return <Icon className={className} aria-hidden="true" />;
}