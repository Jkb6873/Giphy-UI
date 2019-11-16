A simple UI for the Giphy API.
All feedback is __Welcome__.

Requirements:

.env file with the environmental variable
> REACT_APP_GIPHY_KEY

Install:
> yarn install

Run:
> yarn start


Tools Used:
  * react as the main framework
  * react-redux-dom for app state management
  * react-router for displaying separate pages
  * axios for requests
  * react-image to display spinners while content is loading

Current Features:

  Infinite Scroll
    When the homepage loads, 25 gifs are loaded in. An observer is attached to the 10th to last gif, and when it enters the user's view, 25 more gifs are loaded.
    Current issues:

  * ~~On first load, while the gifs are still loading in, more gifs are added on automatically, because all 25 gifs are minimized.~~
  * On reloading the component that holds all gifs, ie: when the user switches from the homepage to the favs page and back, the same gifs as before are loaded in again.

  Modal Popup
    When the user clicks a gif, they get a modal that shows them the original gif, with an option to favorite, and additional information

  Modal Notifications
    When a user favorites or unfavorites a gif, they get a drop down notification.
    Current issues:

  * lack of error handling. Will always give a success message, even on failure.

  Favorites Tab
    When the user favorites a gif, they can later view that gif in their favorites.
    Current issues:

  * Search bar doesn't cause a change while in favs tab, though the gifs are loaded into the homepage.
  * A small sliver of the bottom of each card is cut off in the favorites tab. This error came about when messing with scrolling and css positions. Low visibility.

Planned Features:

  * unit and snapshot testing with jest or jasmine
  * Find a less ugly spinner gif
  * Use SVGs instead of pngs
  * Split the main.css file into individual files
  * ~~Loading placeholder for gifs~~
  * Icon to expand appears when hovering over gifs
  * Quick Favorite
  * ~~Toast messages when successfully favoriting/ unfavoriting~~
  * Storing favorited gifs into browser so user can revisit the site. (low priority, normally a backend service would be in place to store user settings, and that would require a log in/ register page)
  * Implement a javascript set class to replace the current implementation of the favorites array. This class will test equality based on the gif id, rather than the entire gif object. This will allow for easily storing an index into the data, so that both insertion and deletion would be more efficient. This will also solve errors in the situation that the same gif becomes trending at two different times, resulting in two different objects, with the same key.
