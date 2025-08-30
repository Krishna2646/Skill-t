// app/page.tsx (Next.js 13+ App Router)

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Code2, BookOpen, Rocket } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-950 to-gray-900 text-white px-6">
      
      {/* Hero Section */}
      <section className="text-center max-w-3xl">
        <h1 className="text-5xl font-bold mb-4">
          Welcome to <span className="text-purple-400">Skill!t</span>
        </h1>
        <p className="text-lg text-gray-300 mb-6">
          Your AI-powered personal coach for learning <span className="text-purple-300">CSE & beyond</span>.  
          Learn faster, build smarter, and never get stuck.
        </p>
        <Button className="bg-purple-500 hover:bg-purple-600 rounded-2xl px-6 py-3 text-lg">
          Start Learning Now
        </Button>
      </section>

      {/* Features */}
      <section className="grid md:grid-cols-3 gap-6 mt-16 w-full max-w-5xl">
        <Card className="bg-gray-800 border-none shadow-lg rounded-2xl">
          <CardContent className="flex flex-col items-center p-6">
            <Code2 className="w-10 h-10 text-purple-400 mb-3" />
            <h2 className="text-xl font-semibold">Code Canvas</h2>
            <p className="text-gray-400 text-center">
              Test, run, and debug your code in real-time with no setup.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gray-800 border-none shadow-lg rounded-2xl">
          <CardContent className="flex flex-col items-center p-6">
            <BookOpen className="w-10 h-10 text-purple-400 mb-3" />
            <h2 className="text-xl font-semibold">Smart Syllabus</h2>
            <p className="text-gray-400 text-center">
              Learn CSE topics in structured steps with curated free resources.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gray-800 border-none shadow-lg rounded-2xl">
          <CardContent className="flex flex-col items-center p-6">
            <Rocket className="w-10 h-10 text-purple-400 mb-3" />
            <h2 className="text-xl font-semibold">Hackathon Ready</h2>
            <p className="text-gray-400 text-center">
              Build MVPs, test APIs, and ship faster than ever.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="mt-20 text-gray-500 text-sm">
        🚀 Built with ❤️ by <span className="text-purple-400">Krishna2646</span>
      </footer>
    </main>
  );
}
