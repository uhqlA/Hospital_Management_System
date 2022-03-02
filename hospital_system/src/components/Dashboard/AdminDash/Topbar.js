import React from 'react'
import './dashboard.css'

function Topbar() {

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

export default Topbar