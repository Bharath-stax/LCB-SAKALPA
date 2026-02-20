// Show All Real Projects in 4-Column Grid
function initializeProjects() {
    console.log('Initializing all projects...');
    
    const projectsGrid = document.getElementById('projectsGrid');
    if (!projectsGrid) {
        console.log('Projects grid not found');
        return;
    }
    
    // Hide loading
    const loadingElement = document.getElementById('projectsLoading');
    if (loadingElement) {
        loadingElement.style.display = 'none';
    }
    
    // Clear grid
    projectsGrid.innerHTML = '';
    
    // Use real projects from database
    if (typeof window.PROJECTS_DATABASE !== 'undefined') {
        const allProjects = window.PROJECTS_DATABASE.projects;
        console.log('Loading', allProjects.length, 'real projects');
        
        // Add all projects to grid
        allProjects.forEach((project, index) => {
            const card = createProjectCard(project);
            projectsGrid.appendChild(card);
            
            if (index < 10) {
                console.log(`Card ${index + 1}: ${project.title}`);
            }
        });
        
        console.log('Total cards added:', projectsGrid.children.length);
    } else {
        console.log('Projects database not available, retrying...');
        setTimeout(initializeProjects, 500);
    }
}

function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'project-card card';
    card.style.cssText = `
        padding: 20px;
        border-radius: 16px;
        background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
        box-shadow: 0 4px 20px rgba(0,0,0,0.08), 0 2px 8px rgba(0,0,0,0.06);
        border: 1px solid rgba(0,0,0,0.03);
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        cursor: pointer;
        height: 100%;
        display: flex;
        flex-direction: column;
        position: relative;
        overflow: hidden;
    `;
    
    // Get category color
    const categoryColors = {
        health: 'var(--electric-blue)',
        education: 'var(--bright-orange)',
        environment: 'var(--emerald-green)',
        community: 'var(--vibrant-purple)',
        youth: 'var(--electric-blue)',
        disaster: 'var(--bright-orange)',
        senior: 'var(--vibrant-purple)',
        international: 'var(--bright-orange)'
    };
    
    const categoryColor = categoryColors[project.category] || 'var(--vibrant-purple)';
    
    card.innerHTML = `
        <div style="position: absolute; top: 0; right: 0; width: 4px; height: 100%; background: linear-gradient(180deg, ${categoryColor}40, ${categoryColor}10); border-radius: 0 16px 16px 0;"></div>
        <div style="display: flex; align-items: flex-start; margin-bottom: 16px; position: relative; z-index: 1;">
            <div style="width: 12px; height: 12px; background: ${categoryColor}; border-radius: 50%; margin-right: 12px; box-shadow: 0 2px 8px ${categoryColor}40; flex-shrink: 0;"></div>
            <h3 style="margin: 0; font-size: 16px; font-weight: 700; color: #1a1a1a; line-height: 1.3; flex: 1;">${project.title}</h3>
        </div>
        <p style="margin: 0 0 16px 0; font-size: 13px; color: #4a5568; line-height: 1.6; flex: 1; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden;">${project.description}</p>
        <div style="display: flex; justify-content: space-between; align-items: center; padding-top: 12px; border-top: 1px solid rgba(0,0,0,0.06);">
            <span style="background: linear-gradient(135deg, ${categoryColor}20, ${categoryColor}10); color: ${categoryColor}; padding: 6px 12px; border-radius: 20px; font-weight: 600; font-size: 11px; letter-spacing: 0.5px; box-shadow: 0 2px 8px ${categoryColor}20;">
                ${project.category.toUpperCase()}
            </span>
            <span style="color: #6b7280; font-size: 12px; font-weight: 500;">
                ${new Date(project.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
            </span>
        </div>
    `;
    
    card.onmouseover = function() {
        this.style.transform = 'translateY(-8px) scale(1.02)';
        this.style.boxShadow = '0 12px 40px rgba(0,0,0,0.15), 0 4px 16px rgba(0,0,0,0.1)';
        this.style.borderColor = categoryColor + '30';
    };
    
    card.onmouseout = function() {
        this.style.transform = 'translateY(0) scale(1)';
        this.style.boxShadow = '0 4px 20px rgba(0,0,0,0.08), 0 2px 8px rgba(0,0,0,0.06)';
        this.style.borderColor = 'rgba(0,0,0,0.03)';
    };
    
    return card;
}

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeProjects);
} else {
    initializeProjects();
}

// Also initialize when projects section is shown
const originalShowSection = window.showSection;
if (originalShowSection) {
    window.showSection = function(sectionId) {
        originalShowSection(sectionId);
        if (sectionId === 'projects') {
            setTimeout(initializeProjects, 100);
        }
    };
}
