import React from "react";
import { useParams } from 'react-router-dom';
import Artifact from "../../../components/Artifact";

function LateRenaissance({ data }) {
    let params = useParams().artifact;
    let toDisplay;

    if (params === undefined) {
        toDisplay = <h1>{data.name}</h1>
    } else {
        let artifacts = [];
        data.artifacts.map((artifact) => (artifacts.push(artifact)));

        artifacts.map((artifact) => {
            if (params === "bacchus-and-ariadne") {
                toDisplay = <Artifact artifact={artifact["bacchus-and-ariadne"]} />;
            } else if (params === "the-harvesters") {
                toDisplay = <Artifact artifact={artifact["the-harvesters"]} />;
            } else {
                toDisplay = <Artifact artifact={artifact["the-calling-of-saint-matthew"]} />;
            }
        });
    }

    return (
        <div>
            {toDisplay}
        </div>
    )
}

export default LateRenaissance;