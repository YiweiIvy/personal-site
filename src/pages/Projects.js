import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import ProjectCard from '../components/Projects/ProjectCard';
import ProjectFilter from '../components/Projects/ProjectFilter';
import data from '../data/projects';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Extract unique categories from projects
  const categories = useMemo(() => {
    const allCategories = data.flatMap(
      (project) => project.categories || [project.category],
    );
    const cats = [...new Set(allCategories)];
    return cats.sort();
  }, []);

  // Group projects by section
  const projectSections = useMemo(() => {
    const sections = {
      Research: [],
      'Web Application': [],
      'Course Projects': [],
    };

    data.forEach((project) => {
      if (project.categories) {
        if (
          project.categories.includes('Research')
          || project.categories.includes('Physics')
        ) {
          sections.Research.push(project);
        } else if (project.categories.includes('Web Application')) {
          sections['Web Application'].push(project);
        } else if (project.categories.includes('Course Project')) {
          sections['Course Projects'].push(project);
        }
      }
    });

    return sections;
  }, []);

  // Filter projects based on selected category
  const filteredProjects = useMemo(
    () => data.filter((project) => {
      const matchesCategory = selectedCategory === 'All'
          || (project.categories
            && project.categories.includes(selectedCategory))
          || (project.category && project.category === selectedCategory);
      return matchesCategory;
    }),
    [selectedCategory],
  );

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <Main
      title="Projects"
      description="Explore Ivy's projects and technical work."
    >
      <article className="post" id="projects">
        <header>
          <div className="title">
            <h2 data-testid="heading">
              <Link to="/projects">Projects</Link>
            </h2>
            <p>
              A showcase of my technical projects, research work, and
              development experience that I&apos;m not too ashamed of.
            </p>
          </div>
        </header>

        <ProjectFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={handleCategoryChange}
        />

        {selectedCategory === 'All' ? (
          // Show projects organized by sections
          <div className="project-sections">
            {Object.entries(projectSections).map(
              ([sectionName, sectionProjects]) => {
                if (sectionProjects.length === 0) return null;

                return (
                  <div key={sectionName} className="project-section">
                    <h3 className="section-title">{sectionName}</h3>
                    <div className="projects-grid">
                      {sectionProjects.map((project) => (
                        <ProjectCard data={project} key={project.title} />
                      ))}
                    </div>
                  </div>
                );
              },
            )}
          </div>
        ) : (
          // Show filtered projects in grid
          <div className="projects-grid">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project) => (
                <ProjectCard data={project} key={project.title} />
              ))
            ) : (
              <div className="no-projects">
                <h3>No projects found</h3>
                <p>Try selecting a different category.</p>
              </div>
            )}
          </div>
        )}

        {filteredProjects.length > 0 && (
          <div className="projects-summary">
            <p>
              Showing {filteredProjects.length} of {data.length} projects
            </p>
          </div>
        )}
      </article>
    </Main>
  );
};

export default Projects;
