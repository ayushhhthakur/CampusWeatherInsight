import React, { useEffect } from 'react';
import "../styles/About.css";
import '../styles/GlobalStyles.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const ComingSoon = () => {
    useEffect(() => {
        function updateCountdown() {
            const currentDate = new Date();
            const launchDate = new Date("2023-11-31T00:00:00");
            const timeDifference = launchDate - currentDate;

            const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

            document.getElementById("days").innerText = days.toString().padStart(2, '0');
            document.getElementById("hours").innerText = hours.toString().padStart(2, '0');
            document.getElementById("minutes").innerText = minutes.toString().padStart(2, '0');
            document.getElementById("seconds").innerText = seconds.toString().padStart(2, '0');
        }

        const countdownInterval = setInterval(updateCountdown, 1000);

        // Clean up interval on component unmount
        return () => clearInterval(countdownInterval);
    }, []); // Empty dependency array ensures the effect runs only once on mount

    return (
        <div className='main-content'>
            <div className="container text-center">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="display-4">Coming Soon</h1>
                        <p>We're working on something awesome! Stay tuned.</p>
                        <div className="countdown">
                            <div className="countdown-item">
                                <span id="days" className="countdown-number">00</span>
                                <span className="countdown-label">Days</span>
                            </div>
                            <div className="countdown-item">
                                <span id="hours" className="countdown-number">00</span>
                                <span className="countdown-label">Hours</span>
                            </div>
                            <div className="countdown-item">
                                <span id="minutes" className="countdown-number">00</span>
                                <span className="countdown-label">Minutes</span>
                            </div>
                            <div className="countdown-item">
                                <span id="seconds" className="countdown-number">00</span>
                                <span className="countdown-label">Seconds</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ComingSoon;
