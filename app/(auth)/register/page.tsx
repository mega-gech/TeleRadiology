import { RegisterForm } from "@/components/auth/register-form";

export default function RegisterPage() {
  return (
    <section className="flex min-h-[calc(100vh-160px)] items-center justify-center px-6 py-12">
      <div className="w-full max-w-xl rounded-2xl border border-border bg-surface p-8 shadow-sm">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-foreground">
            Register Your Facility
          </h1>

          <p className="mt-2 text-sm text-muted-foreground">
            Create an account to submit and manage medical imaging cases.
          </p>
        </div>

        <RegisterForm />
      </div>
    </section>
  );
}