import "./InterestingFacts.css";

function InterestingFacts() {
    const facts = [
        {
            id: "01",
            icon: "</>",
            title: "I love coding",
            description:
                "Python is my main language, but I also enjoy working with web technologies like React and Django."
        },
        {
            id: "02",
            icon: "🎮",
            title: "I'm creating a 2D game",
            description:
                "Currently developing a 2D survival game with enemies, combat and randomly generated platforms."
        },
        {
            id: "03",
            icon: "📚",
            title: "I enjoy learning",
            description:
                "I regularly practice algorithms, solve coding exercises and work on personal projects to improve my skills."
        },
        {
            id: "04",
            icon: "🌍",
            title: "I love exploring",
            description:
                "I enjoy discovering new places, ideas and technologies. New experiences often give me fresh perspectives."
        },
        {
            id: "05",
            icon: "🏋️",
            title: "I value balance",
            description:
                "I believe good rest and an active lifestyle help me stay focused, productive and motivated."
        },
        {
            id: "06",
            icon: "☕",
            title: "Coffee = productivity",
            description:
                "A good cup of coffee always helps me focus, write some code and get things done."
        }
    ];

    return (
        <section className="interesting-facts">

            <div className="facts-divider">
                <span></span>

                <div className="facts-divider-icon">
                    &lt;/&gt;
                </div>

                <span></span>
            </div>

            <div className="facts-header">
                <div>
                    <p className="facts-label">
                        FUN FACTS
                    </p>

                    <h2 className="facts-title">
                        A few <span>interesting</span> facts
                    </h2>

                    <p className="facts-description">
                        Here are some random things about me that
                        you might find interesting.
                    </p>
                </div>

                <div className="facts-note">
                    Small facts
                    <br />
                    Big story
                    <span>↘</span>
                </div>
            </div>

            <div className="facts-grid">
                {facts.map((fact) => (
                    <article className="fact-card" key={fact.id}>
                        <div className="fact-content">

                            <div className="fact-number">
                                <span>{fact.id}</span>
                                <div></div>
                            </div>

                            <h3>{fact.title}</h3>

                            <p>{fact.description}</p>

                        </div>

                        <div className="fact-icon">
                            {fact.icon}
                        </div>
                    </article>
                ))}
                
            </div>

        </section>
    );
}

export default InterestingFacts;