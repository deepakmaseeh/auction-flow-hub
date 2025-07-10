import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Zap, Crown } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "$29",
      period: "per month",
      description: "Perfect for small nonprofits and organizations",
      icon: Zap,
      features: [
        "Up to 5 auctions per month",
        "Up to 100 bidders",
        "Basic auction templates",
        "Email notifications",
        "Basic analytics",
        "Standard support"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$99",
      period: "per month",
      description: "Ideal for growing organizations",
      icon: Star,
      features: [
        "Up to 25 auctions per month",
        "Up to 1,000 bidders",
        "Advanced auction templates",
        "Email & SMS notifications",
        "Advanced analytics & reporting",
        "Priority support",
        "Custom branding",
        "API access"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$299",
      period: "per month",
      description: "For large organizations with complex needs",
      icon: Crown,
      features: [
        "Unlimited auctions",
        "Unlimited bidders",
        "White-label solution",
        "Multi-language support",
        "Advanced integrations",
        "Dedicated account manager",
        "Custom development",
        "99.9% SLA"
      ],
      popular: false
    }
  ];

  const charityFeatures = [
    "50% discount for registered nonprofits",
    "Special payment processing rates",
    "Fundraising templates",
    "Donor management tools",
    "Tax receipt automation"
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Choose the perfect plan for your organization. All plans include core auction features with no hidden fees.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {plans.map((plan, index) => {
          const Icon = plan.icon;
          return (
            <Card key={index} className={`relative ${plan.popular ? 'border-primary shadow-lg scale-105' : ''}`}>
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary">
                  Most Popular
                </Badge>
              )}
              <CardHeader className="text-center pb-2">
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription className="text-sm">{plan.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground ml-2">{plan.period}</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button 
                  className="w-full" 
                  variant={plan.popular ? "default" : "outline"}
                  size="lg"
                >
                  Get Started
                </Button>
              </CardFooter>
            </Card>
          );
        })}
      </div>

      {/* Charity Discount Section */}
      <Card className="bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20 mb-16">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl flex items-center justify-center gap-2">
            <span>💝</span>
            Special Nonprofit Pricing
          </CardTitle>
          <CardDescription>
            We believe in supporting organizations that make a difference
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-lg font-semibold mb-4">Charity Benefits Include:</h3>
              <ul className="space-y-2">
                {charityFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <Check className="h-4 w-4 text-primary mr-3" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">50% OFF</div>
              <p className="text-muted-foreground mb-4">All plans for verified nonprofits</p>
              <Button variant="outline" size="lg">
                Apply for Nonprofit Discount
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* FAQ Section */}
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Can I change plans anytime?</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and billing is prorated.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">What payment methods do you accept?</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              We accept all major credit cards, PayPal, and ACH transfers for annual plans.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Is there a free trial?</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Yes! All plans come with a 14-day free trial. No credit card required to start.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">What about transaction fees?</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              We only charge standard payment processing fees (2.9% + 30¢). No additional transaction fees.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Pricing;