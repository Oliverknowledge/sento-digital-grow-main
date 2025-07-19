import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  return (
    <section className="py-20 bg-background" id="testimonials">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">What Our Clients Say</h2>
          <p className="text-lg text-muted-foreground">Real feedback from real business owners we've helped.</p>
        </div>
        <div className="flex justify-center">
          <Card className="max-w-2xl w-full p-10 border shadow-lg">
            <CardContent>
              <div className="flex flex-col items-center">
                <div className="text-3xl font-semibold text-primary mb-2">Fernando H.</div>
                <a href="https://tirebusters.biz" target="_blank" rel="noopener noreferrer" className="text-base text-blue-600 hover:underline mb-4">TireBusters.biz</a>
                <div className="text-lg text-muted-foreground mb-2 text-center">
                  <span className="font-medium">Services:</span> SEO &amp; New Website Design for Solar Companies
                </div>
                {/* 5 Star Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-7 h-7 text-yellow-400 fill-current" viewBox="0 0 20 20"><polygon points="10,1 12.59,7.36 19.51,7.64 14,12.14 15.82,18.99 10,15.27 4.18,18.99 6,12.14 0.49,7.64 7.41,7.36" /></svg>
                  ))}
                </div>
                <blockquote className="italic text-xl text-foreground text-center mt-2 max-w-2xl">
                  <span className="block mb-2">"SentoDigital helped us reach more solar customers online with a new website and targeted SEO. Highly recommended for any solar business!"</span>
                  "Great service, good quality of work, and honestly very patient, we did take some time to provide feedback."
                </blockquote>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;