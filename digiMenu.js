var digiMenu = {};
digiMenu.call = () => {
    let a = 'about:home';
    if(String(window.location).indexOf(a) == -1){
        iimPlay(`CODE:URL GOTO = ${a}`);
        let b = '1';
        iimPlay(`CODE:WAIT SECONDS = ${b}`);
    }
}
digiMenu.callForce = () => {
    let a = 'about:home';
    let b = '1';
    iimPlay(`CODE:URL GOTO = ${a}`);
    iimPlay(`CODE:WAIT SECONDS = ${b}`);
}
digiMenu.clear = () => {
    window.document.body.innerHTML = '';
}
digiMenu.h = (isiText, id, style) => {
    let a = '<h2';
    id ? a += ` id="${id}"`: '';
    style ? a += ` style="${style}"`: '';
    a += `>${isiText}</h2><br/>`;
    window.document.body.innerHTML += a;
}
digiMenu.p = (isiText, id, style) => {
    let a = '<p';
    id ? a += ` id="${id}"`: '';
    style ? a += ` style="${style}"`: '';
    a += `>${isiText}</p><br/>`;
    window.document.body.innerHTML += a;
}
digiMenu.br = () => {
    window.document.body.innerHTML += '<br></br>';
}
digiMenu.iText = (placeholder, id) => {
    let a = '<input';
    id ? a += ` id="${id}"`: '';
    placeholder ? a += ` placeholder="${placeholder}"` : '';
    a += '/><br/>';
    window.document.body.innerHTML += a;
}
digiMenu.iSlider = (defaultvalue, id, min, max) => {
    defaultvalue = parseInt(defaultvalue), min = parseInt(min), max = parseInt(max);
    let a = '<input type="range"';
    id ? a += ` id="${id}"`: '';
    a += ` min="${min}" max="${max}"/><br/>`
    window.document.body.innerHTML += a;
    window.document.getElementById(id).setAttribute('range', defaultvalue);
}
digiMenu.iCheck = (value, id, checked) => {
    let a = '<input type="checkbox"';
    id ? a += ` id="${id}"`: '';
    value ? a += ` value="${value}"` : '';
    checked ? a += ' checked="true"' : '';
    a += '/><br/>';
    window.document.body.innerHTML += a;
}
digiMenu.button = (isiText, id, onClick) => {
    let a = '<button';
    id ? a += ` id="${id}"`: '';
    onClick ? a += ` onclick="${onClick}"`: '';
    a += `>${isiText}</button><br/>`;
    window.document.body.innerHTML += a;
}
digiMenu.wait = () => {
    iimPlay('CODE:PAUSE');
}
digiMenu.getValueId = (anchorId) => {
    return window.document.getElementById(anchorId).value;
}
digiMenu.valPositiveInt = (anchorId) => {
    parseInt(digiMenu.getValueId(anchorId)) > 0 ? '' : (tidakValid(), digiMenu.wait(), digiMenu.valPositiveInt(anchorId));
}
digiMenu.valCacahInt = (anchorId) => {
    parseInt(digiMenu.getValueId(anchorId)) >= 0 ? '' : (tidakValid(), digiMenu.wait(), digiMenu.valPositiveInt(anchorId));
}
