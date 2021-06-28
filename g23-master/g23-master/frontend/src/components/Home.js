import React, {Component} from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import Homework from './Homework';
import Nav from './Nav';

class Home extends Component{
    render(){
        return(
            <div>
                <Header/>
                <Nav/>
                <Homework/>
            </div>
        )
    }
}
// export default connect(null, null)(Home);
export default Home;