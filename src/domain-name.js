function domainName(url) {
    const protocol = url.indexOf('//');
    let tmp;
    if (protocol === -1) {
        tmp = url.substring(url.indexOf('.'));
    }else{
        tmp = url.substring(protocol + 2);
    }
    console.log(tmp);
    let pathStart = tmp.indexOf('/');
    if(pathStart !== -1){
       pathStart = tmp.indexOf('?'); 
    }
    console.log(pathStart);
    if(pathStart !== -1){
        tmp = tmp.substring(0, pathStart);
    }
    tmp = tmp.substring(0, tmp.lastIndexOf('\.'));
    return tmp;
}

module.exports = domainName;