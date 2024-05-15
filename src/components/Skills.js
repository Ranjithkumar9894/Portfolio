export default function Skills() {
    return (
        <div>
            <section className="resume-section" id="skills">
                <div className="resume-section-content">
                    <h2 className="mb-5">Skills</h2>
                    <div className="subheading mb-3">
                        Programming Languages &amp; Tools
                    </div>
                    <ul className="list-inline dev-icons">
                        <li className="list-inline-item">
                            <i className="fab fa-html5" />
                        </li>
                        <li className="list-inline-item">
                            <i className="fab fa-css3-alt" />
                        </li>
                        <li className="list-inline-item">
                            <i className="fab fa-js-square" />
                        </li>
                        <li className="list-inline-item">
                            <i className="fab fa-react" />
                        </li>
                        <li className="list-inline-item">
                            <i className="fab fa-npm" />
                        </li>
                        <li className="list-inline-item">
                            <i className="fab fa-yarn" />
                        </li>
                        {/* <li className="list-inline-item">
                            <i className="fa fa-spinner fa-spin" />
                        </li> */}
                    </ul>
                    <div className="subheading mb-3">Workflow</div>
                    <ul className="fa-ul mb-0">
                        <li className="mb-1">
                            <span className="fa-li">
                                <i className="fas fa-check" />
                            </span>
                            Mobile-First, Responsive Design
                        </li>
                        <li className="mb-1">
                            <span className="fa-li">
                                <i className="fas fa-check" />
                            </span>
                            Webpage optimization&amp; Debugging
                        </li>
                        <li className="mb-1">
                            <span className="fa-li">
                                <i className="fas fa-check" />
                            </span>
                            Wireframe & design
                        </li>
                        <li className="mb-1">
                            <span className="fa-li">
                                <i className="fas fa-check" />
                            </span>
                            Agile Development &amp; Scrum
                        </li>
                        <li className="mb-1">
                            <span className="fa-li">
                                <i className="fas fa-check" />
                            </span>
                            Performance improvements
                        </li>
                    </ul>
                </div>
            </section>
            <hr className="m-0" />
        </div>
    );
}
