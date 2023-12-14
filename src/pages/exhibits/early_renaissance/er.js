import React from "react";
import { useParams } from 'react-router-dom';
import Artifact from "../../../components/Artifact";

function EarlyRenaissance({ data }) {
    let params = useParams().artifact;
    let toDisplay;

    if (params === undefined) {
        toDisplay = <h1>{data.name}</h1>
    } else {
        let artifacts = [];
        data.artifacts.map((artifact) => (artifacts.push(artifact)));

        artifacts.map((artifact) => {
            if (params === "the-holy-trinity") {
                toDisplay = <Artifact artifact={artifact["the-holy-trinity"]} />;
            } else {
                toDisplay = <Artifact artifact={artifact["self-portrait"]} />;
            }
        });
    }

    return (
        <div>
            {toDisplay}
        </div>
    )
}

export default EarlyRenaissance;