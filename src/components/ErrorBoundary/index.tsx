import React, { Component, ErrorInfo } from 'react';
import {
    GlobalErrorInfo,
    GlobalErrorMessage,
    GlobalErrorMessageContainer,
} from '@components/ErrorBoundary/styled';

interface Props {
    children: React.ReactNode;
}

interface State {
    hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { hasError: false };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error('ErrorBoundary caught an error: ', error, errorInfo);
        this.setState({ hasError: true });
    }

    render() {
        if (this.state.hasError) {
            console.log('ERROR RENDERING');
            return (
                <GlobalErrorMessageContainer>
                    <GlobalErrorMessage>
                        Oops, something went wrong...
                    </GlobalErrorMessage>
                    <GlobalErrorInfo>Try to reload page</GlobalErrorInfo>
                </GlobalErrorMessageContainer>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
