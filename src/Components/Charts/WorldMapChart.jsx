import { useState } from "react";
import { Button } from "react-bootstrap";
import { ComposableMap, Geographies, Geography, ZoomableGroup } from "react-simple-maps";

// URL to a TopoJSON file containing the world's geographical data
const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const WorldMapChart = () => {

    const [position, setPosition] = useState({ coordinates: [0, 0], zoom: 1 }); // Initial map position and zoom

    // Handle zooming
    const handleZoomIn = () => {
        if (position.zoom >= 4) return;
        setPosition((prev) => ({ ...prev, zoom: prev.zoom * 1.5 }));
    };

    const handleZoomOut = () => {
        if (position.zoom <= 1) return;
        setPosition((prev) => ({ ...prev, zoom: prev.zoom / 1.5 }));
    };

    const handleMoveEnd = (position) => {
        setPosition(position);
    };

    return (
        <div style={{ position: "relative", width: "100%", height: "400px" }}>
            {/* Zoom Buttons */}
            <div style={{ position: "absolute", top: 10, left: 0, zIndex: 1000 }}>
                <Button className="bg-dark border-secondary rounded-0 p-0 px-1 mb-2 zoom" onClick={handleZoomIn}><i className="bi bi-plus"></i></Button>
                <br />
                <Button className="bg-dark border-secondary rounded-0 p-0 px-1 zoom" onClick={handleZoomOut}><i className="bi bi-dash"></i></Button>
            </div>
            <ComposableMap projectionConfig={{ scale: 200, }} style={{ width: "100%", height: "100%", }}>
                <ZoomableGroup center={position.coordinates} zoom={position.zoom} onMoveEnd={handleMoveEnd} >
                    < Geographies geography={geoUrl}>
                        {({ geographies }) =>
                            geographies.map((geo) => (
                                <Geography
                                    key={geo.rsmKey}
                                    geography={geo}
                                    style={{
                                        default: {
                                            fill: "#D6D6DA",
                                            outline: "none",
                                        },
                                        hover: {
                                            fill: "#F53",
                                            outline: "none",
                                        },
                                        pressed: {
                                            fill: "#E42",
                                            outline: "none",
                                        },
                                    }}
                                />
                            ))
                        }
                    </Geographies>
                </ZoomableGroup>
            </ComposableMap>
        </div >
    );
};

export default WorldMapChart;