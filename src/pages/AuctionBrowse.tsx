import { useState } from "react";
import AuctionCard from "@/components/AuctionCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Filter } from "lucide-react";

const AuctionBrowse = () => {
  const [displayedAuctions, setDisplayedAuctions] = useState(6);
  
  const allAuctions = [
    {
      id: 1,
      title: "Vintage Art Collection",
      description: "A curated collection of vintage artworks from renowned artists. Perfect for collectors and art enthusiasts.",
      currentBid: 2500,
      timeLeft: "2h 15m",
      bidders: 12,
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=300&fit=crop",
      status: "live" as const
    },
    {
      id: 2,
      title: "Luxury Watch Auction",
      description: "Premium timepieces from top luxury brands. Authenticated and verified by our experts.",
      currentBid: 8900,
      timeLeft: "1d 4h",
      bidders: 28,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop",
      status: "live" as const
    },
    {
      id: 3,
      title: "Classic Car Showcase",
      description: "Rare and classic automobiles from the golden age of motoring. Fully restored and road-ready.",
      currentBid: 45000,
      timeLeft: "3d 12h",
      bidders: 45,
      image: "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?w=400&h=300&fit=crop",
      status: "upcoming" as const
    },
    {
      id: 4,
      title: "Fine Jewelry Estate",
      description: "Exquisite jewelry pieces including diamonds, emeralds, and precious metals from estate collections.",
      currentBid: 3200,
      timeLeft: "Ended",
      bidders: 19,
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=300&fit=crop",
      status: "ended" as const
    },
    {
      id: 5,
      title: "Rare Book Collection",
      description: "First edition books and manuscripts from famous authors. Perfect for bibliophiles and collectors.",
      currentBid: 1800,
      timeLeft: "5h 30m",
      bidders: 8,
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop",
      status: "live" as const
    },
    {
      id: 6,
      title: "Modern Furniture Auction",
      description: "Contemporary and modern furniture pieces from designer brands. Perfect for home or office.",
      currentBid: 1200,
      timeLeft: "2d 8h",
      bidders: 15,
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop",
      status: "upcoming" as const
    },
    {
      id: 7,
      title: "Antique Persian Rugs",
      description: "Hand-woven Persian rugs from the 19th century. Exceptional craftsmanship and historical significance.",
      currentBid: 5200,
      timeLeft: "6h 45m",
      bidders: 22,
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop",
      status: "live" as const
    },
    {
      id: 8,
      title: "Sculpture Collection",
      description: "Contemporary sculptures by emerging and established artists. Perfect for galleries and collectors.",
      currentBid: 7800,
      timeLeft: "4d 2h",
      bidders: 31,
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=300&fit=crop",
      status: "upcoming" as const
    },
    {
      id: 9,
      title: "Vintage Wine Collection",
      description: "Rare vintage wines from premier vineyards. Properly aged and authenticated by wine experts.",
      currentBid: 3600,
      timeLeft: "1d 8h",
      bidders: 18,
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=300&fit=crop",
      status: "live" as const
    },
    {
      id: 10,
      title: "Designer Handbag Auction",
      description: "Limited edition designer handbags from luxury brands. Authenticated and in pristine condition.",
      currentBid: 2100,
      timeLeft: "12h 30m",
      bidders: 14,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop",
      status: "live" as const
    },
    {
      id: 11,
      title: "Sports Memorabilia",
      description: "Authentic sports memorabilia including signed jerseys, balls, and rare trading cards.",
      currentBid: 1850,
      timeLeft: "3h 15m",
      bidders: 26,
      image: "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?w=400&h=300&fit=crop",
      status: "live" as const
    },
    {
      id: 12,
      title: "Musical Instruments",
      description: "Vintage and professional musical instruments including guitars, violins, and rare brass instruments.",
      currentBid: 4200,
      timeLeft: "2d 14h",
      bidders: 20,
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop",
      status: "upcoming" as const
    },
    {
      id: 13,
      title: "Photography Equipment",
      description: "Professional photography equipment and vintage cameras from renowned manufacturers.",
      currentBid: 1650,
      timeLeft: "8h 20m",
      bidders: 11,
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop",
      status: "live" as const
    },
    {
      id: 14,
      title: "Collectible Coins",
      description: "Rare and collectible coins from various eras and countries. Authenticated by numismatic experts.",
      currentBid: 3800,
      timeLeft: "5d 6h",
      bidders: 33,
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=300&fit=crop",
      status: "upcoming" as const
    }
  ];

  const loadMoreAuctions = () => {
    setDisplayedAuctions(prev => Math.min(prev + 8, allAuctions.length));
  };

  const visibleAuctions = allAuctions.slice(0, displayedAuctions);
  const hasMoreAuctions = displayedAuctions < allAuctions.length;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Browse Auctions</h1>
        <p className="text-muted-foreground">Discover amazing items from our curated auction collection</p>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input 
            placeholder="Search auctions..." 
            className="pl-10"
          />
        </div>
        <Select>
          <SelectTrigger className="w-full md:w-48">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="art">Art & Collectibles</SelectItem>
            <SelectItem value="jewelry">Jewelry</SelectItem>
            <SelectItem value="watches">Watches</SelectItem>
            <SelectItem value="cars">Automobiles</SelectItem>
            <SelectItem value="books">Books</SelectItem>
            <SelectItem value="furniture">Furniture</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-full md:w-48">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="live">Live</SelectItem>
            <SelectItem value="upcoming">Upcoming</SelectItem>
            <SelectItem value="ended">Ended</SelectItem>
          </SelectContent>
        </Select>
        <Button variant="outline" size="default">
          <Filter className="h-4 w-4 mr-2" />
          More Filters
        </Button>
      </div>

      {/* Auction Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {visibleAuctions.map((auction) => (
          <AuctionCard key={auction.id} {...auction} />
        ))}
      </div>

      {/* Load More */}
      {hasMoreAuctions && (
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" onClick={loadMoreAuctions}>
            Load More Auctions ({allAuctions.length - displayedAuctions} remaining)
          </Button>
        </div>
      )}
    </div>
  );
};

export default AuctionBrowse;