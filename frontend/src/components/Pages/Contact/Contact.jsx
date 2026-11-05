import { useState } from "react";

import {
    BriefcaseBusiness,
    Users,
    Code2,
    MessageCircle,
    Mail,
    Send,
    MapPin,
    CheckCircle,
    Clock,
    ExternalLink,
    Lightbulb,
} from "lucide-react";

import "./Contact.css";

const MAX_MESSAGE_LENGTH = 500;

function Contact() {
    const [message, setMessage] = useState("");

    function handleSubmit(event) {
        event.preventDefault();

        // Позже здесь подключим Django REST API.
        console.log("Contact form submitted");
    }

    return (
        <main className="contact-page">
            <div className="contact-container">

                {/* HERO */}

                <section className="contact-hero">

                    <div className="contact-hero-content">

                        <p className="contact-eyebrow">
                            <span />
                            Let's Connect
                        </p>

                        <h1>
                            Get <span>In</span> Touch
                        </h1>

                        <p className="contact-hero-description">
                            I'm always open to new opportunities,
                            interesting projects and meaningful
                            conversations.
                        </p>

                        <div className="contact-hero-tags">

                            <div className="contact-hero-tag">
                                <BriefcaseBusiness />
                                Job Opportunities
                            </div>

                            <div className="contact-hero-tag">
                                <Users />
                                Collaboration
                            </div>

                            <div className="contact-hero-tag">
                                <Code2 />
                                Freelance Projects
                            </div>

                            <div className="contact-hero-tag">
                                <MessageCircle />
                                Just Say Hi
                            </div>

                        </div>

                    </div>

                    {/* TERMINAL */}

                    <div className="contact-terminal">

                        <div className="contact-terminal-header">

                            <div className="contact-terminal-dots">
                                <span />
                                <span />
                                <span />
                            </div>

                            <span>terminal</span>

                        </div>

                        <div className="contact-terminal-body">

                            <p className="terminal-command">
                                $ send_message
                            </p>

                            <p>Connecting people ...</p>
                            <p>Building opportunities ...</p>

                            <p className="terminal-highlight">
                                Let's create something amazing!
                            </p>

                            <p className="terminal-prompt">
                                $ <span />
                            </p>

                        </div>

                    </div>

                    {/* QUOTE */}

                    <div className="contact-hero-quote">

                        <p>
                            "Good ideas start
                            <br />
                            with a conversation."
                        </p>

                        <span />

                    </div>

                </section>


                {/* MAIN CONTACT GRID */}

                <section className="contact-layout">

                    {/* SEND MESSAGE */}

                    <section className="contact-panel contact-form-panel">

                        <h2 className="contact-section-title">
                            <span />
                            Send Me a Message
                        </h2>

                        <p className="contact-panel-description">
                            Have a question, project idea or just want
                            to connect?
                            <br />
                            Fill out the form below and I'll get back
                            to you soon.
                        </p>

                        <form
                            className="contact-form"
                            onSubmit={handleSubmit}
                        >

                            <div className="contact-form-row">

                                <div className="contact-form-group">

                                    <label htmlFor="contact-name">
                                        Your Name <span>*</span>
                                    </label>

                                    <input
                                        id="contact-name"
                                        name="name"
                                        type="text"
                                        placeholder="John Doe"
                                        required
                                    />

                                </div>

                                <div className="contact-form-group">

                                    <label htmlFor="contact-email">
                                        Your Email <span>*</span>
                                    </label>

                                    <input
                                        id="contact-email"
                                        name="email"
                                        type="email"
                                        placeholder="john@example.com"
                                        required
                                    />

                                </div>

                            </div>

                            <div className="contact-form-group">

                                <label htmlFor="contact-subject">
                                    Subject <span>*</span>
                                </label>

                                <input
                                    id="contact-subject"
                                    name="subject"
                                    type="text"
                                    placeholder="What is this about?"
                                    required
                                />

                            </div>

                            <div className="contact-form-group">

                                <label htmlFor="contact-message">
                                    Message <span>*</span>
                                </label>

                                <textarea
                                    id="contact-message"
                                    name="message"
                                    placeholder="Tell me more about your idea, opportunity or just say hi!"
                                    value={message}
                                    onChange={(event) =>
                                        setMessage(
                                            event.target.value.slice(
                                                0,
                                                MAX_MESSAGE_LENGTH
                                            )
                                        )
                                    }
                                    maxLength={MAX_MESSAGE_LENGTH}
                                    required
                                />

                                <div className="contact-message-counter">
                                    {message.length} / {MAX_MESSAGE_LENGTH}
                                </div>

                            </div>

                            <div className="contact-form-footer">

                                <button
                                    type="submit"
                                    className="contact-submit-button"
                                >
                                    <Send size={18} />
                                    Send Message
                                </button>

                                <p className="contact-response-time">
                                    <Clock size={17} />
                                    I'll do my best to respond within 24 hours.
                                </p>

                            </div>

                        </form>

                    </section>


                    {/* CONTACT INFO */}

                    <section className="contact-panel contact-info-panel">

                        <h2 className="contact-section-title">
                            <span />
                            Contact Info
                        </h2>

                        <p className="contact-panel-description">
                            Feel free to reach out through any of these
                            channels. I usually respond within 24 hours.
                        </p>

                        <div className="contact-info-list">

                            <a
                                className="contact-info-item"
                                href="mailto:protas.artem183@gmail.com"
                            >

                                <div className="contact-info-icon email-icon">
                                    <Mail />
                                </div>

                                <div className="contact-info-text">
                                    <h3>Email</h3>
                                    <p>protas.artem183@gmail.com</p>
                                </div>

                                <ExternalLink className="contact-external-icon" />

                            </a>

                            <a
                                className="contact-info-item"
                                href="https://linkedin.com/"
                                target="_blank"
                                rel="noreferrer"
                            >

                                <div className="contact-info-icon linkedin-icon">
                                    <Mail />
                                </div>

                                <div className="contact-info-text">
                                    <h3>LinkedIn</h3>
                                    <p>linkedin.com/in/artem-protas</p>
                                </div>

                                <ExternalLink className="contact-external-icon" />

                            </a>

                            <a
                                className="contact-info-item"
                                href="https://github.com/Protas183"
                                target="_blank"
                                rel="noreferrer"
                            >

                                <div className="contact-info-icon github-icon">
                                    <Mail />
                                </div>

                                <div className="contact-info-text">
                                    <h3>GitHub</h3>
                                    <p>github.com/Protas183</p>
                                </div>

                                <ExternalLink className="contact-external-icon" />

                            </a>

                            <a
                                className="contact-info-item"
                                href="https://t.me/Protas183"
                                target="_blank"
                                rel="noreferrer"
                            >

                                <div className="contact-info-icon telegram-icon">
                                    <Send />
                                </div>

                                <div className="contact-info-text">
                                    <h3>Telegram</h3>
                                    <p>@Protas183</p>
                                </div>

                                <ExternalLink className="contact-external-icon" />

                            </a>

                            <div className="contact-info-item">

                                <div className="contact-info-icon location-icon">
                                    <MapPin />
                                </div>

                                <div className="contact-info-text">
                                    <h3>Location</h3>
                                    <p>Poland (GMT+1/GMT+2)</p>
                                </div>

                            </div>

                            <div className="contact-info-item">

                                <div className="contact-info-icon availability-icon">
                                    <span />
                                </div>

                                <div className="contact-info-text">
                                    <h3>Availability</h3>
                                    <p>Open to opportunities</p>
                                </div>

                            </div>

                        </div>

                        <div className="contact-info-quote">
                            "Feel free to reach out — even if it's just
                            to say hi. I always appreciate good conversations!"
                        </div>

                    </section>


                    {/* RIGHT SIDEBAR */}

                    <aside className="contact-sidebar">

                        {/* Opportunities */}

                        <section className="contact-panel">

                            <h2 className="contact-section-title">
                                <span />
                                Let's Build Something
                            </h2>

                            <p className="contact-panel-description">
                                I'm currently looking for new opportunities
                                as a Junior Python Developer. I'm open to:
                            </p>

                            <ul className="contact-opportunities">

                                <li>
                                    <CheckCircle />
                                    Junior Developer Positions
                                </li>

                                <li>
                                    <CheckCircle />
                                    Internships
                                </li>

                                <li>
                                    <CheckCircle />
                                    Freelance Projects
                                </li>

                                <li>
                                    <CheckCircle />
                                    Open Source Collaboration
                                </li>

                                <li>
                                    <CheckCircle />
                                    Learning & Mentoring
                                </li>

                                <li>
                                    <CheckCircle />
                                    Tech Discussions
                                </li>

                            </ul>

                        </section>


                        {/* Social links */}

                        <section className="contact-panel">

                            <h2 className="contact-section-title">
                                <span />
                                Find Me Online
                            </h2>

                            <div className="contact-social-links">

                                <a
                                    href="https://github.com/Protas183"
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label="GitHub"
                                >
                                    <Mail />
                                </a>

                                <a
                                    href="https://linkedin.com/"
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label="LinkedIn"
                                >
                                    <Mail />
                                </a>

                                <a
                                    href="https://t.me/Protas183"
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label="Telegram"
                                >
                                    <Send />
                                </a>

                                <a
                                    href="mailto:protas.artem183@gmail.com"
                                    aria-label="Email"
                                >
                                    <Mail />
                                </a>

                            </div>

                        </section>


                        {/* Quick note */}

                        <section className="contact-panel contact-quick-note">

                            <div className="quick-note-icon">
                                <Lightbulb />
                            </div>

                            <div>

                                <h2>A Quick Note</h2>

                                <p>
                                    If you don't get a response right away,
                                    feel free to try another channel.
                                    Sometimes messages end up in spam. 🙂
                                </p>

                            </div>

                        </section>

                    </aside>

                </section>

            </div>
        </main>
    );
}

export default Contact;