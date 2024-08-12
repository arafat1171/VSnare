import logo from './images/logo.png'
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import mail from './images/mail.svg'
import not from './images/not.svg'
import prof from './images/prof.svg'
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import Logout from './images/Logout.png'
import message from './images/message.png'
import Notifications from './images/Notifications.png'
import purchasereq from './images/purchasereq.png'
import purchasevid from './images/purchasevid.png'
import accounting from './images/accounting.png'
import dashboard from './images/Dashboard.png'
import Account from './images/Account.png'
import tipalti from './images/tipalti.png'
import quickchat from './images/quickchat.png'
import { faFacebook, faTwitter, faYoutube, faPinterest, faBehance } from '@fortawesome/free-brands-svg-icons';

function Dashboard() {
    return (
        <div>
            <div className="nav">
                <div className='gap'>
                    <div className="virallogo">
                        <img src={logo} className="imgv" />

                    </div>
                    <div>
                        <form className="search-form">
                            <button type="submit" className="srchbt">
                                <FontAwesomeIcon icon={faSearch} />
                            </button>
                            <input type="text" placeholder="Enter an email address, submitter name, VSID to search..." />
                        </form>


                    </div>

                </div>
                <div className="Ic">
                    <div>
                        <button className="pbutton"> New Purchase Request</button>
                    </div>
                    <div><a href="#"><img src={mail} className="mailbox" /></a></div>
                    <div><a href="#"><img src={not} className="mailbox" /></a></div>
                    <div className="Aline"></div>
                    <div className="Icc">
                        <div className="bN"> Arseny Poldovesky</div>
                        <div className="fw">Content Buyer</div>
                    </div>
                    <div><a href="#"><img src={prof} className="proflogo" /></a></div>

                </div>
            </div>
            <div className="fcontainer">
                <div className="dcontainer">
                    <div className="nbcont">
                        <div className="Aligner">
                        <div><a href="#"><img src={dashboard} className="a" /></a></div>
                        <div>Dashboard</div>
                        </div>
                        <div className="Aligner">
                        <div><a href="#"><img src={purchasereq} className="a" /></a></div>
                        <div>Purchase Request</div>
                        </div>
                        <div className="Aligner">
                        <div><a href="#"><img src={purchasevid} className="a" /></a></div>
                        <div>Purchase Video</div>
                        </div>
                        <div className="Aligner">
                        <div><a href="#"><img src={accounting} className="a" /></a></div>
                        <div>Accounting</div>
                        </div>
                        <div className="Aligner">
                        <div><a href="#"><img src={Notifications} className="a" /></a></div>
                        <div>Notifications</div>
                        </div>
                        <div className="Aligner">
                        <div><a href="#"><img src={message} className="a" /></a></div>
                        <div>Messages</div>
                        </div>
                        <div className="Aligner">
                        <div><a href="#"><img src={Account} className="b" /></a></div>
                        <div className="Accp">My Account</div>
                        </div>
                        <div className="Aligner">
                        <div><a href="#"><img src={Logout} className="a" /></a></div>
                        <div >Log Out</div>
                        </div>
                        
                    </div>
                    <div className="pagecont">
                        <div className="Innernav">
                            <div><a href="#">Personal Details</a></div>
                            <div><a href="#"> Account Settings</a></div>
                        </div>
                        <div className="formBcont">
                            <div className="formRcont">
                                <div className="formma">
                                    <div className="RealCont">
                                        <div className="BoldName">Full name</div>
                                        <div><FontAwesomeIcon icon={faEdit} className="editicon" /></div>
                                    </div>
                                    <div className="flname">
                                        <form className="formalign">
                                            <label>First name</label>
                                            <input type="text" className="form2" />
                                        </form>
                                        <form className="formalign">
                                            <label>Last name</label>
                                            <input type="text" className="form2" />
                                        </form>
                                    </div>

                                </div>
                                <div >
                                    <div className="RealCont">
                                        <div className="BoldName">Physical Address</div>
                                        <div><FontAwesomeIcon icon={faEdit} className="editicon" /></div>
                                    </div>
                                    <div className="flname">
                                        <form className="formalign">
                                            <label>Address</label>
                                            <input type="text" className="form3" />
                                        </form>
                                        <form className="formalign">
                                            <label>City</label>
                                            <input type="text" className="form4" />
                                        </form>
                                        <form className="formalign">
                                            <label>State</label>
                                            <input type="text" className="form4" />
                                        </form>
                                        <form className="formalign">
                                            <label>Zip Code</label>
                                            <input type="text" className="form5" />
                                        </form>
                                    </div>
                                </div>
                                <div className="CountryMa">
                                    <div className="formalign">
                                        <label className>Country</label>
                                        <select className="form4">
                                            <option >Select country</option>
                                            <option >USA</option>
                                            <option >Canada</option>
                                            <option>UK</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="formma">
                                    <div className="RealCont">
                                        <div className="BoldName">Phone Number</div>
                                        <div><FontAwesomeIcon icon={faEdit} className="editicon" /></div>
                                    </div>
                                    <div className="flname">
                                        <form className="formalign">
                                            <input type="text" className="form3" />
                                        </form>
                                    </div>
                                </div>
                                <div>
                                    <div className="RealCont">
                                        <div className="BoldName">Salary</div>
                                        <div><FontAwesomeIcon icon={faEdit} className="editicon" /></div>
                                    </div>
                                    <div className="flname">
                                        <form className="formalign">
                                            <input type="text" className="form4" />
                                        </form>
                                    </div>

                                </div>
                            </div>
                            <div className="loginCont">
                                <div >
                                    <img src={tipalti}className="tipalti"/>

                                </div>
                                <div className="fdt">
                                    You are eligible to recive payments
                                </div>
                                <div>
                                    <button className="tpbt">Login</button>
                                </div>

                            </div>

                        </div>
                        <div className="Mchat"> <div><a href="#"><img src={quickchat} className="c" /></a></div>
                        </div>

                    </div>
                </div>

            </div>


        </div>

    )
}
export default Dashboard;