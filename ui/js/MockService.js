var FieldService = {
  getDefaults: function () {
    return {
      label: "",
      required: false,
      choices: [],
      displayAlpha: true,
      default: "",
    };
  },
  getField: function (id) {
    return {
      label: "Sales region",
      required: false,
      choices: [
        "Asia",
        "Australia",
        "Western Europe",
        "North America",
        "Eastern Europe",
        "Latin America",
        "Middle East and Africa",
      ],
      displayAlpha: true,
      default: "North America",
    };
  },
  saveField: function (fieldJson) {
    // Add the code here to call the API (or temporarily, just log fieldJson to the console)
  },
};

export default FieldService;
