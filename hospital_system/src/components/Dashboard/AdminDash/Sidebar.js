import React from 'react'
import './dashboard.css'
import  {Link} from 'react-router-dom'
function Sidebar() {
   
        const navToggle = () => {
            let sidebar = document.querySelector(".sidebar");
            let sidebarBtn = document.querySelector(".sidebarBtn");
            sidebarBtn.onclick = function() {
              sidebar.classList.toggle("active");
              if(sidebar.classList.contains("active")){
              sidebarBtn.classList.replace("bx-menu" ,"bx-menu-alt-right");
            }else
              sidebarBtn.classList.replace("bx-menu-alt-right", "bx-menu");
            }
        }

    return (
        <div>
            <link href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css" rel="stylesheet" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <div className="sidebar">
                <div className="logo-details">
                    <span className="logo_name">Penn Medicine</span>
                </div>
                <ul className="nav-links">
                    <li>
                        <Link to="/admin-dashboard" className=''>
                            <i className="bx bx-grid-alt" />
                            <span className="links_name">Dashboard</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin-dashboard/doctors">
                            <i className="bx bx-box" />
                            <span className="links_name">Doctors</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin-dashboard/employees">
                            <i className="bx bx-list-ul" />
                            <span className="links_name">Staff</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin-dashboard/patients">
                            <i className="bx bx-pie-chart-alt-2" />
                            <span className="links_name">Patients</span>
                        </Link>
                    </li>
                    <li>
                        <a href="/">
                            <i className="bx bx-coin-stack" />
                            <span className="links_name">OR Assistants</span>
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            <i className="bx bx-book-alt" />
                            <span className="links_name">Wards</span>
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            <i className="bx bx-user" />
                            <span className="links_name">Units</span>
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            <i className="bx bx-message" />
                            <span className="links_name">Messages</span>
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            <i className="bx bx-cog" />
                            <span className="links_name">Setting</span>
                        </a>
                    </li>
                    <li className="log_out">
                        <a href="/">
                            <i className="bx bx-log-out" />
                            <span className="links_name">Log out</span>
                        </a>
                    </li>
                </ul>
            </div>

            {/* TOP BAR */}
            <section className="home-section">
         <nav>
            <div className="sidebar-button">
              <i className="bx bx-menu sidebarBtn" onClick={navToggle}/>
              <span className="dashboard">Dashboard</span>
            </div>
           <div className="search-box">
              <input type="text" placeholder="Search..." />
              <i className="bx bx-search" />
            </div>
            <div className="profile-details">
              {/*<img src="images/profile.jpg" alt="">*/}
              <span className="admin_name">Thuo Mwangi</span>
              <i className="bx bx-chevron-down" />
            </div>
          </nav>
        </section>

        </div>
    )
}

export default Sidebar