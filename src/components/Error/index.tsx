import React from 'react';
import { ErrorContainer, ErrorMessage } from '@components/Error/styled';

interface ErrorProps {
    info: string;
}

const ErrorInfo: React.FC<ErrorProps> = ({ info }) => {
    return (
        <ErrorContainer>
            <ErrorMessage>{info}</ErrorMessage>
        </ErrorContainer>
    );
};

export default ErrorInfo;
