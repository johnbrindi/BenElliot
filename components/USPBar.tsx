export function USPBar() {
    const usps = [
        "✦ Premium brand new luxury appliances by Ben Elliott's",
        "✦ Free Delivery on Orders Over $400",
        "✦ 12-Month Warranty on Every Appliance",
        "✦ Pay in interest-free payments with available plans",
        "✦ Premium brand new luxury appliances by Ben Elliott's",
        "✦ Free Delivery on Orders Over $400",
        "✦ 12-Month Warranty on Every Appliance",
        "✦ Pay in interest-free payments with available plans",
    ];

    return (
        <div className="usp-bar">
            <div className="usp-track">
                {usps.map((usp, i) => (
                    <span key={i}>{usp}</span>
                ))}
            </div>
        </div>
    );
}
