# Sem'IMT'an

A personal mobile application project in a React Native (Typescript) code base, wrapped by Expo

This application is intended:
- to be an alternative to the official Nantes public urban transport (TAN) one;
- to deliver a better user experience (2.1/2.6 stars on App/Play Store, see here: https://apps.apple.com/us/app/tan/id502653639 and https://play.google.com/store/apps/details?id=com.semitan.tan); 
- to aim at learning cross-platform mobile development.

## Install
1. Make sure to have an Expo account and install Expo Go on your Android/iOS device
2. Clone this repo then `npm i` straight after.
3. To run the server & the app: `npx expo start`
4. Flash the generated QR code from your camera app on your phone (your system should redirect to Expo Go)
Otherwise, press `w` to run a local instance on your PC's web browser (not the best experience)

## Current features

- Navigation drawer using React Navigation
- List of lines/routes: number, directions and color
- List of stops: stop name, visiting lines
- _For both screens, cards are clickable but not bound to anything_
- Accessibility works for every line/stop card: have a try with Talkback or VoiceOver!
- I18N: English & French

## TODO
- Stop card -> next incoming buses/trams at this stop 
- Add loading splash screen
- Bookmarks
- Add sections to the lines
- Line card:
  - -> search a stop -> get timetable
  - -> get the line plan
- Itinerary:
  - 1st version in the TAN network scope
  - 2nd version in a wider scope: bicycle, rental cycle services, car... & eco-responsibility approach

## Data & APIs
Most of the data used are part of extracts from Open Data TAN (see http://open.tan.fr) and Nantes Métropole (Great Nantes metropolitan council) OpenData.

Extracts, utilities and Service, as well as their documentation, are available in `src/api/`