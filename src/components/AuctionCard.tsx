import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Clock, DollarSign, Users } from "lucide-react";

interface AuctionCardProps {
  title: string;
  description: string;
  currentBid: number;
  timeLeft: string;
  bidders: number;
  image: string;
  status: "live" | "upcoming" | "ended";
}

const AuctionCard = ({ title, description, currentBid, timeLeft, bidders, image, status }: AuctionCardProps) => {
  const getStatusColor = () => {
    switch (status) {
      case "live": return "bg-red-500 animate-pulse";
      case "upcoming": return "bg-accent";
      case "ended": return "bg-muted";
      default: return "bg-muted";
    }
  };

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <CardHeader className="p-0">
        <div className="relative">
          <img 
            src={image} 
            alt={title}
            className="w-full h-48 object-cover rounded-t-lg"
          />
          <Badge className={`absolute top-3 left-3 ${getStatusColor()} text-white`}>
            {status.toUpperCase()}
          </Badge>
          {status === "live" && (
            <div className="absolute top-3 right-3 bg-black/70 text-white px-2 py-1 rounded text-sm flex items-center">
              <Clock className="h-3 w-3 mr-1" />
              {timeLeft}
            </div>
          )}
        </div>
      </CardHeader>
      
      <CardContent className="p-4">
        <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {description}
        </p>
        
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center">
            <DollarSign className="h-4 w-4 text-primary mr-1" />
            <span className="font-medium">${currentBid.toLocaleString()}</span>
          </div>
          <div className="flex items-center text-muted-foreground">
            <Users className="h-4 w-4 mr-1" />
            <span>{bidders} bidders</span>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="p-4 pt-0">
        <Button 
          className="w-full" 
          variant={status === "live" ? "default" : "outline"}
          disabled={status === "ended"}
        >
          {status === "live" ? "Bid Now" : status === "upcoming" ? "Watch" : "View Results"}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default AuctionCard;