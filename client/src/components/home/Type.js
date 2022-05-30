import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
    return (
        <Typewriter
            options={{
                strings: [
                    "I",
                    "Need",
                    "Space",

                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 10,
            }}
        />
    );
}

export default Type;