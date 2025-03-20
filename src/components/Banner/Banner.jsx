"use client";

import React, { useState, useEffect } from "react";
import { Rocket, Flame } from "lucide-react";
import Image from "next/image";
import "./Banner.scss";
import { useRouter } from "next/navigation";

const technologies = [
  "PWAs",
  "WebAssembly",
  "Micro Frontends",
  "Animations",
  "VUI's",
];

export default function Banner() {
  const [currentTech, setCurrentTech] = useState(0);

  const router = useRouter();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTech((prev) => (prev + 1) % technologies.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="banner">
      <div className="banner-gradient"></div>

      <div className="banner-container">
        <div className="banner-content">
          <div className="banner-text">
            <h1 className="banner-title">Mastering Modern Frontend</h1>

            <div className="banner-tech">
              Currently Exploring: {technologies[currentTech]}
            </div>

            <p className="banner-description">
              Take your frontend skills to the next level with in-depth
              tutorials, hands-on examples, and interactive playgrounds. Explore
              cutting-edge web technologies!
            </p>

            <div className="banner-buttons">
              <button
                className="button button-primary"
                onClick={() => router.push("/docs")}
              >
                <Rocket size={20} />
                Start Learning
              </button>
              <button className="button button-secondary">
                <Flame size={20} />
                Explore Demos
              </button>
            </div>
          </div>

          <div className="banner-image">
            <div className="image-container">
              <Image
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
                alt="Developer working"
                className="banner-img"
                width={500}
                height={500}
                priority
              />
              <div className="floating-element float-1"></div>
              <div className="floating-element float-2"></div>
              <div className="floating-element float-3"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
