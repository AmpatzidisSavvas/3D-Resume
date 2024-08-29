import { Scroll, useScroll } from "@react-three/drei"
import { Section } from "./Section"
import { useState } from "react";
import { useFrame } from "@react-three/fiber";

export const Overlay = () => {


    const scroll = useScroll();
    const [opacityFirstSection, setOpacityFirstSection] = useState(1);
    const [opacitySecondSection, setOpacitySecondSection] = useState(1);
    const [opacityLastSection, setOpacityLastSection] = useState(1);

    useFrame(() => {
      setOpacityFirstSection(1 - scroll.range(0, 1 / 3));
      setOpacitySecondSection(scroll.curve(1 / 3, 1 / 3));
      setOpacityLastSection(scroll.range(2 / 3, 1 / 3));
    });

    return (
      <Scroll html>
        <div className="w-screen">
          <Section opacity={opacityFirstSection}>
            <h1 className="font-serif font-bold text-3xl text-center text-gray-800 mb-4">
              About
            </h1>
            <h2>
              My name is Savvas Ampatzidis and I am a self-taught software
              developer and multidisciplinary designer with an unwavering
              passion for art, animation, video games, and programming. From an
              early age, I discovered my innate love for artistic expression and
              the limitless possibilities that technology offers.
            </h2>
            <p className="animate-bounce mt-6">Press ↓</p>
          </Section>
          <Section right opacity={opacitySecondSection}>
            <div className="mt-2 px-6">
              <h1 className="font-serif font-bold text-3xl text-center text-gray-800 mb-4">
                My skillset <span className="animate-bounce">🔥</span>
              </h1>

              <div className="mt-6">
                <h2 className="font-semibold text-xl text-gray-700 mb-2 flex items-center">
                  <span className="text-2xl mr-2"></span>Programming Languages /
                  Frameworks
                </h2>
                <ul className="grid grid-cols-2 gap-2 text-gray-600">
                  <li>☕ Java</li>
                  <li>📜 JavaScript</li>
                  <li>🐍 Python</li>
                  <li>🔷 TypeScript</li>
                  <li>⚛️ ReactJS</li>
                  <li>🅰️ AngularJS</li>
                </ul>
              </div>

              <div className="mt-6">
                <h2 className="font-semibold text-xl text-gray-700 mb-2 flex items-center">
                  <span className="text-2xl mr-2"></span>Professional Skills
                </h2>
                <ul className="grid grid-cols-2 gap-2 text-gray-600">
                  <li>🎨 Blender3D</li>
                  <li>🖌️ PhotoShop</li>
                  <li>🖼️ Figma</li>
                  <li>🐙 GitHub</li>
                </ul>
              </div>

              <p className="text-center mt-8 text-lg text-gray-800 animate-bounce">
                Press ↓
              </p>
            </div>
          </Section>
          <Section opacity={opacityLastSection}>
            <div className="mt-2 px-6">
              <h1 className="font-serif font-bold text-3xl text-center text-gray-800 mb-4">
                Contact
              </h1>

              <div className="flex flex-col mt-3 items-center">
                <ul className="leading-10 text-lg text-gray-700 space-y-4">
                  <li className="flex items-center">
                    <span className="text-2xl mr-3">📨</span>
                    <a
                      href="mailto:savvas.ampa@gmail.com"
                      className="hover:text-blue-500 transition duration-300"
                    >
                      savvas.ampa@gmail.com
                    </a>
                  </li>
                  <li className="flex items-center">
                    <span className="text-2xl mr-3">🔗</span>
                    <a
                      href="https://www.linkedin.com/in/savvas-ampatzidis/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-blue-500 transition duration-300"
                    >
                      LinkedIn
                    </a>
                  </li>
                  <li className="flex items-center">
                    <span className="text-2xl mr-3">💻</span>
                    <a
                      href="https://github.com/AmpatzidisSavvas"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-blue-500 transition duration-300"
                    >
                      GitHub
                    </a>
                  </li>
                  <li className="flex items-center">
                    <span className="text-2xl mr-3">🎥</span>
                    <a
                      href="https://vimeo.com/user85100118"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-blue-500 transition duration-300"
                    >
                      3D Portfolio
                    </a>
                  </li>
                </ul>
                <p className="text-center mt-8 text-lg text-gray-800 animate-bounce">
                  Press ↑
                </p>
              </div>
            </div>
          </Section>
        </div>
      </Scroll>
    );
}