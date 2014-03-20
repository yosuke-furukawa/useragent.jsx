__export__ class UserAgentWrapper {
  var ua : UserAgent;
  function constructor(raw_ua : string) {
    this.ua = UserAgentParser.parse(raw_ua);
  }
  function getUA() : UserAgent {
    return this.ua;
  }
  function getOS() : UserAgentOS {
    return this.ua.os;
  }
  function getDevice() : UserAgentDevice {
    return this.ua.device;
  }
}

native class UserAgentParser {
  static function parse(useragent : variant) : UserAgent;
} = "require('useragent')";

native class UserAgent {
  __readonly__ var os : UserAgentOS;
  __readonly__ var device : UserAgentDevice;
  function toAgent() : string;
  override function toString() : string;
  function toVersion() : string;
  function toJSON() : Map.<variant>;
}

native class UserAgentOS {
  override function toString() : string;
  function toJSON() : Map.<variant>;
  function toVersion() : string;
}

native class UserAgentDevice {
  override function toString() : string;
  function toJSON() : Map.<variant>;
  function toVersion() : string;
}
