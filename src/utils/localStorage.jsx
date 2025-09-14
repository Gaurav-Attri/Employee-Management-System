const employees = [
  {
    id: 1,
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Prepare Report",
        taskDescription:
          "Create the weekly performance report for the sales team.",
        taskDate: "2025-09-15",
        category: "Reporting",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Team Meeting",
        taskDescription:
          "Conducted the project progress meeting with all stakeholders.",
        taskDate: "2025-09-12",
        category: "Management",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Data Validation",
        taskDescription:
          "Validate sales figures before submission to finance team.",
        taskDate: "2025-09-18",
        category: "Quality Check",
      },
    ],
  },
  {
    id: 2,
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Update Client Database",
        taskDescription:
          "Clean and update the CRM database with recent client interactions.",
        taskDate: "2025-09-10",
        category: "Database",
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Generate Invoice",
        taskDescription:
          "Prepare invoice drafts for new customers acquired in Q3.",
        taskDate: "2025-09-17",
        category: "Finance",
      },
    ],
  },
  {
    id: 3,
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Fix Backend Bug",
        taskDescription: "Resolve login session issue reported by QA.",
        taskDate: "2025-09-14",
        category: "Development",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Code Review",
        taskDescription:
          "Reviewed pull requests for the authentication module.",
        taskDate: "2025-09-11",
        category: "Development",
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "API Integration",
        taskDescription:
          "Work on integrating the payment API with the backend service.",
        taskDate: "2025-09-20",
        category: "Integration",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Test Automation",
        taskDescription:
          "Failed attempt to set up CI/CD pipeline automation tests.",
        taskDate: "2025-09-09",
        category: "Testing",
      },
    ],
  },
  {
    id: 4,
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Deploy New Build",
        taskDescription:
          "Failed to deploy the latest build due to server configuration errors.",
        taskDate: "2025-09-12",
        category: "Deployment",
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Set Up Monitoring",
        taskDescription: "Implement monitoring scripts for production servers.",
        taskDate: "2025-09-18",
        category: "DevOps",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Backup Database",
        taskDescription: "Successfully completed scheduled weekly DB backup.",
        taskDate: "2025-09-11",
        category: "Database",
      },
    ],
  },
  {
    id: 5,
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Design Landing Page",
        taskDescription:
          "Create a new design mockup for the upcoming product launch page.",
        taskDate: "2025-09-20",
        category: "Design",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "UI Prototype",
        taskDescription: "First prototype design was rejected by the client.",
        taskDate: "2025-09-09",
        category: "Design",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Graphic Assets",
        taskDescription: "Prepared icons and banners for marketing campaigns.",
        taskDate: "2025-09-13",
        category: "Graphics",
      },
    ],
  },
];

const admin = [
  {
    id: 101,
    email: "admin@example.com",
    password: "123",
  },
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));
};
