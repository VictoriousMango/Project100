// Scroll animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-up');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll('.section').forEach(section => observer.observe(section));

// Load Pyodide for running Python code
async function loadPyodideAndRun() {
    let pyodide = await loadPyodide({
        indexURL: "https://cdn.jsdelivr.net/pyodide/v0.23.4/full/"
    });
    document.querySelectorAll('.run-code').forEach(button => {
        button.addEventListener('click', async () => {
            const code = button.previousElementSibling.querySelector('code').textContent;
            let output = await pyodide.runPythonAsync(code);
            const outputDiv = button.nextElementSibling;
            outputDiv.textContent = `Output: ${output || 'No output'}`;
            outputDiv.classList.add('visible');
        });
    });
}
loadPyodideAndRun();