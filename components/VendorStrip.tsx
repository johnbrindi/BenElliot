export function VendorStrip() {
    const vendors = [
        {
            bg: "url('https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=600&q=70&fit=crop')",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Bosch-brand.svg/200px-Bosch-brand.svg.png",
            alt: "Bosch",
            title: "German Precision",
            sub: "Save on Bosch Appliances"
        },
        {
            bg: "url('https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&q=70&fit=crop')",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/200px-Samsung_Logo.svg.png",
            alt: "Samsung",
            title: "Smart Home",
            sub: "Save on Samsung Appliances"
        },
        {
            bg: "url('https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=600&q=70&fit=crop')",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/LG_logo_%282015%29.svg/200px-LG_logo_%282015%29.svg.png",
            alt: "LG",
            title: "Life's Good",
            sub: "Save on LG Appliances"
        },
        {
            bg: "url('https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=600&q=70&fit=crop')",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Miele_Logo.svg/200px-Miele_Logo.svg.png",
            alt: "Miele",
            title: "Immer Besser",
            sub: "Save on Miele Appliances"
        }
    ];

    return (
        <div className="vendor-strip">
            <div className="vendor-grid">
                {vendors.map((v, i) => (
                    <a href="#" key={i} className="vendor-card">
                        <div
                            className="vendor-card-img"
                            style={{ backgroundImage: v.bg, backgroundSize: "cover", backgroundPosition: "center" }}
                        >
                            <img src={v.logo} alt={v.alt} />
                        </div>
                        <div className="vendor-card-body">
                            <div className="title">{v.title}</div>
                            <div className="sub">{v.sub}</div>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
}
