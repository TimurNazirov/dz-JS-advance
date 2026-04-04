
function getCurrentLocation() {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    } else {
      reject(new Error("Geolocation is not supported"));
    }
  });
}

getCurrentLocation()
  .then((position) => {
    const { longitude, latitude } = position.coords;
    console.log(`Current location is ${latitude}, ${longitude}`);
  })
  .catch((error) => console.log(error))
  .finally(() => console.log("Completed"));

getCurrentLocation();
