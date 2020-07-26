import React, {Component} from 'react';
import ErrorIndicator from './ErrorIndicator';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hasError: false
        };
    };

    componentDidCatch(error, errorInfo) {
        this.setState({
            hasError: true
        });
    };

    render() {
        const {hasError} = this.state;

        if (hasError) {
            return (<ErrorIndicator errorMessage='Error-2'/>)
        }

        return (
            this.props.children
        );
    };
}

export default ErrorBoundary;
