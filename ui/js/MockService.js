var FieldService = {
  getDefaults: function () {
    return {
      label: "",
      required: false,
      choices: [],
      displayAlpha: false,
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
    fetch();
  },
};

export default FieldService;
