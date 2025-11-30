import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";
import emailjs from "@emailjs/browser";
import { useToast } from "@/hooks/use-toast";

const PodcastContact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    series: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      console.log(result.text);

      toast({
        title: "Application submitted!",
        description: "We'll review your application and get back to you soon.",
      });

      setFormData({ name: "", email: "", company: "", series: "", message: "" });
    } catch (error: any) {
      console.error("Error sending message:", error);
      toast({
        title: "Error sending application",
        description: "Please try again later or email us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-blue font-display mb-6">
              Apply to Be a Guest
            </h2>
            <p className="text-lg text-muted-foreground">
              Tell us about yourself and why you'd be a great fit for the show.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-card p-8 rounded-lg shadow-md border border-bronze/20">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-card-foreground mb-2">
                    Name *
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    className="w-full"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-card-foreground mb-2">
                    Email *
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@company.com"
                    className="w-full"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-card-foreground mb-2">
                    Company / Organization
                  </label>
                  <Input
                    id="company"
                    type="text"
                    placeholder="Your company name"
                    className="w-full"
                    value={formData.company}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="series" className="block text-sm font-medium text-card-foreground mb-2">
                    Which series interests you?
                  </label>
                  <select
                    id="series"
                    className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm"
                    value={formData.series}
                    onChange={handleChange}
                  >
                    <option value="">Select a series...</option>
                    <option value="veterans-talking-business">Veterans Talking Business</option>
                    <option value="veterans-alliances">Veterans Alliances</option>
                    <option value="both">Both Series</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-card-foreground mb-2">
                    Tell us about yourself and your story *
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Share your background, your business, and what insights you'd bring to the show..."
                    className="w-full min-h-[120px]"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-rust-red hover:bg-rust-red-dark text-cream text-lg py-6 font-semibold"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit Application"}
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-slate-blue font-display mb-6">
                  Get In Touch
                </h3>
                <p className="text-muted-foreground mb-8">
                  Have questions about the podcast or want to discuss partnership opportunities? 
                  Reach out directly.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-rust-red/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-rust-red" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-blue mb-1">Email</h4>
                    <p className="text-muted-foreground">scott@badge93.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-rust-red/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-rust-red" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-blue mb-1">Phone</h4>
                    <p className="text-muted-foreground">623-326-0317</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-rust-red/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-rust-red" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-blue mb-1">Location</h4>
                    <p className="text-muted-foreground">Serving the veteran community nationwide</p>
                  </div>
                </div>
              </div>

              <div className="bg-muted/50 p-6 rounded-lg border border-bronze/20 mt-8">
                <h4 className="font-semibold text-slate-blue mb-2">What to Expect</h4>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• We'll review your application within 48 hours</li>
                  <li>• A brief pre-interview call to discuss topics</li>
                  <li>• Professional remote recording setup</li>
                  <li>• Episodes promoted across our network</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PodcastContact;
