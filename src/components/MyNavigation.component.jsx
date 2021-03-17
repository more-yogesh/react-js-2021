import React from 'react';
import CoreNav from './CoreNav.component'
class MyNavigation extends React.Component {

    render() {
        // console.log(this.props.navigation);
        let nav = this.props.navigation;
        return (
            <div>
                <CoreNav navigation={nav} />
            </div>
        );
    }
}

export default MyNavigation;