import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  AlertCircle,
  ArrowRight,
  Bot,
  CheckCircle,
  ChevronRight,
  Globe,
  Headphones,
  Loader2,
  Menu,
  MessageCircle,
  MessageSquare,
  Rocket,
  Star,
  TrendingUp,
  Utensils,
  X,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { SiInstagram, SiLinkedin, SiX } from "react-icons/si";
import { useActor } from "./hooks/useActor";

// ─── Sticky Nav ───────────────────────────────────────────────────────────────
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const links = [
    { label: "Services", id: "services" },
    { label: "How It Works", id: "how-it-works" },
    { label: "About", id: "about" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-sm shadow-xs border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between h-16 md:h-18">
        {/* Logo */}
        <button
          type="button"
          data-ocid="nav.link"
          onClick={() => scrollTo("hero")}
          className="flex items-center gap-2 group"
        >
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center shrink-0">
            <span className="text-primary-foreground font-display font-bold text-sm">
              V
            </span>
          </div>
          <span className="font-display font-bold text-lg text-foreground tracking-tight">
            Vanatara Agency
          </span>
        </button>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <button
              key={link.id}
              type="button"
              data-ocid={`nav.${link.id}.link`}
              onClick={() => scrollTo(link.id)}
              className="text-sm font-body font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </button>
          ))}
          <Button
            size="sm"
            data-ocid="nav.contact.primary_button"
            onClick={() => scrollTo("contact")}
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-body shadow-teal"
          >
            Get Started
          </Button>
        </nav>

        {/* Mobile Hamburger */}
        <button
          type="button"
          data-ocid="nav.mobile.toggle"
          className="md:hidden p-2 rounded-md text-foreground"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background border-b border-border px-6 py-4 flex flex-col gap-4 shadow-card">
          {links.map((link) => (
            <button
              key={link.id}
              type="button"
              data-ocid={`nav.mobile.${link.id}.link`}
              onClick={() => scrollTo(link.id)}
              className="text-left text-sm font-body font-medium text-muted-foreground hover:text-foreground transition-colors py-1"
            >
              {link.label}
            </button>
          ))}
          <Button
            size="sm"
            data-ocid="nav.mobile.contact.primary_button"
            onClick={() => scrollTo("contact")}
            className="bg-primary text-primary-foreground w-full font-body"
          >
            Get Started
          </Button>
        </div>
      )}
    </header>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
