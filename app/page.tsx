
import Link from "next/link";
import { Card } from "@/components/ui/card";

const services = [
  {
    number: "01",
    title: "Remote Image Interpretation",
    description:
      "Connect healthcare facilities with radiology professionals for remote medical image review.",
  },
  {
    number: "02",
    title: "Radiology Reporting",
    description:
      "Support the preparation and delivery of structured radiology reports through a centralized platform.",
  },
  {
    number: "03",
    title: "Imaging Case Management",
    description:
      "Organize imaging requests and follow their progress from submission to report delivery.",
  },
];

const steps = [
  {
    number: "01",
    title: "Submit an imaging request",
    description:
      "A healthcare facility submits an imaging case through the platform.",
  },
  {
    number: "02",
    title: "Radiologist reviews the case",
    description:
      "An assigned radiology professional reviews the available medical images.",
  },
  {
    number: "03",
    title: "Receive the report",
    description:
      "The completed radiology report is made available to the requesting facility.",
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero section */}
      <section className="relative overflow-hidden bg-muted">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:py-28">

          <div>
            <span className="inline-flex rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              Centralized Teleradiology Platform
            </span>

            <h1 className="mt-6 max-w-2xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Connecting Healthcare Through
              <span className="text-primary"> Remote Radiology</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-muted-foreground">
              TeleRadiology connects healthcare facilities with radiology
              professionals through a centralized platform for imaging
              requests, remote image review, and radiology reporting.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/register"
                className="rounded-lg bg-primary px-6 py-3 font-semibold text-white transition-colors hover:bg-primary-dark"
              >
                Get Started
              </Link>

              <Link
                href="#services"
                className="rounded-lg border border-border bg-surface px-6 py-3 font-semibold text-foreground transition-colors hover:bg-muted"
              >
                Explore Services
              </Link>
            </div>

            <p className="mt-6 text-sm text-muted-foreground">
              A centralized connection between healthcare facilities
              and radiology professionals.
            </p>
          </div>

          {/* Illustrative dashboard preview */}
          <div className="relative">
            <div className="rounded-2xl border border-border bg-surface p-5 shadow-xl sm:p-7">

              <div className="flex items-center justify-between border-b border-border pb-5">
                <div>
                  <p className="text-sm text-muted-foreground">
                    Platform overview
                  </p>
                  <h2 className="mt-1 text-xl font-bold text-foreground">
                    Imaging Workspace
                  </h2>
                </div>

                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                  Preview
                </span>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="rounded-xl bg-muted p-4">
                  <p className="text-sm text-muted-foreground">
                    Imaging requests
                  </p>
                  <p className="mt-2 text-3xl font-bold text-foreground">
                    --
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Request tracking
                  </p>
                </div>

                <div className="rounded-xl bg-muted p-4">
                  <p className="text-sm text-muted-foreground">
                    Radiologists
                  </p>
                  <p className="mt-2 text-3xl font-bold text-foreground">
                    --
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Professional network
                  </p>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="font-semibold text-foreground">
                  Imaging workflow
                </h3>

                <div className="mt-4 space-y-4">
                  {[
                    "Request submission",
                    "Image review",
                    "Report delivery",
                  ].map((item, index) => (
                    <div
                      key={item}
                      className="flex items-center gap-4 rounded-lg border border-border p-3"
                    >
                      <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                        {index + 1}
                      </div>

                      <p className="text-sm font-medium text-foreground">
                        {item}
                      </p>

                      <span className="ml-auto text-xs text-muted-foreground">
                        Step {index + 1}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <p className="mt-5 text-xs text-muted-foreground">
                Illustrative interface preview — not live platform data.
              </p>
            </div>

            <div className="absolute -right-5 -top-5 -z-10 size-32 rounded-full bg-primary/10 blur-2xl" />
          </div>

        </div>
      </section>

      {/* Services section */}
      <section id="services" className="scroll-mt-24 px-6 py-20 lg:py-24">
        <div className="mx-auto max-w-7xl">

          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              Our Services
            </span>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              A centralized approach to radiology services
            </h2>

            <p className="mt-4 leading-7 text-muted-foreground">
              A connected platform designed to coordinate medical imaging
              requests and professional radiology services.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Card
                key={service.number}
                title={service.title}
                description={service.description}
                className="h-full"
              >
                <span className="text-sm font-semibold text-primary">
                  SERVICE {service.number}
                </span>
              </Card>
            ))}
          </div>

        </div>
      </section>

      {/* Workflow section */}
      <section className="bg-muted px-6 py-20 lg:py-24">
        <div className="mx-auto max-w-7xl">

          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              How It Works
            </span>

            <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl">
              From imaging request to report
            </h2>

            <p className="mt-4 leading-7 text-muted-foreground">
              A simple workflow connecting healthcare facilities
              and radiology professionals.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {steps.map((step) => (
              <div
                key={step.number}
                className="rounded-xl border border-border bg-surface p-6"
              >
                <span className="text-3xl font-bold text-primary/40">
                  {step.number}
                </span>

                <h3 className="mt-5 text-lg font-semibold text-foreground">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* About section */}
      <section id="about" className="scroll-mt-24 px-6 py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">

          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              About TeleRadiology
            </span>

            <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl">
              One platform connecting facilities and radiology professionals
            </h2>
          </div>

          <div>
            <p className="leading-8 text-muted-foreground">
              TeleRadiology is designed as a centralized teleradiology
              service provider. Healthcare facilities can submit imaging
              requests, while radiology professionals can access assigned
              cases and prepare reports through a shared digital platform.
            </p>

            <p className="mt-4 leading-8 text-muted-foreground">
              The goal is to create an organized workflow that supports
              communication, case coordination, and access to radiology
              expertise across participating healthcare facilities.
            </p>
          </div>

        </div>
      </section>

      {/* Contact / CTA section */}
      <section
        id="contact"
        className="scroll-mt-24 px-6 pb-20 lg:pb-24"
      >
        <div className="mx-auto max-w-7xl rounded-2xl bg-primary px-6 py-14 text-center sm:px-12 lg:py-16">

          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Be part of a connected radiology network
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-white/80">
            Whether you represent a healthcare facility or work as a
            radiology professional, explore how TeleRadiology can
            connect your work through one platform.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/register"
              className="rounded-lg bg-white px-6 py-3 font-semibold text-primary transition-colors hover:bg-slate-100"
            >
              Get Started
            </Link>

            <Link
              href="mailto:info@teleradiology.com"
              className="rounded-lg border border-white/50 px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10"
            >
              Contact Us
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
}
