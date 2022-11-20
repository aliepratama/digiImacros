var digiFb = {};
digiFb.webLite = () => {
    try {window.document.querySelector('[type="text/css"]').setAttribute("href", "")} catch(err){}
}
digiFb.webSellingFocus = () => {
    try{window.document.querySelector('div[role="banner"]').remove();}catch(err){}
    try{window.document.querySelector('div[aria-label="Bilah sisi Marketplace"]').remove();}catch(err){}
    try{window.document.querySelector('html>body>div:nth-of-type(1)>div>div:nth-of-type(1)>div>div:nth-of-type(2)>div>div>div').style.top = '0';}catch(err){}
    try{window.document.querySelector('html>body>div:nth-of-type(1)>div>div:nth-of-type(1)>div>div:nth-of-type(2)>div>div>div>div:nth-of-type(1)>div:nth-of-type(1)>div>div>div>div:nth-of-type(2)>div>div>div:nth-of-type(1)').remove();}catch(err){}
    try{window.document.querySelector('html>body>div:nth-of-type(1)>div>div:nth-of-type(1)>div>div:nth-of-type(2)>div>div>div>div:nth-of-type(1)>div:nth-of-type(1)>div>div>div>div:nth-of-type(2)>div>div>div:nth-of-type(1)').remove();}catch(err){}
    try{window.document.querySelector('html>body>div:nth-of-type(1)>div>div:nth-of-type(1)>div>div:nth-of-type(4)>div').remove();}catch(err){}
}
digiFb.webSearchBoxFocus = () => {
    try{window.document.querySelector('div[role="banner"]').remove();}catch(err){}
    try{window.document.querySelector('html>body>div:nth-of-type(1)>div>div:nth-of-type(1)>div>div:nth-of-type(2)>div>div>div>div:nth-of-type(1)>div:nth-of-type(1)>div:nth-of-type(1)>div>div:nth-of-type(1)').remove();}catch(err){}
    try{window.document.querySelector('div[aria-label="Koleksi item Marketplace"]').remove();}catch(err){}
    try{window.document.querySelector('html>body>div:nth-of-type(1)>div>div:nth-of-type(1)>div>div:nth-of-type(2)>div>div>div>div:nth-of-type(1)>div:nth-of-type(1)>div:nth-of-type(1)>div>div:nth-of-type(2)').remove();}catch(err){}
    try{window.document.querySelector('div[aria-label="Bilah sisi Marketplace"]').style.position = 'absolute';}catch(err){}
    try{window.document.querySelector('div[aria-label="Bilah sisi Marketplace"]>div').style.width = '100%';}catch(err){}
    try{window.document.querySelector('div[aria-label="Bilah sisi Marketplace"]>div').style.top = '0';}catch(err){}
}
