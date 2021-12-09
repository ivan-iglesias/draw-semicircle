const DEG_TO_RAD = Math.PI / 180;
const NUMBER_OF_POINTS = 15;

function getStartAngle(azimuth, bw) {
    return (azimuth - bw / 2) * DEG_TO_RAD;
};

function getStopAngle(azimuth, bw) {
    return (azimuth + bw / 2)* DEG_TO_RAD;
};

function getPoints(lat, lng, azimuth, bw) {
    console.log(lat, lng, azimuth, bw)
    const radiusKm = 0.3;
    const startAngle = getStartAngle(azimuth, bw);
    const stopAngle = getStopAngle(azimuth, bw);
    const radiusLat = 1 / 110.574 * radiusKm;
    const radiusLon = 1 / (111.319 * Math.cos(lat * DEG_TO_RAD)) * radiusKm;

    const angleIncremental = (stopAngle - startAngle) / NUMBER_OF_POINTS;
    let angle = startAngle;
    let points = [[lat, lng]];

    for (let i = 0; i <= NUMBER_OF_POINTS; i++) {
        points.push([
            lat + radiusLat * Math.sin(angle),
            lng + radiusLon * Math.cos(angle)
        ]);

        angle += angleIncremental;
    }

    return points;
}
