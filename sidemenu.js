// SideMenu CSS
// Author   Karl Lattimer
// License  Creative Commons (some rights reserved)
// Date     5/10/2005

// Enable/disable icons, this must also be done in the html!
var UseIcons = false;
var icon_open = "img/icon_open.png";
var icon_closed = "img/icon_closed.png";

// Toggle a list item/list icon based on a class tag, where foo apears in an li class for example we would use sidemenu_toggle(foo)
function sidemenu_toggle(classtag) {
	var menu_items = document.getElementsByTagName('li');
	var icons = document.getElementsByTagName('img');
	
	for (var i=0; i<menu_items.length; i++) {
		if (menu_items[i].className.search(classtag) != -1) {
			if (menu_items[i].className.search('sidemenu_open') != -1) {
				menu_items[i].className = menu_items[i].className.replace(new RegExp(" sidemenu_open\\b"), '');
				menu_items[i].className += ' sidemenu_closed';
			} else {
				menu_items[i].className = menu_items[i].className.replace(new RegExp(" sidemenu_closed\\b"), '');
				menu_items[i].className += ' sidemenu_open';
			}
		}
	}
	if (UseIcons == true) {
		for (i=0; i<icons.length; i++) {
			if (icons[i].className.search(classtag) != -1) {
				if (icons[i].className.search('sidemenu_open') != -1) {
					icons[i].className = icons[i].className.replace(new RegExp(" sidemenu_open\\b"), '');
					icons[i].className += ' sidemenu_closed';
					icons[i].src = icon_closed;
				} else {
					icons[i].className = icons[i].className.replace(new RegExp(" sidemenu_closed\\b"), '');
					icons[i].className += ' sidemenu_open';
					icons[i].src = icon_open;
				}
			}
		}
	}
}
