/*!
 * Socialite v2.0 - t3n extension
 * Copyright (c) 2013 Benny Born
 */
(function(window, document, Socialite, undefined)
{

    Socialite.network('t3n', {
        script: {
            src     : '//t3n.de/aggregator/ebutton_async',
            charset : 'utf-8'
        }
    });

    var t3nInit = function(instance) {
        var el = document.createElement('a');
        el.className = 't3nAggregator';
        Socialite.copyDataAttributes(instance.el, el);
        instance.el.appendChild(el);
    };

    Socialite.widget('t3n', 'share', {
        init: t3nInit,
    });

})(window, window.document, window.Socialite);