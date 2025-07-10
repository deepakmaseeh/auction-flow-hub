import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { 
  Clock, 
  DollarSign, 
  Users, 
  Heart, 
  Share2, 
  ArrowLeft,
  Gavel,
  Eye,
  TrendingUp
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const AuctionDetail = () => {
  const { id } = useParams();
  const { toast } = useToast();
  const [bidAmount, setBidAmount] = useState("");
  
  // Mock data - in real app, fetch based on ID
  const auction = {
    id: id || "1",
    title: "Vintage Art Collection",
    description: "A curated collection of vintage artworks from renowned artists spanning the early to mid-20th century. This exceptional collection includes original paintings, limited edition prints, and rare sketches from both established and emerging artists of the era. Each piece has been carefully authenticated and appraised by certified art experts. The collection represents various artistic movements including Impressionism, Art Deco, and early Modernism. Perfect for collectors, art enthusiasts, and those looking to add sophisticated pieces to their home or office space. All works are in excellent condition and come with certificates of authenticity.",
    currentBid: 2500,
    startingBid: 1000,
    timeLeft: "2h 15m",
    endTime: new Date(Date.now() + 2 * 60 * 60 * 1000 + 15 * 60 * 1000),
    bidders: 12,
    watchers: 28,
    image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&h=600&fit=crop",
    status: "live" as const,
    category: "Art & Collectibles",
    condition: "Excellent",
    estimatedValue: "$3,000 - $4,500",
    seller: "Heritage Art Gallery"
  };

  const recentBids = [
    { bidder: "Bidder #47", amount: 2500, time: "2 minutes ago" },
    { bidder: "Bidder #23", amount: 2400, time: "5 minutes ago" },
    { bidder: "Bidder #15", amount: 2350, time: "8 minutes ago" },
    { bidder: "Bidder #31", amount: 2300, time: "12 minutes ago" },
    { bidder: "Bidder #02", amount: 2250, time: "15 minutes ago" }
  ];

  const handleBid = () => {
    const bid = parseFloat(bidAmount);
    if (bid <= auction.currentBid) {
      toast({
        title: "Invalid Bid",
        description: `Your bid must be higher than the current bid of $${auction.currentBid.toLocaleString()}`,
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Bid Placed Successfully!",
      description: `Your bid of $${bid.toLocaleString()} has been placed.`,
    });
    setBidAmount("");
  };

  const formatTimeLeft = (endTime: Date) => {
    const now = new Date();
    const diff = endTime.getTime() - now.getTime();
    
    if (diff <= 0) return "Auction Ended";
    
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    
    return `${hours}h ${minutes}m`;
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <div className="mb-6">
        <Link to="/auctions" className="inline-flex items-center text-muted-foreground hover:text-primary">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Auctions
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Image and Basic Info */}
          <Card>
            <CardContent className="p-0">
              <div className="relative">
                <img 
                  src={auction.image} 
                  alt={auction.title}
                  className="w-full h-96 object-cover rounded-t-lg"
                />
                <Badge className={`absolute top-4 left-4 ${
                  auction.status === "live" ? "bg-red-500 animate-pulse" : "bg-accent"
                } text-white`}>
                  {auction.status.toUpperCase()}
                </Badge>
                <div className="absolute top-4 right-4 flex gap-2">
                  <Button variant="secondary" size="sm">
                    <Heart className="h-4 w-4" />
                  </Button>
                  <Button variant="secondary" size="sm">
                    <Share2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="p-6">
                <h1 className="text-3xl font-bold mb-4">{auction.title}</h1>
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="flex items-center text-muted-foreground">
                    <Eye className="h-4 w-4 mr-2" />
                    <span>{auction.watchers} watching</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Users className="h-4 w-4 mr-2" />
                    <span>{auction.bidders} bidders</span>
                  </div>
                  <Badge variant="outline">{auction.category}</Badge>
                </div>
                <p className="text-muted-foreground leading-relaxed">{auction.description}</p>
              </div>
            </CardContent>
          </Card>

          {/* Auction Details */}
          <Card>
            <CardHeader>
              <CardTitle>Auction Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Starting Bid</p>
                  <p className="text-lg">${auction.startingBid.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Estimated Value</p>
                  <p className="text-lg">{auction.estimatedValue}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Condition</p>
                  <p className="text-lg">{auction.condition}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Seller</p>
                  <p className="text-lg">{auction.seller}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Recent Bids */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                Recent Bidding Activity
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentBids.map((bid, index) => (
                  <div key={index}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Avatar className="h-8 w-8">
                          <AvatarFallback className="text-xs">
                            {bid.bidder.charAt(bid.bidder.length - 1)}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">{bid.bidder}</p>
                          <p className="text-xs text-muted-foreground">{bid.time}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold">${bid.amount.toLocaleString()}</p>
                      </div>
                    </div>
                    {index < recentBids.length - 1 && <Separator className="mt-4" />}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Bidding Sidebar */}
        <div className="space-y-6">
          {/* Current Bid Info */}
          <Card>
            <CardContent className="p-6">
              <div className="text-center mb-6">
                <p className="text-sm text-muted-foreground mb-2">Current Bid</p>
                <p className="text-4xl font-bold text-primary">
                  ${auction.currentBid.toLocaleString()}
                </p>
              </div>

              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="flex items-center text-red-500">
                  <Clock className="h-4 w-4 mr-2" />
                  <span className="font-medium">{formatTimeLeft(auction.endTime)}</span>
                </div>
              </div>

              {auction.status === "live" && (
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Place Your Bid</label>
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        type="number"
                        placeholder={`Min: ${(auction.currentBid + 50).toLocaleString()}`}
                        value={bidAmount}
                        onChange={(e) => setBidAmount(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>
                  <Button onClick={handleBid} className="w-full" size="lg">
                    <Gavel className="h-4 w-4 mr-2" />
                    Place Bid
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">
                    By bidding, you agree to our terms and conditions
                  </p>
                </div>
              )}

              {auction.status !== "live" && auction.status === "upcoming" && (
                <Button className="w-full" variant="outline" size="lg">
                  <Heart className="h-4 w-4 mr-2" />
                  Watch This Auction
                </Button>
              )}

              {auction.status !== "live" && auction.status === "ended" && (
                <Button className="w-full" variant="outline" size="lg" disabled>
                  Auction Ended
                </Button>
              )}
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="outline" className="w-full justify-start">
                <Heart className="h-4 w-4 mr-2" />
                Add to Watchlist
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Share2 className="h-4 w-4 mr-2" />
                Share Auction
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Eye className="h-4 w-4 mr-2" />
                View Seller Profile
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AuctionDetail;