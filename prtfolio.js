let darkmode = localStorage.getItem('darkmode');
const changebg = document.getElementById('changebg');
const changebg1 = document.getElementById('changebg1');

const enableDarkmode = () => {
    document.body.classList.add('darkmode');
    localStorage.setItem('darkmode', 'active');
}

const disableDarkmode = () => {
    document.body.classList.remove('darkmode');
    localStorage.setItem('darkmode', null);
}

if (darkmode === "active") enableDarkmode();

changebg.addEventListener("click", () => {
    darkmode = localStorage.getItem('darkmode');
    darkmode !== "active" ? enableDarkmode() : disableDarkmode();
});

changebg1.addEventListener("click", () => {
    darkmode = localStorage.getItem('darkmode');
    darkmode !== "active" ? enableDarkmode() : disableDarkmode();
});

document.getElementById("emailButton1").addEventListener("click", function() {
    window.location.href = "mailto:merikijubert27@gmail.com?subject=Subject&body=Body";
});

document.getElementById("emailButton").addEventListener("click", function() {
    window.location.href = "mailto:merikijubert27@gmail.com?subject=Subject&body=Body";
});

document.getElementById("emailButton2").addEventListener("click", function() {
    window.location.href = "mailto:merikijubert27@gmail.com?subject=Subject&body=Body";
});

function showSidebar() {
    const sidebar = document.querySelector('.side');
    sidebar.style.display = 'flex';
}

function hideSidebar() {
    const sidebar = document.querySelector('.side');
    sidebar.style.display = 'none';
}