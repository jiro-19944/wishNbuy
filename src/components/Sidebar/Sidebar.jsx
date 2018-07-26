import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import HeaderLinks from '../Header/HeaderLinks.jsx';
import imagine from 'assets/img/sidebar-3.jpg';
import logo from 'assets/img/logo_image.png';
import appRoutes from 'routes/routes.jsx';

class Sidebar extends Component{
    constructor(props){
        super(props);
        this.dropDown = this.dropDown.bind(this);
        this.state = {
            width: window.innerWidth,
            dropDownRoutes: {
                1: {dropDowned: false, dropDownArrow: false},
                2: {dropDowned: false, dropDownArrow: false},
                3: {dropDowned: false, dropDownArrow: false},
                4: {dropDowned: false, dropDownArrow: false},
                5: {dropDowned: false, dropDownArrow: false}
            }
        }
    }
    activeRoute(routeName) {
        return this.props.location.pathname.indexOf(routeName) > -1 ? 'active' : '';
    }
    updateDimensions(){
        this.setState({width:window.innerWidth});
    }
    componentDidMount() {
        this.updateDimensions();
    }
    dropDown (dropDown, child, id) {
        return () => {
            if (dropDown) {
                if (!this.state.dropDownRoutes[id].dropDowned) {
                    this.setState(() => ({dropDownRoutes: {...this.state.dropDownRoutes, [id]: {dropDowned: true, dropDownArrow: true}}}))
                } else {
                    this.setState(() => ({dropDownRoutes: {...this.state.dropDownRoutes, [id]: {dropDowned: false, dropDownArrow: false}}}))
                }
                // TODO add firs child route into routes.jsx to redirect to the first child component when drop down is opened
                // window.location.href = window.location.origin + "/#/add_product";
            } else if (!child) {
                let dropDownRoutes = this.state.dropDownRoutes;
                for (let key in dropDownRoutes) {
                    dropDownRoutes[key]. dropDowned = false;
                    dropDownRoutes[key]. dropDownArrow = false;
                }
                this.setState(() => ({dropDownRoutes}))
            }
        }
    }
    render(){
        let self = this;
        return (
            <div id="sidebar" className="sidebar" data-color="black" data-image={imagine}>
                <div className="sidebar-background"></div>
                <div className="logo">
                    <a href="#" className="simple-text logo-normal">
                        <div className="logo-img">
                            <img src={logo} alt="logo_image"/>
                        </div>
                    </a>
                </div>
                <div className="sidebar-wrapper">
                    <ul className="nav">
                        { this.state.width <= 991 ? (<HeaderLinks />):null }
                        {
                            appRoutes.map((prop, index) => {
                                if(!prop.redirect) {
                                    if (prop.child && !this.state.dropDowned) {
                                        return null;
                                    }
                                    return (
                                        <li className={prop.child ? "submenu" : ""}
                                            key={index} onClick={self.dropDown(prop.dropDown, prop.child, prop.id)}>
                                            <NavLink to={prop.path} className={`nav-link ${prop.dropDown && self.state.dropDownRoutes[prop.id].dropDownArrow ? "open" : ""}`}
                                                     activeClassName="active">
                                                <i className={prop.icon}></i>
                                                <p className={`${prop.count ? "circle-number" : ""}`}>{prop.name}{prop.count ? <span>11</span> : null}</p>
                                            </NavLink>
                                        </li>
                                    );
                                }
                                return null;
                            })
                        }
                        <li>
                            <a className="nav-link logOut" onClick={this.props.doLogOut}>
                                <i className="pe-7s-power"></i>
                                <p>Выход</p>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Sidebar;