import Hero from "../components/Hero";
import CtaButton from "./CtaButton";
import HeroSection from "./Herosection";
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
            <Transformation />
            <Problem />
            {/* <Receive/> */}
            <WhoThis />
            <HowWorks />
            <Social />
            <ReflectionSection />
            <CtaButton />
            {/* <HeroSection/> */}
        </>
    );
}