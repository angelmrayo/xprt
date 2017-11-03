import React, {Component} from 'react';

export default function asyncComponent(cmp) {
    class AsyncComponent extends Component {
        static Component = null;
        state = {Component: AsyncComponent.Component};

        componentWillMount() {
            if (!this.state.Component) {
                cmp().then(Component => {
                    AsyncComponent.Component = Component;
                    this.setState({Component});
                });
            }
        }

        render() {
            const { Component } = this.state;
            if (Component != null) {
                return <Component {...this.props} />
            }
            return null;
        }

    }
    return AsyncComponent;
}