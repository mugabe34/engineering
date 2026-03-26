import { useEffect, useState } from "react";
import { Eye, Phone, Mail, MapPin, CheckCircle, ArrowLeft } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

const Services = () => {
  const [activeService, setActiveService] = useState<string | null>(null);
  const [selectedArchProject, setSelectedArchProject] = useState("project1");
  const [showPortfolio, setShowPortfolio] = useState(false);
  const [selectedProjectView, setSelectedProjectView] = useState<string | null>(null);
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();

  const archProjects = [
    {
      id: "form1",
      title: "Kayishema Hugues Residential",
      image: "/shema.png",
      description: "High-end residential project focused on space optimization and luminous design.",
      price: "$2,300"
    },
    {
      id: "form2",
      title: "Bekeri Urban Housing",
      image: "/bereki.jpeg",
      description: "Modern urban housing with a strong emphasis on durability and usability.",
      price: "$2,800"
    }
  ];

  const portfolioItems = Array.from({ length: 15 }, (_, i) => ({
    id: `project${i + 1}`,
    image: `/${i + 1}.jpeg`,
    title: `Project ${i + 1}`,
    description: `Detailed architectural design case for project ${i + 1}.`,
    price: `$${1500 + i * 100}`
  }));

  const services = [
    {
      number: "01",
      title: "ARCHITECTUAL/DESINING",
      description: "Crafting homes that reflect individual lifestyles while maintaining architectural integrity",
      hasAction: true,
      actionText: "Click to explore architecture",
      actionIcon: Eye,
      dialogType: "architecture"
    },
    {
      number: "02",
      title: "LAND SURVEYING(real estate)",
      description: "Designing functional spaces that enhance business environments and user experiences"
    },
    {
      number: "03",
      title: "RENOVATION",
      description: "Transforming existing structures with contemporary sensibilities and sustainable practices"
    },
    {
      number: "04",
      title: "PRIVATE NOTARY",
      description: "Providing expert guidance on design direction, planning, and architectural solutions",
      hasAction: true,
      actionText: "Click to view notary",
      actionIcon: Eye,
      dialogType: "notary"
    }
  ];

  useEffect(() => {
    if (!carouselApi || !showPortfolio || selectedProjectView) {
      return;
    }

    const syncSelectedProject = () => {
      const currentIndex = carouselApi.selectedScrollSnap();
      setSelectedArchProject(portfolioItems[currentIndex]?.id ?? portfolioItems[0].id);
    };

    syncSelectedProject();
    carouselApi.on("select", syncSelectedProject);

    return () => {
      carouselApi.off("select", syncSelectedProject);
    };
  }, [carouselApi, portfolioItems, selectedProjectView, showPortfolio]);

  useEffect(() => {
    if (!activeService) {
      setShowPortfolio(false);
      setSelectedProjectView(null);
      setSelectedArchProject(portfolioItems[0].id);
    }
  }, [activeService, portfolioItems]);

  return (
    <section id="services" className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="text-minimal text-muted-foreground mb-4">SERVICES</h2>
            <h3 className="text-4xl md:text-6xl font-light text-architectural">
              What We Do
            </h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-x-6 gap-y-6">
            {services.map((service, index) => {
              if (!service.hasAction) {
                return (
                  <div key={index} className="group border border-architectural/20 p-5 h-full">
                    <div className="flex items-start space-x-4">
                      <span className="text-minimal text-muted-foreground font-medium">{service.number}</span>
                      <div className="flex-1">
                        <h4 className="text-2xl font-light mb-2 text-architectural">{service.title}</h4>
                        <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                      </div>
                    </div>
                  </div>
                );
              }

              const isArchitecture = service.dialogType === "architecture";
              const isNotary = service.dialogType === "notary";

              return (
                <Dialog
                  key={index}
                  open={activeService === service.number}
                  onOpenChange={(open) => setActiveService(open ? service.number : null)}
                >
                  <DialogTrigger asChild>
                    <div
                      className={`relative border-l-4 border-t-4 transition-all duration-300 cursor-pointer p-6 h-full ${
                        isArchitecture
                          ? "border-black dark:border-white bg-black text-amber-300 dark:bg-white dark:text-black"
                          : isNotary
                          ? "border-black dark:border-white bg-black text-amber-300 dark:bg-white dark:text-black"
                          : "border-black dark:border-white bg-black dark:bg-white text-architectural"
                      } hover:shadow-xl`}
                    >
                      <div className="absolute -top-2 -right-2 flex space-x-1">
                        <span className="w-3 h-3 bg-amber-400 rounded-full animate-pulse"></span>
                        <span className="w-3 h-3 bg-amber-400 rounded-full animate-pulse delay-150"></span>
                        <span className="w-3 h-3 bg-amber-400 rounded-full animate-pulse delay-300"></span>
                      </div>
                      <div className="absolute -bottom-2 -left-2 bg-amber-100/30 dark:bg-amber-900/30 px-3 py-1 text-xs font-semibold text-amber-600 dark:text-amber-300">
                        {isArchitecture ? "Talk to architect" : "Talk to notary"}
                      </div>
                      <div className="flex items-start space-x-4">
                        <span className="text-minimal font-medium">{service.number}</span>
                        <div className="flex-1">
                          <h4 className={`text-2xl font-light mb-3 ${isArchitecture ? 'text-amber-300' : 'text-architectural'}`}>
                            {service.title}
                          </h4>
                          <p className="leading-relaxed text-sm">{service.description}</p>
                        </div>
                      </div>
                    </div>
                  </DialogTrigger>

                  <DialogContent className="sm:max-w-4xl max-h-[90vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle>
                        {isArchitecture ? "Architectural Partnership" : "Private Notary Details"}
                      </DialogTitle>
                    </DialogHeader>

                    {isArchitecture ? (
                      <div className="space-y-6">
                        <p className="text-muted-foreground flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-amber-300" />
                          Architectural partnership between Kayishema Hugues and Bereki.
                        </p>

                        <div className="grid md:grid-cols-[0.95fr_1.05fr] gap-5">
                          {/* Images and contact on the left */}
                          <div className="space-y-4">
                            <div className="grid grid-cols-2 gap-2 sm:gap-3">
                              <div className="rounded-xl overflow-hidden h-36 sm:h-40 bg-muted/30">
                                <img
                                  src="/bereki.jpeg"
                                  alt="Bereki"
                                  className="w-full h-full object-cover transition duration-300 hover:scale-105"
                                />
                              </div>
                              <div className="rounded-xl overflow-hidden h-36 sm:h-40 bg-muted/30">
                                <img
                                  src="/shema.png"
                                  alt="Kayishema Hugues"
                                  className="w-full h-full object-cover transition duration-300 hover:scale-105"
                                />
                              </div>
                            </div>

                            <div className="space-y-2 rounded-xl border border-border/60 bg-muted/20 p-4">
                              <p className="font-medium">Phone: +250 795 516 826</p>
                              <p className="font-medium">Email: Huguesengineering@gmail.com</p>
                              <p className="font-medium">Location: Kigali, Remera, Gisimenti</p>
                            </div>
                          </div>

                          {/* Portfolio section on the right */}
                          <div className="space-y-4">
                            <button
                              type="button"
                              onClick={() => setShowPortfolio(true)}
                              className="inline-flex items-center gap-2 font-semibold text-black dark:text-white"
                            >
                              <Eye className="w-4 h-4" />
                              Portfolio
                            </button>

                            {showPortfolio && !selectedProjectView && (
                              <div className="space-y-4">
                                <button
                                  type="button"
                                  onClick={() => setShowPortfolio(false)}
                                  className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-white/90 dark:bg-black/90 text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition"
                                >
                                  <ArrowLeft className="w-4 h-4" />
                                  Go back
                                </button>
                                <div className="space-y-4">
                                  <Carousel
                                    setApi={setCarouselApi}
                                    opts={{
                                      align: "start",
                                      loop: true,
                                    }}
                                    className="w-full"
                                  >
                                    <CarouselContent className="-ml-3">
                                      {portfolioItems.map((item) => (
                                        <CarouselItem key={item.id} className="pl-3 md:basis-1/2">
                                          <button
                                            onClick={() => setSelectedProjectView(item.id)}
                                            className="relative h-64 w-full overflow-hidden rounded-xl border border-border/50 bg-muted/20 text-left group"
                                            aria-label={`Open ${item.title}`}
                                          >
                                            <img
                                              src={item.image}
                                              alt={item.title}
                                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />
                                            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4 text-white">
                                              <div>
                                                <p className="text-sm font-semibold">{item.title}</p>
                                                <p className="text-xs text-white/80">Tap to view project</p>
                                              </div>
                                              <span className="rounded-full bg-white/15 p-2 backdrop-blur-sm">
                                                <Eye className="w-5 h-5" />
                                              </span>
                                            </div>
                                          </button>
                                        </CarouselItem>
                                      ))}
                                    </CarouselContent>
                                    <CarouselPrevious className="left-3 top-1/2 border-none bg-black/65 text-white hover:bg-black disabled:bg-black/30" />
                                    <CarouselNext className="right-3 top-1/2 border-none bg-black/65 text-white hover:bg-black disabled:bg-black/30" />
                                  </Carousel>

                                  <div className="flex flex-wrap items-center justify-center gap-2">
                                    {portfolioItems.map((item, index) => (
                                      <button
                                        key={item.id}
                                        type="button"
                                        onClick={() => {
                                          carouselApi?.scrollTo(index);
                                          setSelectedArchProject(item.id);
                                        }}
                                        className={`h-2.5 rounded-full transition-all ${
                                          selectedArchProject === item.id
                                            ? "w-8 bg-foreground"
                                            : "w-2.5 bg-foreground/30 hover:bg-foreground/50"
                                        }`}
                                        aria-label={`Go to ${item.title}`}
                                      />
                                    ))}
                                  </div>
                                </div>
                              </div>
                            )}

                            {selectedProjectView && (
                              <div className="space-y-4">
                                <button
                                  type="button"
                                  onClick={() => setSelectedProjectView(null)}
                                  className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-white/90 dark:bg-black/90 text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition"
                                >
                                  <ArrowLeft className="w-4 h-4" />
                                  Back to projects
                                </button>
                                <div className="grid grid-cols-1 gap-6">
                                  <div className="rounded-md overflow-hidden">
                                    {portfolioItems
                                      .filter((item) => item.id === selectedProjectView)
                                      .map((item) => (
                                        <img
                                          key={item.id}
                                          src={item.image}
                                          alt={item.title}
                                          className="w-full h-64 object-contain"
                                        />
                                      ))}
                                  </div>
                                  <div className="space-y-4">
                                    {portfolioItems
                                      .filter((item) => item.id === selectedProjectView)
                                      .map((item) => (
                                        <div key={item.id}>
                                          <h4 className="text-xl font-semibold text-architectural">{item.title}</h4>
                                          <p className="text-muted-foreground">Done by Engineer Kayishema</p>
                                          <p className="text-black dark:text-white font-bold mt-2">Price: {Math.round(parseInt(item.price.replace("$", "")) * 1100)} RWF</p>
                                        </div>
                                      ))}
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="relative overflow-hidden shadow-lg group/image">
                            <img
                              src="/ms.jpeg"
                              alt="Private Notary"
                              className="w-full h-80 object-contain transition-transform duration-300 group-hover/image:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                              <div className="text-center text-white backdrop-blur-sm bg-black/30 p-4">
                                <CheckCircle className="w-8 h-8 mx-auto mb-2" />
                                <p className="text-sm font-medium">Ready for work</p>
                              </div>
                            </div>
                          </div>

                          <div className="space-y-4">
                            <h4 className="text-xl font-light text-architectural mb-4">Private Notary – Ready for Work</h4>
                            <p className="text-muted-foreground leading-relaxed">
                              The private notary is fully prepared to provide reliable and confidential notarial services. She is available to assist with the authentication of documents, witnessing of signatures, and ensuring legal compliance with professionalism and integrity. Her readiness guarantees smooth support for all official and private transactions.
                            </p>
                          </div>
                        </div>

                        <div className="space-y-4">
                          <div className="flex items-center space-x-3 p-3 bg-muted/50 hover:bg-muted transition-colors duration-300">
                            <Phone className="w-5 h-5 text-architectural flex-shrink-0" />
                            <div>
                              <p className="text-sm text-muted-foreground">Phone</p>
                              <p className="font-medium">+250 788 404 9408</p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-3 p-3 bg-muted/50 hover:bg-muted transition-colors duration-300">
                            <Mail className="w-5 h-5 text-architectural flex-shrink-0" />
                            <div>
                              <p className="text-sm text-muted-foreground">Email</p>
                              <p className="font-medium">kabetty9@gmail.com</p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-3 p-3 bg-muted/50 hover:bg-muted transition-colors duration-300">
                            <MapPin className="w-5 h-5 text-architectural flex-shrink-0" />
                            <div>
                              <p className="text-sm text-muted-foreground">Location</p>
                              <p className="font-medium">Kigali, Remera, Gisimenti</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </DialogContent>
                </Dialog>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
