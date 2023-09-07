document.getElementById('length').addEventListener('input', function() {
    document.getElementById('lengthValue').textContent = this.value;
});

function generatePassword() {
    const length = parseInt(document.getElementById('length').value);
    const includeUppercase = document.getElementById('uppercase').checked;
    const includeLowercase = document.getElementById('lowercase').checked;
    const includeNumbers = document.getElementById('numbers').checked;
    const includeSymbols = document.getElementById('symbols').checked;

    const charset = [];
    if (includeUppercase) charset.push('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
    if (includeLowercase) charset.push('abcdefghijklmnopqrstuvwxyz');
    if (includeNumbers) charset.push('0123456789');
    if (includeSymbols) charset.push('!@#$%^&*()_-+=[]{}|;:,.<>?');

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomCharset = charset[Math.floor(Math.random() * charset.length)];
        const randomChar = randomCharset[Math.floor(Math.random() * randomCharset.length)];
        password += randomChar;
    }

    document.getElementById('password').value = password;
}

document.getElementById('copy').addEventListener('click', function() {
    const passwordField = document.getElementById('password');
    passwordField.select();
    document.execCommand('copy');
    alert('SENHA COPIADA 🌸🌺');
});
