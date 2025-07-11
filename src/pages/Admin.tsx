import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { 
  Plus, 
  Edit, 
  Trash2, 
  Eye, 
  Users, 
  DollarSign, 
  TrendingUp,
  Package,
  Clock,
  CheckCircle,
  Activity,
  BarChart3,
  Calendar,
  Settings
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Admin = () => {
  const { toast } = useToast();
  const [newItem, setNewItem] = useState({
    title: "",
    description: "",
    startingBid: "",
    category: "",
    condition: "",
    duration: "",
    estimatedValue: "",
    imageUrl: ""
  });

  const stats = [
    { title: "Total Auctions", value: "156", icon: Package, change: "+12%", color: "text-blue-600" },
    { title: "Active Users", value: "2,432", icon: Users, change: "+8%", color: "text-green-600" },
    { title: "Revenue", value: "$84,320", icon: DollarSign, change: "+15%", color: "text-purple-600" },
    { title: "Success Rate", value: "94.2%", icon: TrendingUp, change: "+2%", color: "text-orange-600" }
  ];

  const recentActivity = [
    { user: "John Doe", action: "Placed bid on Vintage Art Collection", amount: "$2,500", time: "5 min ago", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face" },
    { user: "Sarah Smith", action: "Won Diamond Ring auction", amount: "$8,900", time: "12 min ago", avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b05b?w=40&h=40&fit=crop&crop=face" },
    { user: "Mike Johnson", action: "Listed Classic Watch", amount: "$3,200", time: "1 hour ago", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face" },
    { user: "Emma Wilson", action: "Registered new account", amount: "-", time: "2 hours ago", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face" }
  ];

  const auctions = [
    {
      id: 1,
      title: "Vintage Art Collection",
      currentBid: 2500,
      bidders: 12,
      status: "live",
      timeLeft: "2h 15m",
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=100&h=100&fit=crop"
    },
    {
      id: 2,
      title: "Diamond Engagement Ring",
      currentBid: 8900,
      bidders: 18,
      status: "live",
      timeLeft: "4h 30m",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=100&h=100&fit=crop"
    },
    {
      id: 3,
      title: "Classic Vintage Watch",
      currentBid: 3200,
      bidders: 31,
      status: "upcoming",
      timeLeft: "1d 2h",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=100&h=100&fit=crop"
    }
  ];

  const handleAddItem = () => {
    if (!newItem.title || !newItem.description || !newItem.startingBid) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Success",
      description: "New auction item created successfully!",
    });

    setNewItem({
      title: "",
      description: "",
      startingBid: "",
      category: "",
      condition: "",
      duration: "",
      estimatedValue: "",
      imageUrl: ""
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold mb-2">Admin Dashboard</h1>
            <p className="text-muted-foreground">Manage your Rock My Auction platform</p>
          </div>
          <div className="flex items-center space-x-2">
            <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200 dark:bg-green-950 dark:text-green-300">
              <Activity className="h-3 w-3 mr-1" />
              System Online
            </Badge>
            <Button variant="outline" size="sm">
              <Settings className="h-4 w-4 mr-2" />
              Settings
            </Button>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <div className="flex items-center space-x-2 mt-2">
                    <p className="text-xs text-green-600 font-medium">{stat.change}</p>
                    <span className="text-xs text-muted-foreground">vs last month</span>
                  </div>
                </div>
                <div className={`p-3 rounded-full bg-gray-50 dark:bg-gray-800`}>
                  <stat.icon className={`h-6 w-6 ${stat.color}`} />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5" />
              Revenue Overview
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>This Month</span>
                  <span className="font-medium">$84,320</span>
                </div>
                <Progress value={75} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Last Month</span>
                  <span className="font-medium">$73,240</span>
                </div>
                <Progress value={65} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Average</span>
                  <span className="font-medium">$68,450</span>
                </div>
                <Progress value={60} className="h-2" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5" />
              Recent Activity
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={activity.avatar} alt={activity.user} />
                    <AvatarFallback>{activity.user.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">{activity.user}</p>
                    <p className="text-xs text-muted-foreground truncate">{activity.action}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium">{activity.amount}</p>
                    <p className="text-xs text-muted-foreground">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="auctions" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="auctions">Manage Auctions</TabsTrigger>
          <TabsTrigger value="add-item">Add New Item</TabsTrigger>
          <TabsTrigger value="users">Users</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="auctions" className="mt-6">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>Current Auctions</CardTitle>
                <div className="flex space-x-2">
                  <Select defaultValue="all">
                    <SelectTrigger className="w-32">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Status</SelectItem>
                      <SelectItem value="live">Live</SelectItem>
                      <SelectItem value="upcoming">Upcoming</SelectItem>
                      <SelectItem value="ended">Ended</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    Add New Auction
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {auctions.map((auction) => (
                  <div key={auction.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                    <div className="flex items-center space-x-4">
                      <img 
                        src={auction.image} 
                        alt={auction.title}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                      <div>
                        <h3 className="font-medium">{auction.title}</h3>
                        <p className="text-sm text-muted-foreground">
                          Current Bid: ${auction.currentBid.toLocaleString()}
                        </p>
                        <div className="flex items-center space-x-2 mt-1">
                          <Badge 
                            variant={auction.status === "live" ? "default" : "secondary"}
                            className={auction.status === "live" ? "animate-pulse" : ""}
                          >
                            {auction.status}
                          </Badge>
                          <span className="text-xs text-muted-foreground">
                            {auction.bidders} bidders
                          </span>
                          <span className="text-xs text-muted-foreground">•</span>
                          <span className="text-xs text-muted-foreground">
                            {auction.timeLeft}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="add-item" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Add New Auction Item</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="title">Item Title</Label>
                    <Input 
                      id="title" 
                      placeholder="Enter item title" 
                      value={newItem.title}
                      onChange={(e) => setNewItem({...newItem, title: e.target.value})}
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="description">Description</Label>
                    <Textarea 
                      id="description" 
                      placeholder="Detailed description of the item"
                      value={newItem.description}
                      onChange={(e) => setNewItem({...newItem, description: e.target.value})}
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="startingBid">Starting Bid ($)</Label>
                      <Input 
                        id="startingBid" 
                        type="number" 
                        placeholder="1000"
                        value={newItem.startingBid}
                        onChange={(e) => setNewItem({...newItem, startingBid: e.target.value})}
                      />
                    </div>
                    <div>
                      <Label htmlFor="estimatedValue">Estimated Value</Label>
                      <Input 
                        id="estimatedValue" 
                        placeholder="$3,000 - $4,500"
                        value={newItem.estimatedValue}
                        onChange={(e) => setNewItem({...newItem, estimatedValue: e.target.value})}
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <Label htmlFor="category">Category</Label>
                    <Select 
                      value={newItem.category} 
                      onValueChange={(value) => setNewItem({...newItem, category: value})}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="art">Art & Collectibles</SelectItem>
                        <SelectItem value="jewelry">Jewelry</SelectItem>
                        <SelectItem value="watches">Watches</SelectItem>
                        <SelectItem value="antiques">Antiques</SelectItem>
                        <SelectItem value="electronics">Electronics</SelectItem>
                        <SelectItem value="books">Books & Manuscripts</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="condition">Condition</Label>
                    <Select 
                      value={newItem.condition} 
                      onValueChange={(value) => setNewItem({...newItem, condition: value})}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select condition" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="new">New</SelectItem>
                        <SelectItem value="excellent">Excellent</SelectItem>
                        <SelectItem value="very-good">Very Good</SelectItem>
                        <SelectItem value="good">Good</SelectItem>
                        <SelectItem value="fair">Fair</SelectItem>
                        <SelectItem value="poor">Poor</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="duration">Auction Duration</Label>
                    <Select 
                      value={newItem.duration} 
                      onValueChange={(value) => setNewItem({...newItem, duration: value})}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select duration" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 Day</SelectItem>
                        <SelectItem value="3">3 Days</SelectItem>
                        <SelectItem value="7">7 Days</SelectItem>
                        <SelectItem value="14">14 Days</SelectItem>
                        <SelectItem value="30">30 Days</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="imageUrl">Image URL</Label>
                    <Input 
                      id="imageUrl" 
                      placeholder="https://example.com/image.jpg"
                      value={newItem.imageUrl}
                      onChange={(e) => setNewItem({...newItem, imageUrl: e.target.value})}
                    />
                  </div>
                </div>
              </div>
              
              <div className="flex justify-end space-x-4 mt-6">
                <Button variant="outline" onClick={() => setNewItem({
                  title: "",
                  description: "",
                  startingBid: "",
                  category: "",
                  condition: "",
                  duration: "",
                  estimatedValue: "",
                  imageUrl: ""
                })}>
                  Clear Form
                </Button>
                <Button onClick={handleAddItem}>
                  <Plus className="h-4 w-4 mr-2" />
                  Create Auction
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="users" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>User Management</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <Card>
                    <CardContent className="p-4 text-center">
                      <p className="text-2xl font-bold">2,432</p>
                      <p className="text-sm text-muted-foreground">Total Users</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4 text-center">
                      <p className="text-2xl font-bold">1,284</p>
                      <p className="text-sm text-muted-foreground">Active Bidders</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4 text-center">
                      <p className="text-2xl font-bold">156</p>
                      <p className="text-sm text-muted-foreground">New This Month</p>
                    </CardContent>
                  </Card>
                </div>
                <p className="text-muted-foreground">User management features coming soon...</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Analytics Dashboard</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardContent className="p-4">
                      <h4 className="font-medium mb-4">Auction Performance</h4>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-sm">Success Rate</span>
                          <span className="font-medium">94.2%</span>
                        </div>
                        <Progress value={94} className="h-2" />
                        <div className="flex justify-between">
                          <span className="text-sm">Average Bid Amount</span>
                          <span className="font-medium">$4,240</span>
                        </div>
                        <Progress value={72} className="h-2" />
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-4">
                      <h4 className="font-medium mb-4">User Engagement</h4>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-sm">Daily Active Users</span>
                          <span className="font-medium">1,847</span>
                        </div>
                        <Progress value={86} className="h-2" />
                        <div className="flex justify-between">
                          <span className="text-sm">Return Rate</span>
                          <span className="font-medium">68%</span>
                        </div>
                        <Progress value={68} className="h-2" />
                      </div>
                    </CardContent>
                  </Card>
                </div>
                <p className="text-muted-foreground">Detailed analytics coming soon...</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Admin;