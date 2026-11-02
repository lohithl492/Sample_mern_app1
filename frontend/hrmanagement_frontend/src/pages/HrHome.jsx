
import { Link } from "react-router-dom";
import "./HrHome.css";

function HrHome() {
    let currentuser = JSON.parse(
        localStorage.getItem("currentuser") || "null"
    );

    return (
        <div className="hr-dashboard">
            <div className="container py-4 py-md-5">

                {/* Welcome Section */}
                <div className="hr-welcome-card">
                    <div>
                        <span className="hr-badge">
                            <i className="bi bi-person-workspace me-2"></i>
                            HR Dashboard
                        </span>

                        <h1 className="mt-3">
                            Welcome, {currentuser?.name || "HR"}!
                        </h1>

                        <p>
                            Manage employees, assign tasks, and track your
                            team's progress from one place.
                        </p>
                    </div>

                    <div className="hr-welcome-icon">
                        <i className="bi bi-speedometer2"></i>
                    </div>
                </div>

                {/* Dashboard Cards */}
                <div className="row g-4 mt-2">

                    <div className="col-12 col-md-6">
                        <div className="hr-action-card">
                            <div className="hr-card-icon">
                                <i className="bi bi-person-lines-fill"></i>
                            </div>

                            <h4>View Employees</h4>
                            <p>
                                View and manage employee details in your
                                organization.
                            </p>

                            <Link
                                to="/view-employees"
                                className="btn hr-btn"
                            >
                                View Employees
                                <i className="bi bi-arrow-right ms-2"></i>
                            </Link>
                        </div>
                    </div>

                    <div className="col-12 col-md-6">
                        <div className="hr-action-card">
                            <div className="hr-card-icon">
                                <i className="bi bi-clipboard-check"></i>
                            </div>

                            <h4>Assign Tasks</h4>
                            <p>
                                Create and assign tasks to employees to
                                organize team activities.
                            </p>

                            <Link
                                to="/assign-task"
                                className="btn hr-btn"
                            >
                                Assign Task
                                <i className="bi bi-arrow-right ms-2"></i>
                            </Link>
                        </div>
                    </div>

                </div>

                {/* Information Section */}
                <div className="hr-info-card mt-4">
                    <i className="bi bi-lightbulb-fill me-3"></i>
                    <div>
                        <h5>Quick Tip</h5>
                        <p className="mb-0">
                            Assign clear tasks and regularly review employee
                            progress to keep your team productive.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default HrHome;
