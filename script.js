// MC Validation Script
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const validationResult = document.getElementById('validation-result');
    const mcNumberInput = document.getElementById('mc-number');

    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const mcNumber = mcNumberInput.value.trim();
            
            if (!mcNumber) {
                // Add visual feedback for empty input
                mcNumberInput.classList.add('error');
                mcNumberInput.focus();
                return;
            }
            
            // Remove error styling if present
            mcNumberInput.classList.remove('error');

            // Show the validation result
            if (validationResult) {
                validationResult.classList.remove('hidden');
                
                // Update the displayed MC number
                const refNumberElement = document.getElementById('ref-number');
                if (refNumberElement) {
                    refNumberElement.textContent = mcNumber;
                }
                
                // Scroll to the result with fallback for older browsers
                if (validationResult.scrollIntoView) {
                    validationResult.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                }
            }
        });
    }
});
