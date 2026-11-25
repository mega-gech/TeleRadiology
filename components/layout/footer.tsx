
import Link from "next/link";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Contact", href: "/#contact" },
];

const serviceLinks = [
  { label: "Remote Radiology", href: "/#services" },
  { label: "Imaging Review", href: "/#services" },
  { label: "Medical Reporting", href: "/#services" },
];

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border bg-surface">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 sm:grid-cols-2 lg:grid-cols-4">

        {/* Brand */}
        <div>
          <Link href="/" className="text-xl font-bold text-primary">
            TeleRadiology
          </Link>

          <p className="mt-4 max-w-xs text-sm leading-6 text-muted-foreground">
            Connecting healthcare facilities with radiology professionals
            through accessible and reliable remote medical imaging services.
          </p>
        </div>

        {/* Quick links */}
        <div>
          <h3 className="font-semibold text-foreground">
            Quick Links
          </h3>

          <ul className="mt-4 space-y-3">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-semibold text-foreground">
            Our Services
          </h3>

          <ul className="mt-4 space-y-3">
            {serviceLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold text-foreground">
            Contact Us
          </h3>

          <div className="mt-4 space-y-3 text-sm text-muted-foreground">
            <p>Email: info@teleradiology.com</p>
            <p>Phone: +251 900 000 000</p>
            <p>Addis Ababa, Ethiopia</p>
          </div>
        </div>

      </div>

      {/* Copyright */}
      <div className="border-t border-border px-6 py-5 text-center">
        <p className="text-sm text-muted-foreground">
          © 2026 TeleRadiology. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
