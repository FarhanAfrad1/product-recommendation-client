import React, { useState } from "react";
import Swal from "sweetalert2";

const PRIMARY = "#180d38";

export default function NewsletterSection() {
    const [loading, setLoading] = useState(false);
    const [consent, setConsent] = useState(true);
    const [form, setForm] = useState({
        name: "",
        email: "",
        // honeypot: if bots fill this, we ignore the submission
        website: ""
    });

    const emailOk = (v) =>
        /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(String(v || "").trim());

    const handleChange = (e) => {
        const { name, value, checked } = e.target;
        if (name === "consent") setConsent(checked);
        else setForm((p) => ({ ...p, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (form.website) return; // honeypot triggered — silently ignore

        if (!emailOk(form.email)) {
            Swal.fire({
                icon: "warning",
                title: "Invalid email",
                text: "Please enter a valid email address."
            });
            return;
        }
        if (!consent) {
            Swal.fire({
                icon: "info",
                title: "Consent required",
                text: "Please accept marketing consent to subscribe."
            });
            return;
        }

        try {
            setLoading(true);
            // Demo storage (no backend): save to localStorage
            const key = "newsletter_signups";
            const prev = JSON.parse(localStorage.getItem(key) || "[]");
            const now = new Date().toISOString();
            const record = { ...form, date: now };
            localStorage.setItem(key, JSON.stringify([record, ...prev]));

            // If want to use Formspree later, replace the above with:
            // await fetch("https://formspree.io/f/your-id", {
            //   method: "POST",
            //   headers: { "Content-Type": "application/json" },
            //   body: JSON.stringify({ name: form.name, email: form.email })
            // });

            setForm({ name: "", email: "", website: "" });
            setConsent(true);
            Swal.fire({
                icon: "success",
                title: "Subscribed!",
                text: "Thanks for joining—stay tuned for product tips & deals."
            });
        } catch (err) {
            Swal.fire({
                icon: "error",
                title: "Something went wrong",
                text: err.message || "Please try again."
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <section
            className="w-full py-16"

        >
            <div className="max-w-6xl mx-auto px-4">
                <div className="card bg-base-100 shadow-xl border border-base-200 overflow-hidden">
                    {/* Top strip accent */}
                    <div
                        className="h-1 w-full"
                        style={{ background: `linear-gradient(90deg, ${PRIMARY}, #3b82f6)` }}
                    />
                    <div className="card-body flex flex-col md:flex-row md:items-center md:gap-10">
                        {/* Left: copy */}
                        <div className="md:flex-1">
                            <span
                                className="badge badge-outline mb-3 border border-[#180d38] dark:border-white dark:text-white"
                            >
                                Stay in the loop
                            </span>
                            <h2 className="text-2xl md:text-3xl font-bold leading-tight">
                                Get product insights, deals & smart buying guides
                            </h2>
                            <p className="mt-2 text-sm text-base-content/70">
                                Join our newsletter for short, useful tips—no spam, just value.
                            </p>

                            <ul className="mt-4 space-y-2 text-sm">
                                <li className="flex items-start gap-2">
                                    <span className="mt-1 inline-block h-2 w-2 rounded-full bg-[#180d38]" />
                                    Weekly curated blogs on electronics, fashion & home.
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="mt-1 inline-block h-2 w-2 rounded-full bg-[#180d38]" />
                                    Early access to buying guides & price-drop alerts.
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="mt-1 inline-block h-2 w-2 rounded-full bg-[#180d38]" />
                                    Unsubscribe anytime—one click.
                                </li>
                            </ul>
                        </div>

                        {/* Right: form */}
                        <div className="md:flex-1 mt-6 md:mt-0">
                            <form onSubmit={handleSubmit} className="space-y-3">
                                {/* Honeypot (hidden) */}
                                <input
                                    type="text"
                                    name="website"
                                    value={form.website}
                                    onChange={handleChange}
                                    className="hidden"
                                    tabIndex={-1}
                                    autoComplete="off"
                                />

                                <div className="form-control space-x-2">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input
                                        name="name"
                                        type="text"
                                        value={form.name}
                                        onChange={handleChange}
                                        placeholder="Your name"
                                        className="input input-bordered w-full focus:outline-none"
                                    />
                                </div>

                                <div className="form-control space-x-2">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input
                                        name="email"
                                        type="email"
                                        value={form.email}
                                        onChange={handleChange}
                                        required
                                        placeholder="you@example.com"
                                        className="input input-bordered w-full focus:outline-none"
                                    />
                                </div>

                                <label className="label cursor-pointer justify-start gap-3">
                                    <input
                                        type="checkbox"
                                        name="consent"
                                        className="checkbox checkbox-primary"
                                        checked={consent}
                                        onChange={handleChange}
                                        style={{ "--chkbg": PRIMARY, "--chkfg": "#fff" }}
                                    />
                                    <span className="label-text text-sm">
                                        I agree to receive product updates & marketing emails.
                                    </span>
                                </label>

                                <div className="flex items-center gap-3 pt-1">
                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="btn btn-primary rounded-full px-6 bg-[#180d38] border border-[#180d38]"

                                    >
                                        {loading ? "Subscribing..." : "Subscribe"}
                                    </button>
                                    <span className="text-xs text-base-content/60">
                                        We respect your privacy.
                                    </span>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                {/* Micro-copy footer */}
                <p className="mt-4 text-xs text-base-content/60 text-center">
                    By subscribing, you agree to our{" "}
                    <a href="/privacy" className="link text-[#180d38]">
                        Privacy Policy
                    </a>.
                </p>
            </div>
        </section>
    );
}
