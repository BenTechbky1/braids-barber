const data = {
  braids: {
    name: "Maria",
    services: ["Box Braids", "Cornrows", "Twists"],
    gallery: ["images/braid1.jpg", "images/braid2.jpg"]
  },
  barber: {
    name: "John",
    services: ["Haircut", "Beard Trim", "Fade"],
    gallery: ["images/barber1.jpg", "images/barber2.jpg"]
  }
};

function showSection(section) {
  document.getElementById('name').innerText = data[section].name;
  document.getElementById('services').innerHTML =
    data[section].services.map(s => `<li>${s}</li>`).join('');
  document.getElementById('gallery').innerHTML =
    data[section].gallery.map(img => `<img src="${img}" />`).join('');
  document.getElementById('professionalField').value = section;
}

// Initialize with Braids section visible
showSection('braids');

// Handle booking form submission (later connect to Firebase)
document.getElementById('bookingForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const prof = document.getElementById('professionalField').value;
  const name = this.name.value;
  alert(`Booking sent for ${name} with ${prof}!`);
  this.reset();
});
