import Navigation from "@/components/Navigation";
const Contact = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="max-w-7xl mx-auto">
    <section id="contact" className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20">
            <div>
              <h2 className="text-minimal text-muted-foreground mb-4">
                GET IN TOUCH
              </h2>
              <h3 className="text-4xl md:text-6xl font-light text-architectural mb-12">
                Let's Create Something
                <br />
                Extraordinary
              </h3>

              <div className="space-y-8">
                <div>
                  <h4 className="text-minimal text-muted-foreground mb-2">
                    EMAIL
                  </h4>
                  <a
                    href="mailto:kayishema@gmail.com"
                    className="text-xl hover:text-muted-foreground transition-colors duration-300"
                  >
                    kayishema@gmail.com
                  </a>
                </div>

                <div>
                  <h4 className="text-minimal text-muted-foreground mb-2">
                    PHONE
                  </h4>
                  <a
                    href="tel:+1234567890"
                    className="text-xl hover:text-muted-foreground transition-colors duration-300"
                  >
                    + 250 795 516 826
                  </a>
                </div>

                <div>
                  <h4 className="text-minimal text-muted-foreground mb-2">
                    location
                  </h4>
                  <address className="text-xl not-italic">
                    kabeza
                    <br />
                    Rwanda, kigali
                  </address>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h4 className="text-minimal text-muted-foreground mb-6">
                  FOLLOW US
                </h4>
                <div className="space-y-4">
                  <a
                    href="#"
                    className="block text-xl hover:text-muted-foreground transition-colors duration-300"
                  >
                    Instagram
                  </a>
                  <a
                    href="#"
                    className="block text-xl hover:text-muted-foreground transition-colors duration-300"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="#"
                    className="block text-xl hover:text-muted-foreground transition-colors duration-300"
                  >
                    facebook
                  </a>
                </div>
              </div>

              <div className="pt-12 border-t border-border">
                <p className="text-muted-foreground">
                  Engineer Kayishema is ready and happy to work with clients, as
                  the company is equipped with many modern tools, high‑quality
                  materials sourced from Turkey, and a team of skilled workers.
                  This strong foundation allows the firm to deliver reliable
                  engineering solutions while maintaining professionalism and
                  efficiency in every project.
                </p>

                <p>_________________powered by   MUGABE</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
      </div>
    </div>
  );
};

export default Contact;
