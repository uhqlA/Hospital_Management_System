import React from 'react'
import './dashboard.css'

function Dashboard() {
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

    return(
    <div>

        <link href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css" rel="stylesheet" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <div className="sidebar">
          <div className="logo-details">
            <span className="logo_name">Penn Medicine</span>
          </div>
          <ul className="nav-links">
            <li>
              <a href="/" className="active">
                <i className="bx bx-grid-alt" />
                <span className="links_name">Dashboard</span>
              </a>
            </li>
            <li>
              <a href="/">
                <i className="bx bx-box" />
                <span className="links_name">Doctors</span>
              </a>
            </li>
            <li>
              <a href="/">
                <i className="bx bx-list-ul" />
                <span className="links_name">Nurses</span>
              </a>
            </li>
            <li>
              <a href="/">
                <i className="bx bx-pie-chart-alt-2" />
                <span className="links_name">Operation Rooms</span>
              </a>
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
          <div className="home-content">
            <div className="overview-boxes">
              <div className="box">
                <div className="right-side">
                  <div className="box-topic">Total Admissions</div>
                  <div className="number">76</div>
                  <div className="indicator">
                    <i className="bx bx-up-arrow-alt" />
                    <span className="text">Up from yesterday</span>
                  </div>
                </div>
              </div>
              <div className="box">
                <div className="right-side">
                  <div className="box-topic">Total Checkouts</div>
                  <div className="number">122</div>
                  <div className="indicator">
                    <i className="bx bx-up-arrow-alt" />
                    <span className="text">Up from yesterday</span>
                  </div>
                </div>
              </div>
              <div className="box">
                <div className="right-side">
                  <div className="box-topic">Total Transfers</div>
                  <div className="number">31</div>
                  <div className="indicator">
                    <i className="bx bx-up-arrow-alt" />
                    <span className="text">Up from yesterday</span>
                  </div>
                </div>
              </div>
              <div className="box">
                <div className="right-side">
                  <div className="box-topic">Total Deaths</div>
                  <div className="number">1</div>
                  <div className="indicator">
                    <i className="bx bx-down-arrow-alt down" />
                    <span className="text">Down From Today</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="sales-boxes">
              <div className="recent-sales box">
                <div className="title">Recent Admissions</div>
                <div className="sales-details">
                  <ul className="details">
                    <li className="topic">Date</li>
                    <li><a href="/">02 Jan 2021</a></li>
                    <li><a href="/">02 Jan 2021</a></li>
                    <li><a href="/">02 Jan 2021</a></li>
                    <li><a href="/">02 Jan 2021</a></li>
                    <li><a href="/">02 Jan 2021</a></li>
                    <li><a href="/">02 Jan 2021</a></li>
                    <li><a href="/">02 Jan 2021</a></li>
                  </ul>
                  <ul className="details">
                    <li className="topic">Patient name</li>
                    <li><a href="/">Thuo Doe</a></li>
                    <li><a href="/">Alphonce Mags</a></li>
                    <li><a href="/">Ken Parter</a></li>
                    <li><a href="/">Diana Penty</a></li>
                    <li><a href="/">Alvin Paw</a></li>
                    <li><a href="/">Doe Alex</a></li>
                    <li><a href="/">Aiana Lexa</a></li>
                    <li><a href="/">Salma Mohammed</a></li>
                    <li><a href="/">John Mutua</a></li>
                  </ul>
                  <ul className="details">
                    <li className="topic">Admitting Doctor</li>
                    <li><a href="/">Dr. Kamau</a></li>
                    <li><a href="/">Dr. Suleiman</a></li>
                    <li><a href="/">Dr. Kazimoto</a></li>
                    <li><a href="/">Dr. Amera</a></li>
                    <li><a href="/">Dr. Muriuki</a></li>
                    <li><a href="/">Dr. Wainaina</a></li>
                    <li><a href="/">Dr. Otieno</a></li>
                    <li><a href="/">Dr. Mutua</a></li>
                    <li><a href="/">Dr. Kamau</a></li>
                  </ul>
                  <ul className="details">
                    <li className="topic">Ward</li>
                    <li><a href="/">A102</a></li>
                    <li><a href="/">B004</a></li>
                    <li><a href="/">C432</a></li>
                    <li><a href="/">A222</a></li>
                    <li><a href="/">A021</a></li>
                    <li><a href="/">C324</a></li>
                    <li><a href="/">B322</a></li>
                    <li><a href="/">B007</a></li>
                    <li><a href="/">A121</a></li>
                  </ul>
                  <ul className="details">
                    <li className="topic">Insuarance</li>
                    <li><a href="/">Britam</a></li>
                    <li><a href="/">AAR</a></li>
                    <li><a href="/">N/A</a></li>
                    <li><a href="/">NHIF</a></li>
                    <li><a href="/">Madison</a></li>
                    <li><a href="/">NHIF</a></li>
                    <li><a href="/">NHIF</a></li>
                    <li><a href="/">Jubilee</a></li>
                    <li><a href="/">N/A</a></li>
                  </ul>
                </div>
                <div className="button">
                  <a href="/">See All</a>
                </div>
              </div>
              <div className="top-sales box">
                <div className="title">Top Perfomance Units</div>
                <ul className="top-sales-details">
                  <li>
                    <a href="/">
                      <span className="product">Cardiology</span>
                    </a>
                    <span className="price">$1107</span>
                  </li>
                  <li>
                    <a href="/">
                      <span className="product">Orthopedic</span>
                    </a>
                    <span className="price">$1567</span>
                  </li>
                  <li>
                    <a href="/">
                      <span className="product">Paediatrics</span>
                    </a>
                    <span className="price">$1234</span>
                  </li>
                  <li>
                    <a href="/">
                      <span className="product">Oncolody</span>
                    </a>
                    <span className="price">$2312</span>
                  </li>
                  <li>
                    <a href="/">
                      <span className="product">Genaral Surgery</span>
                    </a>
                    <span className="price">$1456</span>
                  </li>
                  <li>
                    <a href="/">
                      <span className="product">Neuro-Surgery</span>
                    </a>
                    <span className="price">$2345</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }


export default Dashboard