import React from "react";
import { useParams } from 'react-router-dom';
import Artifact from "../../../components/Artifact";

function LateMedieval({ data }) {
    let params = useParams().artifact;
    let toDisplay;

    if (params === undefined) {
        toDisplay = <h1>{data.name}</h1>
    } else {
        let artifacts = [];
        data.artifacts.map((artifact) => (artifacts.push(artifact)));

        artifacts.map((artifact) => {
            if (params === "the-last-judgement") {
                toDisplay = <Artifact artifact={artifact["the-last-judgement"]} />;
            }
        });
    }

    return (
        <div>
            {toDisplay}
        </div>
    )
}

export default LateMedieval;