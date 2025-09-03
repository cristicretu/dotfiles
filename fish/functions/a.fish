function a --wraps='git aa && g cm "a" && g p' --description 'alias a=git aa && g cm "a" && g p'
  git aa && g cm "a" && g p $argv
        
end
