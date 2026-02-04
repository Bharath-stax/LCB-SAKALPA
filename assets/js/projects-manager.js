// Projects Management System - 200 Projects with Pagination, Search & Filters
class ProjectsManager {
  constructor() {
    this.currentPage = 1;
    this.projectsPerPage = 12;
    this.filteredProjects = [];
    this.currentView = 'grid';
    this.searchTerm = '';
    this.filters = {
      category: '',
      status: '',
      year: ''
    };
    
    this.init();
  }

  init() {
    console.log('Initializing Projects Manager...');
    
    // Wait for projects database to be available
    if (typeof window.PROJECTS_DATABASE !== 'undefined') {
      console.log('Projects database found:', window.PROJECTS_DATABASE.projects.length, 'projects');
      this.setupEventListeners();
      this.populateFilters();
      this.loadProjects();
      this.updateStats();
    } else {
      console.error('Projects database not found');
      // Retry after a short delay
      setTimeout(() => this.init(), 500);
    }
  }

  setupEventListeners() {
    // Search functionality
    const searchInput = document.getElementById('projectSearch');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        this.searchTerm = e.target.value.toLowerCase();
        this.currentPage = 1;
        this.filterAndDisplayProjects();
      });
    }

    // Filter functionality
    const categoryFilter = document.getElementById('categoryFilter');
    const statusFilter = document.getElementById('statusFilter');
    const yearFilter = document.getElementById('yearFilter');

    if (categoryFilter) {
      categoryFilter.addEventListener('change', (e) => {
        this.filters.category = e.target.value;
        this.currentPage = 1;
        this.filterAndDisplayProjects();
      });
    }

    if (statusFilter) {
      statusFilter.addEventListener('change', (e) => {
        this.filters.status = e.target.value;
        this.currentPage = 1;
        this.filterAndDisplayProjects();
      });
    }

    if (yearFilter) {
      yearFilter.addEventListener('change', (e) => {
        this.filters.year = e.target.value;
        this.currentPage = 1;
        this.filterAndDisplayProjects();
      });
    }

    // View toggle
    const viewButtons = document.querySelectorAll('.view-btn');
    viewButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        viewButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.currentView = btn.dataset.view;
        this.updateView();
      });
    });

    // Pagination
    const prevBtn = document.getElementById('prevPage');
    const nextBtn = document.getElementById('nextPage');

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        console.log('Previous button clicked, current page:', this.currentPage);
        if (this.currentPage > 1) {
          this.currentPage--;
          console.log('Moving to page:', this.currentPage);
          this.displayProjects();
        } else {
          console.log('Already on first page');
        }
      });
    } else {
      console.error('Previous button not found');
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        console.log('Next button clicked, current page:', this.currentPage);
        const totalPages = Math.ceil(this.filteredProjects.length / this.projectsPerPage);
        console.log('Total pages:', totalPages, 'Filtered projects:', this.filteredProjects.length);
        if (this.currentPage < totalPages) {
          this.currentPage++;
          console.log('Moving to page:', this.currentPage);
          this.displayProjects();
        } else {
          console.log('Already on last page');
        }
      });
    } else {
      console.error('Next button not found');
    }
  }

  populateFilters() {
    const db = window.PROJECTS_DATABASE;
    
    // Populate category filter
    const categoryFilter = document.getElementById('categoryFilter');
    if (categoryFilter) {
      db.categories.forEach(category => {
        const option = document.createElement('option');
        option.value = category.id;
        option.textContent = category.name;
        categoryFilter.appendChild(option);
      });
    }

    // Populate status filter
    const statusFilter = document.getElementById('statusFilter');
    if (statusFilter) {
      db.status.forEach(status => {
        const option = document.createElement('option');
        option.value = status.id;
        option.textContent = status.name;
        statusFilter.appendChild(option);
      });
    }

    // Populate year filter (2018-2027)
    const yearFilter = document.getElementById('yearFilter');
    if (yearFilter) {
      const years = [...new Set(db.projects.map(p => new Date(p.date).getFullYear()))].sort();
      years.forEach(year => {
        const option = document.createElement('option');
        option.value = year;
        option.textContent = year;
        yearFilter.appendChild(option);
      });
    }
  }

  loadProjects() {
    this.filteredProjects = [...window.PROJECTS_DATABASE.projects];
    this.filterAndDisplayProjects();
  }

  filterAndDisplayProjects() {
    // Apply filters
    this.filteredProjects = window.PROJECTS_DATABASE.projects.filter(project => {
      // Search filter
      if (this.searchTerm && !project.title.toLowerCase().includes(this.searchTerm) && 
          !project.description.toLowerCase().includes(this.searchTerm)) {
        return false;
      }

      // Category filter
      if (this.filters.category && project.category !== this.filters.category) {
        return false;
      }

      // Status filter
      if (this.filters.status && project.status !== this.filters.status) {
        return false;
      }

      // Year filter
      if (this.filters.year) {
        const projectYear = new Date(project.date).getFullYear();
        if (projectYear !== parseInt(this.filters.year)) {
          return false;
        }
      }

      return true;
    });

    this.displayProjects();
    this.updatePagination();
  }

  displayProjects() {
    const grid = document.getElementById('projectsGrid');
    const loading = document.getElementById('projectsLoading');
    const empty = document.getElementById('projectsEmpty');

    console.log('Displaying projects - Current page:', this.currentPage, 'Total filtered:', this.filteredProjects.length);

    if (!grid) {
      console.error('Projects grid not found');
      return;
    }

    // Hide loading, show grid
    if (loading) loading.style.display = 'none';
    if (empty) empty.style.display = 'none';

    // Calculate pagination
    const startIndex = (this.currentPage - 1) * this.projectsPerPage;
    const endIndex = startIndex + this.projectsPerPage;
    const projectsToShow = this.filteredProjects.slice(startIndex, endIndex);

    console.log('Projects to show:', projectsToShow.length, 'Start index:', startIndex, 'End index:', endIndex);

    if (projectsToShow.length === 0) {
      grid.style.display = 'none';
      if (empty) empty.style.display = 'block';
      return;
    }

    grid.style.display = 'grid';
    grid.innerHTML = '';

    projectsToShow.forEach(project => {
      const projectCard = this.createProjectCard(project);
      grid.appendChild(projectCard);
    });

    this.updatePagination();
  }

  createProjectCard(project) {
    const db = window.PROJECTS_DATABASE;
    const category = db.categories.find(c => c.id === project.category);
    const status = db.status.find(s => s.id === project.status);

    const card = document.createElement('div');
    card.className = 'project-card';
    
    card.innerHTML = `
      <div class="project-card-header">
        <h3 class="project-title">${project.title}</h3>
        <div class="project-meta">
          <span class="project-category" style="background-color: ${category?.color || '#8B5CF6'}20; color: ${category?.color || '#8B5CF6'}">
            ${category?.name || project.category}
          </span>
          <span class="project-status" style="background-color: ${status?.color || '#10B981'}20; color: ${status?.color || '#10B981'}">
            ${status?.name || project.status}
          </span>
        </div>
        <div class="project-date">
          <i class="fas fa-calendar"></i> ${new Date(project.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </div>
      </div>
      <div class="project-card-body">
        <p class="project-description">${project.description}</p>
        <div class="project-details">
          <div class="project-detail">
            <span class="project-detail-value">${project.volunteers}</span>
            <span class="project-detail-label">Volunteers</span>
          </div>
          <div class="project-detail">
            <span class="project-detail-value">₹${project.budget.toLocaleString()}</span>
            <span class="project-detail-label">Budget</span>
          </div>
          <div class="project-detail">
            <span class="project-detail-value">${project.duration}</span>
            <span class="project-detail-label">Duration</span>
          </div>
        </div>
        <div class="project-location">
          <i class="fas fa-map-marker-alt"></i>
          ${project.location}
        </div>
        <div class="project-actions">
          <button class="project-btn primary" onclick="projectsManager.viewProjectDetails('${project.id}')">
            View Details
          </button>
          <button class="project-btn outline" onclick="projectsManager.shareProject('${project.id}')">
            Share
          </button>
        </div>
      </div>
    `;

    return card;
  }

  updateView() {
    const grid = document.getElementById('projectsGrid');
    if (grid) {
      if (this.currentView === 'list') {
        grid.classList.add('list-view');
      } else {
        grid.classList.remove('list-view');
      }
    }
  }

  updatePagination() {
    const totalPages = Math.ceil(this.filteredProjects.length / this.projectsPerPage);
    const prevBtn = document.getElementById('prevPage');
    const nextBtn = document.getElementById('nextPage');
    const paginationNumbers = document.getElementById('paginationNumbers');
    const paginationInfo = document.getElementById('paginationInfo');

    console.log('Updating pagination - Total pages:', totalPages, 'Current page:', this.currentPage, 'Filtered projects:', this.filteredProjects.length);

    // Update prev/next buttons
    if (prevBtn) {
      prevBtn.disabled = this.currentPage === 1;
      console.log('Previous button disabled:', prevBtn.disabled);
    }
    if (nextBtn) {
      nextBtn.disabled = this.currentPage === totalPages || totalPages === 0;
      console.log('Next button disabled:', nextBtn.disabled, 'Current page >= total pages:', this.currentPage >= totalPages, 'Total pages is 0:', totalPages === 0);
    }

    // Update pagination info
    if (paginationInfo) {
      const start = (this.currentPage - 1) * this.projectsPerPage + 1;
      const end = Math.min(this.currentPage * this.projectsPerPage, this.filteredProjects.length);
      paginationInfo.textContent = `Showing ${start}-${end} of ${this.filteredProjects.length} projects`;
    }

    // Update page numbers
    if (paginationNumbers) {
      paginationNumbers.innerHTML = '';
      
      // Show max 5 page numbers
      let startPage = Math.max(1, this.currentPage - 2);
      let endPage = Math.min(totalPages, startPage + 4);
      
      if (endPage - startPage < 4) {
        startPage = Math.max(1, endPage - 4);
      }

      for (let i = startPage; i <= endPage; i++) {
        const pageBtn = document.createElement('button');
        pageBtn.className = 'page-number';
        if (i === this.currentPage) {
          pageBtn.classList.add('active');
        }
        pageBtn.textContent = i;
        pageBtn.addEventListener('click', () => {
          this.currentPage = i;
          this.displayProjects();
        });
        paginationNumbers.appendChild(pageBtn);
      }
    }
  }

  updateStats() {
    const db = window.PROJECTS_DATABASE;
    const totalProjects = document.getElementById('totalProjects');
    const completedProjects = document.getElementById('completedProjects');
    const ongoingProjects = document.getElementById('ongoingProjects');
    const totalBeneficiaries = document.getElementById('totalBeneficiaries');

    if (totalProjects) {
      totalProjects.textContent = db.projects.length;
    }

    if (completedProjects) {
      const completed = db.projects.filter(p => p.status === 'completed').length;
      completedProjects.textContent = completed;
    }

    if (ongoingProjects) {
      const ongoing = db.projects.filter(p => p.status === 'ongoing').length;
      ongoingProjects.textContent = ongoing;
    }

    if (totalBeneficiaries) {
      // Calculate estimated beneficiaries (rough estimate)
      const totalVolunteers = db.projects.reduce((sum, p) => sum + p.volunteers, 0);
      const estimatedBeneficiaries = totalVolunteers * 10; // Rough estimate
      totalBeneficiaries.textContent = estimatedBeneficiaries.toLocaleString() + '+';
    }
  }

  viewProjectDetails(projectId) {
    const project = window.PROJECTS_DATABASE.projects.find(p => p.id === projectId);
    if (project) {
      console.log('Viewing project details:', project);
      // You can implement a modal or navigate to a details page
      alert(`Project Details:\n\nTitle: ${project.title}\nDescription: ${project.description}\nCategory: ${project.category}\nStatus: ${project.status}\nDate: ${project.date}\nLocation: ${project.location}\nVolunteers: ${project.volunteers}\nBudget: ₹${project.budget.toLocaleString()}`);
    }
  }

  shareProject(projectId) {
    const project = window.PROJECTS_DATABASE.projects.find(p => p.id === projectId);
    if (project) {
      const shareText = `Check out this project: ${project.title}\n\n${project.description}`;
      if (navigator.share) {
        navigator.share({
          title: project.title,
          text: shareText,
          url: window.location.href + '#projects'
        });
      } else {
        // Fallback - copy to clipboard
        navigator.clipboard.writeText(shareText);
        alert('Project details copied to clipboard!');
      }
    }
  }
}

// Initialize projects manager when DOM is ready
let projectsManager;

document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM loaded, initializing projects manager...');
  setTimeout(() => {
    console.log('Creating projects manager instance...');
    projectsManager = new ProjectsManager();
    window.projectsManager = projectsManager; // Make it globally accessible
    console.log('Projects manager created:', projectsManager);
  }, 1000);
});
