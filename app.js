function goTo(route) {
    window.location.href = route;
}

function sendMessage() {
    const name = document.getElementById("name").value;
    const message = document.getElementById("message").value;
    const apiUrl = `https://api.whatsapp.com/send?phone=5524981140105&text=${encodeURIComponent(`Olá meu nome é ${name}. \n${message}`)}`;
    window.open(apiUrl);
}

function copyToClipboard(stringToCopy) {
    navigator.clipboard.writeText(stringToCopy);
}

function showHome() {
    window.location.href = "/index.html";
}

window.onload = async function loadData() {
    try {
        const response = await fetch('/data.json');
        const jsonData = await response.json();
        const body = document.getElementsByTagName('body')[0];
        body.innerHTML = body.innerHTML.toString().replace(/{{(.*?)}}/g, (_, keyToReplace) => {
            return jsonData[keyToReplace.trim()];
        });

        if (document.getElementById("profileImage")) {
            document.getElementById("profileImage").src = jsonData.profileImage;
        }
        if (document.getElementById("smallProfileImage")) {
            document.getElementById("smallProfileImage").src = jsonData.profileImage;
        }
        if (document.getElementById("github")) {
            document.getElementById("github").href = jsonData.github;
        }
        if (document.getElementById("linkedin")) {
            document.getElementById("linkedin").href = jsonData.linkedin;
        }

    } catch (erro) {
        console.error('Erro ao carregar o JSON:', erro);
    }
}