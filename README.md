# TLC Footer With Email List Sign Up

_Coding Exercise_

This react component was designed following the criteria of the code challenge found at https://www.figma.com/file/6SessL7gCmp5y2X5fa4faZ/Code-Exercise?node-id=0%3A58. The component takes as input a users email address and full name, and stores it in a local state, which is then logged in the console.

## How To Execute The Project

This footer component can be demoed at https://moonwalker-assignment.herokuapp.com/

### To View A **Storybook** Or Run **In Browser**
In your terminal:
- git clone https://github.com/GooMiHo/moonwalker-coding-exercise
- npm install
__For Storybook__
npm run storybook

__To Run in Browser__
npm run start-dev

## Design
This footer component has responsive design. **Try it on your phone!**

### Design Changes
Some of the text (particularly the light green text) in the mockups appeared oversized, and overlapped other content. For this reason, the sizing was changed, though the original sizing can be found commented out in the css file.

The 'Open Sans' font used in the mockup is slightly different that the 'Open Sans' imported from Google Fonts.

## Technologies

`HTML`, `CSS`, and `React` were used to build this component. This component is available online through `Heroku`. `Storybook` was also used for development.

## Notes

One error and one warning appear in the console, and seem to be related to Storybook.

**Warning** :[Deprecation] 'window.webkitStorageInfo' is deprecated. Please use 'navigator.webkitTemporaryStorage' or 'navigator.webkitPersistentStorage' instead.

**Error** : Uncaught Error: Accessing nonexistent addons channel
