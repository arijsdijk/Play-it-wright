// Extend Trace

Trace(
    "My Extended Trace", 
    TraceSeverity.Information,
    {
        Os: Host.OSType,
        UserAgent: Host.BrowserUserAgent,
        Version: Host.Version,
        User: User().FullName

    }
);
