import './Monitor.css';
import Car from '../../vehicles/car/Car';

const trafficLights = [
    { className: "traffic-light-north", idPrefix: "north" },
    { className: "traffic-light-south", idPrefix: "south" },
    { className: "traffic-light-east", idPrefix: "east" },
    { className: "traffic-light-west", idPrefix: "west" }
];

const crosswalks = [
    { className: "crosswalk-top" },
    { className: "crosswalk-bottom" },
    { className: "crosswalk-left" },
    { className: "crosswalk-right" }
];

function Monitor() {
    return (
        <div className="intersection">
            <div className="road road-horizontal"></div>
            <div className="road road-vertical"></div>

            <div className="lane-divider-horizontal-left"></div>
            <div className="lane-divider-horizontal-right"></div>
            <div className="lane-divider-vertical-top"></div>
            <div className="lane-divider-vertical-bottom"></div>

            {crosswalks.map((walk, index) => (
                <div key={index} className={walk.className}>
                    {[...Array(6)].map((_, i) => (
                        <div key={i} className="crosswalk-stripe"></div>
                    ))}
                </div>
            ))}

            {trafficLights.map(({ className, idPrefix }) => (
                <div key={idPrefix} className={`traffic-light ${className}`}>
                    {['red', 'yellow', 'green'].map(color => (
                        <div key={color} className="light" id={`${idPrefix}-${color}`}></div>
                    ))}
                </div>
            ))}

            <Car/>
        </div>
    );
}

export default Monitor;
