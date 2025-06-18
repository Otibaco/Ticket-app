"use client";
import { useState, ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { CreditCard, Mail, Lock, Eye, EyeOff, User } from "lucide-react";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface LoginData {
  email: string;
  password: string;
}

interface RegisterData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const Signin = () => {
  const [loginData, setLoginData] = useState<LoginData>({ email: "", password: "" });
  const [registerData, setRegisterData] = useState<RegisterData>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  // Login handler
  async function handleLoginSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(loginData),
      });
      const data = await res.json();
      setIsLoading(false);

      if (!res.ok) {
        setError(data.error || "Login failed.");
        toast.error(data.error || "Login failed.");
        return;
      }

      toast.success("Login successful!");
      router.push("/dashboard");
    } catch (err) {
      setIsLoading(false);
      setError("Login failed.");
      toast.error("Login failed.");
    }
  }

  // Register handler
  async function handleRegisterSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    if (registerData.password !== registerData.confirmPassword) {
      setError("Passwords do not match.");
      toast.error("Passwords do not match.");
      return;
    }
    setIsLoading(true);

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: registerData.name,
          email: registerData.email,
          password: registerData.password,
        }),
      });

      const data = await res.json();
      setIsLoading(false);

      if (!res.ok) {
        setError(data.error || "Registration failed.");
        toast.error(data.error || "Registration failed.");
        return;
      }

      toast.success("Registration successful! You can now log in.");
      setRegisterData({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (err) {
      setError("Registration failed.");
      toast.error("Registration failed.");
      setIsLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-sky-50 to-sky-100 p-4">
      <div className="w-full max-w-md flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="w-full"
        >
          {/* Mobile Header */}
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-gradient-to-b from-yellow-300 to-yellow-500 rounded-2xl flex items-center justify-center shadow-xl">
                <CreditCard className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-3xl font-bold bg-gradient-to-b from-yellow-300 to-yellow-500 bg-clip-text text-transparent">
              DOGSTAR
            </h1>
            {/* <p className="text-slate-600">Digital Banking Revolution</p> */}
          </div>

          <Card className="border-none shadow-2xl bg-white/80 backdrop-blur-xl">
            <Tabs defaultValue="login" className={undefined}>
              <CardHeader className="space-y-4">
                <TabsList className="grid grid-cols-2 w-full bg-sky-50 border border-sky-100">
                  <TabsTrigger
                    id="login-tab"
                    value="login"
                    className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-yellow-500 data-[state=active]:to-yellow-600 data-[state=active]:text-white"
                  >
                    Login
                  </TabsTrigger>
                  <TabsTrigger
                    value="register"
                    className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-yellow-500 data-[state=active]:to-yellow-600 data-[state=active]:text-white"
                  >
                    Register
                  </TabsTrigger>
                </TabsList>
              </CardHeader>

              <CardContent className={undefined}>
                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-red-50 border border-red-200 text-red-600 p-3 rounded-xl mb-4 text-sm"
                  >
                    {error}
                  </motion.div>
                )}

                <TabsContent value="login" className={undefined}>
                  <form onSubmit={handleLoginSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-slate-700">
                        Email
                      </Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <Input
                          id="email"
                          type="email"
                          placeholder="name@example.com"
                          value={loginData.email}
                          onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            setLoginData({ ...loginData, email: e.target.value })
                          }
                          className="pl-10 border-sky-200 focus:border-yellow-500 focus:ring-yellow-500"
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="password" className="text-slate-700">
                          Password
                        </Label>
                        <Link
                          href="/forgot-password"
                          className="text-xs text-yellow-600 hover:text-yellow-700 hover:underline"
                        >
                          Forgot password?
                        </Link>
                      </div>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <Input
                          id="password"
                          type={showPassword ? "text" : "password"}
                          placeholder="••••••••"
                          value={loginData.password}
                          onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            setLoginData({ ...loginData, password: e.target.value })
                          }
                          className="pl-10 pr-10 border-sky-200 focus:border-sky-500 focus:ring-sky-500"
                          required
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? (
                            <EyeOff className="w-4 h-4 text-slate-400" />
                          ) : (
                            <Eye className="w-4 h-4 text-slate-400" />
                          )}
                        </Button>
                      </div>
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white shadow-lg"
                      disabled={isLoading} variant={undefined} size={undefined}                    >
                      {isLoading ? "Logging in..." : "Login"}
                    </Button>
                  </form>
                </TabsContent>

                <TabsContent value="register" className={undefined}>
                  <form onSubmit={handleRegisterSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-slate-700">
                        Full Name
                      </Label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <Input
                          id="name"
                          placeholder="John Doe"
                          value={registerData.name}
                          onChange={(e: ChangeEvent<HTMLInputElement>) => setRegisterData({ ...registerData, name: e.target.value })}
                          className="pl-10 border-yellow-200 focus:border-yellow-500 focus:ring-yellow-500"
                          required type={undefined}                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="register-email" className="text-slate-700">
                        Email
                      </Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <Input
                          id="register-email"
                          type="email"
                          placeholder="name@example.com"
                          value={registerData.email}
                          onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            setRegisterData({ ...registerData, email: e.target.value })
                          }
                          className="pl-10 border-yellow-200 focus:border-yellow-500 focus:ring-yellow-500"
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="register-password" className="text-slate-700">
                        Password
                      </Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <Input
                          id="register-password"
                          type={showPassword ? "text" : "password"}
                          placeholder="••••••••"
                          value={registerData.password}
                          onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            setRegisterData({ ...registerData, password: e.target.value })
                          }
                          className="pl-10 border-yellow-200 focus:border-yellow-500 focus:ring-yellow-500"
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="confirm-password" className="text-slate-700">
                        Confirm Password
                      </Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <Input
                          id="confirm-password"
                          type={showPassword ? "text" : "password"}
                          placeholder="••••••••"
                          value={registerData.confirmPassword}
                          onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            setRegisterData({ ...registerData, confirmPassword: e.target.value })
                          }
                          className="pl-10 pr-10 border-yellow-200 focus:border-yellow-500 focus:ring-yellow-500"
                          required
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? (
                            <EyeOff className="w-4 h-4 text-slate-400" />
                          ) : (
                            <Eye className="w-4 h-4 text-slate-400" />
                          )}
                        </Button>
                      </div>
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white shadow-lg"
                      disabled={isLoading} variant={undefined} size={undefined}                    >
                      {isLoading ? "Creating Account..." : "Create Account"}
                    </Button>
                  </form>
                </TabsContent>
              </CardContent>

              <CardFooter className="flex justify-center border-t border-sky-100 p-6">
                <div className="text-center text-sm text-slate-600">
                  By continuing, you agree to our{" "}
                  <Link href="#" className="text-yellow-600 hover:text-yellow-700 hover:underline">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link href="#" className="text-yellow-600 hover:text-yellow-700 hover:underline">
                    Privacy Policy
                  </Link>
                </div>
              </CardFooter>
            </Tabs>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Signin;