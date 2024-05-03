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

export function HoverBelka() {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link">@belka.ai</Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex justify-between space-x-4">
          <Avatar>
            <AvatarImage src="https://static.tildacdn.com/tild3263-3635-4832-b065-666464353432/apple-icon-152x152.png" />
            <AvatarFallback>B</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">belka.ai</h4>
            <p className="text-sm">
            Belka is an AI based Process Control System (AIPC) for minerals processing.
            </p>
            <div className="flex items-center pt-2">
              <MapPin className="mr-2 h-4 w-4 opacity-70" />{" "}
              <span className="text-xs text-muted-foreground">
                Dubai, UAE
              </span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}
