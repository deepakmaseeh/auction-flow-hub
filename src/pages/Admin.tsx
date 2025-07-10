import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Plus, Edit, Trash2, Eye, DollarSign, Users, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Admin = () => {
  const { toast } = useToast();
  const [newAuction, setNewAuction] = useState({
    title: "",
    description: "",
    startingBid: "",
    category: "",
    duration: "",
    image: ""
  });

  const mockAuctions = [
    {
      id: 1,
      title: "Vintage Art Collection",
      currentBid: 2500,
      bidders: 12,
      status: "live",
      endTime: "2h 15m"
    },
    {
      id: 2,
      title: "Luxury Watch Auction",
      currentBid: 8900,
      bidders: 28,
      status: "live",
      endTime: "1d 4h"
    },
    {
      id: 3,
      title: "Classic Car Showcase",
      currentBid: 45000,
      bidders: 45,
      status: "upcoming",
      endTime: "3d 12h"
    }
  ];

  const handleCreateAuction = () => {
    if (!newAuction.title || !newAuction.description || !newAuction.startingBid) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Success",
      description: "Auction created successfully",
    });

    setNewAuction({
      title: "",
      description: "",
      startingBid: "",
      category: "",
      duration: "",
      image: ""
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Admin Dashboard</h1>
        <p className="text-muted-foreground">Manage your auctions and track performance</p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Revenue</p>
                <p className="text-2xl font-bold">$124,500</p>
              </div>
              <DollarSign className="h-8 w-8 text-primary" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Active Auctions</p>
                <p className="text-2xl font-bold">12</p>
              </div>
              <Clock className="h-8 w-8 text-primary" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Bidders</p>
                <p className="text-2xl font-bold">1,284</p>
              </div>
              <Users className="h-8 w-8 text-primary" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Success Rate</p>
                <p className="text-2xl font-bold">94%</p>
              </div>
              <Eye className="h-8 w-8 text-primary" />
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="auctions" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="auctions">Manage Auctions</TabsTrigger>
          <TabsTrigger value="create">Create New Auction</TabsTrigger>
        </TabsList>

        <TabsContent value="auctions" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Current Auctions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mockAuctions.map((auction) => (
                  <div key={auction.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex-1">
                      <h3 className="font-semibold">{auction.title}</h3>
                      <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                        <span>Current Bid: ${auction.currentBid.toLocaleString()}</span>
                        <span>{auction.bidders} bidders</span>
                        <Badge variant={auction.status === "live" ? "default" : "secondary"}>
                          {auction.status}
                        </Badge>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="create" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Plus className="h-5 w-5" />
                Create New Auction
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="title">Auction Title *</Label>
                  <Input
                    id="title"
                    value={newAuction.title}
                    onChange={(e) => setNewAuction({...newAuction, title: e.target.value})}
                    placeholder="Enter auction title"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <Select
                    value={newAuction.category}
                    onValueChange={(value) => setNewAuction({...newAuction, category: value})}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
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
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description *</Label>
                <Textarea
                  id="description"
                  value={newAuction.description}
                  onChange={(e) => setNewAuction({...newAuction, description: e.target.value})}
                  placeholder="Describe the auction item"
                  rows={4}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="startingBid">Starting Bid ($) *</Label>
                  <Input
                    id="startingBid"
                    type="number"
                    value={newAuction.startingBid}
                    onChange={(e) => setNewAuction({...newAuction, startingBid: e.target.value})}
                    placeholder="0.00"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="duration">Duration</Label>
                  <Select
                    value={newAuction.duration}
                    onValueChange={(value) => setNewAuction({...newAuction, duration: value})}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select duration" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1h">1 Hour</SelectItem>
                      <SelectItem value="6h">6 Hours</SelectItem>
                      <SelectItem value="1d">1 Day</SelectItem>
                      <SelectItem value="3d">3 Days</SelectItem>
                      <SelectItem value="7d">7 Days</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="image">Image URL</Label>
                <Input
                  id="image"
                  value={newAuction.image}
                  onChange={(e) => setNewAuction({...newAuction, image: e.target.value})}
                  placeholder="https://example.com/image.jpg"
                />
              </div>

              <Button onClick={handleCreateAuction} className="w-full">
                <Plus className="h-4 w-4 mr-2" />
                Create Auction
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Admin;