// Trace performance

Set( varStart, Now() );

Trace( $"Trace Started: {varStart}", TraceSeverity.Information );

ForAll(
    Sequence(30),

    Patch(
        MyTraces, 
        Defaults(MyTraces), 
        { 
            Message: $"MyTrace {Value}"
        }
    )
    
);

Set( varEnd, Now() );

Trace( $"Trace Ended: {varEnd}", TraceSeverity.Information );

Trace( $"Trace Duration in milliseconds: {DateDiff( varStart, varEnd, TimeUnit.Milliseconds)}", TraceSeverity.Information );

