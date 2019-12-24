import React from 'react';
import './error-boundary.styles.scss';

interface IErrorBoundaryProps {
    hasError: boolean;
    error: string;
}

export default class ErrorBoundary extends React.Component<{}, IErrorBoundaryProps> {
    public static getDerivedStateFromError(error: any) {
        return { hasError: true, error: error.toString() };
    }
    constructor(props: IErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false, error: '' };
    }
    public componentDidCatch(error: any, info: any) {
        console.log(error, info);
    }
    public render() {
        if (this.state.hasError) {
            return (
                <span className="error-container">
                    There is some issue, please try re-loading or contact admin.
            </span>
            )
        }
        return this.props.children;
    }
}