// Permanent Projects JavaScript for Lions Club of Bangalore Sankalpa

// Initialize Permanent Projects Section
document.addEventListener('DOMContentLoaded', function() {
    initializePermanentProjects();
});

function initializePermanentProjects() {
    // Add hover effects to school cards
    const schoolCards = document.querySelectorAll('.school-card');
    schoolCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 15px 30px rgba(59, 130, 246, 0.15)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.1)';
        });
    });
    
    // Add click animation to school cards
    schoolCards.forEach(card => {
        card.addEventListener('click', function() {
            this.style.animation = 'pulse 0.3s ease-in-out';
            setTimeout(() => {
                this.style.animation = '';
            }, 300);
        });
    });
}

// Add pulse animation
const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.05); }
        100% { transform: scale(1); }
    }
`;
document.head.appendChild(style);
