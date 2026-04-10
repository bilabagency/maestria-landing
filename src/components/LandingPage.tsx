"use client";

import type { HeroVariant } from "@/lib/variants";
import Navbar from "./Navbar";
import Hero from "./Hero";
import CredentialBar from "./CredentialBar";
import PainPoints from "./PainPoints";
import Solution from "./Solution";
import VideoSection from "./VideoSection";
import StudyPlan from "./StudyPlan";
import Differentials from "./Differentials";
import TargetAudience from "./TargetAudience";
import Faculty from "./Faculty";
import Testimonials from "./Testimonials";
import Investment from "./Investment";
import FAQ from "./FAQ";
import ContactForm from "./ContactForm";
import Footer from "./Footer";
import Modal from "./Modal";

export default function LandingPage({ variant }: { variant: HeroVariant }) {
  return (
    <>
      <Navbar />
      <main>
        <Hero variant={variant} />
        <CredentialBar />
        <PainPoints />
        <Solution />
        <VideoSection />
        <StudyPlan />
        <Differentials />
        <TargetAudience />
        <Faculty />
        <Testimonials />
        <Investment />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
      <Modal />
    </>
  );
}
