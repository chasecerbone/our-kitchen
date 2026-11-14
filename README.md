# Our Kitchen — setup guide

A shared meal planner and grocery list for two phones. It's free: GitHub Pages hosts it and Firebase stores the shared data.

## Part 1 — Firebase (shared data), about 10 minutes

1. Go to https://console.firebase.google.com and sign in with a Google account.
2. **Create a project.** Name it something like `our-kitchen`. You can turn off Google Analytics.
3. **Add a web app.** On the project home page, click the `</>` (Web) icon. Name it `Our Kitchen`, and leave "Firebase Hosting" unchecked. Firebase then shows a `firebaseConfig = { ... }` block. Copy everything inside the braces.
4. **Turn on sign-in.** Go to Build → Authentication → Get started → Sign-in method → **Email/Password** → Enable → Save.
5. **Create your two accounts.** In Authentication → Users → Add user, add your email and a password. Then add your wife's email and a password.
6. **Create the database.** Go to Build → Firestore Database → Create database. Pick a location near you (for example `us-east1`) and choose **production mode**.
7. **Lock it down.** In Firestore → **Rules**, delete what's there and paste in the contents of `firestore.rules`. Replace the two example emails with the ones you created in step 5, then click **Publish**.
8. **Connect the app.** Open `firebase-config.js` and replace `null` on the `window.FIREBASE_CONFIG = null;` line with the config you copied in step 3, keeping the `{ }` braces. Save the file.

## Part 2 — GitHub Pages (hosting), about 5 minutes

1. Create a free account at https://github.com.
2. Click **+** → **New repository**. Name it `our-kitchen`, set it to **Public**, and click Create.
3. On the new repo page, click **uploading an existing file**. Drag in every file from this folder: `index.html`, `firebase-config.js`, `manifest.webmanifest`, `icon-180.png`, `icon-512.png` (`firestore.rules` and `README.md` are optional). Then click **Commit changes**.
4. Go to **Settings** → **Pages**. Under "Branch," choose `main` and `/ (root)`, then click **Save**.
5. Wait a minute or two. The app will be live at `https://YOUR-USERNAME.github.io/our-kitchen/`.

## Part 3 — Put it on both iPhones

1. Open the link in **Safari** (it has to be Safari).
2. Tap the **Share** button → **Add to Home Screen** → Add.
3. Open it from the Home Screen icon and sign in with that person's email and password.

## Making changes later

To change something, edit the file on GitHub (open it, click the pencil, commit) or upload a new version. The phones get the update the next time the app is opened, sometimes after closing and reopening it twice.

## Moving data from the preview

If you tried the preview link and entered recipes there, open ⚙︎ → **Copy backup to clipboard** in the preview. Then in the real app, open ⚙︎ → paste the backup → **Import backup**.
