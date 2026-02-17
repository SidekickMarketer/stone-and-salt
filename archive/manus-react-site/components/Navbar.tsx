import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const navLinks = [
    { name: "Commercial Grounds", href: "/commercial-grounds" },
    { name: "Snow Removal", href: "/snow-removal" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="bg-white border-b border-border sticky top-0 z-40">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <a className="flex flex-col leading-none">
            <span className="text-xl font-black tracking-tighter text-primary">STONE & SALT</span>
            <span className="text-[0.65rem] font-bold tracking-[0.3em] text-muted-foreground uppercase">Landscaping</span>
          </a>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href}>
              <a className={cn(
                "text-sm font-bold uppercase tracking-wide hover:text-accent transition-colors",
                location === link.href ? "text-accent" : "text-muted-foreground"
              )}>
                {link.name}
              </a>
            </Link>
          ))}
          <Button 
            className="bg-primary text-white hover:bg-primary/90 rounded-none font-bold"
            onClick={() => window.location.href = 'tel:513-555-0123'}
          >
            <Phone className="w-4 h-4 mr-2" />
            (513) 555-0123
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-border absolute w-full left-0 top-20 p-4 flex flex-col gap-4 shadow-xl">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href}>
              <a 
                className="text-lg font-bold py-2 border-b border-border/50"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            </Link>
          ))}
          <Button className="w-full bg-primary text-white rounded-none font-bold mt-2">
            CALL NOW
          </Button>
        </div>
      )}
    </nav>
  );
}
