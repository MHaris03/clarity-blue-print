import Hero from "../components/Hero";
import BenefitsSection from "./Benefits";
import AIClarityCoachPage from "./Coach";
import CtaButton from "./CtaButton";
import PlatformEcosystem from "./EcoSystem";
import HeroSection from "./Herosection";
import HowItWorks from "./HowItWorks";
import HowWorks from "./HowWorks";
import Problem from "./Problem";
import Receive from "./Receive";
import ReflectionSection from "./ReflectionSection";
import Social from "./Social";
import Transformation from "./Transformation";
import WhoThis from "./WhoThis";

export default function Home() {
    return (
        <>
            <Hero />
            <Problem />
            <Transformation />
            <HowItWorks />
            {/* <Receive/> */}
            <HowWorks />
            <PlatformEcosystem/>
            <BenefitsSection/>
            <AIClarityCoachPage/>
            {/* <WhoThis /> */}
            {/* <Social /> */}
            {/* <ReflectionSection /> */}
            <CtaButton />
            {/* <HeroSection/> */}
        </>
    );
}