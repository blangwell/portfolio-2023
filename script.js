const firstScrollSpyEl = document.querySelector('[data-bs-spy="scroll"]')
firstScrollSpyEl.addEventListener('activate.bs.scrollspy', (e) => {
    let dropdownCurrent = document.getElementById('dropdown-current');
    dropdownCurrent.innerText = e.relatedTarget.innerText;
    console.log(e);
});
