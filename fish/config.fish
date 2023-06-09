if status is-interactive
    # Commands to run in interactive sessions can go here
set fish_greeting
set PATH $HOME/.cargo/bin $PATH


end

# pnpm
set -gx PNPM_HOME "/Users/cristi/Library/pnpm"
set -gx PATH "$PNPM_HOME" $PATH
# pnpm end