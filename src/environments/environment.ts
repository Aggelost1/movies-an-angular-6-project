// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  
    production: false,
    firebase: {
      apiKey: "AIzaSyBDKDI1ca8QsUYyRjjOuXbq_gz2eRcMrSU",
      authDomain: "movie-lists-80046.firebaseapp.com",
      databaseURL: "https://movie-lists-80046.firebaseio.com",
      projectId: "movie-lists-80046",
      storageBucket: "movie-lists-80046.appspot.com",
      messagingSenderId: "435996649336"
    }
  
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
