import { useMemo, useState } from "react";
import {
    ArrowDownWideNarrow,
    ArrowRight,
    ArrowUpRight,
    BarChart3,
    BookOpen,
    ChevronDown,
    ChevronLeft,
    ChevronRight,
    Cloud,
    Code2,
    ExternalLink,
    Gamepad2,
    LockKeyhole,
    Mail,
    Play,
    Rocket,
    Search,
    Terminal,
} from "lucide-react";

import projectsData from "./ProjectsData.jsx";
import "./Projects.css";

const categories = [
    "All",
    "Python",
    "Web",
    "API",
    "Automation",
    "Data",
    "Game",
    "Other",
];

const iconMap = {
    terminal: Terminal,
    lock: LockKeyhole,
    cloud: Cloud,
    book: BookOpen,
    chart: BarChart3,
    gamepad: Gamepad2,
};

const PAGE_SIZE = 6;

function Projects() {
    const [activeCategory, setActiveCategory] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");
    const [sortOrder, setSortOrder] = useState("newest");
    const [currentPage, setCurrentPage] = useState(1);

    const filteredProjects = useMemo(() => {
        const query = searchQuery.trim().toLowerCase();

        const result = projectsData.filter((project) => {
            const matchesCategory =
                activeCategory === "All" ||
                project.category === activeCategory ||
                project.tags.includes(activeCategory);

            const searchableText = [
                project.title,
                project.description,
                project.category,
                ...project.tags,
            ]
                .join(" ")
                .toLowerCase();

            const matchesSearch = searchableText.includes(query);

            return matchesCategory && matchesSearch;
        });

        return [...result].sort((a, b) => {
            if (sortOrder === "oldest") {
                return new Date(a.date) - new Date(b.date);
            }

            if (sortOrder === "az") {
                return a.title.localeCompare(b.title);
            }

            return new Date(b.date) - new Date(a.date);
        });
    }, [activeCategory, searchQuery, sortOrder]);

    const totalPages = Math.max(
        1,
        Math.ceil(filteredProjects.length / PAGE_SIZE)
    );

    const visibleProjects = filteredProjects.slice(
        (currentPage - 1) * PAGE_SIZE,
        currentPage * PAGE_SIZE
    );

    function changeCategory(category) {
        setActiveCategory(category);
        setCurrentPage(1);
    }

    function changeSearch(value) {
        setSearchQuery(value);
        setCurrentPage(1);
    }

    function changeSort(value) {
        setSortOrder(value);
        setCurrentPage(1);
    }

    return (
        <main className="projects-page" id="top">
            <div className="projects-container">

                {/* HERO */}

                <section className="projects-hero">
                    <div className="projects-hero-content">
                        <p className="projects-eyebrow">
                            My Work
                        </p>

                        <h1>Projects</h1>

                        <h2>
                            Building ideas, one commit at a time.
                        </h2>

                        <p className="projects-intro">
                            Here you can find some of my personal and
                            learning projects. Each project helps me grow,
                            learn new technologies and solve real-world
                            problems.
                        </p>

                        <div className="projects-hero-actions">
                            <a
                                className="project-button project-button-primary"
                                href="https://github.com/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <ArrowRight size={19} />
                                View on GitHub
                                <ArrowRight size={17} />
                            </a>

                            <a
                                className="project-button project-button-secondary"
                                href="mailto:your-email@example.com"
                            >
                                Contact Me
                                <Mail size={17} />
                            </a>
                        </div>
                    </div>

                    {/* STATIC TERMINAL */}

                    <div className="projects-terminal">
                        <div className="projects-terminal-header">
                            <div className="terminal-dots">
                                <span />
                                <span />
                                <span />
                            </div>

                            <span className="terminal-label">
                                terminal
                            </span>

                            <span className="terminal-caption">
                                Build. Learn. Improve. Repeat.
                            </span>
                        </div>

                        <div className="projects-terminal-body">
                            <p className="terminal-function">
                                <span>def</span> build():
                            </p>

                            <div className="terminal-code-block">
                                <p>return (</p>
                                <p className="terminal-code-value">
                                    "Learn",
                                </p>
                                <p className="terminal-code-value">
                                    "Build",
                                </p>
                                <p className="terminal-code-value">
                                    "Improve",
                                </p>
                                <p className="terminal-code-value">
                                    "Repeat"
                                </p>
                                <p>)</p>
                            </div>

                            <p className="terminal-comment">
                                # My development journey
                            </p>
                        </div>
                    </div>

                    <div className="projects-hero-note">
                        <Code2 size={19} />

                        <p>
                            "Code turns ideas
                            <br />
                            into reality."
                        </p>

                        <span />
                    </div>
                </section>

                {/* FILTERS AND SEARCH */}

                <section className="projects-toolbar">
                    <div
                        className="projects-filters"
                        aria-label="Filter projects by category"
                    >
                        {categories.map((category) => (
                            <button
                                key={category}
                                type="button"
                                className={`project-filter ${
                                    activeCategory === category
                                        ? "active"
                                        : ""
                                }`}
                                onClick={() => changeCategory(category)}
                                aria-pressed={activeCategory === category}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    <div className="projects-controls">
                        <label className="project-search">
                            <Search size={18} />

                            <input
                                type="search"
                                placeholder="Search projects..."
                                value={searchQuery}
                                onChange={(event) =>
                                    changeSearch(event.target.value)
                                }
                                aria-label="Search projects"
                            />
                        </label>

                        <label className="project-sort">
                            <ArrowDownWideNarrow size={16} />

                            <select
                                value={sortOrder}
                                onChange={(event) =>
                                    changeSort(event.target.value)
                                }
                                aria-label="Sort projects"
                            >
                                <option value="newest">
                                    Newest
                                </option>
                                <option value="oldest">
                                    Oldest
                                </option>
                                <option value="az">
                                    Name A–Z
                                </option>
                            </select>

                            <ChevronDown size={15} />
                        </label>
                    </div>
                </section>

                {/* PROJECT CARDS */}

                <section
                    className="projects-grid"
                    aria-label="Projects"
                >
                    {visibleProjects.map((project) => {
                        const ProjectIcon =
                            iconMap[project.icon] || Code2;

                        return (
                            <article
                                className={`project-card accent-${project.color}`}
                                key={project.id}
                            >
                                <div className="project-card-main">
                                    <div className="project-icon">
                                        <ProjectIcon size={39} />
                                    </div>

                                    <div className="project-card-info">
                                        <h3>{project.title}</h3>

                                        <p>{project.description}</p>

                                        <div className="project-tags">
                                            {project.tags.map((tag) => (
                                                <span key={tag}>
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className="project-card-actions">
                                    {project.github ? (
                                        <a
                                            className="project-link project-link-github"
                                            href={project.github}
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <ArrowRight size={18} />
                                            GitHub
                                        </a>
                                    ) : (
                                        <span className="project-link project-link-disabled">
                                            <ArrowRight size={18} />
                                            GitHub
                                        </span>
                                    )}

                                    {project.demo ? (
                                        <a
                                            className="project-link project-link-demo"
                                            href={project.demo}
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <Play size={17} />
                                            Demo
                                        </a>
                                    ) : (
                                        <span className="project-link project-link-disabled">
                                            <Play size={17} />
                                            Demo
                                        </span>
                                    )}

                                    {project.github && (
                                        <a
                                            className="project-external"
                                            href={project.github}
                                            target="_blank"
                                            rel="noreferrer"
                                            aria-label={`Open ${project.title} repository`}
                                        >
                                            <ExternalLink size={17} />
                                        </a>
                                    )}
                                </div>
                            </article>
                        );
                    })}
                </section>

                {/* EMPTY STATE */}

                {filteredProjects.length === 0 && (
                    <div className="projects-empty">
                        <Search size={30} />

                        <h3>No projects found</h3>

                        <p>
                            Try another search term or category.
                        </p>

                        <button
                            type="button"
                            onClick={() => {
                                setSearchQuery("");
                                setActiveCategory("All");
                                setCurrentPage(1);
                            }}
                        >
                            Clear filters
                        </button>
                    </div>
                )}

                {/* PAGINATION */}

                <div className="projects-pagination">
                    <p>
                        Showing {filteredProjects.length
                            ? (currentPage - 1) * PAGE_SIZE + 1
                            : 0}
                        {"–"}
                        {Math.min(
                            currentPage * PAGE_SIZE,
                            filteredProjects.length
                        )}
                        {" "}of {filteredProjects.length} projects
                    </p>

                    <div className="pagination-buttons">
                        <button
                            type="button"
                            aria-label="Previous page"
                            disabled={currentPage === 1}
                            onClick={() =>
                                setCurrentPage((page) => page - 1)
                            }
                        >
                            <ChevronLeft size={19} />
                        </button>

                        <span className="pagination-current">
                            {currentPage}
                        </span>

                        <button
                            type="button"
                            aria-label="Next page"
                            disabled={currentPage >= totalPages}
                            onClick={() =>
                                setCurrentPage((page) => page + 1)
                            }
                        >
                            <ChevronRight size={19} />
                        </button>
                    </div>
                </div>

                {/* CTA */}

                <section className="projects-cta">
                    <div className="projects-cta-icon">
                        <Rocket size={29} />
                    </div>

                    <div className="projects-cta-text">
                        <h3>Interested in my work?</h3>

                        <p>
                            Check out more projects on my GitHub
                            or feel free to reach out!
                        </p>
                    </div>

                    <div className="projects-cta-actions">
                        <a
                            className="project-button project-button-secondary"
                            href="https://github.com/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <ArrowUpRight size={18} />
                            Visit GitHub
                            <ArrowUpRight size={16} />
                        </a>

                        <a
                            className="project-button project-button-primary"
                            href="mailto:your-email@example.com"
                        >
                            <Mail size={18} />
                            Contact Me
                            <ArrowRight size={16} />
                        </a>
                    </div>
                </section>

            </div>
        </main>
    );
}

export default Projects;