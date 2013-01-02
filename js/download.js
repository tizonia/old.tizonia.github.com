
var info = {
    x64: {keywords: ['win64', 'wow64'],
          desc: '2.6.1 for Windows 64-bit with Mercurial 2.4.1',
          url: 'http://bitbucket.org/tortoisehg/files/downloads/tortoisehg-2.6.1-hg-2.4.1-x64.msi'},
    linux2: {keywords: ['linux', 'sunos', 'hp-ux'],
             desc: '2.6.1 for Linux',
             url: 'http://tortoisehg.bitbucket.org/download/linux.html'},
    darwin: {keywords: ['mac'],
             desc: '2.6.1 for Mac OS X',
             url: 'http://tortoisehg.bitbucket.org/download/mac.html'}}

var pf = window.navigator.platform.toLowerCase();
var ua = window.navigator.userAgent.toLowerCase();
for (var name in info) {
    var data = info[name];
    var match = false;
    for (var j in data.keywords) {
        var kw = data.keywords[j];
        if (pf.indexOf(kw) != -1 || ua.indexOf(kw) != -1) {
            match = true;
            break;
        }
    }
    if (match) {
        $('.dlButton > span').text(data.desc);
        $('.dlButton').attr('href', data.url);
        if (name == 'x64') {
            $('#altLink').text('32-bit')
                         .attr('href', 'http://bitbucket.org/tortoisehg/files/downloads/tortoisehg-2.6.1-hg-2.4.1-x86.msi');
        } else if (name == 'linux2' || name == 'darwin') {
            $('#altLink').hide();
        }
        break;
    }
}
