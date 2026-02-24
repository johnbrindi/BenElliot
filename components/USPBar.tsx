"use client";

import React from "react";

const USPs = [
    "✦ Premium Refurbished Appliances by Ben Elliott's",
    "✦ Free Delivery on Orders Over £200",
    "✦ 12-Month Warranty on Every Appliance",
    "✦ Pay in 4 interest-free payments with Clearpay",
];

export function USPBar() {
    return (
        <div className="usp-bar">
            <div className="usp-track">
                {Array(4)
                    .fill(USPs)
                    .flat()
                    .map((usp, index) => (
                        <span key={index}>{usp}</span>
                    ))}
            </div>
        </div>
    );
}
