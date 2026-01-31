document.getElementById("showpassword").addEventListener("change", function () {
    const fields = [
        document.getElementById("password"),
        document.getElementById("confirmpassword")
    ];

    fields.forEach(field => {
        field.type = this.checked ? "text" : "password";
    });
});