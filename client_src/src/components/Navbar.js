import React, {Component} from 'react';
import { Link } from 'react-router-dom';
class Navbar extends Component{
    render(){
        return(
            <div>
                 <nav className="blue darken-3">
                    <div className="nav-wrapper">
                    <a className="brand-logo">Meetups</a>
                    <a data-activates="main-menu" className="button-collapse show-on-large"><i className="fa fa-bars"></i></a>
                    <ul className="right hide-on-small-only">
                        <li><Link to="/">Meetups <i className="fa fa-users"></i></Link></li>
                       
                    </ul>
                    <ul className="side-nav" id="main-menu">
                    <li><Link to="/">Meetups <i className="fa fa-users"></i></Link></li>
                    <li><Link to="/meetups/add">Add Meetups <i className="fa fa-plus"></i></Link></li> 
                    <li><Link to="/about">About <i className="fa fa-question-circle"></i></Link></li>
                    </ul>
                    </div>
                   
                </nav>
            </div>
        )
    }
}

export default Navbar;