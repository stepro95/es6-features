const laptop = {
  brand: "Lenovo",
  model: "Thinkpad",
  hardware: {
    cpu: "Intel i7",
  },
  region: {
    countryCode: "be",
    keyboardLayout: "azerty",
  },
};

const { hardware } = laptop || {};

// With optional chaining
console.log(
  `The laptop has an ${hardware?.cpu || "default"} processor and ${
    hardware?.gpu?.type || "onboard"
  } gpu.`
);

// Without optional chaining
console.log(
  `The laptop has an ${hardware.cpu || "default"} processor and ${
    hardware.gpu.type || "onboard"
  } gpu.`
);
