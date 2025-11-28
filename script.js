function toggleSection(sectionId) {
  const section = document.getElementById(sectionId);
  // Hide all info sections first
  document.querySelectorAll('.infoSection').forEach(sec => sec.style.display = 'none');
  // Show the selected section
  section.style.display = 'block';

  // Change background color depending on section
  if (sectionId === 'partnerSection') {
    document.body.style.backgroundColor = 'lightblue';
  } else if (sectionId === 'aboutSection') {
    document.body.style.backgroundColor = 'brown';
  } else {
    document.body.style.backgroundColor = '#f4f4f4';
  }
}
