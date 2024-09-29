{
    "name"; "John Doe",
    "contact"; {
      "email"; "john.doe@example.com",
      "phone";"123-456-7890"
    }
    "education"; [
      {
        "degree": "Bachelor of Science in Computer Science",
        "institution": "University of Example",
        "year": 2020
      },
      {
        "degree": "Master of Science in Software Engineering",
        "institution": "Example University",
        "year": 2022
      }
    ],
    "workExperience"; [
      {
        "title": "Software Developer",
        "company": "Tech Solutions",
        "duration": "2020-2022"
      },
      {
        "title": "Senior Developer",
        "company": "Innovatech",
        "duration": "2022-Present"
      }
    ],
    "skills"; ["JavaScript", "Python", "React", "Node.js"]

  }
  const resume = { 
    "name": "John Doe",
    "contact": {
      "email":"john.doe@example.com",
      "phone":"123-456-7890"
    },
    "education": [
      {
        "degree": "Bachelor of Science in Computer Science",
        "institution": "University of Example",
        "year": 2020
      },
      {
        "degree": "Master of Science in Software Engineering",
        "institution": "Example University",
        "year": 2022
      }
    ],
    "workExperience": [
      {
        "title": "Software Developer",
        "company": "Tech Solutions",
        "duration": "2020-2022"
      },
      {
        "title": "Senior Developer",
        "company": "Innovatech",
        "duration": "2022-Present"
      }
    ],
    "skills": ["JavaScript", "Python", "React", "Node.js"]

  };
// for in //
for (const key in resume) {
  console.log(`${key}:`, resume[key]);
}

 //for of//
for (const education of resume.education) {
    console.log('Degree:', education.degree);
    console.log('Institution:', education.institution);
    console.log('Year:', education.year);
  }
  
  //for loop//
  for (let i = 0; i < resume.workExperience.length; i++) {
    console.log('Job Title:', resume.workExperience[i].title);
    console.log('Company:', resume.workExperience[i].company);
    console.log('Duration:', resume.workExperience[i].duration);
  }
// for each //
resume.skills.forEach(skill => {
    console.log('Skill:', skill);
  });
  