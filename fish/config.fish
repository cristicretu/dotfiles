if status is-interactive
    # Commands to run in interactive sessions can go here
end
alias vi='nvim'



# This is what you often find online...
function nvm
    bass source (brew --prefix nvm)/nvm.sh --no-use ';' nvm $argv
end

# ...however, for me it doesn't work without the following line
set -Ux NVM_DIR ~/.nvm

# Aliases
if [ -f $HOME/.config/fish/alias.fish ]
    source $HOME/.config/fish/alias.fish
end

# >>> conda initialize >>>
# !! Contents within this block are managed by 'conda init' !!
if test -f /Users/huge/miniconda3/bin/conda
    eval /Users/huge/miniconda3/bin/conda "shell.fish" hook $argv | source
else
    if test -f "/Users/huge/miniconda3/etc/fish/conf.d/conda.fish"
        . "/Users/huge/miniconda3/etc/fish/conf.d/conda.fish"
    else
        set -x PATH /Users/huge/miniconda3/bin $PATH
    end
end
# <<< conda initialize <<<

function rustrun
    set filename (basename $argv .rs)
    rustc $argv && ./$filename
end

function jrun
    set -l java_file $argv[1]
    set -l class_name (basename $java_file .java)

    if test -z "$java_file"
        echo "Usage: jrun <JavaFile.java>"
        return 1
    end

    if not test -f $java_file
        echo "Error: File $java_file not found"
        return 1
    end

    echo "Compiling $java_file..."
    if javac $java_file
        echo "Compilation successful. Running $class_name..."
        java $class_name
    else
        echo "Compilation failed."
        return 1
    end
end

function lisp
    if test (count $argv) -eq 0
        echo "Usage: run-lisp <filename>"
        return 1
    end

    set filename $argv[1]

    # Check if the file exists
    if test -f $filename
        sbcl --script $filename
    else
        echo "File not found: $filename"
        return 1
    end
end

function myalias
    set files main.cpp domain.h session.h repository.h subject.h observer.h window.h window.cpp
    for file in $files
        echo "Creating $file"
        touch $file
    end

    set cmake_file CMakeLists.txt
    echo "Creating $cmake_file"
    touch $cmake_file

    echo "Creating .gitignore"
    echo build >.gitignore
    echo "cmake_minimum_required(VERSION 3.10)" >"$cmake_file"
    echo "project(untitled)" >>"$cmake_file"
    echo "set(CMAKE_CXX_STANDARD 17)" >>"$cmake_file"
    echo "set(CMAKE_AUTOMOC ON)" >>"$cmake_file"
    echo "set(CMAKE_PREFIX_PATH "/opt/homebrew/opt/qt")" >>"$cmake_file"
    echo "find_package(Qt6 COMPONENTS
        Core
        Gui
        Widgets
        REQUIRED)" >>"$cmake_file"
    echo "add_executable(untitled main.cpp domain.h session.h repository.h window.h window.cpp observer.h subject.h)" >>"$cmake_file"
    echo "target_link_libraries(untitled
        Qt::Core
        Qt::Gui
        Qt::Widgets)" >>"$cmake_file"
end


# bun
set --export BUN_INSTALL "$HOME/.bun"
set --export PATH $BUN_INSTALL/bin $PATH

# Added by `rbenv init` on Tue Feb 18 16:04:15 EET 2025
status --is-interactive; and rbenv init - --no-rehash fish | source

# pnpm
set -gx PNPM_HOME "/Users/huge/Library/pnpm"
if not string match -q -- $PNPM_HOME $PATH
  set -gx PATH "$PNPM_HOME" $PATH
end
# pnpm end

# Added by Windsurf
fish_add_path /Users/huge/.codeium/windsurf/bin
