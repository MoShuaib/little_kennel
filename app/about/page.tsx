'use client'

import Image from 'next/image'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { CheckCircle2, Heart, Shield, Users, Pill, FileText } from 'lucide-react'

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 sm:py-24 bg-linear-to-b from-secondary to-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center animate-fade-in-up">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
                About Premium Dogs
              </h1>
              <p className="text-lg sm:text-xl text-foreground/80 max-w-3xl mx-auto">
                Dedicated to providing premium quality dogs with comprehensive health care, medication, and support for a lifetime of companionship.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Our Mission */}
              <div className="animate-slide-in-left-3d">
                <h2 className="text-3xl font-bold text-foreground mb-6">Our Mission</h2>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  We are committed to breeding and raising premium quality dogs that are healthy, well-socialized, and ready to become part of your family. Our mission is to connect responsible dog lovers with puppies that have been carefully selected and bred from champion bloodlines.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  Every dog in our care receives the best nutrition, medical attention, and socialization to ensure they grow into well-adjusted, healthy companions.
                </p>
              </div>

              {/* Our Values */}
              <div className="animate-slide-in-right-3d">
                <h2 className="text-3xl font-bold text-foreground mb-6">Our Values</h2>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Heart className="w-6 h-6 text-accent shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Animal Welfare</h3>
                      <p className="text-foreground/80">We prioritize the health and happiness of our dogs above all else</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Users className="w-6 h-6 text-accent shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Transparency</h3>
                      <p className="text-foreground/80">Complete honesty about health, genetics, and background</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Shield className="w-6 h-6 text-accent shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Responsibility</h3>
                      <p className="text-foreground/80">Lifetime support and guidance for dog owners</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Health & Medication */}
        <section className="py-16 sm:py-24 bg-secondary/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 animate-fade-in-up">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Health & Medical Care
              </h2>
              <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
                We provide comprehensive health care and medications to ensure every dog is healthy and ready for their new home.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Vaccinations */}
              <div className="bg-card p-8 rounded-2xl border border-border hover:shadow-lg transition-shadow hover-3d-lift animate-float-3d">
                <Pill className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-4">Vaccinations & Medications</h3>
                <ul className="space-y-3 text-foreground/80">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                    <span>Complete vaccination schedules</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                    <span>Deworming treatments</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                    <span>Flea & tick prevention</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                    <span>Microchipping available</span>
                  </li>
                </ul>
              </div>

              {/* Health Records */}
              <div className="bg-card p-8 rounded-2xl border border-border hover:shadow-lg transition-shadow hover-3d-lift animate-float-3d">
                <FileText className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-4">Health Documentation</h3>
                <ul className="space-y-3 text-foreground/80">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                    <span>Veterinary health certificates</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                    <span>Genetic health testing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                    <span>Complete medical history</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                    <span>Post-purchase support guide</span>
                  </li>
                </ul>
              </div>

              {/* Ongoing Support */}
              <div className="bg-card p-8 rounded-2xl border border-border hover:shadow-lg transition-shadow hover-3d-lift animate-float-3d">
                <Heart className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-4">Lifetime Support</h3>
                <ul className="space-y-3 text-foreground/80">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                    <span>24/7 consultation availability</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                    <span>Feeding & nutrition guidance</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                    <span>Behavioral training support</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                    <span>Emergency medical guidance</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Requirements Section */}
        <section className="py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 animate-fade-in-up">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Ownership Requirements
              </h2>
              <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
                To ensure our dogs go to the best homes, we have specific requirements for responsible ownership.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Buyer Requirements */}
              <div className="bg-card p-8 rounded-2xl border border-border">
                <h3 className="text-2xl font-bold text-foreground mb-6">What We Require</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Age & Maturity</h4>
                      <p className="text-foreground/80 text-sm">Minimum 18 years old with stable lifestyle</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Proper Housing</h4>
                      <p className="text-foreground/80 text-sm">Safe, secure space for the dog with adequate shelter</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Financial Capability</h4>
                      <p className="text-foreground/80 text-sm">Ability to provide proper nutrition and medical care</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Commitment</h4>
                      <p className="text-foreground/80 text-sm">Lifetime commitment to the dog&apos;s wellbeing</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* What We Provide */}
              <div className="bg-card p-8 rounded-2xl border border-border">
                <h3 className="text-2xl font-bold text-foreground mb-6">What We Provide</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Health Guarantee</h4>
                      <p className="text-foreground/80 text-sm">30-day health guarantee with veterinary certification</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Complete Records</h4>
                      <p className="text-foreground/80 text-sm">Full vaccination records and health documentation</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Training Support</h4>
                      <p className="text-foreground/80 text-sm">Basic training guidance and behavioral support</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Lifetime Backup</h4>
                      <p className="text-foreground/80 text-sm">We&apos;re always here if you need help or advice</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 sm:py-24 bg-secondary/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 animate-fade-in-up">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Why Choose Premium Dogs?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center animate-fade-in-up">
                <div className="inline-block w-16 h-16 bg-accent/20 rounded-full  items-center justify-center mb-4">
                  <Shield className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-bold text-foreground mb-2">Verified Health</h3>
                <p className="text-foreground/80 text-sm">All dogs certified healthy by veterinarians</p>
              </div>

              <div className="text-center animate-fade-in-up">
                <div className="inline-block w-16 h-16 bg-accent/20 rounded-full  items-center justify-center mb-4">
                  <Heart className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-bold text-foreground mb-2">Champion Bloodlines</h3>
                <p className="text-foreground/80 text-sm">Carefully selected for genetics and temperament</p>
              </div>

              <div className="text-center animate-fade-in-up">
                <div className="inline-block w-16 h-16 bg-accent/20 rounded-full  items-center justify-center mb-4">
                  <Users className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-bold text-foreground mb-2">Expert Support</h3>
                <p className="text-foreground/80 text-sm">Lifetime guidance from experienced breeders</p>
              </div>

              <div className="text-center animate-fade-in-up">
                <div className="inline-block w-16 h-16 bg-accent/20 rounded-full  items-center justify-center mb-4">
                  <Pill className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-bold text-foreground mb-2">Complete Care</h3>
                <p className="text-foreground/80 text-sm">Medications, vaccines, and health records included</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Ready to Find Your Perfect Companion?
            </h2>
            <p className="text-lg text-foreground/80 mb-8">
              Contact us today to learn more about our available dogs and find your new family member.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/dogs"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-semibold transition-colors"
              >
                Browse Our Dogs
              </a>
              <a
                href="tel:+91XXXXXXXXXX"
                className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 rounded-lg font-semibold transition-colors"
              >
                Call Us Today
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
