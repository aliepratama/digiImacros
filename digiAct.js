var digiAct = {};
digiAct.getBrowserCharPref = (pref) => {
    return Components.classes["@mozilla.org/preferences-service;1"].getService(Components.interfaces.nsIPrefBranch).getCharPref(pref);
}
digiAct.getBrowserBoolPref = (pref) => {
    return Components.classes["@mozilla.org/preferences-service;1"].getService(Components.interfaces.nsIPrefBranch).getBoolPref(pref);
}
digiAct.getBrowserIntPref = (pref) => {
    return Components.classes["@mozilla.org/preferences-service;1"].getService(Components.interfaces.nsIPrefBranch).getIntPref(pref);
}
digiAct.setBrowserCharPref = (pref, value) => {
    Components.classes["@mozilla.org/preferences-service;1"].getService(Components.interfaces.nsIPrefBranch).setCharPref(pref, value);
}
digiAct.setBrowserBoolPref = (pref, value) => {
    Components.classes["@mozilla.org/preferences-service;1"].getService(Components.interfaces.nsIPrefBranch).setBoolPref(pref, value);
}
digiAct.setBrowserIntPref = (pref, value) => {
    Components.classes["@mozilla.org/preferences-service;1"].getService(Components.interfaces.nsIPrefBranch).setIntPref(pref, value);
}
digiAct.gantiWindows = () => {
    Components.classes["@mozilla.org/preferences-service;1"].getService(Components.interfaces.nsIPrefBranch).setCharPref("general.useragent.override", "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:73.0) Gecko/20100101 Firefox/56.0");
}
digiAct.gantiMobile = () => {
    Components.classes["@mozilla.org/preferences-service;1"].getService(Components.interfaces.nsIPrefBranch).setCharPref("general.useragent.override", "Mozilla/5.0 (Linux; Android 10; SM-A105G) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Mobile Safari/537.36 [FB_IAB/FB4A;FBAV/361.0.0.39.115;]");
}
digiAct.encrypt = (string) => {
    return window.btoa(window.btoa(string) + '1');
}
digiAct.decrypt = (string) => {
    return window.atob(window.atob(string).slice(0,-1));
}
digiAct.url = (url, timeout, delaySetelah) => {
    timeout = parseInt(timeout);
    delaySetelah = parseInt(delaySetelah);
    let a = 'CODE:';
    timeout ? a += `SET TIMEOUT_PAGE ${timeout}\x0A` : '';
    a += `URL GOTO = ${url}\x0A`;
    delaySetelah ? a += `WAIT SECONDS = ${delaySetelah}` : '';
    iimPlay(a);
}
digiAct.sleep = (waktu) => {
    waktu = parseInt(waktu);
    iimPlay(`CODE:WAIT SECONDS = ${waktu}`);
}
digiAct.tabNext = () => {
    iimPlay('CODE:TAB T=2');
}
digiAct.setZClick = (method, value, index, index2) => {
    let alphaYet = 0;
    let alpha = () => {
        try{
            if(method === 'id'){
                window.document.getElementById(value).click();
            } else if (method === 'class'){
                window.document.getElementsByClassName(value).click();
            } else if (method === 'cssSelector'){
                window.document.querySelector(value).click();
            } else if (method === 'cssSelectorAll'){
                index = parseInt(index);
                var a = window.document.querySelectorAll(value);
                a[index].click();
            } else if (method === 'containsTxt') {
                var ele = window.document.querySelectorAll(value);
                for(var i = 0;i<ele.length;i++){
                    ele[i].setAttribute('text', ele[i].innerHTML);
                }
                window.document.querySelector(`${value}[text="${index}"]`).click();
            } else if (method === 'containsTxtAll') {
                var ele = window.document.querySelectorAll(value);
                for(var i = 0;i<ele.length;i++){
                    ele[i].setAttribute('text', ele[i].innerHTML);
                }
                index2 = parseInt(index2);
                var a = window.document.querySelectorAll(`${value}[text="${index}"]`);
                a[index2].click();
            } else if (method === 'xPath'){
                let a = (path) => {
                    return window.document.evaluate(path, window.document, null, window.XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
                }
                a(value).click();
            } else {
                alphaYet > 5 ? 'Error! Tidak dapat menemukan locator' : setTimeout(alpha(), 1000);
                alphaYet++;
            }
        } catch(err){
            alphaYet > 5 ? 'Error! Tidak dapat menemukan locator' : setTimeout(alpha(), 1000);
            alphaYet++;
        }
    }
    alpha();
}
digiAct.getZInnerHTML = (method, value) => {
    try{
        if(method === 'id'){
            return window.document.getElementById(value).innerHTML;
        } else if (method === 'class'){
            return window.document.getElementsByClassName(value).innerHTML;
        } else if (method === 'cssSelector'){
            return window.document.querySelector(value).innerHTML;
        } else if (method === 'xPath'){
            let a = (path) => {
                return window.document.evaluate(path, window.document, null, window.XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
            }
            return a(value).innerHTML;
        } else {
            return 'undefined';
        }
    } catch(err){
        return 'undefined';
    }
}
digiAct.getValidCsv = (folderMethod, filepath) => {
    let a = 'CODE:';
    switch(folderMethod){
        case 'datasource':
            var b = '{{!FOLDER_DATASOURCE}}/';
            break;
        case 'downloads':
            var b = '/';
            break;
        case 'macros':
            var b = '{{!FOLDER_MACROS}}/';
            break;
        default:
            var b = '';
            break;
    }
    a += `SET !DATASOURCE ${b}${filepath}\x0ASET !DATASOURCE_LINE 1`;
    iimPlay(a);
    if(iimGetLastError().indexOf('file does not exist') !== -1){
        return 'false';
    } else {
        return 'true';
    }
}
digiAct.getDataCsv = (folderMethod, filepath, column, row) => {
    let a = 'CODE:';
    switch(folderMethod){
        case 'datasource':
            var b = '{{!FOLDER_DATASOURCE}}/';
            break;
        case 'downloads':
            var b = '/';
            break;
        case 'macros':
            var b = '{{!FOLDER_MACROS}}/';
            break;
        default:
            var b = '';
            break;
    }
    a += `SET !DATASOURCE ${b}${filepath}\x0ASET !DATASOURCE_LINE ${row}\x0AADD !EXTRACT {{!COL${column}}}`;
    iimPlay(a);
    return iimGetLastExtract(1);
}
digiAct.getDataCsvRange = (folderMethod, filepath, colMin, colMax, rowMin, rowMax) => {
    let a = 'CODE:';
    switch(folderMethod){
        case 'datasource':
            var b = '{{!FOLDER_DATASOURCE}}/';
            break;
        case 'downloads':
            var b = '/';
            break;
        case 'macros':
            var b = '{{!FOLDER_MACROS}}/';
            break;
        default:
            var b = '';
            break;
    }
    a += `SET !DATASOURCE ${b}${filepath}`;
    for(let row = parseInt(rowMin);row <= parseInt(rowMax);row++){
        a += `\x0ASET !DATASOURCE_LINE ${row}`;
        for(let col = parseInt(colMin);col <= parseInt(colMax);col++){
            a += `\x0AADD !EXTRACT {{!COL${col}}}`;
        }
    }
    iimPlay(a);
    return iimGetLastExtract(0);
}
digiAct.deleteFile = (folderMethod, filepath) => {
    let a = 'CODE:';
    switch(folderMethod){
        case 'datasource':
            var b = '{{!FOLDER_DATASOURCE}}/';
            break;
        case 'downloads':
            var b = '/';
            break;
        case 'macros':
            var b = '{{!FOLDER_MACROS}}/';
            break;
        default:
            var b = '';
            break;
    }
    a += `FILEDELETE NAME = ${b}${filepath}`;
    iimPlay(a);
}
digiAct.randomInt = (min, max) => {
    const min = parseInt(min);
    const max = parseInt(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function tidakValid(){
    alert('Input tidak valid!');
}
