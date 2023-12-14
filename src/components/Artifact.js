import React from "react";

function Artifact({ artifact }) {
    console.log(artifact)
    return (
        <div className="artifact-page">
            <div className="author-card">
                <img src={artifact.artist.img} alt={artifact.artist.name} />
                <div className="author-information">
                    <h1>{artifact.artist.name}</h1>
                    <h2>{artifact.artist.dates}</h2>
                    {Array.isArray(artifact.artist.period) ? 
                        <h3>
                            {artifact.artist.period[0]}
                            <br />
                            and
                            <br />
                            {artifact.artist.period[1]}
                        </h3>
                        :
                        <h3>{artifact.artist.period}</h3>
                    }
                </div>
            </div>
            {artifact["artist-last"] === "Masaccio" ?
                <div className="artifact-card" style={{bottom: "20px"}}>
                    <img src={artifact.img} alt={artifact.name} />
                    <div className="artifact-information">
                        <h1>{artifact.name}</h1>
                        <h2>{artifact.year}</h2>
                        <h3>{artifact.description}</h3>
                    </div>
                </div>
                :
                <div className="artifact-card">
                    <img src={artifact.img} alt={artifact.name} />
                    <div className="artifact-information">
                        <h1>{artifact.name}</h1>
                        <h2>{artifact.year}</h2>
                        <h3>{artifact.description}</h3>
                    </div>
                </div>
            }
        </div>
    )
}

export default Artifact;