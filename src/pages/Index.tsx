import { useState, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import CountUp from "react-countup";
import { 
  FaPhone, FaEnvelope, FaFacebookF, FaTwitter, FaInstagram, 
  FaBars, FaTimes, FaCheckCircle, FaShieldAlt, FaUsers, FaStar,
  FaHome, FaBuilding, FaArrowRight, FaClock,
  FaClipboardList, FaCalendar, FaBroom, FaThumbsUp, FaComments,
  FaMapMarkerAlt, FaGoogle
} from "react-icons/fa";
import { useRef } from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";

// Import images
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import whyChooseImg from "@/assets/why-choose.jpg";
import guaranteeBadge from "@/assets/guarantee-badge.png";
import phoneMockup from "@/assets/phone-mockup.png";
import residentialService from "@/assets/residential-service.jpg";
import commercialService from "@/assets/commercial-service.jpg";
import deepService from "@/assets/deep-service.jpg";
import statsBg from "@/assets/stats-bg.jpg";
import googleGuaranteed from "@/assets/google-guaranteed.png";
import fiveStars from "@/assets/5-stars.png";
import logo from "@/assets/logo.png";
import logoBandClean from "@/assets/logo-bandclean.png";

// Button Component
const Button = ({ children, variant = "solid", className = "", onClick }: any) => {
  const baseStyles = "py-3 px-8 rounded-md font-semibold transition-all duration-300 inline-flex items-center gap-2";
  const variants = {
    solid: "bg-primary text-primary-foreground hover:bg-primary-dark hover:scale-105",
    outline: "bg-transparent text-primary border-2 border-primary hover:bg-primary hover:text-primary-foreground hover:scale-105"
  };
  
  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

// Animated Section Wrapper
const AnimatedSection = ({ children, className = "" }: any) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Header Component
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "HOME", href: "#home" },
    { name: "ABOUT", href: "#about" },
    { name: "SERVICES", href: "#services" },
    { name: "CHECKLIST", href: "#checklist" },
    { name: "PORTFOLIO", href: "#portfolio" },
    { name: "FAQS", href: "#faqs" },
    { name: "CONTACT", href: "#contact" },
    { name: "LOG IN", href: "#login" }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top Bar - Contact Info */}
      <div className="bg-white py-3 hidden md:block border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex gap-8 items-center">
            <a href="tel:+35699027897" className="flex items-center gap-2 text-text-secondary hover:text-primary transition-colors font-poppins text-sm">
              <FaPhone className="text-primary" /> +35699027897
            </a>
            <a href="mailto:Martina.florentin89@gmail.com" className="flex items-center gap-2 text-text-secondary hover:text-primary transition-colors font-poppins text-sm">
              <FaEnvelope className="text-primary" /> Martina.florentin89@gmail.com
            </a>
          </div>
          <div className="flex gap-3">
            <a href="#" className="w-8 h-8 rounded-full bg-[#1877f2] text-white flex items-center justify-center hover:opacity-80 transition-opacity">
              <FaFacebookF size={14} />
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center hover:opacity-80 transition-opacity">
              <FaInstagram size={14} />
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-gray-600 text-white flex items-center justify-center hover:opacity-80 transition-opacity">
              <FaGoogle size={14} />
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className={`bg-[#f8f8f8] transition-all duration-300 ${isScrolled ? "shadow-md" : ""}`}>
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <img src={logoBandClean} alt="Band Clean" className="h-12 md:h-14 object-contain" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex gap-6 items-center font-poppins">
            {navLinks.map((link, index) => (
              <span key={link.name} className="flex items-center gap-6">
                <a 
                  href={link.href} 
                  className="text-[#00a0df] font-bold text-sm hover:text-[#007ab3] transition-colors uppercase"
                >
                  {link.name}
                </a>
                {index < navLinks.length - 1 && <span className="text-gray-300">|</span>}
              </span>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="bg-[#00a0df] text-white py-3 px-6 rounded-full font-poppins font-bold text-sm hover:bg-[#007ab3] transition-all duration-300 uppercase">
              BOOK NOW
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden text-2xl text-text-primary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="md:hidden bg-white border-t"
          >
            <div className="px-4 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href} 
                  className="text-text-primary font-medium hover:text-primary transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <Button variant="solid" className="w-full justify-center">BOOK NOW</Button>
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
};

// Hero Component
const Hero = () => {
  return (
    <section id="home" className="relative h-screen pt-20 md:pt-28">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        className="h-full w-full"
      >
        {[hero1, hero2, hero3].map((image, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full w-full overflow-hidden">
              <motion.img
                src={image}
                alt={`Hero ${index + 1}`}
                className="w-full h-full object-cover"
                animate={{ scale: [1, 1.1] }}
                transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
              />
              <div className="absolute inset-0 bg-black/60" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Hero Content */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-6xl font-bold mb-6 font-poppins"
          >
            BEST RESIDENTIAL & COMMERCIAL CLEANING SERVICES
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-lg md:text-xl mb-8 text-gray-200"
          >
            Professional cleaning services you can trust. We bring excellence to every space we clean.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              CONTACT US TODAY
            </Button>
            <Button variant="solid">
              BOOK YOUR CLEANING
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Why Choose Us Component
const WhyChooseUs = () => {
  const features = [
    { icon: <FaStar />, title: "Excellence", desc: "Top-quality cleaning services" },
    { icon: <FaUsers />, title: "Personalized", desc: "Customized cleaning plans" },
    { icon: <FaShieldAlt />, title: "Trusted", desc: "Vetted & insured professionals" },
    { icon: <FaCheckCircle />, title: "Reliable", desc: "Consistent quality service" }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text */}
            <div>
              <p className="text-primary font-semibold mb-2 uppercase tracking-wide">Why Choose Band Clean?</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-text-primary font-poppins">
                Our Expertise Making Business Shine
              </h2>
              <p className="text-text-secondary mb-8 leading-relaxed">
                With years of experience in the cleaning industry, we deliver exceptional results that exceed expectations. 
                Our commitment to quality and customer satisfaction sets us apart.
              </p>

              {/* Features Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex gap-3 items-start">
                    <div className="text-primary text-2xl mt-1">{feature.icon}</div>
                    <div>
                      <h4 className="font-semibold text-text-primary mb-1">{feature.title}</h4>
                      <p className="text-sm text-text-secondary">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Additional Points */}
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3">
                  <FaCheckCircle className="text-primary text-xl flex-shrink-0" />
                  <span className="text-text-primary font-medium">100% Satisfaction Guarantee</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaCheckCircle className="text-primary text-xl flex-shrink-0" />
                  <span className="text-text-primary font-medium">Commitment to Trust and Safety</span>
                </div>
              </div>

              <Button variant="solid">
                Book Your Cleaning Today <FaArrowRight />
              </Button>
            </div>

            {/* Right Column - Image */}
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
              <img 
                src={whyChooseImg} 
                alt="Professional Cleaner" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

// Satisfaction Guarantee Component
const SatisfactionGuarantee = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-bg-light">
        <div className="absolute inset-0 bg-white/80" />
      </div>

      {/* SVG Shape Divider Top */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg className="relative block w-full h-16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="fill-white"></path>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <AnimatedSection>
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Left - Badge */}
              <div className="bg-bg-light flex items-center justify-center p-12">
                <img src={guaranteeBadge} alt="100% Satisfaction Guarantee" className="max-w-xs w-full" />
              </div>

              {/* Right - Content */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-text-primary font-poppins">
                  100% Satisfaction Guarantee
                </h2>
                <p className="text-text-secondary mb-4 leading-relaxed">
                  We stand behind the quality of our work. If you're not completely satisfied with our cleaning service, 
                  we'll make it right or your money back.
                </p>
                <p className="text-text-secondary mb-6 leading-relaxed">
                  Our guarantee reflects our commitment to excellence and customer satisfaction. We don't just clean – 
                  we create spotless environments that exceed your expectations.
                </p>
                <Button variant="solid">
                  Learn More <FaArrowRight />
                </Button>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>

      {/* SVG Shape Divider Bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg className="relative block w-full h-16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="fill-white"></path>
        </svg>
      </div>
    </section>
  );
};

// Service Card Component
const ServiceCard = ({ image, title, description }: any) => {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="relative h-96 rounded-lg overflow-hidden shadow-lg group cursor-pointer"
    >
      <div className="absolute inset-0 overflow-hidden">
        <motion.img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.6 }}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <h3 className="text-2xl font-bold mb-3 font-poppins">{title}</h3>
        <p className="text-gray-200 mb-4">{description}</p>
        <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
          BOOK NOW
        </Button>
      </div>
    </motion.div>
  );
};

// Services Component
const Services = () => {
  const services = [
    {
      image: residentialService,
      title: "Residential Cleaning",
      description: "Professional home cleaning services tailored to your needs"
    },
    {
      image: commercialService,
      title: "Commercial Cleaning",
      description: "Keep your business spotless with our commercial solutions"
    },
    {
      image: deepService,
      title: "Deep Cleaning",
      description: "Comprehensive deep cleaning for a thoroughly refreshed space"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary font-poppins">
              Find the right service for you
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

// Service Breakdown Card Component
const BreakdownCard = ({ title, items }: any) => {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
    >
      <h3 className="text-xl font-bold mb-4 text-text-primary font-poppins">{title}</h3>
      <ul className="space-y-2 mb-6">
        {items.map((item: string, index: number) => (
          <li key={index} className="flex items-start gap-2 text-text-secondary">
            <FaCheckCircle className="text-primary mt-1 flex-shrink-0" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <button className="text-primary font-semibold flex items-center gap-2 hover:gap-3 transition-all">
        SEE MORE <FaArrowRight />
      </button>
    </motion.div>
  );
};

// Service Breakdown Component
const ServiceBreakdown = () => {
  const breakdowns = [
    {
      title: "Residential Clean",
      items: [
        "Dusting all surfaces",
        "Vacuuming & mopping floors",
        "Kitchen & bathroom cleaning",
        "Window cleaning",
        "Trash removal"
      ]
    },
    {
      title: "Commercial Clean",
      items: [
        "Office space cleaning",
        "Restroom sanitization",
        "Floor care & maintenance",
        "Common area cleaning",
        "Customized schedules"
      ]
    },
    {
      title: "Deep Cleaning",
      items: [
        "Detailed surface cleaning",
        "Appliance interior cleaning",
        "Baseboard & trim cleaning",
        "Cabinet cleaning",
        "Light fixture cleaning"
      ]
    }
  ];

  return (
    <section className="py-20 bg-bg-light">
      <div className="max-w-6xl mx-auto px-4">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary font-poppins">
              A Breakdown Of What We Do
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {breakdowns.map((breakdown, index) => (
              <BreakdownCard key={index} {...breakdown} />
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

// Booking Process Component
const BookingProcess = () => {
  const steps = [
    { icon: <FaCalendar />, title: "Schedule", desc: "Choose your preferred date and time" },
    { icon: <FaClipboardList />, title: "Customize", desc: "Select your cleaning services" },
    { icon: <FaBroom />, title: "We Clean", desc: "Our professionals do the work" },
    { icon: <FaThumbsUp />, title: "Confirm", desc: "Receive booking confirmation" },
    { icon: <FaClock />, title: "Preparation", desc: "We prepare for your service" },
    { icon: <FaStar />, title: "Enjoy", desc: "Enjoy your spotless space" }
  ];

  return (
    <section id="process" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary font-poppins">
              How It Works
            </h2>
            <p className="text-text-secondary mt-4">Simple steps to a cleaner space</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            {/* Left Column - Steps 1-3 */}
            <div className="space-y-8">
              {steps.slice(0, 3).map((step, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-xl flex-shrink-0">
                    {index + 1}
                  </div>
                  <div>
                    <h4 className="font-bold text-text-primary mb-1 flex items-center gap-2">
                      <span className="text-primary text-xl">{step.icon}</span>
                      {step.title}
                    </h4>
                    <p className="text-text-secondary text-sm">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Center - Phone Image */}
            <div className="hidden lg:flex justify-center">
              <img src={phoneMockup} alt="Booking App" className="max-w-xs w-full" />
            </div>

            {/* Right Column - Steps 4-6 */}
            <div className="space-y-8">
              {steps.slice(3, 6).map((step, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-xl flex-shrink-0">
                    {index + 4}
                  </div>
                  <div>
                    <h4 className="font-bold text-text-primary mb-1 flex items-center gap-2">
                      <span className="text-primary text-xl">{step.icon}</span>
                      {step.title}
                    </h4>
                    <p className="text-text-secondary text-sm">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

// Our Values Component (Tabs)
const OurValues = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      icon: <FaUsers />,
      title: "Our Customers",
      content: "Our customers are at the heart of everything we do. We listen to your needs, adapt to your preferences, and deliver personalized cleaning solutions that exceed expectations. Your satisfaction is our success."
    },
    {
      icon: <FaShieldAlt />,
      title: "100% Satisfaction Guarantee",
      content: "We're committed to delivering exceptional results every time. If you're not completely satisfied with our service, we'll make it right immediately or provide a full refund. That's our promise to you."
    },
    {
      icon: <FaComments />,
      title: "Communication",
      content: "Clear, open communication is key to our service excellence. We keep you informed every step of the way, respond promptly to your questions, and ensure you always know what to expect from your cleaning service."
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-primary/90" />
      </div>

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white font-poppins mb-4">
              Our Values
            </h2>
            <p className="text-white/90">What sets us apart</p>
          </div>

          {/* Tab Headers */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${
                  activeTab === index
                    ? "bg-white text-primary shadow-lg"
                    : "bg-white/10 text-white hover:bg-white/20"
                }`}
              >
                <span className="text-xl">{tab.icon}</span>
                <span className="hidden sm:inline">{tab.title}</span>
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-lg p-8 shadow-xl"
          >
            <h3 className="text-2xl font-bold mb-4 text-text-primary font-poppins flex items-center gap-3">
              <span className="text-primary text-3xl">{tabs[activeTab].icon}</span>
              {tabs[activeTab].title}
            </h3>
            <p className="text-text-secondary leading-relaxed text-lg">
              {tabs[activeTab].content}
            </p>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
};

// Stats Counter Component
const StatCounter = ({ end, suffix = "", title }: any) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="text-center text-white">
      <div className="text-5xl md:text-6xl font-bold mb-2 font-poppins">
        {isInView && <CountUp end={end} duration={2.5} suffix={suffix} />}
      </div>
      <p className="text-xl text-white/90">{title}</p>
    </div>
  );
};

// Stats Component
const Stats = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img src={statsBg} alt="Stats Background" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-primary/85" />
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <StatCounter end={5000} suffix="+" title="PLACES CLEANED" />
            <StatCounter end={98} suffix="%" title="SATISFACTION RATE" />
            <StatCounter end={15} suffix="+" title="YEARS EXPERIENCE" />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

// Google Guaranteed Component
const GoogleGuaranteed = () => {
  return (
    <section className="py-20 bg-bg-light">
      <div className="max-w-3xl mx-auto px-4">
        <AnimatedSection>
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center">
            <img 
              src={googleGuaranteed} 
              alt="Google Guaranteed" 
              className="w-32 h-32 mx-auto mb-6"
            />
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-text-primary font-poppins">
              Google Guaranteed
            </h2>
            <p className="text-text-secondary mb-6 leading-relaxed">
              We're proud to be Google Guaranteed, which means Google has verified our business and 
              stands behind the quality of our work. Book with confidence knowing you're protected.
            </p>
            <img 
              src={fiveStars} 
              alt="5 Stars" 
              className="w-48 mx-auto mb-6"
            />
            <Button variant="solid">
              SEE MORE REVIEWS <FaStar />
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

// Contact and Map Component
const ContactAndMap = () => {
  const serviceAreas = [
    "Downtown", "North District", "South District", "East Side",
    "West End", "Central Park", "Riverside", "Hillside"
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <AnimatedSection>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left - Contact Info */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-text-primary font-poppins">
                Get In Touch
              </h2>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-xl">
                    <FaPhone />
                  </div>
                  <div>
                    <p className="font-semibold text-text-primary">Phone</p>
                    <a href="tel:+1234567890" className="text-primary hover:underline">(123) 456-7890</a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-xl">
                    <FaEnvelope />
                  </div>
                  <div>
                    <p className="font-semibold text-text-primary">Email</p>
                    <a href="mailto:info@bandclean.com" className="text-primary hover:underline">info@bandclean.com</a>
                  </div>
                </div>
              </div>

              <Button variant="solid" className="mb-8">
                Request a Quote <FaArrowRight />
              </Button>

              <div>
                <h3 className="text-2xl font-bold mb-4 text-text-primary font-poppins flex items-center gap-2">
                  <FaMapMarkerAlt className="text-primary" />
                  Service Areas
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {serviceAreas.map((area, index) => (
                    <div key={index} className="flex items-center gap-2 text-text-secondary">
                      <FaCheckCircle className="text-primary" />
                      <span>{area}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right - Map */}
            <div className="h-[500px] rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095919355!2d-74.00425878459253!3d40.74076684379132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Process", href: "#process" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <footer className="bg-text-primary text-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Column 1 - Logo */}
          <div>
            <img src={logoBandClean} alt="Band Clean" className="h-16 mb-4 brightness-0 invert" />
            <p className="text-white/70">
              Professional cleaning services you can trust. Making spaces shine since 2010.
            </p>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 font-poppins">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-white/70 hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4 font-poppins">Contact Us</h3>
            <div className="space-y-3 mb-6">
              <a href="tel:+1234567890" className="flex items-center gap-2 text-white/70 hover:text-white transition-colors">
                <FaPhone /> (123) 456-7890
              </a>
              <a href="mailto:info@bandclean.com" className="flex items-center gap-2 text-white/70 hover:text-white transition-colors">
                <FaEnvelope /> info@bandclean.com
              </a>
            </div>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary transition-colors flex items-center justify-center">
                <FaFacebookF />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary transition-colors flex items-center justify-center">
                <FaTwitter />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary transition-colors flex items-center justify-center">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-6 text-center text-white/70">
          <p>&copy; {new Date().getFullYear()} Band Clean. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

// Main App Component
const Index = () => {
  return (
    <div className="bg-white">
      <Header />
      <main>
        <Hero />
        <WhyChooseUs />
        <SatisfactionGuarantee />
        <Services />
        <ServiceBreakdown />
        <BookingProcess />
        <OurValues />
        <Stats />
        <GoogleGuaranteed />
        <ContactAndMap />
      </main>
      <Footer />
    </div>
  );
};

export default Index;