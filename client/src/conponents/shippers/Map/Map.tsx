"use client";
import { MapContainer, TileLayer, Marker, Polyline, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";
import L from "leaflet";
import openrouteservice from "openrouteservice-js";

// SVG як кастомна іконка
const carIcon = new L.DivIcon({
    html: '<img src="/images/cars/dark/Container%20Truck%20DARK%20Top.png" style="width: 15px; transition: transform 2s ease-in-out;"/>',
    className: "",
    iconSize: [40, 40],
    iconAnchor: [20, 20],
});

const calculateBearing = (start, end) => {
    const startLat = (Math.PI * start[0]) / 180;
    const startLng = (Math.PI * start[1]) / 180;
    const endLat = (Math.PI * end[0]) / 180;
    const endLng = (Math.PI * end[1]) / 180;

    const dLng = endLng - startLng;

    const x = Math.sin(dLng) * Math.cos(endLat);
    const y = Math.cos(startLat) * Math.sin(endLat) - Math.sin(startLat) * Math.cos(endLat) * Math.cos(dLng);

    const bearing = (Math.atan2(x, y) * 180) / Math.PI;
    return (bearing + 360) % 360;
};

const MapModule = () => {
    const [position, setPosition] = useState([48.3794, 31.1656]);
    const [route, setRoute] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [bearing, setBearing] = useState(0);

    useEffect(() => {
        const client = new openrouteservice.Directions({
            api_key: process.env.NEXT_PUBLIC_OPENROUTESERVICE,
        });

        client
            .calculate({
                coordinates: [
                    [31.1656, 48.3794], // Початкова точка
                    [30.5234, 50.4501], // Кінцева точка (Київ)
                ],
                profile: "driving-car",
                format: "geojson",
            })
            .then((response) => {
                const coords = response.features[0].geometry.coordinates;
                setRoute(coords);
                setPosition([coords[0][1], coords[0][0]]);
            })
            .catch((err) => {
                console.error(err);
            });
    }, []);

    useEffect(() => {
        if (route.length > 0 && currentIndex < route.length) {
            const interval = setInterval(() => {
                setCurrentIndex((prevIndex) => {
                    const newIndex = prevIndex + 1;
                    if (newIndex >= route.length) {
                        clearInterval(interval);
                        return prevIndex;
                    }
                    const nextPosition = [route[newIndex][1], route[newIndex][0]];
                    const newBearing = calculateBearing(position, nextPosition);
                    setPosition(nextPosition);
                    setBearing(newBearing);
                    return newIndex;
                });
            }, 1500);

            return () => clearInterval(interval);
        }
    }, [route, currentIndex]);

    return (
        <MapContainer
            center={position}
            zoom={7}
            zoomControl={false}
            style={{ height: "100%", width: "100%", borderRadius: "10px" }}
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> contributors'
            />

            <Marker
                position={position}
                icon={L.divIcon({
                    html: `<img src="/images/cars/dark/Container%20Truck%20DARK%20Top.png" style="width: 15px; transform: rotate(${bearing}deg); transition: transform 0.5s ease-in-out;"/>`,
                    className: "",
                    iconSize: [40, 40],
                    iconAnchor: [20, 20],
                })}
            />
            {route.length > 0 && (
                <Polyline
                    positions={route.map((coord) => [coord[1], coord[0]])}
                    color="#0A84FF"
                />
            )}
        </MapContainer>
    );
};

export default MapModule;