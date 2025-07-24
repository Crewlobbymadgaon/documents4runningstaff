// Open IndexedDB
const dbPromise = idb.openDB('library-db', 1, {
  upgrade(db) {
    if (!db.objectStoreNames.contains('acknowledgements')) {
      db.createObjectStore('acknowledgements', { keyPath: 'docId' });
    }
  }
});

// Save Acknowledgement
async function saveAcknowledgement(docId) {
  const db = await dbPromise;
  await db.put('acknowledgements', {
    docId,
    acknowledgedAt: new Date().toISOString()
  });
}

// Check Acknowledgement
async function isAcknowledged(docId) {
  const db = await dbPromise;
  const entry = await db.get('acknowledgements', docId);
  return !!entry;
}

// Handle Button Click
async function handleAcknowledge(docId, button) {
  await saveAcknowledgement(docId);
  button.textContent = '✅ Acknowledged';
  button.disabled = true;
}

// On Load, Check All Acknowledgement Buttons
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
