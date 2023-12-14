import React from "react";
import { useParams } from 'react-router-dom';
import Artifact from "../../../components/Artifact";

function HighRenaissance({ data }) {
    let params = useParams().artifact;
    let toDisplay;

    if (params === undefined) {
        toDisplay = <h1>{data.name}</h1>
    } else {
        let artifacts = [];
        data.artifacts.map((artifact) => (artifacts.push(artifact)));

        artifacts.map((artifact) => {
            if (params === "assumption-of-the-virgin") {
                toDisplay = <Artifact artifact={artifact["assumption-of-the-virgin"]} />;
            } else {
                toDisplay = <Artifact artifact={artifact["mona-lisa"]} />;
            }
        });
    }

    return (
        <div>
            {toDisplay}
        </div>
    )
}

export default HighRenaissance;