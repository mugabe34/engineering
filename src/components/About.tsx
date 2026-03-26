const About = () => {
  return (
    <section id="about" className="py-32 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-minimal text-muted-foreground mb-4">ABOUT</h2>
              <h3 className="text-4xl md:text-6xl font-light text-architectural mb-12">
                Kayishema
              </h3>

              <div className="space-y-8">
                <p className="text-lg text-muted-foreground leading-relaxed transition-all duration-300 ease-in-out hover:text-architectural hover:scale-105 cursor-pointer">
                  Engineer Kayishema is a Rwandan civil engineer recognized for
                  his contribution to infrastructure development and
                  professional practice. With expertise in structural design,
                  project supervision, and compliance with engineering
                  standards, he plays a key role in ensuring that construction
                  projects meet safety, quality, and sustainability
                  requirements. His work reflects a commitment to advancing
                  Rwanda’s urban growth while upholding ethical engineering
                  principles, making him a respected figure in the country’s
                  engineering community.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed transition-all duration-300 ease-in-out hover:text-architectural hover:scale-105 cursor-pointer">
                  Engineer Kayishema’s company was founded in 2026 and has
                  quickly established itself as a reliable engineering firm with
                  highly skilled workers. The organization prides itself on
                  sourcing all essential construction materials directly from
                  Turkey, ensuring quality and durability in every project.
                  Backed by solid working experience and a commitment to
                  professional standards, the firm combines technical expertise
                  with international resources to deliver sustainable
                  infrastructure solutions in Rwanda.
                </p>
              </div>

              <div className="mt-12 overflow-hidden rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:shadow-2xl hover:scale-105">
                <img 
                  src="/bereki.jpeg" 
                  alt="Engineer Kayishema" 
                  className="w-full h-auto object-cover transition-transform duration-300 ease-in-out hover:scale-110"
                />
              </div>
            </div>

            <div className="space-y-12">
              <div>
                <h4 className="text-minimal text-muted-foreground mb-6">
                  APPROACH
                </h4>
                <div className="space-y-6">
                  <div className="border-l-2 border-architectural pl-6">
                    <h5 className="text-lg font-medium mb-2">Research</h5>
                    <p className="text-muted-foreground">
                      Deep understanding of context, culture, and climate
                    </p>
                  </div>
                  <div className="border-l-2 border-architectural pl-6">
                    <h5 className="text-lg font-medium mb-2">Collaboration</h5>
                    <p className="text-muted-foreground">
                      Close partnership with clients, engineers, and
                      craftspeople
                    </p>
                  </div>
                  <div className="border-l-2 border-architectural pl-6">
                    <h5 className="text-lg font-medium mb-2">Innovation</h5>
                    <p className="text-muted-foreground">
                      Sustainable materials and forward-thinking design
                      solutions
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-border">
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-minimal text-muted-foreground mb-2">
                      FOUNDED
                    </h4>
                    <p className="text-xl">2026</p>
                  </div>
                  <div>
                    <h4 className="text-minimal text-muted-foreground mb-2">
                      PROJECTS
                    </h4>
                    <p className="text-xl">68+</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
