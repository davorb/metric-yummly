// ==UserScript==
// @name            Metric Yummly
// @author          Davor Babic
// @namespace       http://www.github.com/davorb/metric-yummly
// @description     Automatically switches from imperial to metric measurements
// @license         Creative Commons Attribution License
// @version         0.1
// @include         http://www.yummly.com/*
// @released        2014-06-06
// @updated         2006-04-06
// @compatible      Greasemonkey
// @grant           none
// ==/UserScript==

/*
 * This file is a Greasemonkey user script. To install it, you need
 * the Firefox plugin "Greasemonkey" (URL: http://greasemonkey.mozdev.org/)
 * After you installed the extension, restart Firefox and revisit
 * this script. Now you will see a new menu item "Install User Script"
 * in your tools menu.
 *
 * To uninstall this script, go to your "Tools" menu and select
 * "Manage User Scripts", then select this script from the list
 * and click uninstall :-)
 *
 * Creative Commons Attribution License (--> or Public Domain)
 * http://creativecommons.org/licenses/by/2.5/
*/

(function(){
  var loc = location.toString();
  var isImperial = loc.search(/unitType=imperial/i);
  if (isImperial !== -1) {
    var metricLocation = loc.replace(/unitType=imperial/i, 'unitType=metric');
    location.assign(metricLocation);
  }
})();
