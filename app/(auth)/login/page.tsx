import { LoginForm } from "@/components/auth/login-form";

export default function LoginPage() {
  return (
    <section className="flex min-h-[calc(100vh-160px)] items-center justify-center px-6 py-12">
      <div className="w-full max-w-md rounded-2xl border border-border bg-surface p-8 shadow-sm">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-foreground">
            Welcome Back
          </h1>

          <p className="mt-2 text-sm text-muted-foreground">
            Sign in to your TeleRadiology account.
          </p>
        </div>

        <LoginForm />
      </div>
    </section>
  );
}