
import { Link } from "react-router-dom";
import "./EmpHome.css";

function EmpHome() {
    let currentuser = JSON.parse(
        localStorage.getItem("currentuser") || "null"
    );

    return (
        <div className="emp-dashboard">
            <div className="container py-4 py-md-5">

                {/* Welcome Section */}
                <div className="emp-welcome-card">
                    <div>
                        <span className="emp-badge">
                            <i className="bi bi-person-check me-2"></i>
                            Employee Dashboard
                        </span>

                        <h1 className="mt-3">
                            Welcome, {currentuser?.name || "Employee"}!
                        </h1>

                        <p>
                            Stay organized, manage your daily tasks, and
                            keep track of your work progress.
                        </p>
                    </div>

                    <div className="emp-welcome-icon">
                        <i className="bi bi-person-workspace"></i>
                    </div>
                </div>

                {/* Action Cards */}
                <div className="row g-4 mt-2">

                    <div className="col-12 col-md-6">
                        <div className="emp-action-card">
                            <div className="emp-card-icon">
                                <i className="bi bi-clipboard-check"></i>
                            </div>

                            <h4>My Tasks</h4>

                            <p>
                                View tasks assigned by HR and check
                                the details of your responsibilities.
                            </p>

                            <Link to="/view-task" className="btn emp-btn">
                                View Tasks
                                <i className="bi bi-arrow-right ms-2"></i>
                            </Link>
                        </div>
                    </div>

                    <div className="col-12 col-md-6">
                        <div className="emp-action-card">
                            <div className="emp-card-icon">
                                <i className="bi bi-list-check"></i>
                            </div>

                            <h4>My To-Do List</h4>

                            <p>
                                Organize your daily activities and
                                manage your personal to-do items.
                            </p>

                            <Link to="/add-todo" className="btn emp-btn">
                                Manage To-Do
                                <i className="bi bi-arrow-right ms-2"></i>
                            </Link>
                        </div>
                    </div>

                </div>

                {/* Helpful Information */}
                <div className="emp-info-card mt-4">
                    <i className="bi bi-lightbulb-fill"></i>

                    <div>
                        <h5>Stay Productive</h5>
                        <p className="mb-0">
                            Review your assigned tasks regularly, update
                            your progress, and keep your to-do list organized.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default EmpHome;
