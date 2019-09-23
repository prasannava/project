import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';

import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        showSideDrawer: false
    }
  SideDrawerCloseHandler = () => {
      this.setState({showSideDrawer:false});
      
  }
  SideDrawerTogglehandler = () => {
      this.setState((prevState) => {
          return {showSideDrawer: !prevState.showSideDrawer};
  });
}

   render () {
       return (
        <Aux>
        <Toolbar drawerToggleClicked={this.SideDrawerTogglehandler}/>
        <SideDrawer 
        open={this.state.showSideDrawer} 
        closed={this.SideDrawerCloseHandler}/>
        <main className={classes.Content}>
            {this.props.children}
        </main>
        </Aux>
       )
   }
}


export default Layout;