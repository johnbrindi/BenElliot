import { USPBar } from "@/components/USPBar";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Shield, Tool, CheckCircle, Clock, Heart, Users, Award } from "lucide-react";

export default function AboutUsPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <USPBar />
            <Header />

            <main className="flex-grow">
                {/* Page Hero */}
                <section className="bg-[#1a1a2e] text-white py-24 relative overflow-hidden">
                    <div className="max-w-[1280px] mx-auto px-8 relative z-10">
                        <h1 className="text-5xl font-bold mb-6">Our Story</h1>
                        <p className="text-xl text-white/70 max-w-2xl leading-relaxed">
                            Redefining appliance shopping through sustainability, quality, and unbeatable value.
                        </p>
                    </div>
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-[#6A0DAD] opacity-20 blur-[120px] -mr-40 -mt-40" />
                </section>

                {/* Content Section */}
                <section className="py-24 bg-white">
                    <div className="max-w-[1280px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-[#1a1a2e] mb-8">Quality You Can Trust</h2>
                            <p className="text-[#4c4c6d] text-lg leading-relaxed mb-6">
                                Ben Elliott&apos;s was founded on a simple belief: high-quality home appliances shouldn&apos;t cost the earth — literally or figuratively. We saw thousands of perfectly good machines heading to landfills every year and decided to do something about it.
                            </p>
                            <p className="text-[#4c4c6d] text-base leading-relaxed mb-6">
                                Our team of expert engineers meticulously restores each appliance, putting them through a rigorous 10-point testing plan that covers everything from internal mechanical components to cosmetic finishing. We don&apos;t just fix machines; we breathe new life into them.
                            </p>
                            <p className="text-[#4c4c6d] text-base leading-relaxed">
                                Today, we&apos;re proud to be a leading name in refurbished appliances, helping thousands of families across the UK save money while making a more sustainable choice for their homes.
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-6">
                            {[
                                { icon: Users, title: "Expert Team", text: "Specialist engineers with years of experience." },
                                { icon: Heart, title: "Customer First", text: "Dedicated support before and after your purchase." },
                                { icon: Award, title: "Certified Quality", text: "Every machine meets our high internal standards." },
                                { icon: CheckCircle, title: "Green Choice", text: "Reducing CO2 and e-waste through restoration." }
                            ].map((item, idx) => (
                                <div key={idx} className="p-8 bg-[#f8f7fc] rounded-2xl border border-[#e8e0f0]">
                                    <item.icon className="w-8 h-8 text-[#6A0DAD] mb-4" />
                                    <h4 className="font-bold text-[#1a1a2e] mb-2">{item.title}</h4>
                                    <p className="text-sm text-[#4c4c6d] leading-relaxed">{item.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Values Banner */}
                <section className="py-20 bg-[#6A0DAD] text-white">
                    <div className="max-w-[1280px] mx-auto px-8 text-center">
                        <h2 className="text-3xl font-bold mb-12">The Ben Elliott Standard</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                            {[
                                { title: "Transparency", text: "No hidden costs. What you see is what you pay, including a full 12-month warranty on every purchase." },
                                { title: "Reliability", text: "We only source premium brands known for their longevity, ensuring your refurbished machine lasts." },
                                { title: "Service", text: "From our workshop to your kitchen, we provide professional delivery and expert installation services." }
                            ].map((value, idx) => (
                                <div key={idx} className="flex flex-col items-center">
                                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center font-bold text-xl mb-6">
                                        {idx + 1}
                                    </div>
                                    <h4 className="text-xl font-bold mb-4">{value.title}</h4>
                                    <p className="text-white/70 leading-relaxed">{value.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
