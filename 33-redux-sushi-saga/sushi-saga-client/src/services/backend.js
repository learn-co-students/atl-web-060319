const API = "http://localhost:3000/sushis"

export function getSushi() {
  return fetch(API).then(res => res.json())
};

export function createSushi(formData) {
  return fetch(API, {
    method: 'POST',
    headers: {

    },
    body: JSON.stringify(formData)
  }).then(res => res.json())
};
