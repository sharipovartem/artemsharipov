import { CalendarDays, MapPin } from "lucide-react"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

export function HoverGranit() {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link">@Granit Tech Service</Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex justify-between space-x-4">
          <Avatar>
            <AvatarImage src="" />
            <AvatarFallback>GTS</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">Granit Tech Service</h4>
            <p className="text-sm">
            Wholesale trade in solid, liquid and gaseous fuels.
            </p>
            <div className="flex items-center pt-2">
              <MapPin className="mr-2 h-4 w-4 opacity-70" />{" "}
              <span className="text-xs text-muted-foreground">
                Chelyabinsk, Russia
              </span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}
