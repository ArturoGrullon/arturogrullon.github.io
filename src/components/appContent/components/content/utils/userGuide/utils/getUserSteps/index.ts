import { driver } from "driver.js";

export const getUserSteps = driver({
  showProgress: true,
  steps: [
    {
      popover: {
        title: "Welcome",
        description: "Will show you quickly how to use the page.",
        side: "left",
        align: "start",
      },
    },
    {
      element: "#filters-panel",
      popover: {
        title: "Here you can filter the dogs (options) ",
        description: "Click on the filters to add or remove them.",
        side: "left",
        align: "start",
      },
    },
    {
      element: "#active-filters",
      popover: {
        title: "Active Filteres",
        description:
          "As you add filters they will show here, here as well you can remove then if you want.",
        side: "left",
        align: "start",
      },
    },
    {
      element: "#dog-info",
      popover: {
        title: "Dog information",
        description: "Basic information about the dog.",
        side: "left",
        align: "start",
      },
    },
    {
      element: "#addopt-button",
      popover: {
        title: "Addopt button",
        description:
          "Clicking here will add or remove the dog from your favorites.",
        side: "left",
        align: "start",
      },
    },
    {
      popover: {
        title: "Favorite dogs",
        description:
          "Once you have added a few dogs, feel free to adopt one of them.",
        side: "left",
        align: "start",
      },
    },
  ],
});
