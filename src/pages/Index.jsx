import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";

const Index = () => {
  const [email, setEmail] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();
    // Handle newsletter signup logic here
    console.log("Signed up with email:", email);
  };

  return (
    <div className="space-y-16">
      {/* Header */}
      <header className="flex justify-between items-center py-6 px-4 md:px-8 bg-gray-900 text-white">
        <h1 className="text-2xl font-bold">News NFT Project</h1>
        <nav className="space-x-4">
          <a href="#home" className="hover:underline">Home</a>
          <a href="#about" className="hover:underline">About</a>
          <a href="#features" className="hover:underline">Features</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="text-center py-20 bg-blue-600 text-white">
        <h2 className="text-4xl font-bold mb-4">Welcome to the Future of News</h2>
        <p className="text-xl mb-8">Discover, collect, and trade news NFTs</p>
        <Button variant="primary" size="lg">Get Started</Button>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 md:px-8">
        <h2 className="text-3xl font-bold text-center mb-8">About News NFT Project</h2>
        <p className="text-lg text-center max-w-3xl mx-auto">
          The News NFT Project is a revolutionary platform that allows users to discover, collect, and trade news articles as NFTs. Our mission is to bring authenticity and ownership to digital news content.
        </p>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-100 px-4 md:px-8">
        <h2 className="text-3xl font-bold text-center mb-8">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Authenticity</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Each news article is verified and authenticated, ensuring the highest level of trust and credibility.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Ownership</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Own a piece of digital history by collecting unique news articles as NFTs.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Trade</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Buy, sell, and trade news NFTs on our secure and user-friendly platform.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section id="contact" className="py-20 px-4 md:px-8">
        <h2 className="text-3xl font-bold text-center mb-8">Stay Updated</h2>
        <form onSubmit={handleSignup} className="max-w-md mx-auto space-y-4">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Button type="submit" variant="primary" size="lg" className="w-full">Sign Up</Button>
        </form>
      </section>

      {/* Footer */}
      <footer className="py-6 px-4 md:px-8 bg-gray-900 text-white text-center">
        <div className="space-x-4">
          <a href="#" className="hover:underline">Twitter</a>
          <a href="#" className="hover:underline">Facebook</a>
          <a href="#" className="hover:underline">Instagram</a>
        </div>
        <p className="mt-4">&copy; 2023 News NFT Project. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;