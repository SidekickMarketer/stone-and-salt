import { AlertTriangle, ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function StormBanner() {
  return (
    <div className="bg-amber-500 text-stone-950 px-4 py-3 relative z-50">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-center gap-2 text-center sm:text-left">
        <div className="flex items-center gap-2 font-bold uppercase tracking-wider text-sm">
          <AlertTriangle className="h-4 w-4" />
          <span>Winter Storm Alert</span>
        </div>
        <p className="text-sm font-medium">
          Emergency plowing crews are active in Liberty Twp & Oxford.
        </p>
        <Link href="/snow-removal">
          <a className="inline-flex items-center gap-1 text-sm font-bold underline decoration-2 underline-offset-2 hover:text-white transition-colors">
            Book Now <ArrowRight className="h-4 w-4" />
          </a>
        </Link>
      </div>
    </div>
  );
}
