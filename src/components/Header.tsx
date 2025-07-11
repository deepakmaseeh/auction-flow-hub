import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Gavel, Menu, User, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useState } from "react";

const Header = () => {
  const [cartItems] = useState(3); // Mock cart items count

  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <Gavel className="h-8 w-8 text-primary" />
          <span className="font-bold text-xl">Rock My Auction</span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/auctions" className="text-sm font-medium hover:text-primary transition-colors">
            Browse Auctions
          </Link>
          <Link to="/about" className="text-sm font-medium hover:text-primary transition-colors">
            About
          </Link>
          <Link to="/admin" className="text-sm font-medium hover:text-primary transition-colors">
            Admin
          </Link>
          <Link to="/pricing" className="text-sm font-medium hover:text-primary transition-colors">
            Pricing
          </Link>
          <Link to="/support" className="text-sm font-medium hover:text-primary transition-colors">
            Support
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <Link to="/cart">
            <Button variant="ghost" size="sm" className="relative">
              <ShoppingCart className="h-4 w-4" />
              {cartItems > 0 && (
                <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 text-xs">
                  {cartItems}
                </Badge>
              )}
            </Button>
          </Link>
          <Link to="/user">
            <Button variant="ghost" size="sm" className="hidden md:flex">
              <User className="h-4 w-4 mr-2" />
              Login
            </Button>
          </Link>
          <Link to="/">
            <Button size="sm">Get Started</Button>
          </Link>
          <Button variant="ghost" size="sm" className="md:hidden">
            <Menu className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;