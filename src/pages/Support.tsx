import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { MessageCircle, Phone, Mail, FileText, Clock, Users } from "lucide-react";

const Support = () => {
  const contactMethods = [
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Get instant help from our support team",
      availability: "24/7",
      action: "Start Chat"
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Speak directly with our experts",
      availability: "Mon-Fri 9AM-6PM EST",
      action: "Call Now"
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Send us detailed questions",
      availability: "24/7 - Response within 4 hours",
      action: "Send Email"
    },
    {
      icon: FileText,
      title: "Documentation",
      description: "Browse our comprehensive guides",
      availability: "Always available",
      action: "View Docs"
    }
  ];

  const faqs = [
    {
      question: "How do I set up my first auction?",
      answer: "Setting up your first auction is easy! Go to your admin dashboard, click 'Create New Auction', fill in the details like title, description, starting bid, and duration. You can also upload images and set categories to help bidders find your auction."
    },
    {
      question: "Can bidders participate from mobile devices?",
      answer: "Absolutely! Our platform is fully responsive and optimized for mobile devices. Bidders can place bids, receive notifications, and track auctions from any smartphone or tablet."
    },
    {
      question: "How are payments processed?",
      answer: "We use secure payment processing through Stripe. Winners can pay with credit cards, debit cards, or ACH transfers. All transactions are encrypted and PCI-compliant for maximum security."
    },
    {
      question: "Can I customize the branding for my organization?",
      answer: "Yes! Professional and Enterprise plans include custom branding options. You can add your logo, customize colors, and even white-label the entire platform to match your organization's brand."
    },
    {
      question: "What happens if there are technical issues during a live auction?",
      answer: "Our platform has 99.9% uptime, but if technical issues occur, our support team is available 24/7 to resolve them quickly. We also have automatic backup systems and can extend auction times if needed."
    },
    {
      question: "How do I get the nonprofit discount?",
      answer: "To qualify for our 50% nonprofit discount, you'll need to provide proof of your 501(c)(3) status or equivalent nonprofit registration. Simply upload your documentation when signing up or contact our support team."
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">How Can We Help?</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Our support team is here to ensure your auction success. Choose the best way to get in touch.
        </p>
      </div>

      {/* Contact Methods */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {contactMethods.map((method, index) => {
          const Icon = method.icon;
          return (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <CardTitle className="text-lg">{method.title}</CardTitle>
                <CardDescription className="text-sm">{method.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">{method.availability}</p>
                <Button variant="outline" className="w-full">
                  {method.action}
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <Card>
          <CardHeader>
            <CardTitle>Send us a Message</CardTitle>
            <CardDescription>
              Fill out the form below and we'll get back to you as soon as possible.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input id="firstName" placeholder="Your first name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input id="lastName" placeholder="Your last name" />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="your@email.com" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="subject">Subject</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="What can we help you with?" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="technical">Technical Support</SelectItem>
                  <SelectItem value="billing">Billing Question</SelectItem>
                  <SelectItem value="feature">Feature Request</SelectItem>
                  <SelectItem value="nonprofit">Nonprofit Discount</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea 
                id="message" 
                placeholder="Please describe your question or issue in detail..."
                rows={5}
              />
            </div>

            <Button className="w-full">Send Message</Button>
          </CardContent>
        </Card>

        {/* FAQ */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>

      {/* Additional Resources */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-center mb-8">Additional Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader className="text-center">
              <Clock className="h-8 w-8 text-primary mx-auto mb-2" />
              <CardTitle>System Status</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="flex items-center justify-center gap-2 mb-4">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm">All systems operational</span>
              </div>
              <Button variant="outline" size="sm">View Status Page</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="text-center">
              <FileText className="h-8 w-8 text-primary mx-auto mb-2" />
              <CardTitle>Video Tutorials</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-sm text-muted-foreground mb-4">
                Watch step-by-step guides for common tasks
              </p>
              <Button variant="outline" size="sm">Watch Tutorials</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="text-center">
              <Users className="h-8 w-8 text-primary mx-auto mb-2" />
              <CardTitle>Community Forum</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-sm text-muted-foreground mb-4">
                Connect with other users and share tips
              </p>
              <Button variant="outline" size="sm">Join Community</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Support;