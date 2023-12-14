import React from "react";
import { useParams } from 'react-router-dom';
import Artifact from "../../../components/Artifact";

function MidRenaissance({ data }) {
    let params = useParams().artifact;
    let toDisplay;

    if (params === undefined) {
        toDisplay = <h1>{data.name}</h1>
    } else {
        let artifacts = [];
        data.artifacts.map((artifact) => (artifacts.push(artifact)));

        artifacts.map((artifact) => {
            if (params === "vitruvian-man") {
                toDisplay = <Artifact artifact={artifact["vitruvian-man"]} />;
            } else {
                toDisplay = <Artifact artifact={artifact["the-school-of-athens"]} />;
            }
        });
    }

    return (
        <div>
            {toDisplay}
        </div>
    )
}

export default MidRenaissance;