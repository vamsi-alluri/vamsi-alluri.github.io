document.onload = function(){
    document.addEventListener("mousemove", (e) => {
    const threshold = 150; // pixel distance from dot to cursor
    const dots = document.querySelectorAll(".timeline-dot");

    dots.forEach(dot => {
        const rect = dot.getBoundingClientRect();
        const dx = e.clientX - (rect.left + rect.width / 2);
        const dy = e.clientY - (rect.top + rect.height / 2);
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < threshold) {
        dot.hidden = false;
        dot.classList.add("visible");
        } else {
        dot.hidden = true;
        dot.classList.remove("visible");
        }
    });
    });
};

submitted_form = function(name, email, message){
    document.getElementsByName("contact-form").display = "None";
    document.getElementsByName("submit-result").innerHTML = "Not implemented";
    alert("The method works.");
}