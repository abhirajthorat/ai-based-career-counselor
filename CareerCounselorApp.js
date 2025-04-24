import React, { useState } from "react";
import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";
import { Textarea } from "./components/ui/textarea";
import { motion } from "framer-motion";

export default function CareerCounselorApp() {
  const [userInput, setUserInput] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAnalyze = async () => {
    setLoading(true);
    setTimeout(() => {
      const simulatedResponse =
        "Based on your interests in technology and creativity, you might enjoy careers in software development, UX/UI design, or digital marketing.";
      setResponse(simulatedResponse);
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <motion.h1
        className="text-3xl font-bold mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        AI Career Counseling Tool
      </motion.h1>

      <Card className="mb-4">
        <CardContent className="p-4">
          <label className="block mb-2 font-semibold">Describe your interests, skills, and goals:</label>
          <Textarea
            placeholder="e.g., I enjoy solving problems, love working with computers, and want to make an impact in the world."
            rows={6}
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
          />
          <Button onClick={handleAnalyze} className="mt-4" disabled={loading}>
            {loading ? "Analyzing..." : "Get Career Advice"}
          </Button>
        </CardContent>
      </Card>

      {response && (
        <Card>
          <CardContent className="p-4">
            <h2 className="text-xl font-semibold mb-2">Suggested Career Paths</h2>
            <p>{response}</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
