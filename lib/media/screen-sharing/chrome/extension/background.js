

chrome.runtime.onMessageExternal.addListener(function(options, sender, sendResponse) {

    options = options || {};
    options.types = options.types || ['screen', 'window'];

    var desktopMediaRequestId = chrome.desktopCapture.chooseDesktopMedia(options.types, sender.tab,

        function(streamId) {

            if(!streamId) {
                sendResponse({
                    type:'ERROR',
                    message: 'PermissionDenied'
                });
            } else {
                sendResponse({
                    type:'SUCCESS',
                    id: streamId
                });
            }
        }
    );

    return true;
});
