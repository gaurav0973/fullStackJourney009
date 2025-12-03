"use client";
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { Github, Chrome } from "lucide-react";

function LoginPage() {
  const handleGithubSignIn = async () => {
    await authClient.signIn.social({
      provider: "github",
      callbackURL: "/dashboard"
    });
  };

  const handleGoogleSignIn = async () => {
    await authClient.signIn.social({
      provider: "google",
      callbackURL: "/dashboard"
    });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl border border-gray-200">
        <h1 className="text-3xl font-bold mb-1 text-center">Welcome Back</h1>
        <p className="text-center text-gray-600 mb-8">Sign in to continue</p>

        <div className="flex flex-col space-y-4">
          {/* GitHub */}
          <Button
            variant="outline"
            size="lg"
            onClick={handleGithubSignIn}
            className="w-full flex items-center justify-center gap-2 hover:bg-gray-100"
          >
            <Github className="w-5 h-5" />
            <span>Sign in with GitHub</span>
          </Button>

          {/* Google */}
          <Button
            variant="outline"
            size="lg"
            onClick={handleGoogleSignIn}
            className="w-full flex items-center justify-center gap-2 hover:bg-gray-100"
          >
            <Chrome className="w-5 h-5" />
            <span>Sign in with Google</span>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
