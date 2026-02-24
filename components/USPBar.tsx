export function USPBar() {
    const usps = [
        "✦ Premium Refurbished Washing Machines by Ben Elliott's",
        "✦ Free Delivery on Orders Over £200",
        "✦ 12-Month Warranty on Every Appliance",
        "✦ Pay in 4 interest-free payments with Clearpay",
        "✦ Premium Refurbished Washing Machines by Ben Elliott's",
        "✦ Free Delivery on Orders Over £200",
        "✦ 12-Month Warranty on Every Appliance",
        "✦ Pay in 4 interest-free payments with Clearpay",
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
