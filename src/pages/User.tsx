import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  User as UserIcon, 
  Settings, 
  CreditCard, 
  History, 
  Heart,
  Trophy,
  Edit,
  Mail,
  Phone,
  MapPin,
  Calendar
} from "lucide-react";

const User = () => {
  const [isEditing, setIsEditing] = useState(false);
  
  const userProfile = {
    name: "John Doe",
    email: "john.doe@email.com",
    phone: "+1 (555) 123-4567",
    location: "New York, NY",
    joinDate: "March 2023",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
    totalBids: 47,
    wonAuctions: 12,
    totalSpent: 15650,
    rating: 4.8
  };

  const bidHistory = [
    {
      id: 1,
      title: "Vintage Art Collection",
      bidAmount: 2500,
      status: "won",
      date: "2024-01-15",
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=100&h=100&fit=crop"
    },
    {
      id: 2,
      title: "Diamond Engagement Ring",
      bidAmount: 8900,
      status: "outbid",
      date: "2024-01-10",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=100&h=100&fit=crop"
    },
    {
      id: 3,
      title: "Classic Vintage Watch",
      bidAmount: 3200,
      status: "active",
      date: "2024-01-12",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=100&h=100&fit=crop"
    }
  ];

  const watchlist = [
    {
      id: 4,
      title: "Antique Furniture Set",
      currentBid: 1200,
      timeLeft: "2d 5h",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=100&h=100&fit=crop"
    },
    {
      id: 5,
      title: "Rare Book Collection",
      currentBid: 800,
      timeLeft: "1d 12h",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=100&h=100&fit=crop"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Profile Sidebar */}
        <div className="lg:col-span-1">
          <Card>
            <CardHeader className="text-center">
              <div className="relative mx-auto mb-4">
                <Avatar className="w-24 h-24">
                  <AvatarImage src={userProfile.avatar} alt={userProfile.name} />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="absolute -bottom-2 -right-2 h-8 w-8 rounded-full"
                  onClick={() => setIsEditing(!isEditing)}
                >
                  <Edit className="h-4 w-4" />
                </Button>
              </div>
              <CardTitle className="text-xl">{userProfile.name}</CardTitle>
              <p className="text-muted-foreground">{userProfile.email}</p>
              <Badge className="mt-2">Premium Member</Badge>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center text-sm">
                  <Mail className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span>{userProfile.email}</span>
                </div>
                <div className="flex items-center text-sm">
                  <Phone className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span>{userProfile.phone}</span>
                </div>
                <div className="flex items-center text-sm">
                  <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span>{userProfile.location}</span>
                </div>
                <div className="flex items-center text-sm">
                  <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span>Joined {userProfile.joinDate}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Stats Card */}
          <Card className="mt-6">
            <CardHeader>
              <CardTitle className="text-lg">Stats</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Total Bids</span>
                  <span className="font-medium">{userProfile.totalBids}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Won Auctions</span>
                  <span className="font-medium">{userProfile.wonAuctions}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Total Spent</span>
                  <span className="font-medium">${userProfile.totalSpent.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Rating</span>
                  <span className="font-medium flex items-center">
                    <Trophy className="h-4 w-4 mr-1 text-accent" />
                    {userProfile.rating}/5
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3">
          <Tabs defaultValue="profile" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="profile">
                <UserIcon className="h-4 w-4 mr-2" />
                Profile
              </TabsTrigger>
              <TabsTrigger value="history">
                <History className="h-4 w-4 mr-2" />
                Bid History
              </TabsTrigger>
              <TabsTrigger value="watchlist">
                <Heart className="h-4 w-4 mr-2" />
                Watchlist
              </TabsTrigger>
              <TabsTrigger value="settings">
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </TabsTrigger>
            </TabsList>

            <TabsContent value="profile" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Profile Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {isEditing ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium mb-2 block">Full Name</label>
                        <Input defaultValue={userProfile.name} />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-2 block">Email</label>
                        <Input defaultValue={userProfile.email} />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-2 block">Phone</label>
                        <Input defaultValue={userProfile.phone} />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-2 block">Location</label>
                        <Input defaultValue={userProfile.location} />
                      </div>
                      <div className="md:col-span-2 flex gap-4">
                        <Button onClick={() => setIsEditing(false)}>Save Changes</Button>
                        <Button variant="outline" onClick={() => setIsEditing(false)}>Cancel</Button>
                      </div>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="font-medium mb-2">Personal Information</h3>
                        <div className="space-y-3">
                          <div>
                            <p className="text-sm text-muted-foreground">Full Name</p>
                            <p className="font-medium">{userProfile.name}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Email</p>
                            <p className="font-medium">{userProfile.email}</p>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h3 className="font-medium mb-2">Contact Information</h3>
                        <div className="space-y-3">
                          <div>
                            <p className="text-sm text-muted-foreground">Phone</p>
                            <p className="font-medium">{userProfile.phone}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Location</p>
                            <p className="font-medium">{userProfile.location}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="history" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Bidding History</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {bidHistory.map((bid) => (
                      <div key={bid.id} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex items-center space-x-4">
                          <img 
                            src={bid.image} 
                            alt={bid.title}
                            className="w-16 h-16 rounded-lg object-cover"
                          />
                          <div>
                            <h4 className="font-medium">{bid.title}</h4>
                            <p className="text-sm text-muted-foreground">{bid.date}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">${bid.bidAmount.toLocaleString()}</p>
                          <Badge 
                            variant={bid.status === 'won' ? 'default' : bid.status === 'active' ? 'secondary' : 'outline'}
                          >
                            {bid.status.toUpperCase()}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="watchlist" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Watchlist</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {watchlist.map((item) => (
                      <div key={item.id} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex items-center space-x-4">
                          <img 
                            src={item.image} 
                            alt={item.title}
                            className="w-16 h-16 rounded-lg object-cover"
                          />
                          <div>
                            <h4 className="font-medium">{item.title}</h4>
                            <p className="text-sm text-muted-foreground">Time left: {item.timeLeft}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">${item.currentBid.toLocaleString()}</p>
                          <Button size="sm" className="mt-2">Place Bid</Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="settings" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Account Settings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="font-medium mb-4">Security</h3>
                    <div className="space-y-3">
                      <Button variant="outline">Change Password</Button>
                      <Button variant="outline">Enable Two-Factor Authentication</Button>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-medium mb-4">Payment Methods</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex items-center space-x-3">
                          <CreditCard className="h-6 w-6" />
                          <div>
                            <p className="font-medium">**** **** **** 1234</p>
                            <p className="text-sm text-muted-foreground">Expires 12/25</p>
                          </div>
                        </div>
                        <Button variant="outline" size="sm">Edit</Button>
                      </div>
                      <Button variant="outline">Add Payment Method</Button>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-medium mb-4">Notifications</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span>Email notifications</span>
                        <Button variant="outline" size="sm">Configure</Button>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>SMS notifications</span>
                        <Button variant="outline" size="sm">Configure</Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default User;