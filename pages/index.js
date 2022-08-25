import { useEffect, useState } from "react";
import DesktopLayout from "./DesktopLayout";
import MobileLayout from "./MobileLayout";

export default function Home() {
  const [windowSize, setWindowSize] = useState(null);

  useEffect(() => {
    setWindowSize(window.innerWidth)
  }, []);

  if (windowSize <= 500) return <MobileLayout />
  if (windowSize => 501) return <DesktopLayout /> //*Inspired by windows 10
}