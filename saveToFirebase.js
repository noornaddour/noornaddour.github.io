import { getDatabase, ref, push }
  from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";

/**
 * Saves an email to Firebase Realtime Database
 */
export function saveToFirebase(email) {
  const database = getDatabase();

  return push(ref(database, "subscription-entries"), {
    email: email,
    createdAt: Date.now()
  });
}
