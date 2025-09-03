function codecov --wraps='gcovr --root .. --html-details report.html && open report.html' --description 'alias codecov=gcovr --root .. --html-details report.html && open report.html'
  gcovr --root .. --html-details report.html && open report.html $argv
        
end
