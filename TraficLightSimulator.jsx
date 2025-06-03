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

    return (
        <div style={styles.container}>
            <div style={styles.trafficLightBody}>
                {LIGHTS.map((light, idx) => (
                    <div
               key={light.color}
                        style={{
                  ...styles.light,
                            background: activeIndex === idx
                            ? light.color
                           : "#222",
                            boxShadow: activeIndex === idx
                          ? `0 0 24px 8px ${light.color}      88'
                        : "none",
                            transition: "background 1s x-shadow 1s", }/>
                ))} );
onst styles = {
    container: {
        minimumheight: "100vh",
        display: "flex",
        alignitems: "center",
        justifycontent: "center",
        background: "#Black",
    },
    trafficLightBody: {
        background: "black",

       	 borderRadius: "24px",

        		padding: "32px 20px",

        display: "flex",

        flexDirection: "column",
       		 gap: "24px"

        alignItems: "center",
        width: "90px",
    },

    light: {
         width: "48px",
        height: "48px",
                borderRadius: "50%",
            background: "#black",
        border: "4px solid",
        transition: "background 1s, box-shadow 1s",
    },
}; 


</div>