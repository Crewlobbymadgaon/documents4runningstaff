// Open DB
const dbPromise = idb.openDB('library-db', 1, {
  upgrade(db) {
    if (!db.objectStoreNames.contains('acknowledgements')) {
      db.createObjectStore('acknowledgements', { keyPath: 'docId' });
    }
  }
});

// Save acknowledgement
async function saveAcknowledgement(docId) {
  const db = await dbPromise;
  await db.put('acknowledgements', {
    docId,
    acknowledgedAt: new Date().toISOString()
  });
}

// Check if already acknowledged
async function isAcknowledged(docId) {
  const db = await dbPromise;
  const entry = await db.get('acknowledgements', docId);
  return !!entry;
}

// Handle button click
async function handleAcknowledge(docId, button) {
  await saveAcknowledgement(docId);
  button.textContent = '✅ Acknowledged';
  button.disabled = true;
}

// Auto-mark acknowledged buttons on load
window.addEventListener('DOMContentLoaded', async () => {
  const buttons = document.querySelectorAll('[data-doc-id]');
  for (const button of buttons) {
    const docId = button.getAttribute('data-doc-id');
    if (await isAcknowledged(docId)) {
      button.textContent = '✅ Acknowledged';
      button.disabled = true;
    }
  }
});
