"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { PHONE_NUMBER, EMAIL } from "@/lib/constants";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

// Business context for the AI
const BUSINESS_CONTEXT = {
  name: "Stone & Salt",
  services: ["Commercial Grounds Maintenance", "Snow & Ice Removal", "Residential Hardscapes", "Lawn & Maintenance"],
  serviceAreas: ["Liberty Township", "Mason", "West Chester", "Blue Ash", "Loveland", "Indian Hill", "Anderson Township", "Hyde Park", "Montgomery"],
  phone: PHONE_NUMBER,
  email: EMAIL,
  hours: "Mon-Fri 7am-6pm, Sat 8am-2pm",
  responseTime: "4 hours during business hours",
};

const WELCOME_MESSAGE: Message = {
  id: "welcome",
  role: "assistant",
  content: `Hi! I'm here to help you with questions about Stone & Salt's services. I can help with:\n\n• Service information\n• Areas we serve\n• Getting a quote\n• Scheduling questions\n\nHow can I help you today?`,
  timestamp: new Date(),
};

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([WELCOME_MESSAGE]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const messageIdRef = useRef(0);

  const generateMessageId = useCallback(() => {
    messageIdRef.current += 1;
    return `msg-${messageIdRef.current}`;
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: generateMessageId(),
      role: "user",
      content: input.trim(),
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    // TODO: Replace this with actual AI API call
    // For now, using a simple response system
    setTimeout(() => {
      const response = generateSimpleResponse(userMessage.content);
      const assistantMessage: Message = {
        id: generateMessageId(),
        role: "assistant",
        content: response,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, assistantMessage]);
      setIsLoading(false);
    }, 1000);
  };

  // Simple keyword-based responses - replace with AI later
  const generateSimpleResponse = (query: string): string => {
    const q = query.toLowerCase();

    if (q.includes("price") || q.includes("cost") || q.includes("quote") || q.includes("estimate")) {
      return `We provide complimentary site assessments for all commercial properties. The best way to get started is to:\n\n1. Call us at ${BUSINESS_CONTEXT.phone}\n2. Fill out our contact form at /contact\n3. Tell us about your property\n\nWe respond within ${BUSINESS_CONTEXT.responseTime}.`;
    }

    if (q.includes("area") || q.includes("serve") || q.includes("location") || q.includes("where")) {
      return `We serve Greater Cincinnati within about 45 minutes of Liberty Township, including:\n\n${BUSINESS_CONTEXT.serviceAreas.map(a => `• ${a}`).join("\n")}\n\nNot sure if we cover your area? Give us a call at ${BUSINESS_CONTEXT.phone}!`;
    }

    if (q.includes("snow") || q.includes("plow") || q.includes("ice") || q.includes("winter")) {
      return `Our Snow & Ice Removal services include:\n\n• 24/7 emergency response\n• Commercial & residential plowing\n• Salt & ice management\n• Documented service reports\n\nWe monitor weather closely and are on-site before you need us. Want to get on our snow removal schedule? Contact us at ${BUSINESS_CONTEXT.phone}.`;
    }

    if (q.includes("hardscape") || q.includes("patio") || q.includes("wall") || q.includes("fire pit")) {
      return `Our Hardscape services include:\n\n• Paver patios & walkways\n• Retaining walls\n• Outdoor kitchens\n• Fire pits & seating areas\n\nWe use premium materials from Belgard and Techo-Bloc. Ready to transform your backyard? Let's talk: ${BUSINESS_CONTEXT.phone}`;
    }

    if (q.includes("commercial") || q.includes("business") || q.includes("hoa") || q.includes("office")) {
      return `Our Commercial Grounds services are perfect for:\n\n• Corporate campuses\n• Office parks\n• HOA communities\n• Retail centers\n\nOne vendor, one invoice, year-round reliability. We'd love to discuss your property's needs: ${BUSINESS_CONTEXT.phone}`;
    }

    if (q.includes("hour") || q.includes("open") || q.includes("call") || q.includes("contact")) {
      return `Here's how to reach us:\n\n📞 ${BUSINESS_CONTEXT.phone}\n📧 ${BUSINESS_CONTEXT.email}\n⏰ ${BUSINESS_CONTEXT.hours}\n\nWe respond to all inquiries within ${BUSINESS_CONTEXT.responseTime}. For snow emergencies in winter, our line is monitored 24/7.`;
    }

    if (q.includes("service")) {
      return `Stone & Salt offers four main services:\n\n${BUSINESS_CONTEXT.services.map(s => `• ${s}`).join("\n")}\n\nWe're your year-round outdoor partner - one call for every season. Which service interests you?`;
    }

    // Default response
    return `Thanks for your question! For the most accurate answer, I'd recommend:\n\n• Calling us directly at ${BUSINESS_CONTEXT.phone}\n• Visiting our contact page to send a message\n\nWe respond within ${BUSINESS_CONTEXT.responseTime}. Is there something specific about our services I can help clarify?`;
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-lg transition-all duration-300 ${
          isOpen
            ? "bg-slate text-white"
            : "bg-sun-ochre text-white hover:bg-sun-ochre/90"
        }`}
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {isOpen ? (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-[360px] max-w-[calc(100vw-48px)] bg-white rounded-2xl shadow-2xl border border-slate/10 overflow-hidden flex flex-col max-h-[500px]">
          {/* Header */}
          <div className="bg-slate text-white p-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-eucalyptus/20 flex items-center justify-center">
              <svg className="w-5 h-5 text-eucalyptus" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
            </div>
            <div>
              <p className="font-semibold">Stone & Salt</p>
              <p className="text-xs text-white/70">We typically respond within 4 hours</p>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-soft-cream/50">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-3 ${
                    message.role === "user"
                      ? "bg-sun-ochre text-white rounded-br-md"
                      : "bg-white text-slate shadow-sm border border-slate/5 rounded-bl-md"
                  }`}
                >
                  <p className="text-sm whitespace-pre-line">{message.content}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white text-slate shadow-sm border border-slate/5 rounded-2xl rounded-bl-md px-4 py-3">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 bg-slate/40 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="w-2 h-2 bg-slate/40 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="w-2 h-2 bg-slate/40 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSubmit} className="p-4 border-t border-slate/10 bg-white">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                aria-label="Type your message"
                className="flex-1 px-4 py-2 rounded-full border border-slate/20 focus:outline-none focus:border-sun-ochre focus:ring-1 focus:ring-sun-ochre text-sm"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                className="p-2 rounded-full bg-sun-ochre text-white hover:bg-sun-ochre/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
