import React, { useEffect, useState } from "react";

const LIGHTS = [
          { color: "red"},
    { color: "yellow" },
      { color: "green"},         ];


const LIGHT_DURATION = 3000;

export default function    TrafficLightSimulations() {
    const [activeIndex, setActiveIndex] = useState(0);

    
export default function    TrafficLightSimulations() {
    const [activeIndex,    setactiveindex]= useState(0);

    useEffect(() => {
        const timer = settimeout(() => {
            setactiveindex((prev) => (prev + 1) % LIGHTS.length); }, LIGHT_DURATION);



            
        return () => cleartimeout(timer);



    };