import "useragent.jsx";
import "test-case.jsx";

class _Test extends TestCase {
  function testUserAgentParseAndroid() : void {
    var mua = new UserAgentWrapper("Mozilla/5.0 (Linux; U; Android 1.6; ja-jp; IS01 Build/S3082) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1");
    this.expect(mua.getOS().toString()).toBe("Android 1.6");
    this.expect(mua.getDevice().toString()).toBe("IS01");
  }
  function testUserAgentParseIphone() : void {
    var mua = new UserAgentWrapper("Mozilla/5.0 (iPhone; CPU iPhone OS 6_0 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10A403 Safari/8536.25");
    this.expect(mua.getOS().toString()).toBe("iOS 6.0");
    this.expect(mua.getDevice().toString()).toBe("iPhone");
  }
  function testUserAgentParseIpad() : void {
    var mua = new UserAgentWrapper("Mozilla/5.0 (iPad; CPU OS 6_0 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10A403 Safari/8536.25");
    this.expect(mua.getOS().toString()).toBe("iOS 6.0");
    this.expect(mua.getDevice().toString()).toBe("iPad");
  }
  function testUserAgentParseNULL() : void {
    var mua = new UserAgentWrapper("Mozilla/5.0 (compatible; MSIE 9.0; Windows Phone OS 7.5; Trident/5.0; IEMobile/9.0; FujitsuToshibaMobileCommun; IS12T; KDDI)");
    this.expect(mua.getOS().toString()).toBe("Windows Phone 7.5");
    this.expect(mua.getDevice().toString()).toBe("Other");
  }
  function testUserAgentParseUserAgent() : void {
    var mua = new UserAgentWrapper("Mozilla/5.0 (Linux; Android 4.2.2; FJT21 Build/xxxx) AppleWebKit/537.31 (KHTML, like Gecko) Chrome/26.0.1410.58 Safari/537.31");
    this.expect(mua.getUA().toAgent()).toBe("Chrome 26.0.1410");
    this.expect(mua.getOS().toString()).toBe("Android 4.2.2");
  }
}



