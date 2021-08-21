var removeResultPanel = function(a) { var d= $(a).parent().parent().parent().parent(); d.remove(); return false; }
var copyResultPanel = function(id) {
    var note = document.getElementById(id).innerText;
    if (navigator.clipboard) {
        try {
            navigator.clipboard.writeText(note);
        } catch (err) {
            console.error('Failed to copy!', err);
        }
        return;
    }
    var textArea = document.createElement("textarea");
    textArea.style.top = "0";
    textArea.style.position = "fixed";
    document.body.appendChild(textArea);
    textArea.textContent = note;
    textArea.focus();
    textArea.select();
    try {
        var successful = document.execCommand('copy');
        var msg = successful ? 'successful' : 'unsuccessful';
        if (window.getSelection) {
            if (window.getSelection().empty) {
                // Chrome
                window.getSelection().empty();
            } else if (window.getSelection().removeAllRanges) {
                // Firefox
                window.getSelection().removeAllRanges();
            }
        } else if (document.selection) {
            // IE?
            document.selection.empty();
        }
    } catch (err) {
        console.error('Failed to copy!', err);
    }
    document.body.removeChild(textArea);
}
