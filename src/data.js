// This data could be an API call
// Or another config file for Navigation

const data = {
  companyName: "Company name",
  items: [
    {
      to: "/",
      text: "Dashboard"
    },
    {
      to: "/projects",
      text: "Projects"
    },
    {
      to: "/team",
      text: "Team"
    },
    {
      to: "/company",
      text: "Company"
    }
  ],
  dropdown: [
    {
      to: "#",
      text: "My profile"
    },
    {
      to: "#",
      text: "My projects",
      num: 23
    },
    {
      to: "#",
      text: "Notifications",
      num: 23
    },
    {
      to: "#",
      text: "Tasks",
      num: 23
    },
    {
      to: "#",
      text: "Help"
    },
    {
      to: "#",
      text: "Logout"
    }
  ]
};

export default data;
