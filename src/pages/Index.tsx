import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import AuctionCard from "@/components/AuctionCard";
import { 
  Gavel, 
  Shield, 
  Smartphone, 
  Zap, 
  TrendingUp, 
  Users, 
  Clock,
  CheckCircle,
  Star
} from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const featuredAuctions = [
    {
      id: 1,
      title: "Vintage Art Masterpiece",
      description: "Rare painting from the 1920s by acclaimed artist. Museum-quality piece with provenance.",
      currentBid: 12500,
      timeLeft: "2h 15m",
      bidders: 24,
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=300&fit=crop",
      status: "live" as const
    },
    {
      id: 2,
      title: "Diamond Engagement Ring",
      description: "Stunning 2-carat diamond ring in platinum setting. Certified and appraised.",
      currentBid: 8900,
      timeLeft: "4h 30m",
      bidders: 18,
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=300&fit=crop",
      status: "live" as const
    },
    {
      id: 3,
      title: "Classic Vintage Watch",
      description: "1960s Swiss-made timepiece in excellent condition. Fully serviced and authenticated.",
      currentBid: 3200,
      timeLeft: "1d 2h",
      bidders: 31,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop",
      status: "upcoming" as const
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-accent/10 py-20 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
            🚀 Launch Your Auction Platform Today
          </Badge>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Modern Auction Platform
            <br />for Every Organization
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Create engaging auction experiences with real-time bidding, mobile optimization, 
            and powerful admin tools. Perfect for nonprofits, enterprises, and auction houses.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:shadow-lg">
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline">
              View Live Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
            <div>
              <div className="text-2xl font-bold text-primary">500K+</div>
              <div className="text-sm text-muted-foreground">Bids Processed</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">99.9%</div>
              <div className="text-sm text-muted-foreground">Uptime</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">2000+</div>
              <div className="text-sm text-muted-foreground">Organizations</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">$50M+</div>
              <div className="text-sm text-muted-foreground">Raised</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Everything You Need for Successful Auctions
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              From real-time bidding to comprehensive analytics, our platform provides 
              all the tools you need to run professional auctions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Real-Time Bidding</h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Live bidding updates with Socket.IO ensure all participants see bids instantly. 
                  No delays, no missed opportunities.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Smartphone className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold">Mobile Optimized</h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  PWA capabilities and responsive design ensure perfect bidding 
                  experience on any device, anywhere.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">White Label Ready</h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Customize branding, colors, and domains to match your organization's 
                  identity perfectly.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold">Advanced Analytics</h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Comprehensive dashboards with bid tracking, participant analytics, 
                  and revenue insights.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Multiple Formats</h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Support for live, silent, and social auctions with customizable 
                  rules and timeframes.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold">Quick Setup</h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Launch your first auction in minutes with our intuitive setup wizard 
                  and pre-built templates.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Auctions */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Auctions</h2>
              <p className="text-muted-foreground text-lg">
                See our platform in action with these live auctions
              </p>
            </div>
            <Link to="/auctions">
              <Button variant="outline">View All Auctions</Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredAuctions.map((auction, index) => (
              <AuctionCard key={index} {...auction} />
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted by Organizations Worldwide
          </h2>
          <p className="text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
            From small nonprofits to large enterprises, our platform scales to meet your needs
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "AuctionFlow increased our fundraising efficiency by 300%. The real-time 
                  bidding kept our donors engaged throughout the event."
                </p>
                <div className="font-semibold">Sarah Johnson</div>
                <div className="text-sm text-muted-foreground">Charity Foundation Director</div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "The white-label solution perfectly matched our brand. Setup was incredibly 
                  fast and our team was running auctions within hours."
                </p>
                <div className="font-semibold">Mike Chen</div>
                <div className="text-sm text-muted-foreground">Auction House Owner</div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "Outstanding mobile experience! 80% of our bidders used their phones. 
                  The platform handled everything flawlessly."
                </p>
                <div className="font-semibold">Emily Rodriguez</div>
                <div className="text-sm text-muted-foreground">Event Coordinator</div>
              </CardContent>
            </Card>
          </div>

          {/* Logo Grid */}
          <div className="opacity-60">
            <p className="text-sm text-muted-foreground mb-8">Powering auctions for organizations like:</p>
            <div className="flex flex-wrap justify-center items-center gap-8">
              <div className="text-2xl font-bold text-muted-foreground">United Way</div>
              <div className="text-2xl font-bold text-muted-foreground">Red Cross</div>
              <div className="text-2xl font-bold text-muted-foreground">Sotheby's</div>
              <div className="text-2xl font-bold text-muted-foreground">Christie's</div>
              <div className="text-2xl font-bold text-muted-foreground">Habitat</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Launch Your First Auction?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of organizations already using AuctionFlow to run successful auctions. 
            Start your free trial today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Schedule Demo
            </Button>
          </div>

          <div className="flex items-center justify-center gap-6 mt-8 text-white/80 text-sm">
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 mr-2" />
              14-day free trial
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 mr-2" />
              No credit card required
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 mr-2" />
              Cancel anytime
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