function HeroSection() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="hero"
      data-ocid="hero.section"
      className="relative min-h-screen flex items-center pt-16 overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/assets/generated/hero-bg.dim_1600x900.jpg"
          alt=""
          className="w-full h-full object-cover opacity-50"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/30 to-background/80" />
      </div>

      <div className="container mx-auto px-6 py-24 md:py-32">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 bg-accent text-accent-foreground rounded-full px-4 py-1.5 text-sm font-body font-medium mb-8 border border-primary/20">
            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
            Digital Services Agency
          </div>

          {/* Headline */}
          <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl text-foreground leading-[1.05] tracking-tight mb-6">
            Website Development
            <br />
            <span className="text-primary">&amp; AI Automation</span>
          </h1>

          {/* Subtext */}
          <p className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 max-w-xl">
            Helping businesses build modern websites and automate their work
            using AI. Fast delivery, real results.
          </p>

          {/* CTA Group */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              data-ocid="hero.primary_button"
              onClick={() => scrollTo("contact")}
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-body font-medium text-base px-8 shadow-teal group"
            >
              Get Started
              <ArrowRight
                size={16}
                className="ml-2 group-hover:translate-x-0.5 transition-transform"
              />
            </Button>
            <Button
              size="lg"
              variant="outline"
              data-ocid="hero.secondary_button"
              onClick={() => scrollTo("services")}
              className="font-body font-medium text-base border-border hover:bg-secondary"
            >
              View Services
            </Button>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center gap-6 mt-14 pt-10 border-t border-border/60">
            {[
              { val: "50+", label: "Projects Delivered" },
              { val: "100%", label: "Client Satisfaction" },
              { val: "3 Days", label: "Avg. Delivery Time" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span className="font-display font-bold text-2xl text-foreground">
                  {stat.val}
                </span>
                <span className="font-body text-xs text-muted-foreground uppercase tracking-wide">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Services ─────────────────────────────────────────────────────────────────
const SERVICES = [
  {
    icon: Globe,
    title: "Business Website Development",
    description:
      "Professional, fast-loading websites tailored to your brand — built to convert visitors into customers.",
  },
  {
    icon: Utensils,
    title: "Restaurant & Gym Websites",
    description:
      "Industry-specific websites with menus, booking systems, class schedules, and membership features.",
  },
  {
    icon: Bot,
    title: "AI Automation for Businesses",
    description:
      "Automate repetitive tasks, streamline workflows, and save hours every week with custom AI systems.",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Chatbots",
    description:
      "AI-powered chatbots that answer customer inquiries, capture leads, and book appointments 24/7.",
  },
  {
    icon: TrendingUp,
    title: "Lead Generation Automation",
    description:
      "Automated pipelines that capture, qualify, and nurture leads — so you close more deals effortlessly.",
  },
];

function ServicesSection() {
  return (
    <section
      id="services"
      data-ocid="services.section"
      className="py-24 md:py-32 bg-secondary/40"
    >
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <p className="font-body text-sm font-semibold text-primary uppercase tracking-widest mb-3">
            What We Offer
          </p>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground tracking-tight mb-4">
            Our Services
          </h2>
          <p className="font-body text-muted-foreground text-lg leading-relaxed">
            Everything your business needs to grow online — from beautiful
            websites to intelligent automation systems.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, i) => {
            const Icon = service.icon;
            return (
              <Card
                key={service.title}
                data-ocid={`services.item.${i + 1}`}
                className="group bg-card border border-border shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 rounded-xl overflow-hidden"
              >
                <CardContent className="p-7">
                  <div className="w-11 h-11 rounded-xl bg-accent flex items-center justify-center mb-5 group-hover:bg-primary transition-colors duration-300">
                    <Icon
                      size={20}
                      className="text-accent-foreground group-hover:text-primary-foreground transition-colors duration-300"
                    />
                  </div>
                  <h3 className="font-display font-semibold text-lg text-foreground mb-2 leading-snug">
                    {service.title}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}

          {/* CTA card */}
          <Card
            className="group bg-primary border-0 shadow-teal hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 rounded-xl overflow-hidden cursor-pointer"
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            <CardContent className="p-7 flex flex-col justify-between h-full min-h-[180px]">
              <div>
                <div className="w-11 h-11 rounded-xl bg-white/20 flex items-center justify-center mb-5">
                  <ChevronRight size={20} className="text-primary-foreground" />
                </div>
                <h3 className="font-display font-semibold text-lg text-primary-foreground mb-2 leading-snug">
                  Not sure what you need?
                </h3>
                <p className="font-body text-sm text-primary-foreground/80 leading-relaxed">
                  Let's talk. We'll help you figure out the right solution for
                  your business.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

// ─── How It Works ─────────────────────────────────────────────────────────────
const STEPS = [
  {
    icon: MessageSquare,
    number: "01",
    title: "Discuss Your Needs",
    description:
      "We start with a friendly consultation to understand your business, goals, and what you need to succeed online.",
  },
  {
    icon: Rocket,
    number: "02",
    title: "Build Your Solution",
    description:
      "Our team designs and builds your website or automation system — fast, clean, and tailored to your brand.",
  },
  {
    icon: Headphones,
    number: "03",
    title: "Launch & Support",
    description:
      "We launch your project and stay with you — providing ongoing support, updates, and improvements.",
  },
];

function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      data-ocid="how_it_works.section"
      className="py-24 md:py-32 bg-background"
    >
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <p className="font-body text-sm font-semibold text-primary uppercase tracking-widest mb-3">
            Simple Process
          </p>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground tracking-tight mb-4">
            How It Works
          </h2>
          <p className="font-body text-muted-foreground text-lg leading-relaxed">
            Three simple steps to transform your business online.
          </p>
        </div>

        {/* Steps */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Connector line (desktop) */}
          <div className="hidden md:block absolute top-10 left-[calc(16.67%+1.5rem)] right-[calc(16.67%+1.5rem)] h-px bg-border z-0" />

          {STEPS.map((step, i) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="relative z-10 flex flex-col items-center text-center"
                style={{ animationDelay: `${i * 120}ms` }}
              >
                {/* Step circle */}
                <div className="relative mb-6">
                  <div className="w-20 h-20 rounded-full bg-accent border-4 border-background shadow-card flex items-center justify-center">
                    <Icon size={28} className="text-accent-foreground" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-primary flex items-center justify-center">
                    <span className="font-display font-bold text-xs text-primary-foreground">
                      {i + 1}
                    </span>
                  </div>
                </div>
                <h3 className="font-display font-semibold text-xl text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed max-w-xs">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── Reviews ──────────────────────────────────────────────────────────────────
const REVIEWS = [
  {
    quote:
      "Vanatara Agency built our restaurant website in just a few days. It looks stunning and our reservations went up significantly!",
    name: "Sarah M.",
    role: "Restaurant Owner",
    initials: "SM",
  },
  {
    quote:
      "Their AI automation saved us hours every week. The lead generation system they set up works like magic.",
    name: "James T.",
    role: "Sales Manager",
    initials: "JT",
  },
  {
    quote:
      "Excellent service. Our gym website is modern, fast, and easy to manage. Highly recommended.",
    name: "Linda K.",
    role: "Gym Owner",
    initials: "LK",
  },
];

function ReviewsSection() {
  return (
    <section
      id="reviews"
      data-ocid="reviews.section"
      className="py-24 md:py-32 bg-secondary/40"
    >
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <p className="font-body text-sm font-semibold text-primary uppercase tracking-widest mb-3">
            Client Stories
          </p>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground tracking-tight mb-4">
            What Our Clients Say
          </h2>
          <p className="font-body text-muted-foreground text-lg leading-relaxed">
            Real results from real businesses we've helped grow online.
          </p>
        </div>

        {/* Review cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS.map((review, i) => (
            <Card
              key={review.name}
              data-ocid={`reviews.item.${i + 1}`}
              className="bg-card border border-border shadow-card rounded-xl"
            >
              <CardContent className="p-7 flex flex-col gap-5">
                {/* Stars */}
                <div className="flex gap-0.5">
                  {["s1", "s2", "s3", "s4", "s5"].map((k) => (
                    <Star
                      key={k}
                      size={14}
                      className="fill-primary text-primary"
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="font-body text-sm text-foreground leading-relaxed flex-1">
                  "{review.quote}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-2 border-t border-border">
                  <div className="w-9 h-9 rounded-full bg-accent flex items-center justify-center shrink-0">
                    <span className="font-display font-bold text-xs text-accent-foreground">
                      {review.initials}
                    </span>
                  </div>
                  <div>
                    <p className="font-display font-semibold text-sm text-foreground">
                      {review.name}
                    </p>
                    <p className="font-body text-xs text-muted-foreground">
                      {review.role}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── About ────────────────────────────────────────────────────────────────────
function AboutSection() {
  return (
    <section
      id="about"
      data-ocid="about.section"
      className="py-24 md:py-32 bg-background"
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <p className="font-body text-sm font-semibold text-primary uppercase tracking-widest mb-3">
              Who We Are
            </p>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground tracking-tight mb-6">
              About Us
            </h2>
            <p className="font-body text-base text-muted-foreground leading-loose mb-8">
              We are a digital services company dedicated to helping businesses
              grow online. From building sleek, modern websites to creating
              powerful AI automation systems, we give businesses the tools they
              need to compete in today's digital world. Our mission is simple:
              make technology accessible, affordable, and effective for every
              business.
            </p>
            <div className="flex flex-col gap-3">
              {[
                "Fast turnaround — most projects live in days",
                "Transparent pricing, no hidden fees",
                "Ongoing support after launch",
              ].map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <CheckCircle
                    size={16}
                    className="text-primary mt-0.5 shrink-0"
                  />
                  <span className="font-body text-sm text-foreground">
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Years of Experience", value: "5+" },
                { label: "Happy Clients", value: "50+" },
                { label: "Projects Completed", value: "80+" },
                { label: "Countries Served", value: "10+" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-card border border-border shadow-card rounded-xl p-6 flex flex-col gap-1"
                >
                  <span className="font-display font-bold text-3xl text-primary">
                    {stat.value}
                  </span>
                  <span className="font-body text-xs text-muted-foreground">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Contact ──────────────────────────────────────────────────────────────────
function ContactSection() {
  const { actor } = useActor();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;
    setStatus("loading");
    try {
      if (actor) {
        await actor.submitContactForm(
          name.trim(),
          email.trim(),
          message.trim(),
        );
      }
      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      data-ocid="contact.section"
      className="py-24 md:py-32 bg-secondary/40"
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <p className="font-body text-sm font-semibold text-primary uppercase tracking-widest mb-3">
              Let's Talk
            </p>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground tracking-tight mb-6">
              Get In Touch
            </h2>
            <p className="font-body text-base text-muted-foreground leading-loose mb-10">
              Ready to grow your business online? Fill out the form and we'll
              get back to you within 24 hours. Or chat with us directly on
              WhatsApp.
            </p>

            {/* Contact info items */}
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center shrink-0">
                  <MessageCircle size={18} className="text-accent-foreground" />
                </div>
                <div>
                  <p className="font-body text-xs text-muted-foreground uppercase tracking-wide">
                    WhatsApp
                  </p>
                  <a
                    href="https://wa.me/1234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-ocid="contact.whatsapp.button"
                    className="font-body text-sm font-medium text-primary hover:underline"
                  >
                    +1 (234) 567-890
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center shrink-0">
                  <Globe size={18} className="text-accent-foreground" />
                </div>
                <div>
                  <p className="font-body text-xs text-muted-foreground uppercase tracking-wide">
                    Based In
                  </p>
                  <p className="font-body text-sm font-medium text-foreground">
                    Serving clients worldwide
                  </p>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA button */}
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="contact.whatsapp.button"
            >
              <Button
                className="mt-8 bg-[oklch(0.53_0.15_145)] hover:bg-[oklch(0.48_0.14_145)] text-white font-body gap-2 shadow-card"
                size="lg"
              >
                <MessageCircle size={18} />
                Chat on WhatsApp
              </Button>
            </a>
          </div>

          {/* Form */}
          <Card className="bg-card border border-border shadow-card rounded-xl">
            <CardContent className="p-8">
              {status === "success" ? (
                <div
                  data-ocid="contact.success_state"
                  className="flex flex-col items-center text-center py-10 gap-4"
                >
                  <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center">
                    <CheckCircle size={28} className="text-primary" />
                  </div>
                  <h3 className="font-display font-bold text-xl text-foreground">
                    Message Sent!
                  </h3>
                  <p className="font-body text-sm text-muted-foreground max-w-xs">
                    Thank you for reaching out. We'll get back to you within 24
                    hours.
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => setStatus("idle")}
                    className="mt-2 font-body"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form
                  ref={formRef}
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-5"
                  noValidate
                >
                  <div className="flex flex-col gap-1.5">
                    <Label
                      htmlFor="contact-name"
                      className="font-body text-sm font-medium text-foreground"
                    >
                      Full Name
                    </Label>
                    <Input
                      id="contact-name"
                      data-ocid="contact.name.input"
                      type="text"
                      placeholder="John Smith"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      autoComplete="name"
                      className="font-body bg-background border-border focus-visible:ring-primary"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <Label
                      htmlFor="contact-email"
                      className="font-body text-sm font-medium text-foreground"
                    >
                      Email Address
                    </Label>
                    <Input
                      id="contact-email"
                      data-ocid="contact.email.input"
                      type="email"
                      placeholder="john@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      autoComplete="email"
                      className="font-body bg-background border-border focus-visible:ring-primary"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <Label
                      htmlFor="contact-message"
                      className="font-body text-sm font-medium text-foreground"
                    >
                      Message
                    </Label>
                    <Textarea
                      id="contact-message"
                      data-ocid="contact.message.textarea"
                      placeholder="Tell us about your project or ask a question..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                      rows={5}
                      className="font-body bg-background border-border focus-visible:ring-primary resize-none"
                    />
                  </div>

                  {status === "error" && (
                    <div
                      data-ocid="contact.error_state"
                      className="flex items-center gap-2 text-destructive text-sm font-body bg-destructive/5 rounded-lg px-3 py-2"
                    >
                      <AlertCircle size={15} />
                      Something went wrong. Please try again.
                    </div>
                  )}

                  <Button
                    type="submit"
                    data-ocid="contact.form.submit_button"
                    disabled={status === "loading"}
                    className="bg-primary text-primary-foreground hover:bg-primary/90 font-body font-medium shadow-teal w-full mt-1"
                    size="lg"
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 size={16} className="mr-2 animate-spin" />
                        <span data-ocid="contact.loading_state">
                          Sending...
                        </span>
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  const currentYear = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined"
      ? encodeURIComponent(window.location.hostname)
      : "";

  return (
    <footer
      data-ocid="footer.section"
      className="bg-foreground text-primary-foreground py-14"
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center shrink-0">
                <span className="text-primary-foreground font-display font-bold text-sm">
                  V
                </span>
              </div>
              <span className="font-display font-bold text-lg">
                Vanatara Agency
              </span>
            </div>
            <p className="font-body text-sm text-primary-foreground/60 leading-relaxed max-w-xs">
              Helping businesses build modern websites and automate their work
              using AI.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-widest text-primary-foreground/50 mb-4">
              Navigation
            </h4>
            <ul className="flex flex-col gap-2.5">
              {[
                { label: "Services", id: "services" },
                { label: "How It Works", id: "how-it-works" },
                { label: "About", id: "about" },
                { label: "Contact", id: "contact" },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    type="button"
                    data-ocid={`footer.${link.id}.link`}
                    onClick={() => scrollTo(link.id)}
                    className="font-body text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-widest text-primary-foreground/50 mb-4">
              Follow Us
            </h4>
            <div className="flex gap-3">
              {[
                { Icon: SiX, label: "X (Twitter)", href: "#" },
                { Icon: SiLinkedin, label: "LinkedIn", href: "#" },
                { Icon: SiInstagram, label: "Instagram", href: "#" },
              ].map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  data-ocid="footer.social.link"
                  className="w-9 h-9 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-primary/30 transition-colors"
                >
                  <Icon size={15} className="text-primary-foreground/80" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-primary-foreground/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-body text-xs text-primary-foreground/40">
            © {currentYear} Vanatara Agency. All rights reserved.
          </p>
          <p className="font-body text-xs text-primary-foreground/40">
            Built with love using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${hostname}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary-foreground/70 underline transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

// ─── App ──────────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        <HeroSection />
        <ServicesSection />
        <HowItWorksSection />
        <ReviewsSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
