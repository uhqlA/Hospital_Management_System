import React from 'react'
import './dashboard.css'

function Content() {
    return (
        <div>
        <section className="home-section">
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
      </div >
   
  )
}

export default Content