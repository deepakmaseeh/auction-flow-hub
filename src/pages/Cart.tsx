import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Heart, 
  Trash2, 
  Plus, 
  Minus, 
  ShoppingCart,
  CreditCard,
  Clock,
  AlertCircle
} from "lucide-react";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      title: "Vintage Art Collection",
      description: "A curated collection of vintage artworks from renowned artists",
      currentBid: 2500,
      myBid: 2600,
      timeLeft: "2h 15m",
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=200&h=200&fit=crop",
      status: "active",
      category: "Art & Collectibles"
    },
    {
      id: 2,
      title: "Diamond Engagement Ring",
      description: "Stunning 2-carat diamond ring in platinum setting",
      currentBid: 8900,
      myBid: 9000,
      timeLeft: "4h 30m",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=200&h=200&fit=crop",
      status: "winning",
      category: "Jewelry"
    },
    {
      id: 3,
      title: "Classic Vintage Watch",
      description: "1960s Swiss-made timepiece in excellent condition",
      currentBid: 3200,
      myBid: 3100,
      timeLeft: "1d 2h",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200&h=200&fit=crop",
      status: "outbid",
      category: "Watches"
    }
  ]);

  const removeFromCart = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'winning': return 'bg-green-500';
      case 'outbid': return 'bg-red-500';
      default: return 'bg-blue-500';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'winning': return 'Winning';
      case 'outbid': return 'Outbid';
      default: return 'Active';
    }
  };

  const totalValue = cartItems.reduce((sum, item) => sum + item.myBid, 0);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ShoppingCart className="h-6 w-6" />
                My Watchlist & Active Bids ({cartItems.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              {cartItems.length === 0 ? (
                <div className="text-center py-12">
                  <Heart className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
                  <h3 className="text-xl font-medium mb-2">Your watchlist is empty</h3>
                  <p className="text-muted-foreground mb-6">
                    Start adding items you're interested in to keep track of them
                  </p>
                  <Link to="/auctions">
                    <Button>Browse Auctions</Button>
                  </Link>
                </div>
              ) : (
                <div className="space-y-6">
                  {cartItems.map((item, index) => (
                    <div key={item.id}>
                      <div className="flex flex-col md:flex-row gap-4">
                        <Link to={`/auctions/${item.id}`} className="flex-shrink-0">
                          <img 
                            src={item.image} 
                            alt={item.title}
                            className="w-full md:w-32 h-48 md:h-32 object-cover rounded-lg hover:opacity-80 transition-opacity"
                          />
                        </Link>
                        
                        <div className="flex-1 space-y-3">
                          <div className="flex justify-between items-start">
                            <div>
                              <Link to={`/auctions/${item.id}`} className="hover:text-primary">
                                <h3 className="text-lg font-medium">{item.title}</h3>
                              </Link>
                              <p className="text-muted-foreground text-sm">{item.description}</p>
                              <Badge variant="outline" className="mt-2">{item.category}</Badge>
                            </div>
                            <Button 
                              variant="ghost" 
                              size="sm"
                              onClick={() => removeFromCart(item.id)}
                              className="text-red-500 hover:text-red-700"
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div>
                              <p className="text-sm text-muted-foreground">Current Bid</p>
                              <p className="text-lg font-medium">${item.currentBid.toLocaleString()}</p>
                            </div>
                            <div>
                              <p className="text-sm text-muted-foreground">My Bid</p>
                              <p className="text-lg font-medium">${item.myBid.toLocaleString()}</p>
                            </div>
                            <div>
                              <p className="text-sm text-muted-foreground">Time Left</p>
                              <p className="text-lg font-medium flex items-center gap-1">
                                <Clock className="h-4 w-4" />
                                {item.timeLeft}
                              </p>
                            </div>
                          </div>

                          <div className="flex items-center justify-between">
                            <Badge className={`${getStatusColor(item.status)} text-white`}>
                              {getStatusText(item.status)}
                            </Badge>
                            
                            <div className="flex gap-2">
                              <Link to={`/auctions/${item.id}`}>
                                <Button variant="outline" size="sm">
                                  View Details
                                </Button>
                              </Link>
                              {item.status === 'outbid' && (
                                <Link to={`/auctions/${item.id}`}>
                                  <Button size="sm">
                                    Place New Bid
                                  </Button>
                                </Link>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                      {index < cartItems.length - 1 && <Separator className="mt-6" />}
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Summary Sidebar */}
        <div className="space-y-6">
          {/* Bid Summary */}
          <Card>
            <CardHeader>
              <CardTitle>Bid Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Total Items</span>
                <span className="font-medium">{cartItems.length}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Total Bid Value</span>
                <span className="font-medium">${totalValue.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Active Bids</span>
                <span className="font-medium">
                  {cartItems.filter(item => item.status === 'active' || item.status === 'winning').length}
                </span>
              </div>
              <Separator />
              <div className="flex justify-between text-lg font-medium">
                <span>Potential Total</span>
                <span>${totalValue.toLocaleString()}</span>
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Link to="/auctions">
                <Button variant="outline" className="w-full">
                  <Plus className="h-4 w-4 mr-2" />
                  Add More Items
                </Button>
              </Link>
              <Button className="w-full">
                <CreditCard className="h-4 w-4 mr-2" />
                Payment Settings
              </Button>
            </CardContent>
          </Card>

          {/* Alerts */}
          {cartItems.some(item => item.status === 'outbid') && (
            <Card className="border-red-200 bg-red-50 dark:bg-red-950/20">
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-red-600 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-red-900 dark:text-red-100">
                      You've been outbid!
                    </h4>
                    <p className="text-sm text-red-700 dark:text-red-200 mt-1">
                      {cartItems.filter(item => item.status === 'outbid').length} of your bids 
                      have been exceeded. Place new bids to stay in the race.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Tips */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Bidding Tips</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground">
                  Watch items closely in the final minutes of bidding
                </p>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground">
                  Set automatic bid limits to avoid overspending
                </p>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground">
                  Research item values before placing high bids
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Cart;