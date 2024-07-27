
project_name: "data-insights"

application: data-insights {
  label: "data-insights"
  file: "dist/bundle.js"
  entitlements: {
    core_api_methods: ["me"] #Add more entitlements here as we develop new functionality
  }
}
