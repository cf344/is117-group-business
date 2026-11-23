// Member 3: local demo request storage.
// This is a prototype, NOT production appointment storage.
// Do not store customer names, email addresses, or phone numbers here.
// Clara's form can call saveSalonRequest({ service, date, time }) after validation.
// Then redirect to the returned URL.

function saveSalonRequest({ service, date, time }) {
  if (![service, date, time].every(value => typeof value === 'string' && value.trim())) {
    throw new Error('Service, preferred date, and time are required.');
  }
  if (!globalThis.crypto || typeof globalThis.crypto.randomUUID !== 'function') {
    throw new Error('Secure request ID generation is unavailable.');
  }

  const id = globalThis.crypto.randomUUID();
  const key = 'salonAppointmentRequests';
  let requests;
  try {
    requests = JSON.parse(localStorage.getItem(key) || '{}');
    if (!requests || Array.isArray(requests) || typeof requests !== 'object') {
      throw new Error('Saved requests are invalid.');
    }
    requests[id] = { service: service.trim(), date: date.trim(), time: time.trim(), status: 'pending' };
    localStorage.setItem(key, JSON.stringify(requests));
  } catch (error) {
    throw new Error('Could not save the request. Please try again.', { cause: error });
  }
  return './confirmation.html?id=' + encodeURIComponent(id);
}

// Example integration (only after the form validates):
// const nextPage = saveSalonRequest({ service, date, time });
// window.location.assign(nextPage);
