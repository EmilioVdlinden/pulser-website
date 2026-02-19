import FaqSection from "@/sections/faq-section";
import HowItWorksSection from "@/sections/how-it-works-section";
import MeetPulseSection from "@/sections/meet-pulse-section";
import HirePulsySection from "@/sections/hire-pulsy-section";
import FeatureSection from "@/sections/feature-section";
import HeroSection from "@/sections/hero-section";
import CTA from "@/sections/CTA-section";
import BeforeAfterSection from "@/sections/before-after-section";
export default function Page() {
    return (
        <main>
            <HeroSection />
            <HowItWorksSection/>
            <MeetPulseSection/>
            <FeatureSection />
            <HirePulsySection/>
            <FaqSection />
            <CTA/>
            
            {/*
            <HirePulsySection/>
            <FeaturesSection />
            <OurTeamSection />
            <PricingSection />
            <TestimonialSection />
             */}
        </main>
    );
}