document.getElementById('email-link').addEventListener('click', function (e) {
    e.preventDefault();

    const email = this.getAttribute('data-email');
    const originalText = this.innerText;
    const link = this;
    const currentWidth = link.offsetWidth;

    link.style.width = `${currentWidth}px`;
    link.style.display = 'inline-block';
    link.style.textAlign = 'center';

    navigator.clipboard.writeText(email).then(() => {
        link.innerText = "Скопировано";
        link.style.color = "#3F50B4";

        setTimeout(() => {
            link.innerText = originalText;
            link.style.color = "";
            link.style.width = "";
            link.style.display = "";
            link.style.textAlign = "";
        }, 2000);
    }).catch(err => {
        window.location.href = "mailto:" + email;
    });
});