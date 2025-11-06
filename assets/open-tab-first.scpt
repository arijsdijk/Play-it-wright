on run argv
    set tabIndex to item 1 of argv
    tell application "Microsoft Edge"
        tell window 1
            set active tab index to tabIndex as integer
        end tell
        activate
    end tell
end run