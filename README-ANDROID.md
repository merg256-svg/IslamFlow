# IslamFlow v25 — Personal Cloud Edition

## Web / PWA
- `index.html`
- `manifest.webmanifest`
- `sw.js`

## Firebase
The app is configured for the user's Firebase project. Google Authentication must be enabled and Firestore rules should restrict `/users/{userId}/...` to `request.auth.uid == userId`.

## v25 sync model
- Local-first: changes remain usable offline.
- Conflict-aware per record using client timestamp + device ID.
- Automatic sync checks every 30 seconds while signed in.
- Firestore realtime listener applies changes from other devices when the local record is not dirty.
- Manual "مزامنة الآن" remains available.
- JSON export/import remains available as an independent backup.

## Android
The Capacitor config/package are included as project scaffolding. Build the Android project after installing dependencies and running `npx cap add android` / `npx cap sync android` in a development environment. Native Google sign-in should be configured before shipping an Android build; the current web sign-in uses Firebase popup for browsers.


## v41
- الصفحة الرئيسية أصبحت «عاداتي اليوم» مع إضافة أعمال من قائمة جاهزة.
- أعمال مقترحة: صلاة الضحى، قيام الليل، الوتر، السنن الرواتب، الصدقة، صلة الرحم، الصيام، الاستغفار، الصلاة على النبي ﷺ، وتدبر آية.
- اختيار العادات محفوظ يوميًا ويدخل في نسبة إنجاز اليوم والإحصائيات.
- قارئ القرآن أصبح بتصميم أقرب لصفحة مصحف المدينة: نص متصل، ترقيم الآيات، إطار صفحة وقراءة عربية مريحة.
